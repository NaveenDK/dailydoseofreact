import React, { useState } from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0";

// Puzzle #11: Trivia 🧠
// Create a React app that displays two buttons,
//  each containing a trivia question. When a user clicks on a button,
//   an alert should appear with the answer to the corresponding question.
//    The app should have a list of at least two trivia questions and answers
//    that it can use to populate the buttons. The questions and answers can be about any topic,
//     such as geography, history, science, or general knowledge
// Object containing trivia questions and answers

const triviaQuestions = {
  question1: {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  question2: {
    question: "What is the largest ocean on Earth?",
    answer: "The Pacific Ocean",
  },
};

const TriviaQuestion = ({ question, answer }) => {
  {
    const handleClick = (answer) => {
      //alert(triviaQuestions[q].answer);
      alert(answer);
    };

    return <button onClick={() => handleClick(answer)}> {question}</button>;
  }
};

// Function to display trivia questions and alert their answers when clicked
export default function Trivia() {
  // Destructure the triviaQuestions object to get individual questions
  // const { question1, question2 } = triviaQuestions;

  //let questionsAnswers = [...triviaQuestions];

  return (
    <div>
      {Object.keys(triviaQuestions).map(function (e) {
        return (
          <TriviaQuestion
            question={triviaQuestions[e].question}
            answer={triviaQuestions[e].answer}
          />
        );
      })}
    </div>
  );
}

/*

1. First create TriviaQuestion Component
2. No dont worry about 1
3. First worry about displaying questions and answers dynamcially
4. We first get the keys of the triviaQuestiosn object from Object.keys(triviaQuestions)
5. and map through each key and print out the relevant html stuff with question and answer for each key 
6. the html stuff that would be printed are
  a. button with question in the button text
  b. alert box with answer in the alert onClick

*/
