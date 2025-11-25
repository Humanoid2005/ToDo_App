# Use a lightweight Node image
FROM node:20-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the default Vite port (5173)
EXPOSE 5173

# Start the dev server
# We add "-- --host" to ensure Vite listens on 0.0.0.0 (accessible outside container)
CMD ["npm", "run", "dev", "--", "--host"]