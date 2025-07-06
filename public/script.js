const predictBtn = document.getElementById('predictBtn');
const resultDiv = document.getElementById('result');
const funFactDiv = document.getElementById('fun-fact');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

predictBtn.addEventListener('click', async () => {
    // Clear previous results immediately
    resultDiv.classList.remove('visible');
    funFactDiv.textContent = '';

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const dayName = days[tomorrow.getDay()];
    
    // Set the day name and make it visible
    resultDiv.textContent = `Tomorrow is ${dayName}.`;
    resultDiv.classList.add('visible');

    const month = tomorrow.getMonth() + 1; // getMonth() is 0-indexed
    const day = tomorrow.getDate();

    try {
        const response = await fetch(`/api/fact?month=${month}&day=${day}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        let factText = "Sorry, no historical fact could be found for this day.";
        if (data.fact && data.fact.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.fact.length);
            factText = `On that day, ${data.fact[randomIndex]}`;
        }

        funFactDiv.textContent = factText;
    } catch (error) {
        console.error('Error fetching fun fact:', error);
        funFactDiv.textContent = 'Could not retrieve a fun fact at this time.';
    }
});