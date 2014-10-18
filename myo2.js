var Myo = require("myo")

var m = Myo.create();

var b1 = 0;
var b2 = 0;

var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("COM11", {
  baudrate: 9600
});

//m.onForegroundWindowChange = function(app, title) {
//	return true;
//};

m.on('pose', function(pose, edge) {
	if (!edge) {
		if (pose == "wave_in") {
			if (b1 == 0) {
				b1 = 1;
			} else {
				b1 = 0;
				b2 = 0;
			}
		} else if (pose == "wave_out" && b1 == 1) {
			if (b2 == 0) {
				b2 = 1;
			} else {
				b1 = 0;
				b2 = 0;
			}
		} else if (pose !== "rest") {
			b1 = 0;
			b2 = 0;
		}
		if (b1 == 1 && b2 == 1) {
			serialPort.write("o", function(err, results) {
			console.log('err ' + err);
			console.log('results ' + results);
			});
			m.vibrate();
		}
	}
	console.info("" + m.pose + ", " + edge + ", " + b1 + ", " + b2);
});