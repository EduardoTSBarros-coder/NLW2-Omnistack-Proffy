import express from 'express';
import db from './database/connections';
import convertHourToMinutes from './utils/convertHourToMinutes';

const routes = express.Router();

interface ScheduleItem {

    week_day: number;
    from: string;
    to: string;

}


// GET: busca
//POST: cria 
//PUT: atualiza

//Request body: dados para criação ou atualização
//Route Params: vem no endereço da rquisição.
//query params: paginação, filtros oredenação.


routes.post('/classes', async (req, res) => {
    const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    } = req.body;


    const trx = await db.transaction(); // função que contra o caso de erro . onde so excuta se todos os passos derem certos

    try {
        const insertUsersIds = await trx('users').insert({
            name,
            avatar,
            whatsapp,
            bio,
        });

        const user_id = insertUsersIds[0];

        const insertedClassesId = await trx('classes').insert({
            subject,
            cost,
            user_id,
        });

        const class_id = insertedClassesId[0];

        const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {

            return {
                class_id,
                week_day: scheduleItem.week_day,
                from: convertHourToMinutes(scheduleItem.from),
                to: convertHourToMinutes(scheduleItem.to),
            }

        });

        await trx('class_schedule').insert(classSchedule);

        await trx.commit();

        return res.status(201).send({
            "status": "sucesso"
        });
    }
    catch (err) {
        console.log(err);
        await trx.rollback();
        return res.status(400).json({
            error: "unxepected error while creating new class"
        });

    }

});


export default routes;