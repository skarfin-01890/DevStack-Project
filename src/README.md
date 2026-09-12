


# Project name: DevStack Project

#### A little description ###
DevStack is a web application where users can explore different web development technologies, learn about their categories and difficulty levels, and discover useful information about each technology.

# Technology that I used #

1. HTML
2. CSS
3. Javascript
4. TypeScript(partially)
5. React
6. Tailwind


## Three features ##

1. Technology Exploration – Users can browse and explore different technologies such as React, JavaScript, Python, and more.
2. Technology Details – Each technology provides information such as category, description, rating, difficulty level, and icon.
3. Responsive Design – The application is fully responsive and works smoothly on mobile, tablet, and desktop devices.





# What is JSX, and why is it used in React?
JSX is a syntax extension for JavaScript used in React to write HTML-like UI code inside JavaScript. It makes creating and managing React components easier and more readable.

# What is the difference between props and state?
Props are used to pass read-only data from a parent component to a child component, while state is used to store and update data within a component.

# What does the useState hook do, and where did you use it in this project?
The useState hook is used to store and update data in a React component, and I used it to manage button state and selected technologies in this project.

# What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect is used to perform side effects after a component renders. I used it to fetch and load the JSON data when the component first mounted.

# Why does every item in a .map() list need a unique key prop?
A unique key helps React identify each item in a list and efficiently update only the items that have changed.

# What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering means displaying different UI elements based on a condition. I used it to show the selected technology count when technologies are selected, and an empty stack message when no technology is selected.

# How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Data is passed from parent to child using props. To send data back, the parent passes a callback function as a prop, and the child calls that function with the required data.