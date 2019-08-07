
# ClickMe

Test your memory with different cat breeds with the ClickMe game. ClickMe is a memory skill application built using React. The objective of the game is to be able to go through and click each cat image once. Each time you click a player's image, your score goes up by one. If you click a player's image twice, you lose and the game resets (score goes back to 0).

* [How the app works](#how-app-works)
* [How the app is built](#how-the-app-is-built)
* [What is web scraping?](#about-web-scraping)

### <a name="how-app-works"></a> How the app works
When you open the application, you will see images of 12 players. To start the game, click a player image. Each player in the players.json file has a property named "clicked." By default, each player starts out with a clicked value of false. When you click a player, the clicked value for that player is set to true. The object of the game is to click every player once and only once. When you click a player for the first time, your score goes up by one. But, if you click a player more than once (that is, click a player with a clicked value of true), the score will reset, and you have to start over. When the game is reset, each player's clicked value is set back to false. You win the game when you click each player on the screen once (that is, every player in players.json has a clicked value of true).

### <a name="how-the-app-is-built"></a> How the app is built

This project was built using React, which is an open-source Javascript library developed at Facebook specifically for the task of developing user interfaces. React relies on a component-based architecture where elements of the user interface are broken into self-contained components.

For a high level overview of React, check out this video: <https://www.youtube.com/watch?v=x7cQ3mrcKaY>.

The React documentation is available at <https://reactjs.org/>.

For more information on how this project is structured and broken into various components, see [Structure of the project](#structure-of-project).

## <a name="getting-started"></a> Getting started

The following section will take you through the steps of setting up this application and getting it running locally on your computer.

If you don't want to set up this project locally and just want to see the deployed application, go to <https://clickme-d27eb.firebaseapp.com/>.

To set up this application locally on your computer, perform the following steps:

1. [Clone the repository](#clone-repository)

2. [Install Node.js](#install-node)

3. [Install yarn](#install-yarn)

3. [Install the dependencies](#dependencies)

4. [Start the server](#start-server)

### <a name="clone-repository"></a> 1. Clone the repository

The first step is to clone the project repository to a local directory on your computer. To clone the repository, run the following commands:
<pre>
  git clone https://github.com/estomm01/Clicky-Game-
  cd ClickMe
</pre>

#### <a name="structure-of-project"></a> Structure of the project

<p>After you clone the repository, navigate to the project root directory (ClickMe). The project directory structure is set up as follows:</p>
<ul>
  </li>
    <p><b>public</b>: The public folder contains the index.html file. This HTML file is a template. The file is empty. So, if you open it directly in a browser, you will get an empty page. Rather than placing the HTML code directly in index.html, this application uses a React component-based architecture to create, build, and render UI components to the page.</p>
  </li>
  <li>
    <p><b>src</b>: In the src folder, there are 4 main parts of the application to pay attention to.</p>
    <ul>
      <li><b>index.js:</b> The index.js file is the top level file of the React application. In index.js, the App.js file is imported, and the ReactDOM.render method is used to render App.js to the page.</li>
      <li><b>App.js:</b> The App.js file is where the application components are imported and rendered, such as the navigation bar, footer, and player images. This file also defines a class that allows various states of the application to be updated throughout the game, including the score, top score, a player's clicked value, and the game message displayed in the top navigation bar.</li>
      <li><b>Components:</b> The Components folder is where the app components are located. Each file represents a separate component. For example, Navbar.js is the top navigation bar component.</li>
      <li><b>players.json:</b> The players.json file contains an array of objects. Each object is a player that gets rendered to the page. Each object contains four properties, id, name, image, and clicked. By default, clicked is set to false. When the user clicks a player, that player's clicked value gets set to true so that the application can keep track of which players have already been clicked (clicked is true) and which players have not been clicked (clicked is false).</li>
  </li>
  <li><b>package.json</b>: Lists the project dependencies and their version numbers.</li>
  <li><b>.gitignore</b>: Anything listed inside this file (for example, node_modules) will not be tracked by GitHub when code is committed.</li>
  <li><b>yarn.lock</b>: Dependency tree for the project. Lists all the dependencies and their versions.</li>
</ul>

For a high level overview of React, check out this video: https://www.youtube.com/watch?v=x7cQ3mrcKaY.

The React documentation is available at https://reactjs.org/.

For more information on how this project is structured and broken into various components, see Structure of the project.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
