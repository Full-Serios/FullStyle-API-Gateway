# API Gateway con NGINX y Microservicios

Este repositorio contiene la configuración de un API Gateway basado en NGINX que orquesta el acceso a varios microservicios desarrollados en diferentes tecnologías (Flask, Go, Chatbot en Python) y un frontend en Next.js. El entorno está preparado para ejecutarse fácilmente usando Docker y Docker Compose.

## Tabla de Contenidos
- [Requisitos Previos](#requisitos-previos)
- [Instalación de la Base de Datos (Postgres)](#instalación-de-la-base-de-datos-postgres)
- [Ejecución de los Servicios](#ejecución-de-los-servicios)
- [Rutas de Acceso](#rutas-de-acceso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Notas y Consejos](#notas-y-consejos)

---

## Requisitos Previos

- Tener instalado [Docker](https://docs.docker.com/get-docker/) y [Docker Compose](https://docs.docker.com/compose/install/).
- Tener instalado [Git](https://git-scm.com/).
- (Opcional) Tener instalado [PostgreSQL](https://www.postgresql.org/download/) si deseas gestionar la base de datos manualmente.

## Instalación de la Base de Datos (Postgres)

1. **Crear un contenedor de Postgres (recomendado):**

   Puedes agregar el siguiente servicio a tu `docker-compose.yaml` o ejecutarlo aparte:

   ```yaml
   postgres:
     image: postgres:15
     restart: always
     environment:
       POSTGRES_USER: tu_usuario
       POSTGRES_PASSWORD: tu_password
       POSTGRES_DB: tu_basededatos
     ports:
       - "5432:5432"
     volumes:
       - ./backup.dump:/docker-entrypoint-initdb.d/backup.dump
   ```

   Esto levantará una base de datos y restaurará el backup si existe el archivo `backup.dump` en la raíz del proyecto.

2. **Restaurar backup manualmente (si es necesario):**

   Si tienes un backup y quieres restaurarlo manualmente:

   ```bash
   psql -U tu_usuario -d tu_basededatos -f backup.dump
   ```

   Asegúrate de que las variables de entorno de cada microservicio apunten a la base de datos correcta.

## Ejecución de los Servicios

1. Clona todos los repositorios de los microservicios en la misma carpeta (como subcarpetas de este proyecto).
2. Asegúrate de estar en la rama `develop` de cada repositorio.
3. Coloca los archivos `.env` en la raíz de cada microservicio.
4. Levanta todos los servicios con:

   ```bash
   docker-compose up --build
   ```

   Esto construirá y levantará:
   - Backend Flask (Python)
   - Backend Go
   - Chatbot (Python)
   - Frontend (Next.js)
   - NGINX (API Gateway)

## Rutas de Acceso

- **Backend Flask:**
  - http://localhost/flask/api/
- **Backend Go:**
  - http://localhost/go/api/
- **Chatbot:**
  - http://localhost/chatbot/api/v1/
- **Frontend:**
  - http://localhost/

## Estructura del Proyecto

```
fullstyle2/
├── FullStyle-Backend/        # Backend en Flask
├── FullStyle-Backend-Go/     # Backend en Go
├── FullStyle-Chatbot/        # Chatbot en Python
├── FullStyle-Frontend/       # Frontend en Next.js
├── nginx.conf                # Configuración de NGINX
├── docker-compose.yaml       # Orquestación de servicios
├── backup.dump               # Backup de la base de datos (opcional)
└── README.md                 # Este instructivo
```

## Notas y Consejos

- Si modificas la configuración de NGINX, reinicia el servicio para aplicar los cambios.
- Puedes monitorear los logs de cada servicio usando Docker Compose:
  ```bash
  docker-compose logs -f nombre_servicio
  ```
- Si tienes problemas de conexión a la base de datos, revisa las variables de entorno y la red de Docker.
- Para desarrollo, puedes exponer otros puertos según lo requieras.

## Ejecutar o Detener un Solo Servicio

Si necesitas ejecutar o detener únicamente uno de los servicios definidos en el `docker-compose.yaml`, puedes hacerlo fácilmente usando los siguientes comandos desde la raíz del proyecto:

### Ejecutar un solo servicio

```powershell
docker-compose up nombre_servicio
```
Por ejemplo, para levantar solo el backend en Flask:
```powershell
docker-compose up flask
```

### Detener un solo servicio

```powershell
docker-compose stop nombre_servicio
```
Por ejemplo, para detener solo el frontend:
```powershell
docker-compose stop frontend
```

### Reiniciar un servicio

```powershell
docker-compose restart nombre_servicio
```

Puedes consultar los nombres exactos de los servicios en el archivo `docker-compose.yaml`.

---

¿Dudas o problemas? Revisa los README.md de cada microservicio o contacta al equipo de desarrollo.


