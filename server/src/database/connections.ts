import knex from 'knex';
import  path from 'path'; //Utilizado para lidar com caminhos

//Migrations para controle de versão do banco

const db = knex({
   client:'sqlite3',
   connection: {
       filename: path.resolve(__dirname,'database.sqlite')   
    },
    useNullAsDefault: true, //jogar nulo por padrão para dados sem informação
});

export default db;