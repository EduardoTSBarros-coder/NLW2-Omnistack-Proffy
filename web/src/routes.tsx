import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Landing/index';
import TeacherList from './pages/Teacherlist/index';
import TeacherForm from './pages/TeacherForm/index';
import Erro404 from './pages/Erros/Erro404';



function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/study" exact component={TeacherList} />
                <Route path="/give-classes" exact component={TeacherForm} />
                <Route component={Erro404} />
            </Switch>
        </BrowserRouter>
    );

}



export default Routes;