const  net  =  require('net');
const  readline  =  require('readline');
const  socket  =  new  net.Socket();

const  port  =  8000;

const  hostname  =  '127.0.0.1';

socket.setEncoding  =  'UTF-8';

socket.connect( port, hostname, function() {});


socket.on( 'data',  function ( msg )  {  
    console.log(`${msg}`);  

});

var  rl  =  readline.createInterface({    
    input:  process.stdin,
    output: process.stdout
});    
function  quitEcho()  {    
    rl.close();    
    socket.end();    
    console.log('quit echo client');
}
var data = '31 32 33 34'
var errdata = '11010110101'
var code = '1110'
const getLine = (function() {
    const getLineGen = (async function*() {
        for await (const line of rl) {
            yield line;
        }
    })();
    return async() => ((await getLineGen.next()).value);
})();

const main = async() => {
    while (true) { 
        console.log("1:正常的数据帧通信过程");
        console.log("2:错误的数据帧通信过程");
        console.log("3:数据帧丢失");
        let line = await getLine()
        switch  (line)  {    
            case  "1":
                socket.write(data + code+ '\r\n');
                break;    
          case "2":
                socket.write(errdata + code + '\r\n');
                break;    
          case "3":   
                break;    
            default:
                 break;          
        }


    }

};

main();


rl.on('SIGINT',  quitEcho);


 socket.on('close', function() {  
     console.log('服务器端下线了');
 });