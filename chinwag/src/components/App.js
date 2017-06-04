import React from 'react'
import { Link } from 'react-router'

const App = React.createClass({
   render() {
      return(
         <div className="fullscreen">
            <div className="tac">
               <div className="sun sun--top">
                  <img src="/images/sun.png" alt=""/>
               </div>

               <h1>
                  <br/>
                  Chinwag
               </h1>
               <p>

                  Where companies and brands<br/>compete for your dollar.
                  <br/><br/><br/>
               </p>
               <p>
                  <Link to="/subjects"><button className="button">Login with Facebook</button></Link>
               </p>
            </div>
         </div>
      )
   }
})

export default App
