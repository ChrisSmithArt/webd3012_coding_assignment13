FROM node:18-alpine

WORKDIR /smith_chris_ui_garden_build_checks

ENV PATH /smith_chris_ui_garden_build_checks/node_modules/.bin:$PATH

ENV HOST=0.0.0.0
ENV PORT=8018

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./

EXPOSE 8018

CMD ["npm", "run", "storybook"]