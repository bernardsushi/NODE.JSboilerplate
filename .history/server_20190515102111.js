/*
Importer les composants serveur
*/
    // Class
    require('dotenv').config();
    const express = require('express');
    const ejs = require('ejs');
    const path = require('path');

    // Modules serveur
//

/*
Configuration du serveur
*/
    // Définir les variables serveur
    const server = express();
    const port = process.env.PORT;

    // Définition du dossier static du client
    server.set( 'views', __dirname + '/www' );
    server.use( express.static(path.join(__dirname, 'www')) );

    // Configuration du moteur de rendu
    server.set( 'view engine', 'ejs' );

    //utilisation des routeurs
    server.use('/, require('./routes/front.routes')
//

/* 
Lancer le serveur
*/
    server.listen( port, () => console.log(`Server is launched on poort ${port}`) )
//