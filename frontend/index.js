import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Adjust this path based on your project structure
import './assets/style.css'; // Import the CSS file
// Ensure there is a div with id 'root' in your index.html
const rootElement = document.getElementById('root');

if (rootElement) {
  // Render the main App component into the root div
  ReactDOM.render(<App />, rootElement);
} else {
  console.error('Root element not found. Please ensure that your index.html has a <div id="root"></div> element.');
}

