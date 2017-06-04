import React from 'react'
import Banner from './Banner'
import {Link} from 'react-router'

class Survey extends React.Component {
   constructor() {
      super()
   }

   //
   // nextQuestion() {
   //
   // }

   getQuestions = (subject) => {
      const questions = {
         'insurance': [
            {
               question: 'Do you see a doctor, whether a primary physician or a specialist frequently?',
               answers: [
                  { value: 'yes', text: 'Yes' },
                  { value: 'no', text: 'No' }
               ],
               link: '/survey/insurance/2'
            },
            {
               question: 'Do you frequently need emergency care?',
               answers: [
                  { value: 'yes', text: 'Yes' },
                  { value: 'no', text: 'No' }
               ],
               link: '/survey/insurance/3'
            },
            {
               question: 'Do you have a planned surgery coming up?',
               answers: [
                  { value: 'yes', text: 'Yes' },
                  { value: 'no', text: 'No' }
               ],
               link: '/survey/insurance/4'
            },
            {
               question: 'Have you recently been diagnosed with a chronic condition such as diabetes?',
               answers: [
                  { value: 'yes', text: 'Yes' },
                  { value: 'no', text: 'No' }
               ],
               link: '/survey/insurance/5'
            },
            {
               question: 'Do you take expensive or brand name medications on a regular basis?',
               answers: [
                  { value: 'yes', text: 'Yes' },
                  { value: 'no', text: 'No' }
               ],
               link: '/chat/insurance'
            }
         ]
      }
      return questions[subject]
   }

   renderQuestion = (q) => {
      return(
         <div className="fullscreen">
            <div className="tac width80">
               <h2>{q.question}</h2>
               <div className="tac survey__buttons">
               {q.answers.map((a) => <Link to={q.link}><button className="button--big button--inline">{a.text}</button></Link>)}
               </div>
            </div>
         </div>
      )
   }

   render() {
      const questions = this.getQuestions('insurance')
      const question = questions[parseInt(this.props.params.index)-1] || questions[0]
      console.log(this.props);
      return(
         <div>
            <Banner title="Find Health Insurance"/>
            <div className="fullscreen">
               <div className="tac">
                  {/* {questions.map((question, i) => this.renderQuestion(question, i))} */}
                  { this.renderQuestion(question) }
               </div>
            </div>
         </div>
      )
   }
}

export default Survey
