import React from 'react'

const Alert = (props) => {
    const capitalize =(word)=>{
        if(word==='success'){
            document.body.style.color='black'
        }else{
            document.body.style.color='black'
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
   
  return (
    <div className="container" style={{height:'50px'}}>
   {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{(capitalize(props.alert.typ))} </strong>  :  {props.alert.msg} 
  </div>}
  </div>
  )
}

export default Alert
