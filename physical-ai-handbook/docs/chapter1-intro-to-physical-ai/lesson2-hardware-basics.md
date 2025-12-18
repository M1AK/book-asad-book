---
id: lesson2-hardware-basics
title: "Your First Robot: Hardware Basics & Assembly"
sidebar_label: 1.2 Hardware Basics
---

# 1.2 Your First Robot: Hardware Basics & Assembly

## Introduction

Now that we understand the 'why' behind Physical AI, it's time to delve into the 'how.' In this lesson, we'll get our hands dirty by exploring the fundamental hardware components that bring a robot to life. We'll identify common parts, understand their basic functions, and then walk through a simplified assembly process for a hypothetical beginner-friendly robotic platform. This hands-on approach will provide a tangible connection to the theoretical concepts of Physical AI.

## Learning Objectives

By the end of this lesson, you will be able to:
*   Identify and describe the function of key robotic hardware components (e.g., microcontroller, motors, sensors).
*   Understand the basic principles of connecting these components.
*   Follow step-by-step instructions to assemble a simple robotic chassis.
*   Appreciate the interaction between hardware and software in a robotic system.

## Theory/Concepts

### The Robot's Anatomy: Key Components

Every robot, regardless of its complexity, is built from a combination of basic components. Think of them as the robot's brain, muscles, and senses.

1.  **Microcontroller (The Brain):**
    *   **Function:** This is the central processing unit (CPU) of the robot, responsible for executing programmed instructions. It reads input from sensors and sends commands to actuators. Popular choices for hobby robotics include Arduino, ESP32, and Raspberry Pi. For simplicity, we'll assume a board that combines processing power with GPIO (General Purpose Input/Output) pins.
    *   **Example:** Arduino Uno, ESP32 DevKit.

2.  **Actuators (The Muscles):**
    *   **Function:** Components that enable the robot to perform physical actions like moving, gripping, or rotating.
    *   **Types:**
        *   **DC Motors:** Provide continuous rotation, often used for wheels. Requires a motor driver to control speed and direction.
        *   **Servo Motors:** Provide precise angular movement (e.g., 0-180 degrees), ideal for steering or controlling robotic arms.
        *   **Stepper Motors:** Offer very precise, incremental movements, good for applications requiring high accuracy.

3.  **Sensors (The Senses):**
    *   **Function:** Devices that allow the robot to perceive its environment by detecting physical quantities and converting them into electrical signals the microcontroller can understand.
    *   **Types:**
        *   **Ultrasonic Sensor (Distance):** Measures distance to an object using sound waves. (e.g., HC-SR04).
        *   **Line Follower Sensor (Infrared):** Detects lines or edges, often used for navigation.
        *   **Infrared Proximity Sensor (Obstacle Detection):** Detects nearby objects.
        *   **Accelerometer/Gyroscope (Orientation/Movement):** Measures tilt, acceleration, and rotation.

4.  **Power Source (The Energy):**
    *   **Function:** Provides electrical energy to all components. Typically batteries (AA, LiPo) for mobile robots, or a wall adapter for stationary ones.

5.  **Chassis (The Skeleton):**
    *   **Function:** The physical frame or body of the robot that holds all components together. Can be made from acrylic, metal, 3D-printed parts, or even cardboard for basic prototypes.

### Basic Electrical Connections (Simplified)

Connecting components involves understanding a few basic principles:
*   **Power (VCC/+):** Connects to the positive terminal of the power supply or the 3.3V/5V pin on the microcontroller.
*   **Ground (GND/-):** Connects to the negative terminal of the power supply or the GND pin on the microcontroller. All grounds should be connected together (common ground).
*   **Signal (SIG/Data):** Connects to a digital or analog input/output pin on the microcontroller to send or receive data/commands.

### Motor Drivers: Why We Need Them

Microcontrollers like Arduino typically cannot provide enough current directly from their pins to power motors. A **motor driver** (e.g., L298N, DRV8833) acts as an intermediary, taking low-current control signals from the microcontroller and using an external power source to supply the necessary higher current to the motors. It also allows the microcontroller to control motor direction and speed.

## Hands-on Project/Activity: Assembling a Simple Wheeled Robot Chassis

**Project Goal**: Assemble a basic 2-wheeled robot chassis with a microcontroller, motor driver, and ultrasonic sensor.

