/*
Configurer le module de route
*/
const express = require('express');
const router = express.Router();
//

/*
Définition des routes
*/
    // Accueil
    router.get('/', (res, req) => {
        res.render('index');
    });

    // A propos
    router.get('/about', (res, req) => {
        res.render('about');
    });
//


/*
Exporter le module de route
*/
    module.exports = router;
//