# Build the app
FROM juliusworks/node:8 as build
WORKDIR /app

COPY . .
RUN yarn install --production

# Build final docker image
FROM alpine:3.6
WORKDIR /app
RUN apk add --no-cache libstdc++
COPY --from=build /usr/bin/node /usr/bin/
COPY --from=build /app /app

EXPOSE 8125
ENTRYPOINT [ "/app/run.js" ]
