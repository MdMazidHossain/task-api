FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

# 🔌 Port
EXPOSE 3000

# 🚀 Start Command
CMD ["node", "server.js"]
