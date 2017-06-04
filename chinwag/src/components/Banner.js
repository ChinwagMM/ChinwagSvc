import React from 'react'

const Banner = React.createClass({
   render() {
      const {title} = this.props
      return (
         <div className="banner tac">
            {title}
         </div>
      )
   }
})

export default Banner
