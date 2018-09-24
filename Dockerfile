FROM juliusworks/node:8

WORKDIR /apps/statsd
COPY . .
RUN yarn install --production

CMD [ "node", "./run.js" ]
EXPOSE 8125
