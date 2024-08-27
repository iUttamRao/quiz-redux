export const ReactQuizData = [
  {
    id: 1,
    question: "What is the primary purpose of React?",
    options: [
      { label: "Server-side rendering", value: 1 },
      { label: "Building user interfaces", value: 2 },
      { label: "Managing databases", value: 3 },
      { label: "Handling HTTP requests", value: 4 }
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "Which of the following is a React hook?",
    options: [
      { label: "useEffect", value: 1 },
      { label: "componentDidMount", value: 2 },
      { label: "shouldComponentUpdate", value: 3 },
      { label: "render", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "How do you create a functional component in React?",
    options: [
      { label: "class MyComponent extends React.Component", value: 1 },
      { label: "function MyComponent() { return <div />; }", value: 2 },
      { label: "const MyComponent = () => { return <div />; };", value: 3 },
      { label: "Both B and C", value: 4 }
    ],
    correctAnswer: 4
  },
  {
    id: 4,
    question: "What is the purpose of `useState` in React?",
    options: [
      { label: "Manage side effects", value: 1 },
      { label: "Manage component state in functional components", value: 2 },
      { label: "Handle routing", value: 3 },
      { label: "Optimize rendering performance", value: 4 }
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "What does JSX stand for?",
    options: [
      { label: "JavaScript XML", value: 1 },
      { label: "JavaScript Extension", value: 2 },
      { label: "JavaScript X", value: 3 },
      { label: "JavaScript HTML", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "Which lifecycle method is called after a component is rendered for the first time?",
    options: [
      { label: "componentDidUpdate", value: 1 },
      { label: "componentDidMount", value: 2 },
      { label: "componentWillUnmount", value: 3 },
      { label: "componentWillMount", value: 4 }
    ],
    correctAnswer: 2
  },
  {
    id: 7,
    question: "How do you pass data from a parent component to a child component?",
    options: [
      { label: "Using props", value: 1 },
      { label: "Using context", value: 2 },
      { label: "Using state", value: 3 },
      { label: "Using hooks", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "What is the purpose of `useEffect` hook?",
    options: [
      { label: "Manage local component state", value: 1 },
      { label: "Perform side effects in functional components", value: 2 },
      { label: "Handle user inputs", value: 3 },
      { label: "Optimize performance", value: 4 }
    ],
    correctAnswer: 2
  },
  {
    id: 9,
    question: "What is the correct way to update the state in a class component?",
    options: [
      { label: "this.state = { key: value };", value: 1 },
      { label: "this.setState({ key: value });", value: 2 },
      { label: "this.updateState({ key: value });", value: 3 },
      { label: "state = { key: value };", value: 4 }
    ],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "Which hook would you use to manage local state in a functional component?",
    options: [
      { label: "useState", value: 1 },
      { label: "useEffect", value: 2 },
      { label: "useContext", value: 3 },
      { label: "useReducer", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "What does `ReactDOM.render()` do?",
    options: [
      { label: "Renders a React component to the DOM", value: 1 },
      { label: "Creates a new React component", value: 2 },
      { label: "Updates the state of a component", value: 3 },
      { label: "Handles form submissions", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "How can you handle forms in React?",
    options: [
      { label: "Using controlled components", value: 1 },
      { label: "Using uncontrolled components", value: 2 },
      { label: "Using state management libraries", value: 3 },
      { label: "Both A and B", value: 4 }
    ],
    correctAnswer: 4
  },
  {
    id: 13,
    question: "Which method is used to prevent a component from re-rendering when its state or props haven't changed?",
    options: [
      { label: "shouldComponentUpdate", value: 1 },
      { label: "componentWillUpdate", value: 2 },
      { label: "componentDidUpdate", value: 3 },
      { label: "render", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "What is the purpose of `useRef` hook?",
    options: [
      { label: "Manage component state", value: 1 },
      { label: "Access DOM elements directly", value: 2 },
      { label: "Perform side effects", value: 3 },
      { label: "Handle context", value: 4 }
    ],
    correctAnswer: 2
  },
  {
    id: 15,
    question: "How do you handle errors in React components?",
    options: [
      { label: "Using error boundaries", value: 1 },
      { label: "Using try-catch blocks", value: 2 },
      { label: "Using promises", value: 3 },
      { label: "Using conditional rendering", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 16,
    question: "What is the function of `useContext` hook?",
    options: [
      { label: "Manage local component state", value: 1 },
      { label: "Provide context to child components", value: 2 },
      { label: "Perform side effects", value: 3 },
      { label: "Handle component lifecycle", value: 4 }
    ],
    correctAnswer: 2
  },
  {
    id: 17,
    question: "What is a higher-order component (HOC) in React?",
    options: [
      { label: "A component that manages routing", value: 1 },
      { label: "A function that takes a component and returns a new component", value: 2 },
      { label: "A component that handles side effects", value: 3 },
      { label: "A component that provides global state", value: 4 }
    ],
    correctAnswer: 2
  },
  {
    id: 18,
    question: "What is the purpose of `React.StrictMode`?",
    options: [
      { label: "To help find and fix problems in an application", value: 1 },
      { label: "To optimize performance", value: 2 },
      { label: "To manage state", value: 3 },
      { label: "To handle routing", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "How do you memoize a functional component to prevent unnecessary re-renders?",
    options: [
      { label: "Using `React.memo`", value: 1 },
      { label: "Using `useCallback`", value: 2 },
      { label: "Using `useMemo`", value: 3 },
      { label: "Using `React.PureComponent`", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "What does `useMemo` hook do?",
    options: [
      { label: "Memoizes a value to optimize performance", value: 1 },
      { label: "Memoizes a function to prevent re-creation", value: 2 },
      { label: "Manages side effects in a functional component", value: 3 },
      { label: "Handles context in a functional component", value: 4 }
    ],
    correctAnswer: 1
  }
];

export const JavascriptQuizData = [
  {
    id: 1,
    question: "Which of the following is a JavaScript data type?",
    options: [
      { label: "String", value: 1 },
      { label: "Number", value: 2 },
      { label: "Boolean", value: 3 },
      { label: "All of the above", value: 4 }
    ],
    correctAnswer: 4
  },
  {
    id: 2,
    question: "Which company developed JavaScript?",
    options: [
      { label: "Microsoft", value: 1 },
      { label: "Sun Microsystems", value: 2 },
      { label: "Netscape", value: 3 },
      { label: "Oracle", value: 4 }
    ],
    correctAnswer: 3
  },
  {
    id: 3,
    question: "Which symbol is used for comments in JavaScript?",
    options: [
      { label: "// for single-line comments", value: 1 },
      { label: "/* for multi-line comments */", value: 2 },
      { label: "<!-- for HTML-like comments -->", value: 3 },
      { label: "Both A and B", value: 4 }
    ],
    correctAnswer: 4
  },
  {
    id: 4,
    question: "How do you create a function in JavaScript?",
    options: [
      { label: "function myFunction() {}", value: 1 },
      { label: "def myFunction() {}", value: 2 },
      { label: "create myFunction() {}", value: 3 },
      { label: "function:myFunction() {}", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "How can you convert a string to an integer in JavaScript?",
    options: [
      { label: "parseInt()", value: 1 },
      { label: "Number()", value: 2 },
      { label: "Both A and B", value: 3 },
      { label: "int()", value: 4 }
    ],
    correctAnswer: 3
  },
  {
    id: 6,
    question: "What is the correct way to declare a JavaScript variable?",
    options: [
      { label: "var x;", value: 1 },
      { label: "let x;", value: 2 },
      { label: "const x;", value: 3 },
      { label: "All of the above", value: 4 }
    ],
    correctAnswer: 4
  },
  {
    id: 7,
    question: "Which JavaScript method is used to select an HTML element by its ID?",
    options: [
      { label: "getElementById()", value: 1 },
      { label: "querySelector()", value: 2 },
      { label: "getElementByClassName()", value: 3 },
      { label: "getId()", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "What does 'this' refer to in JavaScript?",
    options: [
      { label: "The current object or context", value: 1 },
      { label: "The global object", value: 2 },
      { label: "The previous object", value: 3 },
      { label: "None of the above", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "How do you write an 'if' statement in JavaScript?",
    options: [
      { label: "if (condition) {}", value: 1 },
      { label: "if condition {}", value: 2 },
      { label: "if: condition {}", value: 3 },
      { label: "if {condition}", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "Which method adds a new element to the end of an array?",
    options: [
      { label: "push()", value: 1 },
      { label: "pop()", value: 2 },
      { label: "shift()", value: 3 },
      { label: "unshift()", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "What is the output of 'typeof null' in JavaScript?",
    options: [
      { label: "object", value: 1 },
      { label: "null", value: 2 },
      { label: "undefined", value: 3 },
      { label: "string", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "Which keyword is used to define a constant in JavaScript?",
    options: [
      { label: "const", value: 1 },
      { label: "let", value: 2 },
      { label: "var", value: 3 },
      { label: "constant", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 13,
    question: "What is the correct syntax for creating an object in JavaScript?",
    options: [
      { label: "let obj = {};", value: 1 },
      { label: "let obj = new Object();", value: 2 },
      { label: "Both A and B", value: 3 },
      { label: "let obj = [];", value: 4 }
    ],
    correctAnswer: 3
  },
  {
    id: 14,
    question: "Which method is used to iterate over an array in JavaScript?",
    options: [
      { label: "forEach()", value: 1 },
      { label: "map()", value: 2 },
      { label: "filter()", value: 3 },
      { label: "All of the above", value: 4 }
    ],
    correctAnswer: 4
  },
  {
    id: 15,
    question: "Which statement is used to stop a loop in JavaScript?",
    options: [
      { label: "break", value: 1 },
      { label: "exit", value: 2 },
      { label: "stop", value: 3 },
      { label: "end", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 16,
    question: "How do you add a comment in JavaScript?",
    options: [
      { label: "// This is a comment", value: 1 },
      { label: "/* This is a comment */", value: 2 },
      { label: "# This is a comment", value: 3 },
      { label: "// This is a comment //", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "What is the purpose of the 'return' statement in a function?",
    options: [
      { label: "To exit the function and return a value", value: 1 },
      { label: "To define a variable", value: 2 },
      { label: "To create a loop", value: 3 },
      { label: "To call another function", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "Which of the following is not a JavaScript framework?",
    options: [
      { label: "React", value: 1 },
      { label: "Angular", value: 2 },
      { label: "Vue", value: 3 },
      { label: "Laravel", value: 4 }
    ],
    correctAnswer: 4
  },
  {
    id: 19,
    question: "Which method is used to round a number to the nearest integer?",
    options: [
      { label: "Math.round()", value: 1 },
      { label: "Math.ceil()", value: 2 },
      { label: "Math.floor()", value: 3 },
      { label: "Math.random()", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "Which keyword is used to handle exceptions in JavaScript?",
    options: [
      { label: "try", value: 1 },
      { label: "catch", value: 2 },
      { label: "finally", value: 3 },
      { label: "All of the above", value: 4 }
    ],
    correctAnswer: 4
  }
];

export const HtmlQuizData = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      { label: "HyperText Markup Language", value: 1 },
      { label: "Hyperlinks and Text Markup Language", value: 2 },
      { label: "Home Tool Markup Language", value: 3 },
      { label: "Hyper Transfer Markup Language", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Which HTML tag is used to create a hyperlink?",
    options: [
      { label: "<a>", value: 1 },
      { label: "<link>", value: 2 },
      { label: "<href>", value: 3 },
      { label: "<url>", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Which of the following tags is used to create a table row in HTML?",
    options: [
      { label: "<td>", value: 1 },
      { label: "<th>", value: 2 },
      { label: "<tr>", value: 3 },
      { label: "<table>", value: 4 }
    ],
    correctAnswer: 3
  },
  {
    id: 4,
    question: "What is the purpose of the `<head>` tag in HTML?",
    options: [
      { label: "Contains metadata and links to external resources", value: 1 },
      { label: "Defines the main content of the document", value: 2 },
      { label: "Creates a header for the document", value: 3 },
      { label: "Styles the document", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "Which attribute is used to specify an image in HTML?",
    options: [
      { label: "src", value: 1 },
      { label: "href", value: 2 },
      { label: "alt", value: 3 },
      { label: "img", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "What does the `<ul>` tag represent in HTML?",
    options: [
      { label: "An unordered list", value: 1 },
      { label: "An underlined text", value: 2 },
      { label: "An unordered link", value: 3 },
      { label: "A uniform link", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Which tag is used to create a drop-down list in HTML?",
    options: [
      { label: "<select>", value: 1 },
      { label: "<input>", value: 2 },
      { label: "<dropdown>", value: 3 },
      { label: "<list>", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "What does the `<br>` tag do in HTML?",
    options: [
      { label: "Creates a line break", value: 1 },
      { label: "Creates a bold text", value: 2 },
      { label: "Creates a break in the page", value: 3 },
      { label: "Creates a blank space", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "Which attribute is used to specify an inline style in HTML?",
    options: [
      { label: "style", value: 1 },
      { label: "class", value: 2 },
      { label: "id", value: 3 },
      { label: "src", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "How do you add a comment in HTML?",
    options: [
      { label: "<!-- comment -->", value: 1 },
      { label: "// comment", value: 2 },
      { label: "/* comment */", value: 3 },
      { label: "<comment>", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "Which tag is used to define an unordered list in HTML?",
    options: [
      { label: "<ul>", value: 1 },
      { label: "<ol>", value: 2 },
      { label: "<li>", value: 3 },
      { label: "<list>", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "Which tag is used to define a table header in HTML?",
    options: [
      { label: "<th>", value: 1 },
      { label: "<tr>", value: 2 },
      { label: "<td>", value: 3 },
      { label: "<thead>", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 13,
    question: "Which of the following is the correct way to specify an image's alternate text?",
    options: [
      { label: "<img src='image.jpg' alt='Description' />", value: 1 },
      { label: "<img href='image.jpg' description='Description' />", value: 2 },
      { label: "<img link='image.jpg' title='Description' />", value: 3 },
      { label: "<img url='image.jpg' alt='Description' />", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "What is the purpose of the `<form>` tag in HTML?",
    options: [
      { label: "To create a form for user input", value: 1 },
      { label: "To link external resources", value: 2 },
      { label: "To create a paragraph", value: 3 },
      { label: "To define metadata", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "Which attribute is used to open a link in a new tab or window?",
    options: [
      { label: "target='_blank'", value: 1 },
      { label: "newtab='true'", value: 2 },
      { label: "href='_newtab'", value: 3 },
      { label: "link='new'", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 16,
    question: "What is the correct way to define a background color for an HTML element?",
    options: [
      { label: "<div style='background-color:blue;'>", value: 1 },
      { label: "<div bg='blue'>", value: 2 },
      { label: "<div color='background:blue;'>", value: 3 },
      { label: "<div background='blue'>", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "Which tag is used to define a list item in an HTML list?",
    options: [
      { label: "<li>", value: 1 },
      { label: "<ul>", value: 2 },
      { label: "<ol>", value: 3 },
      { label: "<listitem>", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "Which attribute specifies a unique identifier for an HTML element?",
    options: [
      { label: "id", value: 1 },
      { label: "class", value: 2 },
      { label: "name", value: 3 },
      { label: "key", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "Which of the following tags is used to define a paragraph in HTML?",
    options: [
      { label: "<p>", value: 1 },
      { label: "<par>", value: 2 },
      { label: "<text>", value: 3 },
      { label: "<pg>", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "How do you create an ordered list in HTML?",
    options: [
      { label: "<ol>", value: 1 },
      { label: "<ul>", value: 2 },
      { label: "<li>", value: 3 },
      { label: "<order>", value: 4 }
    ],
    correctAnswer: 1
  }
];

export const CssQuizData = [
  {
    id: 1,
    question: "What does CSS stand for?",
    options: [
      { label: "Cascading Style Sheets", value: 1 },
      { label: "Colorful Style Sheets", value: 2 },
      { label: "Computer Style Sheets", value: 3 },
      { label: "Creative Style Sheets", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Which HTML attribute is used to define inline styles?",
    options: [
      { label: "style", value: 1 },
      { label: "class", value: 2 },
      { label: "styles", value: 3 },
      { label: "font", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Which property is used to change the background color?",
    options: [
      { label: "color", value: 1 },
      { label: "background-color", value: 2 },
      { label: "bgcolor", value: 3 },
      { label: "background-image", value: 4 }
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "How do you add a comment in CSS?",
    options: [
      { label: "// This is a comment", value: 1 },
      { label: "/* This is a comment */", value: 2 },
      { label: "<!-- This is a comment -->", value: 3 },
      { label: "-- This is a comment --", value: 4 }
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "Which property is used to change the font of an element?",
    options: [
      { label: "font-style", value: 1 },
      { label: "font-weight", value: 2 },
      { label: "font-family", value: 3 },
      { label: "text-style", value: 4 }
    ],
    correctAnswer: 3
  },
  {
    id: 6,
    question: "How do you make the text bold?",
    options: [
      { label: "font-style: bold;", value: 1 },
      { label: "font-weight: bold;", value: 2 },
      { label: "text-weight: bold;", value: 3 },
      { label: "font-bold: true;", value: 4 }
    ],
    correctAnswer: 2
  },
  {
    id: 7,
    question: "Which property is used to change the text color of an element?",
    options: [
      { label: "text-color", value: 1 },
      { label: "color", value: 2 },
      { label: "font-color", value: 3 },
      { label: "text-style", value: 4 }
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "Which CSS property controls the text size?",
    options: [
      { label: "font-style", value: 1 },
      { label: "text-size", value: 2 },
      { label: "font-size", value: 3 },
      { label: "text-style", value: 4 }
    ],
    correctAnswer: 3
  },
  {
    id: 9,
    question: "How do you select an element with id 'header'?",
    options: [
      { label: "#header", value: 1 },
      { label: ".header", value: 2 },
      { label: "header", value: 3 },
      { label: "*header", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "How do you select elements with class name 'menu'?",
    options: [
      { label: "#menu", value: 1 },
      { label: ".menu", value: 2 },
      { label: "menu", value: 3 },
      { label: "*menu", value: 4 }
    ],
    correctAnswer: 2
  },
  {
    id: 11,
    question: "How do you make a list that lists its items with square bullets?",
    options: [
      { label: "list-style-type: square;", value: 1 },
      { label: "list-type: square;", value: 2 },
      { label: "bullet-type: square;", value: 3 },
      { label: "square-list: true;", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "Which property is used to change the space between lines of text?",
    options: [
      { label: "line-height", value: 1 },
      { label: "spacing", value: 2 },
      { label: "letter-spacing", value: 3 },
      { label: "text-spacing", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 13,
    question: "How do you make each word in a text start with a capital letter?",
    options: [
      { label: "text-transform: capitalize;", value: 1 },
      { label: "text-style: capital;", value: 2 },
      { label: "transform: capitalize;", value: 3 },
      { label: "font-style: capital;", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "Which property is used to change the left margin of an element?",
    options: [
      { label: "padding-left", value: 1 },
      { label: "margin-left", value: 2 },
      { label: "spacing-left", value: 3 },
      { label: "indent-left", value: 4 }
    ],
    correctAnswer: 2
  },
  {
    id: 15,
    question: "Which property is used to make text italic?",
    options: [
      { label: "font-style: italic;", value: 1 },
      { label: "font-italic: true;", value: 2 },
      { label: "text-style: italic;", value: 3 },
      { label: "font-weight: italic;", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 16,
    question: "Which property is used to create space between the border and the content inside an element?",
    options: [
      { label: "padding", value: 1 },
      { label: "margin", value: 2 },
      { label: "spacing", value: 3 },
      { label: "border-spacing", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "How do you make an element disappear but still occupy space in the layout?",
    options: [
      { label: "visibility: hidden;", value: 1 },
      { label: "display: none;", value: 2 },
      { label: "opacity: 0;", value: 3 },
      { label: "overflow: hidden;", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "Which property is used to change the cursor icon when hovering over an element?",
    options: [
      { label: "cursor", value: 1 },
      { label: "pointer", value: 2 },
      { label: "hover", value: 3 },
      { label: "cursor-style", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "Which CSS property is used to set the spacing between elements?",
    options: [
      { label: "margin", value: 1 },
      { label: "padding", value: 2 },
      { label: "border-spacing", value: 3 },
      { label: "spacing", value: 4 }
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "Which property is used to float an element to the left or right?",
    options: [
      { label: "float", value: 1 },
      { label: "position", value: 2 },
      { label: "align", value: 3 },
      { label: "overflow", value: 4 }
    ],
    correctAnswer: 1
  }
];