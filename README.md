<img src="/screencapture-localhost-3000-2023-04-05-11_45_02.png" alt="app-screen"/>

This is a web application that calculates the number of calories required by an individual based on their gender, age, height, weight, and activity level. The application uses React for the front-end and fetches data from the Fitness-Calculator API. The application has two components: Form and Results.

The Form component renders a form that takes input from the user for name, age, gender, height, weight, and activity level. It also has a submit button that triggers a function to fetch the data from the API using the input values. If the fetch is successful, the data is stored in the state, and the Results component is rendered.

The Results component displays the calculated calorie goals based on the input values provided by the user. The component displays the Basal Metabolic Rate (BMR), the number of calories required to maintain weight, the number of calories required for mild weight loss, weight loss, and extreme weight loss.

The application also has some basic styling using Tailwind CSS.