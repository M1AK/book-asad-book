---
id: lesson3-programming-first-movements
title: "Hello Robot: Programming Your First Movements"
sidebar_label: 1.3 Programming Movements
---

# 1.3 Hello Robot: Programming Your First Movements

## Introduction

You've built the body of your first robot, and now it's time to give it a voice—or rather, a program! In this lesson, we'll bridge the gap between hardware and software. We'll introduce a basic programming environment, learn how to write simple code to control your robot's motors, and make it interact with its environment using the ultrasonic sensor. This is where your robot truly comes to life, executing your commands in the physical world.

## Learning Objectives

By the end of this lesson, you will be able to:
*   Set up a basic development environment for your microcontroller (e.g., Arduino IDE for ESP32).
*   Write simple code to control DC motors for forward, backward, and turning movements.
*   Read data from an ultrasonic sensor to detect distances.
*   Combine sensor data with motor control to create basic reactive behaviors (e.g., obstacle avoidance).
*   Upload your code to the microcontroller and observe your robot's physical response.

## Theory/Concepts

### The Development Environment (Arduino IDE Example)

For our ESP32 microcontroller, the Arduino IDE (Integrated Development Environment) is a popular and beginner-friendly choice. It allows us to write C++ code (often referred to as 'sketches' in the Arduino world), compile it, and upload it to the ESP32 board.

**Key Concepts in Arduino IDE:**
*   **`setup()` function:** Runs once when the program starts (e.g., for pin mode configuration).
*   **`loop()` function:** Runs repeatedly after `setup()` completes (e.g., for continuous sensor reading and motor control).
*   **`pinMode(pin, mode)`:** Configures a specific pin as an `INPUT` or `OUTPUT`.
*   **`digitalWrite(pin, value)`:** Writes a `HIGH` (ON) or `LOW` (OFF) digital value to a pin.
*   **`analogWrite(pin, value)`:** Writes an analog value (PWM) to a pin to control speed.
*   **`digitalRead(pin)`:** Reads the digital value (HIGH or LOW) from a pin.
*   **`analogRead(pin)`:** Reads the analog value from a pin.

### Motor Control with ESP32 and L298N

To control the DC motors, we'll use the L298N motor driver. The ESP32 sends control signals to the L298N's `IN` pins to determine direction, and to `ENA`/`ENB` pins (PWM) to control speed.

*   **Direction:** By setting pairs of `IN` pins (e.g., `IN1`, `IN2`) to `HIGH`/`LOW` combinations, we can make a motor spin forward or backward.
*   **Speed:** By writing a PWM (Pulse Width Modulation) value to the `ENA`/`ENB` pins, we can vary the effective voltage supplied to the motors, thus controlling their speed.

### Ultrasonic Sensor (HC-SR04) Basics

The HC-SR04 uses ultrasound to measure distance. It has two transducers: one sends out a sound pulse (`Trig` pin), and the other listens for the echo (`Echo` pin). The microcontroller measures the time it takes for the echo to return. Knowing the speed of sound, we can calculate the distance.

**Calculation:** `Distance = (Time_Taken * Speed_of_Sound) / 2` (divided by 2 because sound travels to the object and back).

## Hands-on Project/Activity: Basic Robot Movements and Obstacle Detection

**Project Goal**: Program your assembled robot to move forward, backward, turn, and stop. Then, implement a simple obstacle avoidance behavior using the ultrasonic sensor.

**Prerequisites:**
*   Completed assembly of the robot chassis from Lesson 1.2.
*   Arduino IDE installed with ESP32 board support.
*   USB cable for connecting ESP32 to your computer.

**Step-by-step Instructions & Code:**

1.  **Install ESP32 Board Support in Arduino IDE:**
    *   Go to `File > Preferences`.
    *   In "Additional Boards Manager URLs", add: `https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json`
    *   Go to `Tools > Board > Boards Manager`, search for "esp32", and install the "esp32 by Espressif Systems" package.
    *   Select your ESP32 board under `Tools > Board`.
    *   Select the correct COM Port under `Tools > Port`.

