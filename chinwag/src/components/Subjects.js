import React from 'react'
import Banner from './Banner'
import { Link } from 'react-router'

const Subjects = React.createClass({
   render() {
      const subjects = [
         {
            link: 'insurance',
            title: 'Find health insurance'
         },
         {
            link: 'food',
            title: 'Find places to eat'
         },
         {
            link: 'celebs',
            title: 'Chat with celebs'
         },
      ]
      return(
         <div>
            <Banner title="Hi Dan, what are you looking for..."/>
            <div className="fullscreen">
               <div className="sun sun--bottom">
                  <img src="/images/sun.png" alt=""/>
               </div>
               <div className="tac">
                  {subjects.map((subject, i)=> <Link key={i} to={`/survey/${subject.link}`}><button className="button--big">{subject.title}</button></Link> )}
                  <p>MORE</p>
               </div>
            </div>
         </div>
      )
   }
})

export default Subjects
