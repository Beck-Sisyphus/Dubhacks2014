var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("COM11", {
  baudrate: 9600
}, true);

serialPort.on("open", function () {
	console.log('open');
	serialPort.write("o", function(err, results) {
		console.log('err ' + err);
		console.log('results ' + results);
	});
	serialPort.on('data', function(data) {
		console.log('data received: ' + data);
	});
});