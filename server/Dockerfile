FROM node:14
WORKDIR /server
COPY . .
RUN npm install
ENV PORT 5000
#- передает env переменные
EXPOSE $PORT
#- берет переменную PORT
#EXPOSE 5000
CMD ["npm", "run", "start"]

