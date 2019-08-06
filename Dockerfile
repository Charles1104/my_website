FROM nginx
ADD cv /usr/share/nginx/html/cv
ADD images /usr/share/nginx/html/images
ADD php /usr/share/nginx/html/php
ADD js /usr/share/nginx/html/js
ADD scss /usr/share/nginx/html/scss
ADD css /usr/share/nginx/html/css
ADD documentation /usr/share/nginx/html/documentation
ADD fonts /usr/share/nginx/html/fonts
RUN apt-get update && apt-get install -y --no-install-recommends apt-utils
RUN apt-get update && apt-get install -y \
	nodejs \
	npm
COPY index.html /usr/share/nginx/html
COPY package.json /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
RUN npm install
COPY nginx/default.conf /etc/nginx/conf.d/default.conf