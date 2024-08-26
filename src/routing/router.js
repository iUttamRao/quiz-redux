import { createBrowserRouter } from "react-router-dom";
import { DEFAULT, QUIZ } from "./keys";
import QuizList from "../components/Quiz/QuizList";
import QuizContainer from '../components/Quiz/QuizContainer'

export const router = createBrowserRouter([
  {
    path: DEFAULT,
    element: <QuizList />
  },
  {
    path: QUIZ,
    element: <QuizContainer />
  }
])