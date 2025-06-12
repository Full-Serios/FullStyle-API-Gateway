# Etapa 1: Build de TypeScript
FROM node:20 AS builder

# Establece el directorio de trabajo
WORKDIR /app

# Copia archivos necesarios
COPY package.json pnpm-lock.yaml ./
COPY tsconfig.json ./
COPY .meshrc.yml ./
COPY .env ./

# Copia el resto del código
COPY ./src ./src
COPY ./openapi-schemas ./openapi-schemas
COPY ./.mesh ./.mesh

# Instala pnpm y dependencias
RUN npm install -g pnpm && pnpm install

# Genera el código de Mesh (opcional si lo usas en producción)
RUN pnpm mesh:generate

# Compila el proyecto
RUN pnpm build

# Etapa 2: Imagen final para producción
FROM node:20-slim

WORKDIR /app

# Copia solo lo necesario desde el builder
COPY --from=builder /app/package.json /app/pnpm-lock.yaml ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/.env ./

# Instala sólo las dependencias de producción
RUN npm install -g pnpm && pnpm install --prod

# Expone el puerto (ajústalo si usas otro)
EXPOSE 4000

# Comando para iniciar el servidor
CMD ["node", "dist/src/index.js"]
