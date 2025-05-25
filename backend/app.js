const express = require('express')
const bodyParser = require('body-parser')
const monedas = require('./monedas') // para utilizar el modelo monedas de la bd
const { Op } = require('sequelize') // para utilizar operadores de sequelize

const app = express()
const cors = require('cors');
const puerto = 3000

app.use(bodyParser.json())
app.use(cors()); // permite peticiones desde cualquier origen

app.listen(puerto, () => {
    console.log('servidor iniciado...')
})
// endpoint para convertir monedas
app.post('/convertir/', async (req, res) => {
    const { origen, destino, cantidad } = req.body;
    let resultado = 0;
    
    // obtener de la base de datos la moneda a convertir
    const data = await monedas.findOne({
        where: {
            [Op.and]: [{ origen }, { destino }],
        }
    });
    // si no existe la moneda a convertir, devolver un error 404
    if (!data) {
        res.sendStatus(404);
    }
    const { valor } = data;
    resultado = cantidad * valor;
    // si la moneda a convertir existe, devolver el resultado
    res.send({
        origen,
        destino,
        cantidad,
        resultado
    })

})
// 02/05/2025 2-1 Camacho Castañeda Angélica María	

// endpoint para agregar monedas a la base de datos
app.post('/agregar/', async (req, res) => {
    const { origen, destino, valor } = req.body;
    // guardar en la base de datos la moneda a convertir
    const data = await monedas.create({
        origen,
        destino,
        valor
    });
    res.send(data)
})
// endpoint para actualizar monedas de la base de datos
app.put('/actualizar/:id', async (req, res) => {
    const { id } = req.params; // obtener el id de la moneda a actualizar
    
    // buscar la moneda por id
    const data = await monedas.findOne({
      where: { id }
    });
  
    if (!data) {
      return res.sendStatus(404); // si no existe la moneda, enviar error 404
    } else {
      const { origen, destino, valor } = req.body;
      // actualizar en la base de datos la moneda
      await monedas.update(
        { origen, destino, valor },
        { where: { id } }
      );
      // obtener el nuevo valor de la moneda actualizada para mosrtrarlo
      // hacer una nueva consulta a la bd para tener el nuevo valor
      const nuevoValor = await monedas.findOne({
        where: { id }
      });
      // devolver la moneda actualizada con su origen, destino y nuevo valor
      res.json(nuevoValor);
    }
  });
  
// endpoint para ver todas monedas de la base de datos
app.get('/monedas/', async (req, res) => {
    const data = await monedas.findAll();
    res.send(data)

})
// endpoint para eliminar monedas de la base de datos
app.delete('/eliminar/:id', async (req, res) => {
    const { id } = req.params; // obtener el id de la moneda a eliminar
    // buscar la moneda por id
    const data = await monedas.findOne({
        where: { id }
    });
    if (!data) {
        return res.sendStatus(404); // si no existe la moneda, enviar error 404
    } else {
        await monedas.destroy({
            where: { id }
        });
        res.sendStatus(200); // devolver un mensaje de exito
    }
})