# Video Game (Super Metroid) Enemy Data Query

## About
I started this project to explore and learn about different aspects of full stack development.  

The topics that I explored include React and the Material-UI library on the frontend, as well as web scraping and serving a REST API on the backend.  

Basic overview of the features available in this application:  
* An image of every enemy in the game Super Metroid is displayed using React
* Users can filter which enemies are shown by using drop down menus
* Enemy data was scraped from a wiki site using Python and then inserted into a PostgreSQL
database
* HTTP requests can be sent to the Node.js backend to retrieve enemies from the database

## Tech Stack
### Frontend
  * React  
  * [Material-UI](https://material-ui.com/)  

### Backend
  * Node.js  (with [pg](https://node-postgres.com/) library to connect to a PostgreSQL database)
  * Express (for HTTP requests/responses)
  * [BeautifulSoup](https://pypi.org/project/beautifulsoup4/) (Web scraping library for Python)  

## Roadmap
This project is a work in progress. Functionality to be implemented is as follows:
- [ ] Add unit tests
- [ ] Dynamically resize the enemy images so that they fit appropriately inside each card
- [ ] Continue implementing the filtering functionality so that users can filter enemies based on many fields
- [ ] Migrate project to use the [Next.js](https://nextjs.org/) framework for React to make use of the Static-Site Generation (SSG) feature
- [ ] Host project on [Vercel](https://vercel.com/)

<!--
## Getting Started

### Inside the `server` directory
Install dependencies.
```sh
npm install
```

Create a `.env` file with values for `DB_USER`, `DB_PASSWORD`, `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DATABASE_URL`.

Start the server.
```sh
npm start
```

### Inside the `client` directory
Start the client.
```sh
npm start
``` 
-->
