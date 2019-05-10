const express = require('express');
const controller = require('./controllers/controller');
const app = express();

app.use(express.json());

app.post('api/concerts', controller.create);
app.get('/api/concerts', controller.read);
app.put('/api/concerts/:id', controller.update);
app.delete('/api/concerts/:id', controller.delete);

const PORT = 3001;
app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