2.  **Code 1: Basic Motor Control (Forward, Backward, Turn, Stop)**

    Create a new sketch in Arduino IDE and paste the following code. Remember to adjust the GPIO pin numbers if your wiring differs from Lesson 1.2.

    ```cpp
    // Define L298N Motor Driver pins
    const int motor1ENA = 27; // Enable Pin for Motor 1 (PWM)
    const int motor1IN1 = 26; // Control Pin 1 for Motor 1
    const int motor1IN2 = 25; // Control Pin 2 for Motor 1

    const int motor2ENB = 33; // Enable Pin for Motor 2 (PWM)
    const int motor2IN3 = 32; // Control Pin 1 for Motor 2
    const int motor2IN4 = 14; // Control Pin 2 for Motor 2

    void setup() {
      // Set all motor control pins as outputs
      pinMode(motor1ENA, OUTPUT);
      pinMode(motor1IN1, OUTPUT);
      pinMode(motor1IN2, OUTPUT);
      pinMode(motor2ENB, OUTPUT);
      pinMode(motor2IN3, OUTPUT);
      pinMode(motor2IN4, OUTPUT);

      // Ensure motors are initially stopped
      stopMotors();
    }

    void loop() {
      // Test movements
      moveForward(150); // Move forward at medium speed
      delay(2000);
      stopMotors();
      delay(1000);

      moveBackward(150); // Move backward
      delay(2000);
      stopMotors();
      delay(1000);

      turnLeft(150); // Turn left
      delay(2000);
      stopMotors();
      delay(1000);

      turnRight(150); // Turn right
      delay(2000);
      stopMotors();
      delay(1000);
    }

    void moveForward(int speed) {
      analogWrite(motor1ENA, speed); // Set speed for Motor 1
      digitalWrite(motor1IN1, HIGH);
      digitalWrite(motor1IN2, LOW);

      analogWrite(motor2ENB, speed); // Set speed for Motor 2
      digitalWrite(motor2IN3, HIGH);
      digitalWrite(motor2IN4, LOW);
    }

    void moveBackward(int speed) {
      analogWrite(motor1ENA, speed);
      digitalWrite(motor1IN1, LOW);
      digitalWrite(motor1IN2, HIGH);

      analogWrite(motor2ENB, speed);
      digitalWrite(motor2IN3, LOW);
      digitalWrite(motor2IN4, HIGH);
    }

    void turnLeft(int speed) {
      analogWrite(motor1ENA, speed);
      digitalWrite(motor1IN1, LOW);  // Motor 1 backward
      digitalWrite(motor1IN2, HIGH);

      analogWrite(motor2ENB, speed);
      digitalWrite(motor2IN3, HIGH); // Motor 2 forward
      digitalWrite(motor2IN4, LOW);
    }

    void turnRight(int speed) {
      analogWrite(motor1ENA, speed);
      digitalWrite(motor1IN1, HIGH); // Motor 1 forward
      digitalWrite(motor1IN2, LOW);

      analogWrite(motor2ENB, speed);
      digitalWrite(motor2IN3, LOW);  // Motor 2 backward
      digitalWrite(motor2IN4, HIGH);
    }

    void stopMotors() {
      analogWrite(motor1ENA, 0);
      digitalWrite(motor1IN1, LOW);
      digitalWrite(motor1IN2, LOW);

      analogWrite(motor2ENB, 0);
      digitalWrite(motor2IN3, LOW);
      digitalWrite(motor2IN4, LOW);
    }
    ```
    *   **Upload the code** to your ESP32 board (`Sketch > Upload`).
    *   **Observe:** Your robot should perform a sequence of movements: forward, backward, left, right, with pauses in between.

