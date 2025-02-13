# Use the official Node.js image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's code
COPY . .
# Add this line before running the app
COPY .env .env
# Expose the app's port
EXPOSE 5000

# Define the command to run the app
CMD ["npm", "start"]
