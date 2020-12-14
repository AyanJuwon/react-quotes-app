import React from 'react'
import "./spinner.css" 
class Spinner extends React.Component{

render(){


    console.log('spinner mounts')
return(
    
    <div className="spinner">
  <div className="bounce1"></div>
  <div className="bounce2"></div>
  <div className="bounce3"></div>
</div>
)}

} 
export default Spinner