**Components Needed (Hypothetical Beginner Kit):**
*   1x Microcontroller board (e.g., ESP32 DevKit)
*   1x 2-wheeled robot chassis kit (acrylic or similar, including motors, wheels, battery holder)
*   1x L298N Motor Driver Module
*   1x HC-SR04 Ultrasonic Sensor
*   1x 4xAA Battery Holder (or similar)
*   8x AA Batteries
*   Jumper wires (male-to-male, male-to-female)
*   Small screwdriver

**Step-by-step Instructions:**

1.  **Assemble the Chassis:** Follow the instructions provided with your robot chassis kit to put together the main frame. Attach the DC motors and secure the wheels.
2.  **Mount Microcontroller:** Secure the ESP32 DevKit (or your chosen microcontroller) to the chassis using standoffs or screws.
3.  **Mount Motor Driver:** Attach the L298N motor driver module to the chassis.
4.  **Mount Ultrasonic Sensor:** Secure the HC-SR04 ultrasonic sensor to the front of the chassis, ensuring its "eyes" are pointing forward.
5.  **Connect Motors to Motor Driver:**
    *   Connect the two wires from Motor 1 to `OUT1` and `OUT2` on the L298N.
    *   Connect the two wires from Motor 2 to `OUT3` and `OUT4` on the L298N.
    *   (Note: If motors spin in reverse later, simply swap the two wires for that motor).
6.  **Connect Motor Driver to Power:**
    *   Connect the positive (+) wire from your 4xAA battery holder to the `+12V` (or `VIN`) terminal on the L298N.
    *   Connect the negative (-) wire from the battery holder to the `GND` terminal on the L298N.
7.  **Connect Motor Driver to Microcontroller (Control Signals):**
    *   Connect `ENA` on L298N to a PWM-capable GPIO pin on ESP32 (e.g., GPIO 27). This controls Motor 1 speed.
    *   Connect `IN1` on L298N to a digital GPIO pin on ESP32 (e.g., GPIO 26).
    *   Connect `IN2` on L298N to a digital GPIO pin on ESP32 (e.g., GPIO 25).
    *   Connect `ENB` on L298N to a PWM-capable GPIO pin on ESP32 (e.g., GPIO 33). This controls Motor 2 speed.
    *   Connect `IN3` on L298N to a digital GPIO pin on ESP32 (e.g., GPIO 32).
    *   Connect `IN4` on L298N to a digital GPIO pin on ESP32 (e.g., GPIO 14).
8.  **Connect Ultrasonic Sensor to Microcontroller:**
    *   Connect `VCC` on HC-SR04 to 5V pin on ESP32.
    *   Connect `GND` on HC-SR04 to GND pin on ESP32.
    *   Connect `Trig` on HC-SR04 to a digital GPIO pin on ESP32 (e.g., GPIO 13).
    *   Connect `Echo` on HC-SR04 to a digital GPIO pin on ESP32 (e.g., GPIO 12).
9.  **Connect Microcontroller to Power/Ground:**
    *   Connect the 5V or 3.3V pin from the ESP32 to the breadboard's 5V/3.3V rail (if using).
    *   Connect the GND pin from the ESP32 to the breadboard's GND rail, ensuring it connects to the common ground with the motor driver.
10. **Insert Batteries:** Carefully insert the AA batteries into the battery holder. **Do NOT connect the battery holder to the L298N until all other connections are double-checked.**

**Expected Outcome:** You should have a physically assembled robot chassis with all specified components wired together. The motors won't move yet, as we haven't programmed them, but the wiring should be neat and secure.

## Summary/Key Takeaways

In this lesson, you've gained practical experience with the physical components of a robot. You learned about microcontrollers, motors, sensors, and the crucial role of motor drivers. Most importantly, you physically assembled a basic robot chassis, setting the stage for bringing it to life with code in the next lesson. This hands-on process solidifies the understanding of how hardware forms the foundation for Physical AI.

## Further Reading/Resources

*   [Arduino Official Website](https://www.arduino.cc/)
*   [ESP32 Official Documentation](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/)
*   [How DC Motors Work](https://howtomechatronics.com/how-it-works/dc-motor-how-it-works-and-how-to-control-it/)
*   [HC-SR04 Ultrasonic Sensor Tutorial](https://randomnerdtutorials.com/esp32-hc-sr04-ultrasonic-sensor-arduino-ide/)
