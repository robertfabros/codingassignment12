# Use the official Node.js image as the base image
FROM node:lts-iron

# Set the working directory inside the container
WORKDIR /Fabros_Robert_ui_garden

# Copy the package.json and package-lock.json files to the working directory
COPY package.json /Fabros_Robert_ui_garden/
COPY package-lock.json /Fabros_Robert_ui_garden/

# Copy the .storybook configuration
COPY .storybook/ /Fabros_Robert_ui_garden/.storybook

# Copy the application source code and public assets to the working directory
COPY public/ /Fabros_Robert_ui_garden/public
COPY src/ /Fabros_Robert_ui_garden/src

# Install the application dependencies
RUN npm install

# Set the environment variable to serve Storybook on port 8083
ENV PORT=8083

# Expose port 8083 for Storybook
EXPOSE 8083

# Define the command to run the Storybook server
CMD ["npm", "run", "storybook"]
