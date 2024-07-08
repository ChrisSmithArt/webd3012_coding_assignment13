
# PROJECT DEVELOPMENT #
Starting the project using Vite
```
npm create vite@latest
```
Follow the steps to create a new react app with TypeScript in Vite.
This will create a new React App.

Adding Storybook
```
npx storybook@latest init
```
This add all the files for storybook, which allows us to see all of our components in an encapsulated environment.

Afterwhich I manually made the different files within the component library the directories are ```/src/components/.../```

# COMPONENT LIBRARY #
This project is a component library that has tests and can be viewed within Storybook.
The components added were the following
1. Button
    - Button.tsx
    > This is the button component for React
    - Button.test.tsx
    > This is the test file for the button component, it tests visibility and colour changing when the button is disabled
    - Button.stories.tsx
    > This is the file for storybook to reference, it contains an enabled and disabled states.
    - Button.types.ts
    > This file contains all the information regarding the variable for our button components.
2. Card
    - Card.tsx
    > This is the card component for React
    - Card.test.tsx
    > This is the test file for the card component, it tests visibility and colour changing when the card is disabled
    - Card.stories.tsx
    > This is the file for storybook to reference, it contains an enabled and disabled states.
    - Card.types.ts
    > This file contains all the information regarding the variable for our card components.
3. Dropdown
    - Dropdown.tsx
    > This is the dropdown component for React
    - Dropdown.test.tsx
    > This is the test file for the dropdown component, it tests visibility and colour changing when the dropdown is disabled
    - Dropdown.stories.tsx
    > This is the file for storybook to reference, it contains an enabled and disabled states.
    - Dropdown.types.ts
    > This file contains all the information regarding the variable for our dropdown components.
4. Label
    - Label.tsx
    > This is the label component for React
    - Label.test.tsx
    > This is the test file for the label component, it tests visibility and colour changing when the label is disabled
    - Label.stories.tsx
    > This is the file for storybook to reference, it contains an enabled and disabled states.
    - Label.types.ts
    > This file contains all the information regarding the variable for our label components.
5. Radio
    - Radio.tsx
    > This is the radio component for React
    - Radio.test.tsx
    > This is the test file for the radio component, it tests visibility and colour changing when the radio is disabled
    - Radio.stories.tsx
    > This is the file for storybook to reference, it contains an enabled and disabled states.
    - Radio.types.ts
    > This file contains all the information regarding the variable for our radio components.
6. Text
    - Text.tsx
    > This is the text component for React
    - Text.test.tsx
    > This is the test file for the text component, it tests visibility and colour changing when the text is disabled
    - Text.stories.tsx
    > This is the file for storybook to reference, it contains an enabled and disabled states.
    - Text.types.ts
    > This file contains all the information regarding the variable for our text components.


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

# TESTING #
Adding testing with ```jest```

```
npm init jest@latest
```
```
npm install --save-dev jest
```
Add babel for jest
```
npm install --save-dev @babel/preset-typescript
```
Run the testing command
```
npm run test
```
Testing is down with ```jest```.
This will run the tests for each component running ```'component_name'.test.tsx``` where the component name is an associated button.



# STORYBOOK #
Run storybook to see the UI Component Library
```
npm run storybook
```

# DOCKERFILE #
FROM node:18-alpine
> grabbing node:18

WORKDIR /smith_chris_ui_garden
> setting the work directory: smith_chris_ui_garden

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
> Copying everything in the current directory of 'smith_chris_ui_garden'

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


