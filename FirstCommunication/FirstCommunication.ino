#include <Makeblock.h>
#include <Arduino.h>
#include <SoftwareSerial.h>
#include <Wire.h>

MeDCMotor motor3(M1);
MeDCMotor motor4(M2);

int led = 13;
uint8_t motorSpeed = 100;

void setup()
{
  Serial.begin(9600);
  pinMode(led, OUTPUT);
}

void loop()
{
    if(Serial.available() ) {
        int cmd  = Serial.read();
        
        // The feedback and the LED will be used for debugging.
        Serial.println(cmd);
        digitalWrite(led, HIGH);
        if (cmd == 'o'){
            motor3.run(motorSpeed);
	    motor4.run(motorSpeed);
	    digitalWrite(led, LOW);
        }
        delay(2000);
    }   else {
        motor3.stop();
	motor4.stop();
        digitalWrite(led, LOW);
	delay(100);
    }
}

