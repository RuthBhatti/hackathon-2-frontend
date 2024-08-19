import { useState } from "react";
import "./App.scss";
import Modal from "./components/Modal/Modal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
  };

  const closeModal = () => {
    setSelectedQuestion(null);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage onQuestionClick={handleQuestionClick} />
            }
          />
          <Route path="/:questionInfo" element={<HomePage />} />
        </Routes>
      </BrowserRouter>

      <Modal show={!!selectedQuestion} onClose={closeModal}>
        {selectedQuestion && <Question question={selectedQuestion} />}
      </Modal>
    </div>
  );
}

export default App;