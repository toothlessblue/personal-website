FROM nginx:alpine

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

COPY nginx.conf /etc/nginx/nginx.conf
COPY ./dist/ /usr/share/nginx/html/
