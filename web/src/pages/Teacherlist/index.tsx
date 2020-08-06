import React from 'react';
import './style.css';
import PageHeader from './../../components/PageHeader/';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input/index';
import Select from '../../components/Select/index';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container" >
            <PageHeader title="Estes são os Proffs disponiveis" link="/">
                <form id="search-teachers" action="">
                    <Select name="subject" label="Materia"
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
                    <Input name="time" type="time" label="Horario" />
                </form>
            </PageHeader>
            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    );
}


export default TeacherList;