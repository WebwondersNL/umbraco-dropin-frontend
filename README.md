# umbraco-dropin-frontend
A front end dropin solution for getting started working with technologies such as Webpack, Tailwind and Typescript

# Purpose
This is effectively a webpack front-end setup that can be dropped right on top of a fresh umbraco installation and have it work, don't forget to link the included master to a template.
You can modify and transform this to your liking, i've left some of the components we use in the repo so you have some examples of how to make use of things.

You will need the tailwind extension in visual studio code to get IDE itellisense for it. Rider should work out of the box after running the install.


# Requirements
NodeJS LTS  
Yarn

# Instructions
NodeJS can be installed from the nodeJS website, yarn can then be enabled by opening your terminal/cmd and running "corepack enable"

After this it should be as simple as running "yarn install" from the terminal in the directory where you've extracted the files.

# Commands / buidling

To build the project simply run 

yarn webpack::build

to run the build in watch mode with verbose logging, hot reloading and browsersync run

yarn webpack::debugging

You will have to adjust the project URL in webpack.config.ts to your project it's served URL. After running the debugging build you can find the browsersync URL's in the terminal.