3.  **Code 2: Obstacle Avoidance with Ultrasonic Sensor**

    Now, let's make the robot react to its environment. Replace the `loop()` function in the previous code with this one (keep the `setup()` and motor control functions).

    ```cpp
    // Define L298N Motor Driver pins (keep as before)
    const int motor1ENA = 27;
    const int motor1IN1 = 26;
    const int motor1IN2 = 25;
    const int motor2ENB = 33;
    const int motor2IN3 = 32;
    const int motor2IN4 = 14;

    // Define HC-SR04 Ultrasonic Sensor pins
    const int trigPin = 13;
    const int echoPin = 12;

    const int avoidDistance = 20; // Distance in cm to avoid obstacles

    long duration; // Variable for the duration of sound wave travel
    int distance;  // Variable for the distance measurement

    void setup() {
      // Set all motor control pins as outputs (as before)
      pinMode(motor1ENA, OUTPUT);
      pinMode(motor1IN1, OUTPUT);
      pinMode(motor1IN2, OUTPUT);
      pinMode(motor2ENB, OUTPUT);
      pinMode(motor2IN3, OUTPUT);
      pinMode(motor2IN4, OUTPUT);

      // Set sensor pins as outputs and inputs
      pinMode(trigPin, OUTPUT);
      pinMode(echoPin, INPUT);

      Serial.begin(115200); // Initialize serial communication for debugging
      stopMotors();
    }

    void loop() {
      // Clear the trigPin by setting it LOW for 2 microseconds
      digitalWrite(trigPin, LOW);
      delayMicroseconds(2);

      // Set the trigPin on HIGH state for 10 microseconds
      digitalWrite(trigPin, HIGH);
      delayMicroseconds(10);
      digitalWrite(trigPin, LOW);

      // Read the echoPin, returns the sound wave travel time in microseconds
      duration = pulseIn(echoPin, HIGH);

      // Calculate the distance
      // Speed of sound in air is ~0.0343 cm/microsecond
      // Distance = (Duration * 0.0343) / 2
      distance = duration * 0.034 / 2;

      Serial.print("Distance: ");
      Serial.print(distance);
      Serial.println(" cm");

      if (distance < avoidDistance && distance != 0) { // If obstacle is too close (and not faulty reading)
        stopMotors();
        delay(500);
        moveBackward(150); // Back up
        delay(1000);
        stopMotors();
        delay(500);
        turnRight(150); // Turn right to avoid
        delay(1000);
        stopMotors();
        delay(500);
      } else {
        moveForward(100); // Keep moving forward
      }

      delay(100); // Small delay to stabilize readings
    }

    // Motor control functions (moveForward, moveBackward, turnLeft, turnRight, stopMotors)
    // (Keep these functions exactly as defined in Code 1)
    void moveForward(int speed) { ... }
    void moveBackward(int speed) { ... }
    void turnLeft(int speed) { ... }
    void turnRight(int speed) { ... }
    void stopMotors() { ... }
    ```
    *   **Upload the code** to your ESP32 board.
    *   **Observe:** Your robot should now move forward. If it detects an object within `avoidDistance`, it should stop, back up, turn, and then continue moving forward. You can monitor the distance readings in the Arduino IDE's Serial Monitor (`Tools > Serial Monitor`, set baud rate to 115200).

## Summary/Key Takeaways

In this lesson, you've brought your robot to life with code! You've learned how to program basic movements using the L298N motor driver and how to integrate sensor data from the HC-SR04 ultrasonic sensor. By combining these skills, you implemented a fundamental obstacle avoidance behavior, a cornerstone of autonomous robotics. This hands-on experience demonstrates the power of software in controlling physical systems and lays the groundwork for more complex Physical AI applications.

## Further Reading/Resources

*   [Arduino IDE Getting Started](https://www.arduino.cc/en/Guide/Environment)
*   [ESP32 Arduino Core Documentation](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
*   [PWM with ESP32 Arduino](https://randomnerdtutorials.com/esp32-pwm-arduino-ide/)
*   [HC-SR04 Ultrasonic Sensor with ESP32 Tutorial](https://randomnerdtutorials.com/esp32-hc-sr04-ultrasonic-sensor-arduino-ide/) (re-emphasize)
