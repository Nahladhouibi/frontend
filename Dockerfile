# Etape 1 : Build de l'application Angular
FROM node:14 as builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --prod

# Etape 2 : Serveur Web
FROM nginx:alpine

# Copier les fichiers de build de l'étape précédente vers le dossier de serveur nginx
COPY --from=builder /app/dist/enlink /usr/share/nginx/html

# Configuration du port exposé
EXPOSE 80

# Commande pour démarrer le serveur
CMD ["nginx", "-g", "daemon off;"]
