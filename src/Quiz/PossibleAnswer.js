const PossibleAnswer = props => (
            <div>
            <button 
                onClick={props.action}>
                    {/* // this.answerQuestion(props.index, props.question.possibleAnswers[0])}>
                    //     {props.question.possibleAnswers[0]} */}
                    {props.possibleAnswer}
            </button>
            </div>
)

export default PossibleAnswer