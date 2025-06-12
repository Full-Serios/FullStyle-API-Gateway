# Etapa 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copiamos solo lo necesario para instalar deps y compilar
COPY package.json tsconfig.json ./
COPY src ./src

RUN corepack enable && pnpm install
RUN pnpm run build

# Etapa 2: Runtime
FROM node:20-alpine

WORKDIR /app

# Copiamos solo lo necesario para producción
COPY --from=builder /app/dist ./dist
COPY package.json ./

RUN pnpm install --prod

CMD ["node", "dist/index.js"]
