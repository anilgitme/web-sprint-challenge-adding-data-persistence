// build your server here and require it from index.js
const express = require('express');
const server = express();
const projectRoute = require('./project/router');
const resourceRoute = require('./resource/router');
const taskRoute = require('./task/router');

server.use(express.json());
server.use('/api/projects', projectRoute);
server.use('/api/resources', resourceRoute);
server.use('/api/tasks', taskRoute)

module.exports = server;