import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss'; // Ensure your global styles are imported
import App from './App'; // Main application component
import reportWebVitals from './reportWebVitals'; // Optional: For performance monitoring

// Create a root element for React 18's concurrent rendering
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement // Type assertion for TypeScript (optional)
);

// Render the application inside React's StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Measure performance in your app
// You can pass a function to log results (e.g., reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
