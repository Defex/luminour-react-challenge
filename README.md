# Task

## REACT & REDUX WEB APPLICATION
- Create e-shop for books using **React** & **Redux**.
- Each book has `**id**`, `**title**`, `**author**`, `**published_date**`, `**book_cover**`(image), `**quantity**`. Available books are listed in ‘Homepage’.
- Web app has a users list with `**id**`, `**name**`, `**surname**`, `**username**`, `**password**`, `**role**`. There are 2 options for `role`:

>_‘admin’_ : has access to users list; can see order `**status**` of _‘new’_ or _‘paid’_; can change order `**status**` to _‘sent’ or ‘canceled’_ in orders list; can edit book data in books list, provide all CRUD options.

_‘client’_ : can read full info about each book and add it to order; has access to his order page where he can see books list, remove book, change books quantity, cancel or confirm (pay) order (paid orders can not be canceled/edited); can see his orders history.


- Use TypeScript to write your code.

- ESLint configuration with AirBnB’s linting rules must be used.

- Use Material-UI framework ([https://material-ui.com/](https://material-ui.com/)), avoid inline or custom styles.

- App data must be stored in local storage.

- Use ‘async’ and ‘await’ when data is saved to local storage, delay saving method to 1000ms to simulate loading.

- At least 5 books and 2 users (admin & client) must be created when the app is launched if local storage has not been seeded.

- App variables must be used and stored in .env file.

- Use Webpack and Babel to bundle and compile your app build, split the build output into chunks.

- Implement ‘npm run build’ command for production output generation.

- Implement ‘npm run dev’ command for development.

- The output of the ‘npm run build’ command must be hosted and accessible from the internet.

- Save project to GitHub with README file and instructions how to properly start the app.

- Use Git-flow for branches, create at least one tag for the main app release version, squash commits in pull request.


## Initial Users
```
const  initialUsers  = [{
  id:  '1',
  name:  'Yagami',
  surname:  'Light',
  username:  'Kira',
  password:  'DeathNode',
  role:  UserRoles.admin,
},
{
  id:  '2',
  name:  'User',
  surname:  'Some',
  username:  'simple',
  password:  '123',
  role:  UserRoles.client,
}];
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Log

- 2020-02-10 Deadline was 4 days including the weekend, roughly 2 days of work required finish initial commit

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
