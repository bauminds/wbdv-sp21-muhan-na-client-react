import React, {useState} from "react";
import quizService from "../../../services/quiz-service"

const TrueFalseQuestion = ({question}) => {
    const [answer, setAnswer] = useState(null)
    const [submitted, setSubmitted] = useState(false)
    const submit = () => {
        setSubmitted(true)

    }
    return (
        <div>
            <h4>
                {question.question}
            </h4>
            <ul className="list-group">
                <li className={`list-group-item
                ${submitted && "true" === question.correct ? 'list-group-item-success' : submitted && answer === "true" ? 'list-group-item-danger' : ''}`}>
                    <label>
                        <input
                            type="radio"
                            onClick={() => setAnswer("true")}
                            name={question._id}
                        />
                        True
                    </label>
                </li>
                <li className={`list-group-item
                ${submitted && "false" === question.correct ? 'list-group-item-success' : submitted && answer === "false" ? 'list-group-item-danger' : ''}`}>
                    <label>
                        <input
                            type="radio"
                            onClick={() => setAnswer("false")}
                            name={question._id}
                        />
                        False
                    </label>
                </li>
            </ul>
            <div>
                <button className="btn btn-success" onClick={() => submit()}>Submit</button>
            </div>
        </div>
    )
}

export default TrueFalseQuestion;