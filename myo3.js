var Myo = require("myo")

var m = Myo.create();

var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("COM11", {
  baudrate: 9600
});

//m.onForegroundWindowChange = function(app, title) {
//	return true;
//};

m.on('pose', function(pose, edge) {
	if (!edge) {
		if (pose == "fingers_spread") {
			serialPort.write("o", function(err, results) {
			console.log('err ' + err);
			console.log('results ' + results);
			});
			m.vibrate();
		} else if (pose == "fist") {
			serialPort.write("c", function(err, results) {
			console.log('err ' + err);
			console.log('results ' + results);
			});
			m.vibrate();
		}
	console.info("" + m.pose + ", " + edge);
});