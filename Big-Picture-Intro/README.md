# MiniProject 1: Install Docker and Run a Container

## Objective:
In this MiniProject, you will install Docker on your local machine and run your first Docker container to ensure that Docker is correctly set up and ready to use.

## Instructions:

### Install Docker:
1. Visit the [Docker website](https://www.docker.com/get-started) and download Docker Desktop for your operating system (Windows, macOS, or Linux).
2. Follow the installation instructions provided on the website to install Docker Desktop on your machine.
3. Once the installation is complete, Docker Desktop should be running, and you should see the Docker icon in your system tray or menu bar.

### Verify Installation:
1. Open a terminal or command prompt on your machine.
2. Run the following command to verify that Docker is installed correctly:
    ```sh
    docker --version
    ```
3. You should see output similar to the following:
    ```
    Docker version xx.yy.z, build abcdefg
    ```

### Run a Container:
1. With Docker installed and verified, you're now ready to run your first Docker container.
2. Open your terminal or command prompt and execute the following command:
    ```sh
    docker run hello-world
    ```
3. Docker will download the "hello-world" image from the Docker Hub repository and run it within a container.
4. You should see a friendly message confirming that your Docker installation is working correctly.

## Conclusion:
Congratulations! You have successfully completed MiniProject 1 by installing Docker on your local machine and running your first Docker container. You are now ready to explore more advanced Docker concepts and embark on your journey to becoming a Docker master.

