#!/bin/bash

# your script commands here
mysql -u root -password
password

cd ./Server
http-server


cd ./IndieStreams-backend
npm nodemon index.js

cd ./IndieStreams-Frontend
npm run dev
