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

Create a new folder **static** -> **images** and copy any image file (bubbles-callout.png) there

Now you can open this file in a browser:

http://localhost:8000/images/bubbles-callout.png

Add the image in the About page using an `<img>` tag

```jsx
<p>This is a static image from the static folder.</p>
<img
    src="/images/bubbles-callout.png"
    width={300}
    quality={95}
    formats={["auto", "webp", "avif"]}
    alt="Bubles the robot"
    style={{ marginBottom: `1.45rem` }}
/>
```

### The layout component

[Layout Components](https://www.gatsbyjs.com/docs/how-to/routing/layout-components/)

[How to prevent layout components from unmounting](https://www.gatsbyjs.com/docs/how-to/routing/layout-components/#how-to-prevent-layout-components-from-unmounting)

### CSS in Gatsby: Multiple approaches

#### Plain Old CSS

Add reset.css file into "./src/styles/reset.css" folder

1. Add the following code into gatsby-browser.js file
```jsx
import "./src/styles/reset.css" // Import regular stylesheet

```

2. Add the following code into Layout ("../components/layout.js") component file
```jsx
import "../styles/reset.css" // Import regular stylesheet

```

#### CSS Modules

[Adding a CSS Modules Stylesheet](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)

[Github css-modules](https://github.com/css-modules/css-modules)

A **CSS Module** is a CSS file in which all class names and animation names are scoped locally by default. All URLs (`url(...)`) and `@imports` are in module request format (`./xxx` and `../xxx` means relative, `xxx` and `xxx/yyy` means in modules folder, i. e. in `node_modules`).

CSS Modules compile to a low-level interchange format called ICSS or [Interoperable CSS](https://github.com/css-modules/icss), but are written like normal CSS files:

``` css
/* style.css */
.className {
  color: green;
}
```

When importing the **CSS Module** from a JS Module, it exports an object with all mappings from local names to global names.

``` js
import styles from "./style.css";
// import { className } from "./style.css";

element.innerHTML = '<div class="' + styles.className + '">';
```
```jsx
import * as styles from "./layout.module.css"; // Import css modules stylesheet as styles
import styles from "./layout.module.css"; // Import css modules stylesheet as styles

// Here is an example of using CSS Module style
      <main id="primary" className={styles.site_main}>
        {children}
      </main>

```

#### CSS-in-JS

[How to set up a site with the CSS-in-JS library Styled Components.](https://www.gatsbyjs.com/docs/how-to/styling/styled-components/)
- `npm install gatsby-plugin-styled-components styled-components babel-plugin-styled-components`

And then add it to your site’s gatsby-config.js

```js
module.exports = {
  plugins: [`gatsby-plugin-styled-components`],
}
```

Or You can install [styled-components](https://styled-components.com/docs/basics) with npm:
- `npm install --save styled-components`

Create and use a new Container component on a page:

```jsx
const Container = styled.section`
  margin: 2rem auto;
  max-width: 70ch;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`
// Using the Container component
    <Container>
      <h1>About this project</h1>
      <div>
        <RobotImage src="/images/bubbles-callout.png" alt="bubbles the robot" />
        <p>
          And finally, lykke til from me to you on your journey with Gatsby!
        </p>
      </div>
    </Container>
```
This component will be translated into a new section with new scc style generated:
```html
<style data-styled="active" data-styled-version="5.3.3">
.iHmCRp {
    margin: 2rem auto;
    max-width: 70ch;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
}
</style>

<section class="sc-bdvvtL iHmCRp">
...
</section>
```

### Example: CSS modules and modern CSS

[Component-Scoped Styles with CSS Modules](https://www.gatsbyjs.com/docs/how-to/styling/css-modules/)
 allows you to write traditional, portable CSS with minimal side effects: gone are the worries of selector name collisions or affecting other components’ styles.

Add [PostCSS Preset Env](https://www.npmjs.com/package/postcss-preset-env)  to your project:

- `npm install postcss-preset-env --save-dev`

the module will be added in package.json
```json
  "devDependencies": {
    "postcss-preset-env": "^7.2.3",
  },
```

 
add new `postcss.config.js` file to the root folder of your project

```js
const postcssPresetEnv = require(`postcss-preset-env`)

module.exports = () => ({
  plugins: [
    postcssPresetEnv({
      stage: 0,
      importFrom: "src/styles/global.module.css",
      features: {
        "custom-properties": true, // already enabled by default
        "custom-media-queries": true,
        "custom-selectors": true,
      },
    }),
  ],
})
```
Add now css module: src/styles/global.module.css
```css
:root {
  /* Fonts */
  --primary-font: "Amstelvar", serif;
  --highlight-font: "Recursive", sans-serif;
  --heading-size: 2.6rem;

  /* Colours */
  --rich-black: hsl(210, 50%, 1%);

  --mod-light: 90%;
  --mod-medium: 50%;
  --mod-dark: 20%;
  --main-bg-light: hsl(183, 42%, var(--mod-light));
  --main-bg-medium: hsl(183, 42%, var(--mod-medium));
  --main-bg-dark: hsl(183, 42%, var(--mod-dark));

  /* Sizes and widths */
  --content-w-wide: 80rem;
  --content-w-regular: 60rem;
  --content-w-narrow: 70ch;
}

@custom-media --viewport-narrow-max (max-width: 40rem);
@custom-media --viewport-narrow-min (min-width: 40rem);
@custom-media --viewport-wide (min-width: 60rem);
```
Added some **fonts** in src/fonts folder:
- Amstelvar-Italic-VF.ttf 
- Amstelvar-Roman-VF.ttf 
- fonts.css 
- recursive-MONO_CASL_wght_slnt_ital--full_gsub--2019_12_17-23_21--subset-GF_latin_basic.woff2 

Added folloing styles in Layout.js component 

```jsx
// Styles
import "../styles/reset.css"
import "../styles/accessibility.css"
import "../styles/global.module.css"
import "../fonts/fonts.css"
import * as styles from "./layout.module.css"
```

Add new module `index.module.css` file for the index.js page
```css
.wrapper {
  margin: 0 auto;
  max-width: var(--content-w-narrow);
}

.heading {
  margin: 2rem 0;
  font-size: 2.6rem;
}
```

Import index.module.css module file in index.js

```jsx
// Styles
import * as styles from "./index.module.css"

<section className={styles.wrapper}>
    <h1 className={styles.heading}>Welcome to your new Gatsby site.</h1>
</section>

```




# React in General

### React Application structure
There are three top level sub-folders:

- **/node_modules** : Where all of the external libraries used to piece together the React app are located. You shouldn’t modify any of the code inside this folder as that would be modifying a third party library, and your changes would be overwritten the next time you run the npm install command.
- **/public** : Assets that aren’t compiled or dynamically generated are stored here. These can be static assets like logos or the robots.txt file.
- **/src** : Where we’ll be spending most of our time. The src, or source folder contains all of our React components, external CSS files, and dynamic assets that we’ll bring into our component files.

- **public\index.html** file, which is html entry point for the app
- **public\manifest.json** file, which is used with mobile phones. 
- **src\App.js** component, which is the root component for our blog, as well as the css and tests that go with it. 


### Create new [SplitScreen] Component
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

### Minimal React components
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



