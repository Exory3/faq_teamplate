import React from "react";
import ReactDOM from "react-dom";
import style from "./index.module.css";
import { useState } from "react";
import SlideDown from "react-slidedown";
import 'react-slidedown/lib/slidedown.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

let faqEntries = [
    {
        question: "How does Google protect my privacy and keep my information secure?",
        answer: "We’re constantly working to ensure strong security, protect your privacy, and make Google even more effective and efficient for you. We spend hundreds of millions of dollars every year on security, and employ world-renowned experts in data security to keep your information safe. We also built easy-to-use privacy and security tools like Google Dashboard, 2-step verification and Ads Settings. So when it comes to the information you share with Google, you’re in control."
    },
    {
        question: "How can I remove information about myself from Google's search results?",
        answer: "Google search results are a reflection of the content publicly available on the web. Search engines can’t remove content directly from websites, so removing search results from Google wouldn’t remove the content from the web. If you want to remove something from the web, you should contact the webmaster of the site the content is posted on and ask him or her to make a change. Once the content has been removed and Google has noted the update, the information will no longer appear in Google’s search results. If you have an urgent removal request, you can also visit our help page for more information."
    },
    {
        question: "Are my search queries sent to websites when I click on Google Search results?",
        answer: "In some cases, yes. When you click on a search result in Google Search, your web browser also may send the Internet address, or URL, of the search results page to the destination webpage as the Referrer URL. The URL of the search results page may sometimes contain the search query you entered. If you are using SSL Search (Google’s encrypted search functionality), under most circumstances, your search terms will not be sent as part of the URL in the Referrer URL. There are some exceptions to this behavior, such as if you are using some less popular browsers. More information on SSL Search can be found here. Search queries or information contained in the Referrer URL may be available via Google Analytics or an application programming interface (API). In addition, advertisers may receive information relating to the exact keywords that triggered an ad click."
    },
]
const DropDown = (props) => {
    return (
        <SlideDown className={'my-dropdown-slidedown'}>
            {props.open ? <p className={style.answer}>{props.answer}</p>: null}
        </SlideDown>
    )
}



const FaqRecord = ({ question, answer, init = true }) => {
    const [hidden, setHidden] = useState(true)
    let questionClasses = !hidden ? `${style.question} ${style.hide}` : `${style.question} ${style.show}`
    console.log(Array.isArray(answer));
    let records = Array.isArray(answer) ?
        answer.map(answery => <SlideDown className={'my-dropdown-slidedown'}><FaqRecord question={answery.question} answer={answery.answer} /></SlideDown>) :
                <SlideDown className={'my-dropdown-slidedown'}>
            {!hidden ? <p className={style.answer}>{answer}</p>: null}
        </SlideDown>
    return (
        <div>
            <h3 className={questionClasses} onClick={() => { setHidden(!hidden) }}>{question}</h3>
            {records}
        </div>
    )
}


const App = ({ entries }) => {
    let records = entries.map(entry => (<FaqRecord question={entry.question} answer={entry.answer} />))
    return (
        <div className={style.entry}>
            <div className={style.header}>
                <h1>Google's FAQ  Page</h1>
                <button><FontAwesomeIcon icon={faChevronDown} /></button>
            </div>
            {records}
        </div>
    )
}
const faqEntriess = [
    {
        question: "theme 1",
        answer: [
            { question: "question 1", answer: "answer 1 " },
            { question: "question 2", answer: "answer 2 " },
            { question: "question 3", answer: "answer 3 " }
        ]
    },
    {
        question: "theme 2",
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
        question: "Are my search queries sent to websites when I click on Google Search results?",
        answer: "In some cases, yes. When you click on a search result in Google Search, your web browser also may send the Internet address, or URL, of the search results page to the destination webpage as the Referrer URL. The URL of the search results page may sometimes contain the search query you entered. If you are using SSL Search (Google’s encrypted search functionality), under most circumstances, your search terms will not be sent as part of the URL in the Referrer URL. There are some exceptions to this behavior, such as if you are using some less popular browsers. More information on SSL Search can be found here. Search queries or information contained in the Referrer URL may be available via Google Analytics or an application programming interface (API). In addition, advertisers may receive information relating to the exact keywords that triggered an ad click."
    },
]

ReactDOM.render(<App entries={faqEntriess} />, document.getElementById("root"));


const FaqCategories = ({ theme, subthemes }) => {
    const [hidden, setHidden] = useState(true)
    let questionClasses = !hidden ? `${style.question} ${style.hide}` : `${style.question} ${style.show}`
    let records = subthemes.map(subtheme => (<DropDown open={!hidden} answer={<FaqRecord question={subtheme.question} answer={subtheme.answer} />} />))
    return (
        <div>
            <h3 className={questionClasses} onClick={() => { setHidden(!hidden) }}>{theme}</h3>
            {records}
        </div>
    )
}