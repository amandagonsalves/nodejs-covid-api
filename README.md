# challenge-api-covid

In this repository, the backend was built using Node.js and mongodb and the frontend using React.js. The challenge was to create two or more routes to show API data on the front end, while the second route should show data from the last 15 days in Brazil. These data were collected through this [website](https://rapidapi.com/pillious/api/who-covid-19-data).

## Installation

1 - Clone the project:

```bash
$ git clone https://github.com/amandagonsalves/challenge-api-covid.git challenge-api-covid
$ cd challenge-api-covid
```

2 - Install all dependencies and run MongoDB on a terminal:

```bash
$ npm i
$ sudo systemctl start mongod
```

3 - Open another terminal and run the backend:

```bash
$ cd challenge-api-covid/backend
$ npm run start
```

3 - Open another terminal and run the frontend:

```bash
$ cd challenge-api-covid/frontend
$ npm run start
```