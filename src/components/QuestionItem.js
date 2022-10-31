import React from "react";

function QuestionItem({ question, handleDeleteQuestion }) {

  const { id, prompt, answers, correctIndex } = question;
  console.log("From QuestionItem:", question)

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteClick(){
    fetch(`http://localhost:4000/questions/${question.id}`,{
      method: "Delete"
    })
    .then(resp => resp.json())
    .then(() => handleDeleteQuestion(question))
  }

  function handleOnChange(e){
    fetch(`http://localhost:4000/questions/${question.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        correctIndex: e.target.value
      })
    })
    .then(resp => resp.json())
    .then(updatedQuestion => {
      console.log(updatedQuestion)
    })
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleOnChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
