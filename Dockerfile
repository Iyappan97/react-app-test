# Use an official Node.js image to build the application
FROM node:16 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the source code
COPY . .

# Build the application
RUN npm run build

# Use an official Node.js image to run the application
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy the build output to the working directory
COPY --from=build /app/build ./build

# Install a simple HTTP server to serve the static files
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["serve", "-s", "build", "-l", "3000"]
