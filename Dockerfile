FROM node:10.15.3-alpine as build-stage

ARG ENV
ENV ENV $ENV
ENV SERVICE template1

WORKDIR /tmp
COPY . .

RUN npm install
RUN npm run import-env -- $SERVICE $ENV

ENV NODE_ENV=production

RUN npm run build && \
  npm prune --production

RUN mkdir /app && \
  mv /tmp/build /app/build && \
  mv /tmp/node_modules /app/node_modules && \
  mv /tmp/server.js /app/server.js && \
  mv /tmp/static /app/static && \
  mv /tmp/package.json /app/package.json

FROM node:10.15.3-alpine

WORKDIR /app
COPY --from=build-stage /app /app
EXPOSE 5000
CMD npm start
