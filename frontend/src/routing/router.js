import { createBrowserRouter } from "react-router-dom";
import { CREATEQUIZ, DEFAULT, EDITQUIZ, LOGIN, PROFILE, QUIZ, QUIZLIST, REGISTER, RESULTLIST } from "./keys";
import QuizList from "../components/Quiz/QuizList";
import QuizContainer from '../components/Quiz/QuizContainer'
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import CreateQuiz from "../components/Quiz/CreateQuiz";
import Profile from "../components/Profile/Profile";
import ResultList from "../components/Results/ResultList";

export const router = createBrowserRouter([
  {
    path: DEFAULT,
    element: <Home />
  },
  {
    path: LOGIN,
    element: <Login />
  },
  {
    path: REGISTER,
    element: <Register />
  },
  {
    path: PROFILE,
    element: <Profile />
  },
  {
    path: QUIZLIST,
    element: <QuizList />
  },
  {
    path: QUIZ,
    element: <QuizContainer />
  },
  {
    path: CREATEQUIZ,
    element: <CreateQuiz editMode={false} />
  },
  {
    path: EDITQUIZ,
    element: <CreateQuiz editMode={true}/>
  },
  {
    path: RESULTLIST,
    element: <ResultList/>
  },
  
])