import PossibleAnswer from "./PossibleAnswer"

const Question = props => (
    <div>
            <p>{props.question.title}</p>
            <br />
            {props.action}

            {props.question.possibleAnswers.map((possibleAnswer, index) => 
            <PossibleAnswer possibleAnswer={possibleAnswer} index={index} key={index} action={props.action} />)}
           
            {/* <button
                onClick={() =>
                    this.answerQuestion(props.index, props.question.possibleAnswers[1])}>
                        {props.question.possibleAnswers[1]}
            </button>
              */}
            {/* {props.question.playerChoice ?( props.question.playerChoice=== props.question.rightAnswer?<p>Your answear is correct</p>:
            <p>Your answear is incorrect</p>) :null} */}

        </div>
)

export default Question