const net = require('net');
const readline = require('readline');
const socket = new net.Socket();

const port = 8000;

const hostname = '127.0.0.1';

socket.setEncoding = 'UTF-8';

socket.connect(port, hostname, function () {
});

socket.on('data', function (msg) {
    console.log(`${msg}`);
});

var rl = readline.createInterface({
    input: process.stdin
});

function quitEcho() {
    rl.close();
    socket.end();
    console.log('quit echo client');
}

rl.on('line', function (cmd) {
    if (cmd.indexOf('quit') == 0 || cmd.indexOf('exit') == 0) {
        quitEcho();
    } else {
        socket.write(cmd + '\r\n');
    }
});

rl.on('SIGINT', quitEcho);
socket.on('error', function (error) {
    console.log('error' + error);
});

socket.on('close', function () {
    console.log('服务器端下线了');
});
