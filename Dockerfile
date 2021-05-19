FROM node:14.1 as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:14.1-alpine
WORKDIR /app
COPY --from=build /app/dist/ ./dist/
COPY --from=build /app/package.json .
COPY --from=build /app/package-lock.json .
RUN npm install --production
EXPOSE  8000
CMD ["npm", "start"]
