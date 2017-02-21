var express = require('express');
var mysql = require('mysql');
var app =  express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var md5 = require('md5');
var _ = require('underscore');

server.listen(process.env.PORT || 3200);
console.log('Server running...');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'court'
});

io.on('connection', function(socket){
    console.log("i get connection");

    connection.query('SELECT * FROM news', function(err, result){
        if(err){
            console.error(err);
            return;
        }
        else{
            io.sockets.emit('INITIAL_DATA_NEWS', {data: result});
        }
    });
        connection.query('SELECT * FROM coach', function(err, result){
            if(err){
                console.error(err);
                return;
            }
            else{
                io.sockets.emit('INITIAL_DATA_TENNIS_SCHOOL', {data: result});
            }
        });



    // socket.on('REGISTER_DATA', function(data){
    //     var salt = Math.random().toString(36).substring(7);
    //     var pass = md5(data.password + salt);
    //     var query = connection.query('CALL addUser(?,?,?,?,?,?)', [data.nick, data.firstName, data.lastName, pass, salt, data.address], function(err, result){
    //         if(err){
    //             console.error(err);
    //             io.sockets.emit('REGISTER_RESPONSE', {res: "REGISTER_NOT_SUCCESSFUL"});
    //             return;
    //         }
    //         else if(result[0][0].OK === 'OK'){
    //             io.sockets.emit('REGISTER_RESPONSE', {res: "REGISTER_SUCCESSFUL"});
    //         }
    //         else{
    //             io.sockets.emit('REGISTER_RESPONSE', {res: "REGISTER_NOT_SUCCESSFUL"});
    //         }
    //     });
    // });
});