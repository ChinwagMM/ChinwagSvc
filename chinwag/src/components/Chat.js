import React from 'react'
import Banner from './Banner'
// import {Link} from 'react-router'

class Chat extends React.Component {
   constructor() {
      super()
   }

   getMessages = () => {
      const messages = [
         {
            'name':'Dan Mensa',
            'color': 'blue',
            'info': '28 - Male - NJ',
            'img':'brand.png',
            'message':"Hey all! My name is Dan I'm a 28 year old male and I am looking to get coverage in New Jersey, what are my options?"
         },
         {
            'name':'Aetna',
            'color': 'red',
            'info': 'Specialist in tartan paint',
            'img':'brand.png',
            'message':'Hi Dan! We can offer you a monthly premium of $237. Let us know if you have any other questions.'
         },
         {
            'name':'Cigna',
            'color': 'orange',
            'info': 'Specialist in pooping well',
            'img':'brand.png',
            'message':'Hey Dan, based on the information you provided we decided that we can provide you a monthly premium of $253 and we cover 60% of your prescription costs.'
         },
         {
            'name':'Blue Cross Shield',
            'color': 'blue',
            'info': 'Specialist in pooping well',
            'img':'brand.png',
            'message':'Hey Dan. We can offer you a quote of $415 which includes full dental and vision coverage.'
         },
         {
            'name':'Humana',
            'color': 'green',
            'info': 'Specialist in pooping well',
            'img':'brand.png',
            'message':'Dan. What’s up? Our premium is $240 and over 90% of physicians in your area take our insurance.'
         },
         {
            'name':'Dan Mensa',
            'color': 'blue',
            'info': '28 - Male - NJ',
            'img':'brand.png',
            'message':"Are you all a part of Obamacare?"
         },
         {
            'name':'Aetna',
            'color': 'red',
            'info': 'Basic brand info',
            'img':'brand.png',
            'message':"Unfortunately we aren't at the moment but we are hoping to return soon."
         },
         {
            'name':'Blue Cross Shield',
            'color': 'blue',
            'info': 'Basic brand info',
            'img':'brand.png',
            'message':"We sure are!"
         },
         {
            'name':'Humana',
            'color': 'green',
            'info': 'Basic brand info',
            'img':'brand.png',
            'message':"No but we are working on it."
         },
      ]
      return messages
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
            <Banner title="Get an answer from:"/>
            {this.renderUsers()}
            <div className="chat__fullscreen">
               <div className="tal maxWidth500">
                  {this.messages.map((m, i)=>this.renderMessage(m, i))}
               </div>
               {this.renderChatbox()}
            </div>
         </div>
      )
   }
}

export default Chat
