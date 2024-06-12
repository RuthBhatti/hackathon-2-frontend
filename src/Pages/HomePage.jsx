import { useState, useEffect } from "react";
import "./HomePage.scss";
import Board from "../components/Board/Board";
import Question from "../components/Question/Question";
import axios from "axios";
import { useParams } from "react-router-dom";

const HomePage = () => {
  
  const [question, setQuestion] = useState({});
  const { questionInfo } = useParams();
  const [trivia, setTrivia] = useState([]);

  const getTriviaData = async () => {
    try {
      const res = await axios(`http://localhost:8080/questions`);
      console.log(res.data);
      setTrivia(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTriviaData();
  }, []);


  useEffect(() => {
    console.log('param update')
  }, [question])


  return (
    <>
      <Board trivia={trivia} setQuestion={setQuestion}></Board>
      <Question trivia={trivia} questionInfo={questionInfo}></Question>
    </>
  );
};

export default HomePage;
