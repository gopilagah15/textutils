import React from 'react'
// import PropTypes from 'react';
import { Link } from 'react-router-dom/dist';
const Navbar = (props) => {
    const{title,aboutText} = props
  return (
    <div>
    
      {/* <nav className={`navbar navbar-expand-white navbar-expand-lg bg-transparent`} style={{color:'white'}} */}
            {/* <nav class="navbar navbar-expand-lg navbar-dark bg-transparent"> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      {/* <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{background:'black'}}> */}
  <div className="container-fluid">
    <a className="navbar-brand" href="/textUtils">{title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/textUtils">Home</Link>  </li>
        <li className="nav-item">  <Link className="nav-link" to="/about">{aboutText}</Link> </li> 
      </ul> 
      <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px', width:'30px',border:'1px solid white'}}></div>
      <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px', width:'30px',border:'1px solid white'}}></div>
      <div className="bg-secondary rounded mx-2" onClick={()=>{props.toggleMode('secondary')}} style={{height:'30px', width:'30px',border:'1px solid white'}}></div>
      <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px', width:'30px',border:'1px solid white'}}></div> 

      {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault" >Enable {props.mode==='light'?'dark':'light'} Mode</label>
</div> */}
    </div>
  </div>
</nav>

    </div>
  )
}

// Navbar.propTypes = {title:PropTypes.string,
//                     aboutText: PropTypes.string
// }
// Navbar.defaultProps = {
//                     title:'Gopi Bhandal',
//                     aboutText:'aboutGopi'
// }

export default Navbar
