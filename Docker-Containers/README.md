# Basic Express.js Web Application in a Docker Container

This repository contains a basic Express.js web application that serves a simple "Hello, World! This is Introduction to Docker for Beginners" message and a Dockerfile to help containerize it.

## Prerequisites

Before running the application, make sure you have the following installed on your system:

- Docker: [Download and Install Docker](https://www.docker.com/)
- or head to module 1: Big-Picture-Intro

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Upasna20/Introduction-to-Docker-for-Beginners.git

2. **Navigate to the cloned repository directory:**

    ```bash
    cd Introduction-to-Docker-for-Beginners
    ```

3. **Navigate to the Docker-Containers directory:**

    ```bash
    cd Docker-Containers
    ```

4. **Build the Docker image using the provided Dockerfile:**

    ```bash
    docker build -t express-app .
    ```
   You can give any custom name to the image, here it is "express-app"
5. **Run the Docker container based on the built image:**

    ```bash
    docker run -p 3000:3000 express-app
    ```

6. **Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to see the "Hello, World! This is Introduction to Docker for Beginners" message served by the Express.js application running inside the Docker container.**

## Dockerfile

The Dockerfile in this repository contains the instructions for building the Docker image for the Express.js application. It starts with an Alpine base image, copies the application files into the container, installs dependencies, and specifies the command to run the application.

