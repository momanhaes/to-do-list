FROM node:latest
WORKDIR /todo/
COPY . .
RUN npm install
RUN npm run build


FROM nginx:latest
COPY --from=0 /todo/dist/* /usr/share/nginx/html/
EXPOSE 80
