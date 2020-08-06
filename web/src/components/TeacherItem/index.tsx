import React from 'react';
import wats from '../../assets/images/icons/whatsapp.svg';
import './style.css';



function TeacherItem() {

return (
    <article className="teacher-item">
    <header>
      <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEfNjYDGPlZ_w/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=6uWlmW_5NNeYO76NAehRwgehasbc6_7FesBwofZU0zY" alt=""/>
      <div>
        <strong> Eduardo Barros </strong>
        <span> Novas Tecnologias </span>
      </div>
    </header>
    <p>
      Entusiasta das melhores tecnologias.Apaixonado por descobrir novas tecnologias e tendencias, visando mudar o modo como o mundo real se relaciona com o mundo virtual.
    </p>
    <footer>
      <p>
        Preço/Hora
        <strong>
          R$ 80,00
        </strong>
      </p>
      <button type="button">
           <img src={wats} alt="entrar em contato wats"/>
           Entrar em contato 
      </button>
    </footer>         
</article>

)
   

    
}


export default TeacherItem;