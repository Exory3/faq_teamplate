import React from "react";
import ReactDOM from "react-dom";
import style from "./index.module.css";
import { useState } from "react";
import SlideDown from "react-slidedown";
import 'react-slidedown/lib/slidedown.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const faqEntries = [
    {
        question: "Search",
        answer: [
            { question: "question 1", answer: "answer 1 " },
            { question: "question 2", answer: "answer 2 " },
            { question: "question 3", answer: "answer 3 " }
        ]
    },
    {
        question: "Security",
        answer: [
            { question: "question 4", answer: "answer 4 " },
            { question: "question 5", answer: "answer 5 " },
            {
                question: "How can I remove information about myself from Google's search results?",
                answer: "Google search results are a reflection of the content publicly available on the web. Search engines can’t remove content directly from websites, so removing search results from Google wouldn’t remove the content from the web. If you want to remove something from the web, you should contact the webmaster of the site the content is posted on and ask him or her to make a change. Once the content has been removed and Google has noted the update, the information will no longer appear in Google’s search results. If you have an urgent removal request, you can also visit our help page for more information."
            }
        ]
    },
    {
        question: "Business",
        answer: [
            { question: "question 7", answer: "answer 7 " },
            { question: "question 8", answer: "answer 8 " },
            {
                question: "Business Details",
        answer: [
            { question: "question 9", answer: "answer 9 " },
            { question: "question 10", answer: "answer 10 " },
            {
                question: "How can I remove information about myself from Google's search results?",
                answer: "Google search results are a reflection of the content publicly available on the web. Search engines can’t remove content directly from websites, so removing search results from Google wouldn’t remove the content from the web. If you want to remove something from the web, you should contact the webmaster of the site the content is posted on and ask him or her to make a change. Once the content has been removed and Google has noted the update, the information will no longer appear in Google’s search results. If you have an urgent removal request, you can also visit our help page for more information."
            }
        ]
            }
        ]
    },
]


const DropDown = (props) => {
    return (
        <SlideDown className={'my-dropdown-slidedown'}>
            {props.open ? <p className={style.answer}>{props.answer}</p> : null}
        </SlideDown>
    )
}


const FaqRecord = ({ question, answer }) => {
    const [hidden, setHidden] = useState(true)
    let questionClasses = !hidden ? `${style.question} ${style.hide}` : `${style.question} ${style.show}`
    questionClasses = Array.isArray(answer) ? questionClasses + " " + `${style.pink}` : questionClasses

    let records = Array.isArray(answer) ?
        answer.map(answery => <div className={style.indent}><FaqRecord question={answery.question} answer={answery.answer} /></div>) :
        <DropDown open={!hidden} answer={answer} />

    return (
        <div>
            <h3 className={questionClasses} onClick={() => { setHidden(!hidden) }}>{question}</h3>
            {!hidden && records}
        </div>
    )
}


const App = ({ entries }) => {
    let [hidden, setHidden] = useState(true)
    let icon = hidden ? faChevronDown: faChevronUp
    let records = entries.map(entry => (<FaqRecord question={entry.question} answer={entry.answer} />))
    return (
        <div className={style.entry}>
            <div className={style.header} onClick={() => setHidden(!hidden)}>
                <h2>Google's FAQ  Page</h2>
                <FontAwesomeIcon id="icon" icon={icon} />
            </div>
            {!hidden && records}
        </div>
    )
}


ReactDOM.render(<App entries={faqEntries} />, document.getElementById("root"));
