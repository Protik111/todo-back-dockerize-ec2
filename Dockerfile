FROM node:16

#Sets the working directory inside the container where commands will be executed.
WORKDIR /usr/src/app

# Install postgresql client
RUN apt-get update && apt-get install -y postgresql-client

COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate

EXPOSE 5000

# Create a startup script
COPY startup.sh .
RUN chmod +x startup.sh
CMD ["./startup.sh"]