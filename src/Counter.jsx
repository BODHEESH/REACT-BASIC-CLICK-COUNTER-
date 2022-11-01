import React from 'react'

// function Counter(props) {
// function Counter({title,count}) {
function Counter({title,...obj}) {
    // const {title,count}= props

    const styleObj = {
      fontSize: 34,
      color: "#4a54f1",
      textAlign: "center",
      paddingTop: "5px",
      color:'blue'
  }
  return (
    <div>
          
        <h1 style={styleObj}>{title} : {obj.count} : {obj.place}</h1>
    </div>
  )
}

export default Counter