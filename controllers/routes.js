const Pizzas = require('../models/pizzas');

const routes = (app) => {

    app.get('/', (req, res) => {
        Pizzas.findAll().then(pizzas => {
            res.render('index', { pizzas: pizzas });
        })
    })

    app.post('/api/addPizza/', (req, res) => {
        console.log('incoming post request');
        let pizzaName = req.body.pizzaName;
        
        Pizzas.create({ pizza_name: pizzaName }).then(pizzas => {
            if(!pizzas) {
                console.log("Opps, something went wrong!");
            } else {
                res.send(true);
            }
        });
    });
    
    app.put('/api/updatePizza/', (req, res) => {
        console.log('incoming put request');
        let pizzaId = req.body.pizzaId;
        
        Pizzas.update(
            { devoured: true },
            { where: {pizza_id: pizzaId} }
        )
        .then(pizzas => {
            if(!pizzas) {
                console.log("Opps, something went wrong!");
            } else {
                res.send(true);
            }
        });
    });
}

module.exports = routes;