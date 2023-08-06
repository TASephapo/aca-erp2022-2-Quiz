import React, { useState } from "react";
import "./App.css";

function App() {

 
  //properties
  const [showFinalResults, setFinalResults] = useState(false);
  const [Score, setScore] = useState(0);
  const [currentQuestion , setCurrentQuestion] = useState(0);

   const questions = [
    {
      text:
        "Which of these Git client commands creates a copy of the repository and a working directory in the client’s workspace. (Choose one.)",
      options: [
        {id: 0 , text:"checkout", isCorrect: false },
        {id: 1,  text:"update", isCorrect: false },
        {id: 2,  text:"clone", isCorrect: true },
        {id: 3,  text:"import", isCorrect: false },
      ],
      answer:"clone"
    },
    {
      text:
        "In Git, which error would you get if you try to push master-branch changes to a remote repository, and someone else pushed changes to that same branch while you were making your changes? (Choose one.)",
    options: [
        { id: 0 , text: "404", isCorrect: false },
        { id: 1 , text: "Rejected", isCorrect: true },
        { id: 2 , text: "Access Denied", isCorrect: false },
        { id: 3, text: "500", isCorrect: false },
      ],
      answer:"Rejected"
    },
    {
     text:
        "If you want to make radical changes to your team’s project and don’t want to impact the rest of the team, you should implement your changes in … ",
      options: [
        { id:0 ,text: "a tag", isCorrect: false },
        { id:1 ,text: "the branch", isCorrect: true },
        { id:2 ,text: "the trunk", isCorrect: false },
        { id:3 ,text:"the root", isCorrect: false },
      ],
      answer:"a branch"
    },
    {
      text:
        "Imagine that you just joined a development team that uses Git for version control and collaboration. To start contributing to the project, what Git operation would you most likely invoke first?",
      options: [
        { id:0 ,text: "Branch pointer", isCorrect: false },
        { id:1 ,text: "Commit object", isCorrect: false },
        { id:2 ,text: "HEAD pointer", isCorrect: false },
        { id:3 ,text: "a branch", isCorrect: true },
      ],
      answer:"a branch"
    },
    {
      text:
        "Now, imagine that you have a local repository, but other team members have pushed changes into the remote repository. What Git operation would you use to download those changes into your working copy? ",
      options: [
        { id:0 ,text: "checkout ", isCorrect: false },
        { id:1 ,text: "commit ", isCorrect: false },
        { id:2 ,text:"export ", isCorrect: false },
        { id:3 ,text: "pull", isCorrect: true },
      ],
       answer:"pull"
    },
  
  ];


  //Helper Function

  

  const optionClicked = (isCorrect:boolean) => {
  if( isCorrect ){

        setScore(Score + 1);

    }

    if(currentQuestion + 1 < questions.length){

      
         setCurrentQuestion(currentQuestion + 1);

    }else
    {

        setFinalResults(true);
    }



  }

  const RestartQuiz = () => {

    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);




  }



  return (
    <div className="App">
      {/* 1. Header */}

      <h1>Africa Code Academy Quiz</h1>

      {/* 2. Current Score */}

      <h2>Current Score : {Score}</h2>

      {/* If show final results is true final results will be displayed else the question card will be displayed */}

      {showFinalResults ? (
        <div className="final-results">
          {/* 4. Final Results */}

          <h1>Final Results</h1>
          <h2>{Score} out of {questions.length} correct - ({(Score/questions.length) * 100}%)</h2>

          <button onClick={()=> RestartQuiz()}> Restart </button>
        </div>
      ) : (
        <div className="question-card">
          {/* 3. Question Card */}


          <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
          <h3 className="question-text">{questions[currentQuestion].text} </h3>
          <ul>
             {questions[currentQuestion].options.map((option) => {

                  return(

                    <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>

             );



                  

             })}

  
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
