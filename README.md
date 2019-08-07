
# ClickMe

Test your memory with different cat breeds with the ClickMe game. ClickMe is a memory skill application built using React. The objective of the game is to be able to go through and click each cat image once. Each time you click a player's image, your score goes up by one. If you click a player's image twice, you lose and the game resets (score goes back to 0).

## About this project 
[How the App works]
[How the App is built]

How the app works
When you open the application, you will see images of 12 players. To start the game, click a player image. Each player in the players.json file has a property named "clicked." By default, each player starts out with a clicked value of false. When you click a player, the clicked value for that player is set to true. The object of the game is to click every player once and only once. When you click a player for the first time, your score goes up by one. But, if you click a player more than once (that is, click a player with a clicked value of true), the score will reset, and you have to start over. When the game is reset, each player's clicked value is set back to false. You win the game when you click each player on the screen once (that is, every player in players.json has a clicked value of true).

How the app is built
This project was built using React, which is an open-source Javascript library developed at Facebook specifically for the task of developing user interfaces. React relies on a component-based architecture where elements of the user interface are broken into self-contained components.

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
