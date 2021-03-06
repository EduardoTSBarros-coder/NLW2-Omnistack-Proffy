import React from 'react';
import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom'; 
import './style.css';

interface PageHeaderProps{
    title: string;
    link: string;
    description?: string; //interrogação para definir a não obrigatoriedade deste parametro
}

const PageHeader : React.FC<PageHeaderProps> = (props) => {
    return (       
           <header className="page-header">
             <div className="top-bar-container">
                 <Link to={props.link}>
                      <img src={backIcon} alt="voltar"/>
                 </Link>        
                 <img src={logoImg} alt="logo"/>                 
             </div>
             <div className="header-content">
              <strong>{props.title}</strong>
              {props.description && <p>{props.description}</p>  }
              {props.children}
             </div>
           </header>           
       
    );

}


export default PageHeader;