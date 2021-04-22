import React, {useState} from "react";
import quizService from "../../../services/quiz-service"

const MultipleChoiceQuestion = ({question}) => {
    const [yourAnswer, setYourAnswer] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [attempts, setAttempts] = useState([])

    const submit = (quizId) => {
        setSubmitted(true)
        quizService.submitQuiz(quizId, question).then(attempt => {
            setAttempts(attempt)
        })
    }

    return(
        <div>
            <h5>
                {question.question}
            </h5>
            <ul className="list-group">
                {
                    question.choices.map((choice) => {
                        return(
                            <li className={`list-group-item
                            ${submitted && choice === question.correct ? 'list-group-item-success' : submitted && choice === yourAnswer ? 'list-group-item-danger' : ''}`}>
                                <label>
                                    <input
                                        onClick={() => {
                                            setYourAnswer(choice)
                                        }}
                                        type="radio"
                                        name={question._id}
                                    />
                                    {choice}
                                </label>
                            </li>
                        )
                    })
                }
            </ul>
            <br/>
            <p>
                Your answer: {yourAnswer}
            </p>
            <div>
                <button className="btn btn-success" onClick={() => submit()}>Submit</button>
            </div>
        </div>
    )
}

export default MultipleChoiceQuestion