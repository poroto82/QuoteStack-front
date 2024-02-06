# React Frontend for QuoteStack

This is the React front-end for QuoteStack, a project that fetches and displays inspiring quotes. It interacts with the [ZenQuotes](https://zenquotes.io/) API to retrieve quotes.

## Getting Started

### Prerequisites
- Node.js and npm installed (yarn recommended)
- QuoteStack backend up and running

### Installation
1. Clone this repository: `git clone https://github.com/poroto82/QuoteStack-front.git`
2. Navigate to the project directory: `cd QuoteStack-front`
3. Install dependencies: `yarn install`

### Configuration
Make sure to set the appropriate backend API endpoint in the configuration files.

### Run the Application
Start the development server: `yarn start`

## Features
- Web/API Authentication
- Web Registration for Users
- Quote of the Day
- Five Random Quotes
- Ten Secure Quotes
- Favorite Quotes
- Report of Favorite Quotes
- Online API Test (in progress)

## Contributing
...

## Acknowledgments

This project utilizes the ZenQuotes API to fetch inspiring quotes. We would like to express our gratitude to ZenQuotes for providing this service.

- [ZenQuotes](https://zenquotes.io/)

## Set up environment variables:

Create .env file in the root of the Laravel project based on .env.example.
Configure Laravel database settings.
Build and run the Docker containers:
```bash
docker-compose up --build
```
Install Laravel dependencies:
```bash
docker-compose exec quote-back composer install
```
Migrate and seed the database:
```bash
docker-compose exec quote-back php artisan migrate --seed
```
Install React dependencies:
```bash
docker-compose exec quote-front yarn install
```
Build the React app:
```bash
docker-compose exec quote-front yarn build
```
Visit http://localhost:8080 to access the application.


## Tech Stack
Laravel
React
Nginx
Docker


# License
This project is licensed under the [Your License] - see the LICENSE.md file for details.