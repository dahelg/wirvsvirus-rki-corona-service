# wirvsvirus-rki-corona-service

This project was a simple proof of concept that I've built during the covid-19 Hackathon "Wir vs Virus" in March, 2020. Go to https://wirvsvirus.org/ for more information about this great event! 😄

The **goal** was to build a simple backend for RKI statistics visualization.

The url of the RKI to get data for Germany's statistics on COVID-19 is this one:

https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_COVID19/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=&f=json

---

## Disclaimer

I switched teams after a few hours, so this remains unfinished. But data fetching (without any filtering) works.


## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command and see the version number.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g


### Yarn installation

  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/dahelg/wirvsvirus-rki-corona-service.git
    $ cd wirvsvirus-rki-corona-service
    $ yarn install

## Running the project

    $ yarn start

## Simple build for production

    $ yarn build


