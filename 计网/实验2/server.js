const net = require( 'net' );
const port = 8000;
const hostname = '127.0.0.1';

// 定义两个变量， 一个用来计数，一个用来保存客户端
let clients = {};
let clientName = 0;

function calculate_crc8(data_ptr)
{
  var i, j;
  var crc = 0x00;
  for (i=0; i<data_ptr.length; i++)
  {
    crc ^= data_ptr;
    for (j=8; j>0; j--)
    {
      if (crc & 0x80)
      {
        crc <<= 1;
        crc ^= 0x31;   //0110001
      } 
      else
      { 
        crc <<= 1;
      /*当最高bit为0时，则crc与0按位异或，仍为crc，所以，没有语句"crc ^= 0x31;”。*/
      } 
    } 
  } 
  return crc;
}

// 创建服务器
const server = new net.createServer();

server.on('connection', (client) => {
  client.name = ++clientName; // 给每一个client起个名
  clients[client.name] = client; // 将client保存在clients

  
  var number = 0;
  client.on('data', function (msg) { //接收client发来的信息
    if (msg) {
      var d = `${msg}`.substr(0, 11);
      var c = `${msg}`.substr(11, 4);
      console.log(d);
      console.log(c);
      console.log(calculate_crc8(d));
      
      var result = calculate_crc8(d) % c;
      if (result == 0) {
        client.write("ACK" + (++number));
      } else {
        client.write("NAK" + (++number));
        
      }
    } else {
      client.write("数据帧丢失" );
      
    }
    
  });

  client.on('error', function (e) { //监听客户端异常
    console.log('client error' + e);
    client.end();
  });

  client.on( 'close', function () {
    delete clients[client.name];
    console.log(`客户端${ client.name }下线了`);
  });

});

server.listen( port,hostname,function () {
  console.log(`服务器运行在：http://${hostname}:${port}`);
});