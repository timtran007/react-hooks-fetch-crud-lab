import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, setQuestions}) {


  useEffect(() =>{
    fetch(`http://localhost:4000/questions`)
    .then(resp => resp.json())
    .then(questions => {
      console.log(questions)
      setQuestions(questions)})
  },[]) 

  function handleDeleteQuestion(deletedQuestion){
    const filteredArray = questions.filter(question => deletedQuestion.id !== question.id)
    setQuestions(filteredArray)
  }


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question)=>
          <QuestionItem key={question.id} question={question} handleDeleteQuestion={handleDeleteQuestion}/>
        )}
      </ul>
    </section>
  );
}

export default QuestionList;
