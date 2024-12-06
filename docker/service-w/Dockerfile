FROM nginx:latest
COPY ./html /usr/share/nginx/html
COPY ./nginx.template.conf /etc/nginx/templates/nginx.template.conf
EXPOSE 80
CMD ["sh", "-c", "envsubst '${BACKEND_URL}' < /etc/nginx/templates/nginx.template.conf > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
