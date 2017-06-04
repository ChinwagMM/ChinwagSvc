import React from 'react'
import Banner from './Banner'
// import {Link} from 'react-router'

class Chat extends React.Component {
   constructor() {
      super()

      this.state = {
         messages: [],
         users: []
      }
   }

   componentWillMount() {
      this.state.messages = this.getMessages(1)
   }

   componentWillUpdate() {
      // this.state.messages
   }

   getMessages = (limit) => {
      const messages = [
         {
            'name':'Chinwag',
            'color': 'blue',
            'info': 'Ask me anything',
            'img':'brand.png',
            'message':'Hi Dan! I found some options for your health insurance.\n\nAt any time you can see detailed info on each option above this message. Do you have a budget?'
         },
         {
            'name':'Dan Mensa',
            'color': 'gray',
            'info': '28 - Male - NJ',
            'img':'brand.png',
            'message':"I can afford $300 a month total"
         },
         {
            'name':'Chinwag',
            'color': 'blue',
            'info': 'Ask me anything',
            'img':'brand.png',
            'message':'Okay no problem, the options above are updated for your price range.'
         },
         {
            'name':'Dan Mensa',
            'color': 'gray',
            'info': '28 - Male - NJ',
            'img':'brand.png',
            'message':'Are any of these covered under Obamacare?'
         },
         {
            'name':'Chinwag',
            'color': 'blue',
            'info': 'Ask me anything',
            'img':'brand.png',
            'message':'Blue Cross provides all the coverage you need for $295'
         },

      ]
      const slice = (length) ? messages.slice(0,length) : messages
      return slice
   }

   getColor = (i) => {
      const colors = [
         'blue',
         'red',
         'orange',
         'green'
      ]
      return colors[i] || colors[0]
   }

   renderMessage(m, i) {
      const color = this.getColor(i)
      return (
         <div className={`chat__message bg--${m.color}`}>
            <div className="block">
               <div className="chat__icon"></div>
               <div className="chat__user">
                  <div className="chat__user-name">{m.name}</div>
                  <div className="chat__user-info">{m.info}</div>
               </div>
            </div>
            {m.message}
         </div>
      )
   }

   renderUsers() {
      const users = [
         {
            name: 'Humana',
            color: 'green'
         },
         {
            name: 'Blue Cross',
            color: 'blue'
         },
         {
            name: 'Aetna',
            color: 'red'
         },
         {
            name: 'Cigna',
            color: 'orange'
         }
      ]
      return (
         <div className="chat__users">
            {users.map((user) => <div className={`chat__icon bg--${user.color}`}><div>{user.name}</div></div>)}
         </div>
      )
   }

   resetForm() {

   }

   renderChatbox() {
      return (
         <div className="chatbox">
            <input type="text" placeholder="Ask a question..."/>
            <button onClick={this.nextMessage()}>Send</button>
         </div>
      )
   }

   messages = this.nextMessage()
   count = 0

   nextMessage() {
      return this.getMessages()
      // this.count++
      // console.log('nextmessage',this.count);
      // switch(this.count) {
      //    case 1:
      //       return this.getMessages()
      //    default:
      //       return []
      // }
      //
      // setTimeout(function(){
      //    return this.getMessages()
      // },1000)
   }

   render() {
      // const messages = this.getMessages()
      return(
         <div className="chat">
            <Banner title="Here are your options:"/>
            {this.renderUsers()}
            <div className="chat__fullscreen">
               <div className="tal maxWidth500">
                  {this.state.messages.map((m, i)=>this.renderMessage(m, i))}
               </div>
               {this.renderChatbox()}
            </div>
         </div>
      )
   }
}

export default Chat
