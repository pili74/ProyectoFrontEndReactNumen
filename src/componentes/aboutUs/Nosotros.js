import React from 'react';
import pili from "../Footer/pili.jpg";
import daniel from "../Footer/daniel.jpeg";
import mariano from "../Footer/mariano.jpeg"
import Gaston1 from '../Footer/Gaston1.jpg'
import carlos from '../Footer/carlos.jpg'
const Nosotros = () => {
  return (
    <>
    <div id='hover' style={{display: 'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px,1fr))', gap: '1rem'}}>
        <div style={{width: '200px', borderRadius: '10px', textAlign:'center',marginBottom:'50px', marginTop:'150px', backgroundColor:'#08a05c', color:'white'}}>
            <h2>Carlos E. Martinez</h2>
            <img className="about" src={carlos} alt="carlos"></img>
            <h6>Perito Informático</h6>
            <p><a style={{color: 'yellow'}} href='https://www.linkedin.com/in/carlos-ezequiel-martinez-1097696' target="_blank"><i className="bi bi-linkedin" id='lin'></i></a></p>
            <p><a style={{color: 'yellow'}} href='https://github.com/Talapozo' target="_blank"><i className="bi bi-github" id='git'></i></a></p>
          
        </div>


        <div style={{width: '200px', borderRadius: '10px',textAlign:'center',marginBottom:'50px', marginTop:'150px', backgroundColor:'#08a05c', color:'white'}}>
            <h2>Daniel Romero</h2>
            <img className="about" src={daniel} alt="daniel"></img>
            <h6>Dev. Full Stack</h6>
            <p><a style={{color: 'yellow'}} href='https://www.linkedin.com/in/daniek-romero-95440b195/'target="_blank" rel="noopener"><i className="bi bi-linkedin" id='lin'></i></a></p>
            <p><a style={{color: 'yellow'}} href='https://github.com/danieltapy89' target="_blank" rel="noopener"><i className="bi bi-github" id='git'></i></a></p>
           
        </div>


        <div style={{width: '200px', borderRadius: '10px', textAlign:'center',marginBottom:'50px', marginTop:'150px', backgroundColor:'#08a05c', color:'white'}}>
            <h2>Eduardo Encinas</h2>
            <img className="about" src={pili} alt="pili"></img>
            <h6>Lic. en Sistemas</h6>
            <p><a style={{color: 'yellow'}} href='https://www.linkedin.com/in/eduardo-encinas' target="_blank"><i className="bi bi-linkedin" id='lin'></i></a></p>
            <p><a style={{color: 'yellow'}} href='https://github.com/pili74' target="_blank"><i className="bi bi-github" id='git'></i></a></p>

        </div>


        <div style={{width: '200px', borderRadius: '10px', textAlign:'center',marginBottom:'50px', marginTop:'150px', backgroundColor:'#08a05c', color:'white'}}>
            <h2>Gaston Talavera</h2>
            <img className="about" src={Gaston1} alt="gaston"></img>
            <h6>Front End Dev.</h6>
            <p><a style={{color: 'yellow'}} href='https://www.linkedin.com/login/es'target="_blank"><i className="bi bi-linkedin" id='lin'></i></a></p>
            <p><a style={{color: 'yellow'}} href='https://github.com/Gatalavera'target="_blank"><i className="bi bi-github" id='git'></i></a></p>
           
        </div>


        <div style={{width: '200px', borderRadius: '10px', textAlign:'center',marginBottom:'50px', marginTop:'150px', backgroundColor:'#08a05c', color:'white'}}>
            <h2>Mariano Suarez</h2>
            <img className="about" src={mariano} alt="mariano"></img>
            <h6>Lic. en Sistemas</h6>
            <p><a style={{color: 'yellow'}} href='http://www.linkedin.com/in/carlos-mariano-a-suarez-928875119'target="_blank"><i className="bi bi-linkedin" id='lin'></i></a></p>
            <p><a style={{color: 'yellow'}} href='https://github.com/marianosuarez80'target="_blank"><i className="bi bi-github" id='git'></i></a></p>
           
        </div>
    </div>
    </>
  )
}

export default Nosotros