// js/app.js
const App = () => {
    const root = document.getElementById('root');
    
    // Create main container
    const container = document.createElement('div');
    container.className = 'container';

    // Create header
    const header = document.createElement('header');
    header.className = 'header';
    const title = document.createElement('h1');
    title.textContent = 'Welcome to AWS Amplify';
    header.appendChild(title);

    // Create content section
    const content = document.createElement('div');
    content.className = 'content';
    
    // Add description
    const description = document.createElement('p');
    description.textContent = 'This is a sample application deployed using AWS Amplify';
    
    // Create button
    const button = document.createElement('button');
    button.className = 'button';
    button.textContent = 'Click Me';
    button.onclick = () => alert('Hello from AWS Amplify!');

    // Append elements
    content.appendChild(description);
    content.appendChild(button);
    container.appendChild(header);
    container.appendChild(content);
    root.appendChild(container);
};

// Initialize the app
document.addEventListener('DOMContentLoaded', App);
