const { CRUD } = require('./helpers');
const db = require('./models');

const params = process.argv;
if (params.length <= 0) {
  process.exit(0);
}
const args = params.slice(2);
const comand = args[0].split(':')[0].substring(2);
const entity = args[0].split(':')[1];

switch (comand) {
  case CRUD.CREATE:
    const data = {};
    args.slice(1).map((arg) => {
      const tmp = arg.split('=');
      data[tmp[0].substring(2)] = tmp[1];
    });
    db[entity]
      .create(data)
      .then(() => console.log('contact create'))
      .catch(console.log);
    break;
  case CRUD.READ:
    db[entity].findAll().then(console.log).catch(console.log);
    break;
  case CRUD.UPDATE:
    console.log('update!!');
    break;
  case CRUD.DELETE:
    console.log('delete!!');
    break;
  default:
    console.log('Operation not found!');
}
