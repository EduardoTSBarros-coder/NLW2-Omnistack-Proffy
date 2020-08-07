import React from 'react';
import wats from '../../assets/images/icons/whatsapp.svg';
import './style.css';
import api from '../../services/api';


export interface Teacher{
 
    avatar: string,
    bio: string,
    cost: number,
    id: number,
    name:string,
    subject: string,
   whatsapp: string;
 
}

export interface TeacherItemprops{
teacher: Teacher
};

const TeacherItem: React.FC<TeacherItemprops> = ({teacher}) => {

  function createNewConnection() {
    api.post('connections',{
     user_id: teacher.id,
    })
  }


return (
    <article className="teacher-item">
    <header>
      <img src={teacher.avatar} alt={teacher.name} />
      <div>
        <strong> {teacher.name} </strong>
        <span> {teacher.subject} </span>
      </div>
    </header>
    <p>
      {teacher.bio}
    </p>
    <footer>
      <p>
        Preço/Hora
        <strong>
          R$ {teacher.cost}
        </strong>
      </p>
      <a target="_blanck" href={'https://wa.me/${whatsapp}?text=Eu%20tenho%20interesse%20no%20seu%20Curso%20'} onClick={createNewConnection}>
           <img src={wats} alt="entrar em contato wats"  />
           Entrar em contato 
      </a>
    </footer>         
</article>

)  

    
}


export default TeacherItem;