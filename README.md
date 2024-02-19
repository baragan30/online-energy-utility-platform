# Smart Energy Metering Platform

## Overview
This online platform is engineered for efficient management of users, their smart energy metering devices, and the data monitored from each device. It caters to various user roles, such as administrators and clients, offering functionalities like device management, data visualization, and client support through a chat system.

### Features

- **User Management**: Execute CRUD operations on user accounts.
- **Device Management**: Enroll and oversee smart energy metering devices.
- **Data Monitoring**: Archive and display energy consumption data.
- **Chat System**: Facilitate client support via a real-time chat interface.
- **Security**: Employ authentication and authorization mechanisms for different user roles.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Java](https://www.java.com/)
- [Docker](https://www.docker.com/)
- [RabbitMQ](https://www.rabbitmq.com/)
- [IntelliJ IDEA](https://www.jetbrains.com/idea/)
- [Visual Studio Code](https://code.visualstudio.com/)

## Usage

- **Login**: Securely access the platform using administrator or client credentials.
- **Admin Panel**: Control users and devices, and access system metrics.
- **Client Dashboard**: Observe energy consumption data for associated devices.
- **Chat Support**: Engage in real-time communication between clients and administrators.

## Project Structure

The project is organized into four primary folders, each dedicated to a distinct function within the application's framework:

### 1. Backend
Contains server-side code, including API endpoints, business logic, database integration, and security features.

### 2. Frontend
Houses client-side code, encompassing the user interface, client-side logic, state management, and API requests.

### 3. Producer
Dedicated to the Smart Metering Device Simulator, handling data simulation, message production, and integration with RabbitMQ.

### 4. rabbitMq
Includes RabbitMQ configurations and scripts, focusing on broker settings, message handling, and broker management.

Each folder encapsulates its specific function, ensuring a streamlined and manageable codebase.

## Build Docker Files Commands

To build and run the application using Docker, use the following commands:

- docker build . -t ds/server

- docker build . -t ds/producer

- docker build . -t ds/application

- docker compose up -d

### Additional Documentation

For a comprehensive understanding of the platform, refer to the `Documentation.docx` file.

