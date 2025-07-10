# Day Predictor

"Day Predictor" is a simple web application that tells you what day tomorrow is and provides a fun historical fact for that specific date. Just click a button, and the application will reveal the next day and an interesting event from history that occurred on that day.
<br><img src="https://github.com/user-attachments/assets/eb96d8aa-5c03-4792-95cd-865b94b21004" width="80%">

## Features

  * **Predicts the Next Day**: Easily find out what day of the week tomorrow will be.
  * **Historical Fun Facts**: Discover a random historical event that happened on the predicted date.
  * **Simple User Interface**: A clean and intuitive interface for easy navigation and interaction.

## Technologies Used

  * **Node.js**: The runtime environment that executes JavaScript code outside a web browser.
  * **Express.js**: A fast, unopinionated, minimalist web framework for Node.js, used for handling API requests.
  * **HTML5**: Provides the structure and content of the web page.
  * **CSS3**: Styles the web page, making it visually appealing and responsive.
  * **JavaScript**: Powers the interactive elements and fetches data for the day prediction and fun facts.

## Setup and Installation

To get the Day Predictor web application up and running on your local machine, follow these steps:

### Prerequisites

Make sure you have Node.js installed. If not, you can download it from [nodejs.org](https://nodejs.org/).

### Installation Steps

1.  **Clone the repository (or download the files):**

    If you are using Git, you can clone the repository to your local machine:

    ```bash
    git clone <repository-url>
    ```

    Navigate into the project directory:

    ```bash
    cd day-predictor-web
    ```

2.  **Install dependencies:**

    Install the necessary Node.js packages by running the following command in the project's root directory:

    ```bash
    npm install
    ```

    This will install 'express' as listed in the `package.json` file.

3.  **Start the server:**

    Launch the Node.js server:

    ```bash
    npm start
    ```

    You should see a message in your console indicating that the server is running, usually on `http://localhost:3000`.

### Usage

1.  **Open in your browser:**

    Once the server is running, open your web browser and navigate to `http://localhost:3000`.

2.  **Predict the day:**

    On the homepage, click the "Reveal the Next Day" button. The application will then display the name of tomorrow's day and a historical fun fact related to that date.

## Project Structure

  * `server.js`: The main server-side file using Express.js to serve static files and handle API requests for historical facts.
  * `public/`: This directory contains the client-side assets:
      * `index.html`: The main HTML file for the web application.
      * `style.css`: Contains the CSS rules for styling the web application.
      * `script.js`: Contains the JavaScript code for handling button clicks, date calculations, and fetching fun facts.
  * `historical_events.json`: A JSON file storing historical facts categorized by month and day.
  * `package.json`: Defines project metadata and lists the npm dependencies.
  * `package-lock.json`: Records the exact dependency tree that was generated.
  * `.gitignore`: Specifies intentionally untracked files that Git should ignore.

## API Endpoint

The application serves historical facts through a simple API endpoint:

  * **GET `/api/fact?month={month}&day={day}`**

      * `month`: The month (1-12) for which to retrieve facts.
      * `day`: The day of the month (1-31) for which to retrieve facts.

    Example: `http://localhost:3000/api/fact?month=7&day=11`

    This will return a JSON object containing an array of historical facts for July 11th. If no facts are found, it returns an empty array.
