import { useState, useEffect } from "react";
import "./HomePage.scss";
import Board from "../components/Board/Board";
import Question from "../components/Question/Question";
import Score from "../components/Score/Score";
import Modal from "../components/Modal/Modal";
import axios from "axios";
import { useParams } from "react-router-dom";

const HomePage = () => {
  
  const [score, setScore] = useState(0);
  const { questionInfo } = useParams();
  const [trivia, setTrivia] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

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
    console.log('param update');
  }, [score]);

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
  };

  const closeModal = () => {
    setSelectedQuestion(null);
  };

  return (
    <>
      <Board trivia={trivia} onQuestionSelect={handleQuestionClick} />
      <Modal show={!!selectedQuestion} onClose={closeModal}>
        {selectedQuestion && (
          <Question
            trivia={trivia}
            questionInfo={questionInfo}
            score={score}
            setScore={setScore}
            onClose={closeModal} // Pass closeModal here
          />
        )}
      </Modal>
      <Score score={score} />
    </>
  );
};

export default HomePage;