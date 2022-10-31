import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])
  const [newQuestion, setNewQuestion] = useState([])

function handleNewQuestion(question){
  setNewQuestion(question)
  console.log(question)
  setNewQuestion([
    ...questions, 
    newQuestion
  ])
}

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm handleNewQuestion={handleNewQuestion}/> : <QuestionList questions={questions} setQuestions={setQuestions}/>}
    </main>
  );
}

export default App;
