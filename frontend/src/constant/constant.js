import { CssQuizData, HtmlQuizData, JavascriptQuizData, ReactQuizData } from "../api/QuizData"

export const QuizListConstant = [
  {
    title: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
  },
  {
    title: "Javascript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
  },
  {
    title: "HTML",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
  },
  {
    title: "CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
  }
]

export const renderQuiz = (name) => {
  switch (name) {
    case 'React':
      return ReactQuizData
    case 'Javascript':
      return JavascriptQuizData
    case 'HTML':
      return HtmlQuizData
    case 'CSS':
      return CssQuizData
  }

}