import { useState, useEffect } from "react";
import "./HomePage.scss";
import Board from "../components/Board/Board";
import Question from "../components/Question/Question";
import axios from "axios";
import { useParams } from "react-router-dom";

const HomePage = () => {
  
  const [question, setQuestion] = useState();
  const { questionInfo } = useParams();
  const [trivia, setTrivia] = useState([]);

  const currentCat = trivia.find((category) => category.uuid === questionInfo.split('+')[0]);
  console.log(currentCat)
  const currentQ = currentCat && currentCat.questions.find((question) => question.points === questionInfo.split('+')[1])
  

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
      <Board trivia={trivia}></Board>
      <Question trivia={trivia} currentQ={currentQ}></Question>
    </>
  );
};

export default HomePage;
