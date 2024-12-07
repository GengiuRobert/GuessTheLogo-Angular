# Guessthelogo

This project was created as a learning exercise to get familiar with Angular (version 19.0.2). The primary goal was to explore and practice various Angular concepts, including:

* Working with signals for input and output communication.
* Managing component-based architecture effectively.
* Building a seamless flow between components using services and dependency injection.
* Understanding and implementing Angular forms for user interaction.

The application is a fun, interactive game where users guess the names of logos, with dynamic settings for categories and difficulty levels.

# Project structure

The structure of this project is organized as follows:

* Each component has its own dedicated folder.
* Services are stored in the `services` folder.
* Images are placed in the `public` folder.
* Models are located in their `models` folder.
* The array for logos is stored in the `assets` folder.

I aimed to maintain a clean and modular codebase throughout the project. The majority of the logic is encapsulated within the services, allowing the components to focus primarily on their core responsibilities. This approach ensures better separation of concerns and makes the code easier to maintain and extend.

# Project Setup

To clone this project, run the following command in your terminal:

```bash
git clone https://github.com/GengiuRobert/GuessTheLogo-Angular
```

This will create a local copy of the project on your machine. After cloning, navigate to the project directory and install the required dependencies with:

```bash
npm install
```

Then, you can run the project with:

```bash
ng serve
```

The application will be available at `http://localhost:4200` in your browser.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
