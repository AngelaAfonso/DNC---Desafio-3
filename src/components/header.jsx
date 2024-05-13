import React from 'react';
import './header.css';
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'

const Header = () =>{
    return(
        <div className="navbar">
            <div className="navbar-text">
           <a href="#Projetos"><p>Projetos</p></a>
           <a href="#Sobre"><p>Sobre Mim</p></a>
           <a href="#Contato"><p>Contato</p></a>
           </div>
           <div className="images">
            <a href="https://www.google.com.br/?hl=pt-BR" target="_blank"><img src={github} alt="" /></a>
            <a href="https://www.google.com.br/?hl=pt-BR" target="_blank"><img src={linkedin} alt="" /></a>
           </div>
        </div>
    );
}

export default Header;

