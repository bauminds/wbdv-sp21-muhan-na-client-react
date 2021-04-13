import React, {useState} from "react";

const MultipleChoiceQuestion = ({question}) => {
    const [yourAnswer, setYourAnswer] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const grade = () => {
        setSubmitted(true)
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
                <button className="btn btn-success" onClick={() => setSubmitted(true)}>Grade</button>
            </div>
        </div>
    )
}

export default MultipleChoiceQuestion