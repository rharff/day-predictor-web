const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/fact', async (req, res) => {
    try {
        const { month, day } = req.query;
        if (!month || !day) {
            return res.status(400).json({ error: 'Month and day are required.' });
        }

        const filePath = path.join(__dirname, 'historical_events.json');
        const data = await fs.readFile(filePath, 'utf8');
        const events = JSON.parse(data);

        const key = `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        
        const factArray = events[key];

        if (factArray && Array.isArray(factArray) && factArray.length > 0) {
            res.json({ fact: factArray });
        } else {
            res.json({ fact: [] });
        }
    } catch (error) {
        console.error("Error reading historical events:", error);
        res.status(500).json({ error: 'Failed to retrieve historical fact.' });
    }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});