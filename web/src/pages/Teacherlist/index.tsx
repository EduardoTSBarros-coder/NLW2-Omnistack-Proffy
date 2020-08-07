import React, {useState, FormEvent} from 'react';
import './style.css';
import PageHeader from './../../components/PageHeader/';
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import Input from '../../components/Input/index';
import Select from '../../components/Select/index';
import api from '../../services/api';



function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState('');
  const [week_day, setWeek_day] = useState('');
  const [time, setTime] = useState('');


  async function searchTechers(e: FormEvent){
   e.preventDefault();
    const resposta = await api.get('classes',{
       params:{
           subject,
           week_day,
           time
       }

      });
    setTeachers(resposta.data);
   }

    
    return (
        <div id="page-teacher-list" className="container" >
            <PageHeader title="Estes são os Proffs disponiveis" link="/">
                <form id="search-teachers" onSubmit={searchTechers} >
                    <Select name="subject" label="Materia" value={subject}  onChange={(e) => { setSubject(e.target.value) }}
                        options={[
                            { value: 'Artes', label: "Artes" },
                            { value: 'Biologia', label: "Biologia" },
                            { value: 'Matematica', label: "Matematica" },
                            { value: 'Banco de dados', label: "banco de Dados" },
                            { value: 'Logica', label: "Logica" }
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da Semana"
                        value={week_day}  onChange={(e) => { setWeek_day(e.target.value) }}
                        options={[
                            { value: '0', label: "Domingo" },
                            { value: '1', label: "Segunda" },
                            { value: '2', label: "Terça" },
                            { value: '3', label: "Quarta" },
                            { value: '4', label: "Quinta" },
                            { value: '5', label: "Sexta" },
                            { value: '6', label: "Sabado" },
                        ]}
                    />                  
                    <Input name="time" type="time" label="Horario"  value={time}  onChange={(e) => { setTime(e.target.value); }}/>
                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>
            <main>
                {teachers.map((teacher : Teacher) => {
                    return  <TeacherItem key={teacher.id} teacher={teacher}/>;
                })}
            </main>
        </div>
    );
}


export default TeacherList;