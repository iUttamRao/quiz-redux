export const Quiz = [
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
