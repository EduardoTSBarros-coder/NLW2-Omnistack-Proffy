import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from './../../components/PageHeader/'
import './style.css';
import Input from '../../components/Input/index';
import WarnIcon from '../../assets/images/icons/warning.svg';
import TextArea from '../../components/TextArea/index';
import Select from '../../components/Select';
import api from '../../services/api';




function TeacherForm() {

  const history = useHistory();
  const [name, setname] = useState('');
  const [avatar, setavatar] = useState('');
  const [whatsapp, setwhatsapp] = useState('');
  const [bio, setbio] = useState('');
  const [subject, setsubject] = useState('');
  const [cost, setcost] = useState('');


  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ]);


  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems, { week_day: 0, from: '', to: '' }
    ]);
  }


  function handleCreateClass(e: FormEvent) {
    e.preventDefault();
    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(() => {
      alert('cadastro Realizaado com Sucesso');
      history.push('/');
    }).catch(()=>{
      alert('Erro no Cadastro dos Dados')
    })

    console.log({
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      scheduleItems
    });

  }


  function setScheduleItemVelue(position: number, field: string, value: string) {

    const newArray = scheduleItems.map((scheduleItem, index) => {

      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }
      return scheduleItem;
    });
    setScheduleItems(newArray);
  }

  return (

    <div id="page-teacher-form" className="container" >
      <PageHeader title="Que incrivel que voce quer dar aulas" link="/" description="O primeiro passo é preencher o formulario de descrição" />
      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus Dados</legend>
            <Input name="name" type="text" label="Nome Completo" value={name} onChange={(e) => { setname(e.target.value) }} />
            <Input name="whatsapp" type="text" label="Whatsapp" value={whatsapp} onChange={(e) => { setwhatsapp(e.target.value) }} />
            <Input name="avatar" type="text" label="Avatar" value={avatar} onChange={(e) => { setavatar(e.target.value) }} />
            <TextArea name="bio" label="Biografia" value={bio} onChange={(e) => { setbio(e.target.value) }} />
          </fieldset>
          <fieldset>
            <legend>Sobre a Aula</legend>
            <Select
              name="subject"
              label="Materia"
              value={subject}
              onChange={(e) => { setsubject(e.target.value) }}
              options={[
                { value: 'Artes', label: "Artes" },
                { value: 'Biologia', label: "Biologia" },
                { value: 'Matematica', label: "Matematica" },
                { value: 'Banco de dados', label: "banco de Dados" },
                { value: 'Logica', label: "Logica" }
              ]}
            />
            <Input name="cost" type="text" value={cost}
              onChange={(e) => { setcost(e.target.value) }} label="Custo da Hora Aula" />
          </fieldset>
          <fieldset>
            <legend>Horarios disponiveis
            <button type="button" onClick={addNewScheduleItem}>
                + Novo Horario
            </button>
            </legend>
            {scheduleItems.map((scheduleitem, index) => {
              return (
                <div key={scheduleitem.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dia da Semana"
                    value={scheduleitem.week_day}
                    onChange={e => setScheduleItemVelue(index, 'week_day', e.target.value)}
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
                  <Input name="from" label="Das" type="time" value={scheduleitem.from} onChange={e => setScheduleItemVelue(index, 'from', e.target.value)} />
                  <Input name="to" label="Ate" type="time" value={scheduleitem.to} onChange={e => setScheduleItemVelue(index, 'to', e.target.value)} />
                </div>
              )
            })}
          </fieldset>
          <footer>
            <p>
              <img src={WarnIcon} alt="Aviso Importante" />
              Importante <br />
              Precha todos os dados
             </p>
            <button type="submit">
              Salvar
            </button>
          </footer>
        </form>
      </main>

    </div>
  );

}


export default TeacherForm;