This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Coding challenge

This challenge is about creating several ui core components from the given design.
We are looking for code quality, please follow best practices.
As this components are part of a ui kit which is the foundation for any project, these core components need to be minimalistic, reusable and composable and have good documentation.

[Design file for Figma](docs/BlueReceipt%20Coding%20Challenge.fig)

### - Implement a Checkbox

Should work and act like the native html <input type="checkbox" />

Requirements:
- allows tabbing
- can be checked/unchecked by clicking on label or pressing space when focused
- must be useable in a form (see /CoreUI/Form/Form.stories.tsx)


### - Implement a DropDownMenu that is basically a popup which can be opened and closed

Requirements:
- Should not define the way its opened, but just accept a isOpen flag
- no state handling

### - Implement a Select Box

Should work and act like the native html <select />

Requirements:
- optional placeholder
- displays selected item instead of placeholder
- tabbing & keyboard bavior same as native select
- must be useable in a form (see /CoreUI/Form/Form.stories.tsx)
- can be disabled


### - Implement a Multi Select (with checkboxes)

Should work and act like the native html <select multi=true />

Requirements:
- optional placeholder
- displays selected items instead of placeholder as string seperate by commas (value1, value2, value3)
- tabbing & keyboard bavior same as native select
- must be useable in a form (see /CoreUI/Form/Form.stories.tsx)
- can be disabled

### - Add checkbox, select box and multi select to the form example (/CoreUI/Form/Form.stories.tsx)

Requirements:
- submitting the form should return a dictionary of all form elements with values (in case of multi select the value should be a array of sub values)


## Coding Guidelines

- Airbnb Code Style: https://github.com/airbnb/javascript
- Shopify Testing Guidelines: https://github.com/Shopify/web-foundation/blob/master/Best%20practices/Jest.md#best-practices

## Used libraries & Tools

### Styling 

- CSS Modules
- SASS


### Router

https://reacttraining.com/react-router/web/

### Testing

#### jest & react-testing-library

https://jestjs.io
https://testing-library.com/react
https://codesandbox.io/s/github/kentcdodds/react-testing-library-examples

### VSC Extensions

- Jest
- ESLint
- stylelint
- Sass
- Debugger for Chrome

### Code Splitting

https://reactjs.org/docs/code-splitting.html#route-based-code-splitting



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

### `yarn storybook`

Launches Storybook application.

### `yarn lint`

Runs ESLint, tsc type-checking and StyleLint. If any lint errors found, then it exits with code 1.

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

### `yarn storybook`

Run Storybook and open it in the default browser

### `yarn build-storybook`

Builds storybook to /public

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
