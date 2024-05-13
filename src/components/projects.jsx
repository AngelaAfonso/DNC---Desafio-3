import React from 'react';
import './projects.css';
import Imagem from '../assets/google.svg';

const Projects = () =>{
    return(
        <div className="projects" id="Projetos">
            <h1>Projetos</h1>
            <div className="Projects1">
            <div className="container">
                <img src={Imagem}/>
                <h5>Projeto 1</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="https://www.google.com.br/?hl=pt-BR"><button>Clique Aqui</button></a>
            </div>
            <div className="container">
                <img src={Imagem}/>
                <h5>Projeto 2</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="https://www.google.com.br/?hl=pt-BR"><button>Clique Aqui</button></a>
            </div>
            </div>
            <div className="Projects2">
        <div className="container">
            <img src={Imagem}/>
            <h5>Projeto 3</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="https://www.google.com.br/?hl=pt-BR"><button>Clique Aqui</button></a>
        </div>
        <div className="container">
            <img src={Imagem}/>
            <h5>Projeto 4</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="https://www.google.com.br/?hl=pt-BR"><button>Clique Aqui</button></a>
        </div>
        </div>
        </div>
    );
}

export default Projects;