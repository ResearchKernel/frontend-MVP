
# Research Kernel's Frontend

We at Research Kernel are working on **React.js** for developing UI for Frontend with **Ant Deisng** as a UI design language.  

##  What this Organisation do ?

If you are new to ResearchKernel, take a look [Introduction](https://github.com/ResearchKernel/Introduction) repository.

---

## Getting started?

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
```
.
├── App.js
├── _actions
│   └── auth.action.js
├── _assets
├── _reducers
│   ├── auth.reducer.js
│   └── index.js
├── components
│   ├── common
│   │   ├── input
│   │   │   ├── Input.component.js
│   │   │   └── input.style.js
│   │   ├── navbar
│   │   │   ├── navbar.component.js
│   │   │   └── navbar.style.js
│   │   ├── search_box
│   │   │   └── search_box.component.js
│   │   ├── sidebar
│   │   │   ├── sidebar.component.js
│   │   │   └── sidebar.style.js
│   │   └── sub_navbar
│   │       ├── sub_navbar.component.js
│   │       └── sub_navbar.style.js
│   └── hoc
│       └── RequireAuth.js
├── index.css
├── index.js
├── serviceWorker.js
├── store.js
└── views
    ├── home
    │   └── Home.js
    └── login
        └── Login.js
```

---

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

---


## Github Branch Structure  

We have three main branches, and temporary feature branches with short lifespan. 

Branch | Purpose
---------|----------
 Master | This is the branch we will use in production servers 
 Staging | This is a backup branch for Master and for testing production code.   
 Development | This is the branch where all the feature branches will merge.
 Features | These branches are for developing new feature that will be integrated to our product, and have a short life span.  


## Guidelines for Collaborators 

1. Select task on Trello 
2. Inform to your committer and they will assign you the task on Trello  
3. Create a feature branch from development branch.
4. Push a PR to development.

## Guidelines for Committers 

1. Avoid merge conflicts 
2. Create Pull Request on each branch rather than directly commiting to the repository, except master branch.






