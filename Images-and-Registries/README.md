# Pushing Docker Image to Docker Hub

This guide will walk you through pushing a Docker image to Docker Hub.

## Prerequisites

Before you begin, make sure you have the following:

- Docker installed on your local machine
- A Docker Hub account (sign up at https://hub.docker.com/)

## Steps

1. **Log in to Docker Hub:**

   Open your terminal or command prompt and run the following command:

   ```bash
   docker login
   ```
   Enter your Docker Hub username and password when prompted.

2. **Tag your local image:**

   - We have already created an express-js app image in the last module, let's use the same image.
   - Use this command to find the express-js image, then use that image name for the next command.
   
   
   ```bash
   docker images
   ```
   
   Tag your local Docker image with the **desired** repository name and version tag.

   ```bash
   docker tag <local_image_name>:<tag> <username>/<repository_name>:<tag>
   ```

   
   Replace `<local_image_name>`, `<tag>`, `<username>`, and `<repository_name>` with your actual values.

     
   For example:
   
   ```bash
   docker tag my-express-app:latest upasna20/my-repo:latest
   ```
  
   
   
4. **Push the tagged image to Docker Hub:**

   Use the following command to push the tagged image to Docker Hub:
   ```bash
   docker push <username>/<repository_name>:<tag>
   ```
   For example:
   ```bash

    docker push upasna020/my-repo:latest
   ```
   This command uploads your Docker image to Docker Hub. 
