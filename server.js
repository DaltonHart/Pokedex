// Modules
const express = require('express');
const cors = require('cors');
// Instanced Modules
const app = express();
const routes = require('./routes');
// Global Variables
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/', routes.views);
// All Pokemon Endpoints
app.use('/api/pokemon', routes.pokemon);
// All Trainer Endpoints
app.use('/api/trainers', routes.trainers);
// Server Listener
app.listen(PORT, () => {
	console.log('Welcome Professor Oak.');
});
