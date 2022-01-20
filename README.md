# Gatsby: A static site generator

## 1. Setting Up Gatsby for the First Time
### Initial setup

- Node.js (v14.15 or newer) `node --version` (current v16.13.0) & `npm -v` (current 8.1.4)

- Git
- Visual Studio Code

    for the VS Code you need install following plugins:
    - `pretier code formatter`
    - `ESLint`

Gatsby command line interface (CLI) (v3 or newer)

**Intall [Gatsby CLI (Commands)](https://www.gatsbyjs.com/docs/reference/gatsby-cli/)**

The Gatsby CLI is available via npm and is installed **globally** by running `npm install -g gatsby-cli`

Check that you have the correct version installed by running the command below. You should be on v3 or newer.
- `gatsby --version`

**If you get an Error**:  The file ...\AppData\Roaming\npm\gatsby.ps1 is not digitally signed. You cannot run this script on the current system. 

You can fix for PowerShell Script Not Digitally Signed for current session:
- `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`


 Gatsby collects anonymous usage analytics                            
                                                                      
   If you'd like to opt-out, you can use `gatsby telemetry --disable`.To learn more, checkout https://gatsby.dev/telemetry


[Tutorial: Learn how Gatsby works](https://www.gatsbyjs.com/docs/tutorial/)
  - [Part 0: Set Up Your Development Environment](https://www.gatsbyjs.com/docs/tutorial/part-0/)

    **React**: A code library (built with JavaScript) for building user interfaces. It’s the framework that Gatsby uses to build pages and structure content.
Learn more about React with the [React course on freeCodeCamp](https://www.freecodecamp.org/learn/front-end-libraries/#react).

    **GraphQL**: A query language that allows you to pull data into your website. It’s the interface that Gatsby uses for managing site data.
Learn more about GraphQL with the [How to GraphQL tutorial](https://www.howtographql.com/).

### Install a Gatsby starter

[Create project from starter](https://www.gatsbyjs.com/docs/how-to/local-development/starters/)

Find the starter you’d like to use on the [Starter Library](https://www.gatsbyjs.com/starters/?v=2) 

We will start with [gatsby-starter-default](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-default)

- `npx gatsby new gatsby-starter-default https://github.com/gatsbyjs/gatsby-starter-default`
or
- gasby new project

new folder name: gatsby-starter-default              

source code from:  https://github.com/gatsbyjs/gatsby-starter-default

 
Your new Gatsby site has been successfully bootstrapped. Start developing it by running:

- `cd gatsby-starter-default`

**The better way of using new Gatsby: open new gatsby-starter-default project as a folder**

### Start your local Gatsby site
We need to run the build process and then also spin up a development server and connect the two so that it becomes available to us. 
All of this is done using a command:

- `gatsby develop`

**gatsby develop** is one of several scripts available inside the **Gatsby CLI**:
- It runs the build process to generate the static site and then puts that static site a **public** folder. 
- It also creates a **cache** folder for additional development information. 
- It spins up a local development server and connects it to that **public** folder. 

Now you can now view gatsby-starter-default in the browser.

    Local:  http://localhost:8000/

View GraphiQL, an in-browser IDE, to explore your site's data and schema

    Local:  http://localhost:8000/___graphql

***Note*** that the development build is not optimized. To create a production build, use **gatsby build**

Error loading a result for the page query in "using-ssr" / "using-ssr". Query was not run and no cached result was found. Couldn't get query results for
"/using-ssr/" in 15.000s.

#### Preview changes on other devices
https://www.gatsbyjs.com/docs/reference/gatsby-cli/#preview-changes-on-other-devices

You can use the Gatsby develop command with the host option to access your dev environment on other devices on the same network, run:
- `gatsby develop -H 0.0.0.0`

Now you can now view gatsby-starter-default in the browser.

    Local:            http://localhost:8000/

    On Your Network:  http://192.168.0.186:8000/

View GraphiQL, an in-browser IDE, to explore your site's data and schema

    Local:            http://localhost:8000/___graphql

    On Your Network:  http://192.168.0.186:8000/___graphql

#### Gatsby clean
https://www.gatsbyjs.com/docs/reference/gatsby-cli/#clean
At the root of a Gatsby site, wipe out the cache (.cache folder) and public directories:

- `gatsby clean`

This is useful as a last resort when your local project seems to have issues or content does not seem to be refreshing. Issues this may fix commonly include:

- Stale data, e.g. this **file/resource/etc**. isn’t appearing
- GraphQL error, e.g. this GraphQL resource should be present but is not
- Dependency issues, e.g. invalid version, cryptic errors in console, etc.
- Plugin issues, e.g. developing a local plugin and changes don’t seem to be taking effect

## 2. Breaking Down a Gatsby Site

### Starting from scratch with exercise files

#### Gatsby new
https://www.gatsbyjs.com/docs/reference/gatsby-cli/#new

The CLI will run an interactive shell asking for these options before creating a Gatsby site for you:
- `gatsby new`

        - Create a new Gatsby site (Name: The project) in the folder [project]
        - Get you set up to use PostCSS for styling your site
        - Install gatsby-plugin-image, gatsby-plugin-react-helmet, gatsby-plugin-sitemap, gatsby-plugin-manifest, gatsby-plugin-mdx, gatsby-transformer-remark

Open folder **project** in VS Code 

Start the local development server with

- `npm run develop`

See all **gatsby-cli** commands at https://www.gatsbyjs.com/docs/gatsby-cli/

## 3. Pages, Components, and Styles

### Static pages

## Create new [split-screen] ReqactJs app

`npx create-react-app@latest split-screen --use-npm`

We suggest that you begin by typing:

- `cd split-screen`
-  `npm start`

You can now view split-screen in the browser. Local: http://localhost:3000

Note that the development build is not optimized. To create a production build, use `npm run build`.
#### Without @leatest you will get the Error
Error While Creating new React app(You are running `create-react-app` 4.0.3, which is behind the latest release (5.0.0))(https://stackoverflow.com/questions/70358474/error-while-creating-new-react-appyou-are-running-create-react-app-4-0-3-whi#answer-70358556)
- `npx clear-npx-cache` to clear your npx cache

or use `create-react-app@latest`

- `npx create-react-app@latest split-screen --use-npm`

#### Application structure
There are three top level sub-folders:

- **/node_modules** : Where all of the external libraries used to piece together the React app are located. You shouldn’t modify any of the code inside this folder as that would be modifying a third party library, and your changes would be overwritten the next time you run the npm install command.
- **/public** : Assets that aren’t compiled or dynamically generated are stored here. These can be static assets like logos or the robots.txt file.
- **/src** : Where we’ll be spending most of our time. The src, or source folder contains all of our React components, external CSS files, and dynamic assets that we’ll bring into our component files.

- **public\index.html** file, which is html entry point for the app
- **public\manifest.json** file, which is used with mobile phones. 
- **src\App.js** component, which is the root component for our blog, as well as the css and tests that go with it. 


#### Create new [SplitScreen] Component
- **src\components\SplitScreen.js**


Use [<React.Fragment> tag](https://reactjs.org/docs/fragments.html)

A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

```jsx
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
```
Use [<></> tag for short syntax ](https://reactjs.org/docs/fragments.html#short-syntax)
There is a new, shorter syntax you can use for declaring fragments. It looks like empty tags:


```jsx
class Columns extends React.Component {
  render() {
    return (
      <>
        <td>Hello</td>
        <td>World</td>
      </>
    );
  }
}
```

#### Minimal React components
```js
import React from 'react';

const SplitScreen = () => { return <></> };

export default SplitScreen;
```


```js
import React from 'react';

const SplitScreen = () => { return <></> };

export default SplitScreen;
```

### Install [styled-components] package
[npm-install documentation](https://docs.npmjs.com/cli/v8/commands/npm-install)

`npm install` alias: `npm i`

`npm i styled-components`

This package contains type definitions for [styled-components](https://github.com/styled-components/styled-components).

`npm install --save @types/styled-components`



