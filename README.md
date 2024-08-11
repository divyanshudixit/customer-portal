# Customer Details Portal

## Project Overview

This project is a single-page application (SPA) developed using React and TypeScript. The portal provides an interface to display customer details, featuring a list of customers on the left side and detailed information about the selected customer on the right side, including a dynamic photo grid.

## Features

- **Customer List**: A list of up to 1000 customers displayed on the left side of the portal.
- **Customer Cards**: Each card in the list shows the name and title of the customer. 
- **Customer Details**: Upon selecting a card, the customer’s name, title, address, and a 3x3 grid of photos are displayed on the right side.
- **Dynamic Photo Grid**: The 3x3 grid of photos changes every 10 seconds, with images fetched from a public API.
- **Highlighting**: The selected customer card is highlighted in the list.
 ## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/customer-portal.git
   cd customer-portal
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Create a .env file in the root of the project and add your API key**:
   ```bash
   REACT_APP_API_KEY=your_api_key_here
   ```
4. **Run the application**:
   ```bash
   npm start
   ```
## Usage

- Upon starting the application, you will see a list of customers on the left side.
- Click on any customer card to view their details on the right side.
- The 3x3 photo grid in the customer details section will refresh every 10 seconds with new images fetched from the Pexels API.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Pexels API**: Used to fetch random images for the photo grid.
