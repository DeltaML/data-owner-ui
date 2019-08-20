FROM node:8.16.1 AS node_cache
MAINTAINER "DeltaML dev@deltaml.com"
WORKDIR /cache
COPY package.json .
RUN npm install

# Create app directoryappapp


FROM node:8.16.1-jessie-slim
WORKDIR /app
COPY --from=node_cache /cache/ /app/
ADD src/ /app/src
ADD public/ /app/public
CMD ["npm", "start"]