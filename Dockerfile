FROM node:10.15.0-alpine as build-stage

WORKDIR /tmp
COPY . .
RUN npm install
ENV NODE_ENV=production

RUN npm run build && \
  npm prune --production

RUN mkdir /app && \
  mv /tmp/build /app/build && \
  mv /tmp/node_modules /app/node_modules && \
  mv /tmp/server.js /app/server.js && \
  mv /tmp/static /app/static && \
  mv /tmp/package.json /app/package.json

FROM node:10.15.0-alpine

WORKDIR /app
RUN apk add --update --no-cache tzdata && \
  cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
  echo "Asia/Tokyo" > /etc/timezone && \
  apk del tzdata
COPY --from=build-stage /app /app
EXPOSE 5000
CMD npm start
