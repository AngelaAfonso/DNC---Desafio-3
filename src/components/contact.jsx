import React from 'react';
import './contact.css';
import github from '../assets/github.svg'
import figma from '../assets/figma.svg'
import linkedin from '../assets/linkedin.svg'


const Contact = () =>{
    return(
        <div className="contact" id="Contato">
            <div className="email">
                <p>Meu Contato:<br/> 43 99999-9999</p>
                <p>Email:<br/> front-end@gmail.com</p>
            </div>
            <div className="images">
                <a href="https://www.google.com.br/?hl=pt-BR" target="_blank"><img src={github}/></a>
                <a href="https://www.google.com.br/?hl=pt-BR" target="_blank"><img src={linkedin}/></a>
                <a href="https://www.google.com.br/?hl=pt-BR" target="_blank"><img src={figma}/></a>
            </div>
        </div>
    );
}

export default Contact;