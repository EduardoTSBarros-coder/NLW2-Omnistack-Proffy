import React from 'react';
import PageHeader from './../../components/PageHeader/'
import './style.css';
import Input from '../../components/Input/index';
import WarnIcon from '../../assets/images/icons/warning.svg';
import TextArea from '../../components/TextArea/index';
import Select from '../../components/Select';



function TeacherForm() {

  const scheduleItems = [
    {week_day:0 ,from: '8:00 AM',  to: '4:00 PM' },
    {week_day:2 ,from: '10:00 AM', to: '6:00 PM' }
  ]

  return (

    <div id="page-teacher-form" className="container" >
      <PageHeader title="Que incrivel que voce quer dar aulas" link="/" description="O primeiro passo é preencher o formulario de descrição" />
      <main>
        <fieldset>
          <legend>Seus Dados</legend>
          <Input name="name" type="text" label="Nome Completo" />
          <Input name="whatsapp" type="text" label="Whatsapp" />
          <Input name="avatar" type="text" label="Avatar" />
          <TextArea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a Aula</legend>
          <Select
            name="subject"
            label="Materia"
            options={[
              { value: 'Artes', label: "Artes" },
              { value: 'Biologia', label: "Biologia" },
              { value: 'Matematica', label: "Matematica" },
              { value: 'Banco de dados', label: "banco de Dados" },
              { value: 'Logica', label: "Logica" }
            ]}
          />
          <Input name="coast" type="text" label="Custo da Hora Aula" />
        </fieldset>
        <fieldset>
          <legend>Horarios disponiveis
            <button type="button">
              + Novo Horario
            </button>
          </legend>
          <div className="schedule-item">
            <Select
              name="subject"
              label="Materia"
              options={[
                { value: 'Artes', label: "Artes" },
                { value: 'Biologia', label: "Biologia" },
                { value: 'Matematica', label: "Matematica" },
                { value: 'Banco de dados', label: "banco de Dados" },
                { value: 'Logica', label: "Logica" }
              ]}
            />
            <Input name="from" label="Das" type="time" />
            <Input name="to" label="Ate" type="time" />      
          
          </div>
        </fieldset>
        <footer>
          <p>
            <img src={WarnIcon} alt="Aviso Importante" />
            Importante <br />
            Precha todos os dados
             </p>
          <button type="button">
            Salvar
            </button>
        </footer>
      </main>

    </div>
  );

}


export default TeacherForm;