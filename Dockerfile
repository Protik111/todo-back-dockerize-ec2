FROM node:20

WORKDIR /usr/src/app

# Install PostgreSQL client
RUN apt-get update && \
    apt-get install -y gnupg2 software-properties-common postgresql-client && \
    rm -rf /var/lib/apt/lists/*

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the app code
COPY . .

# Set port and startup script
EXPOSE 5000
COPY startup.sh .
RUN chmod +x startup.sh
CMD ["./startup.sh"]
