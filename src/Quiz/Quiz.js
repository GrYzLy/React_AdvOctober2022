import React, {Component} from 'react'
import Question from './Question';
class Quiz extends Component {
constructor() {
    super()
    
    this.state = {
        playerScore : 0,
        questions: [
            {
    
              title: "What animal barks?",
              possibleAnswers: ["Dog", "Cat"],
              rightAnswer: "Dog",
              playerChoice: null
            },
            {
              title: "What animal is more closely related to a tiger?",
              possibleAnswers: ["Cat", "Dog"],
              rightAnswer: "Cat",
              playerChoice: null
            },
            {
                title: "What animal is more closely related to a tiger?",
                possibleAnswers: ["Cat", "Dog"],
                rightAnswer: "Cat",
                playerChoice: null
              }]
    }
}
displayQuestion(index) {
    const question = this.state.questions[index];
   
    return (
        <div key={index}>
            <p>{question.title}</p>
            <br />
            <button 
                onClick={() => 
                    this.answerQuestion(index, question.possibleAnswers[0])}>
                        {question.possibleAnswers[0]}
            </button>



            <button
                onClick={() =>
                    this.answerQuestion(index, question.possibleAnswers[1])}>
                        {question.possibleAnswers[1]}
            </button>
             
            {question.playerChoice ?( question.playerChoice=== question.rightAnswer?<p>Your answear is correct</p>:
            <p>Your answear is incorrect</p>) :null}

        </div>

    )
}

answerQuestion(index, choice) {
    const answeredQuestion = this.state.questions[index];
    answeredQuestion.playerChoice = choice;

    const allQuestions = this.state.questions;
    allQuestions[index] = answeredQuestion;

    this.setState({
        questions : allQuestions
    }, () => {this.updatePlayerScore();})
}

updatePlayerScore() {
    const playerScore = this.state.questions.filter(q => q.rightAnswer === q.playerChoice).length;
    this.setState({playerScore})
    console.log("New player score: ", playerScore);
}


render() {
    
    return (
        <div>
            <h1>Quiz!</h1>
            {this.displayQuestion(0)}
            {this.displayQuestion(1)}
            </div>
    )
}
}

export default Quiz

