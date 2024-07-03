
# CLONE #
Clone the repository
```
git clone https://github.com/ChrisSmithArt/webd3012_coding_assignment12.git
```
# NAVIGATION #
Navigate to the cloned folder
```
cd webd3012_coding_assignment12
```

# DOCKERFILE #
FROM node:18-alpine
> grabbing node:18

WORKDIR /smith_chris_ui_garden
> creating the working directory of smith_chris_ui_garden

ENV PATH /smith_chris_ui_garden/node_modules/.bin:$PATH
> declaring the environment path

COPY package.json ./
> copying package.json

COPY package-lock.json ./
> copying the package-lock.json

RUN npm install --silent
> installing npm packages silently(so that it doesn't show up in the terminal)

RUN npm install react-scripts@3.4.1 -g --silent
> installing the react scripts silently (so that it doesn't show up in the terminal)

COPY . ./
> ???

CMD ["npm", "run", "storybook"]
> running Storybook


# BUILD #

```
docker build -t csmith11:1.0 .
```
# RUN #

launch the app with the following command
``` 
docker run -dp 8083:6006 --name smith_chris_coding_assignment12 csmith11:1.0
```

# ACCESS #
The application will be accessible at ```http://localhost:8083```


