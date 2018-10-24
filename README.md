# phone-numbers-generator

### Features!

- Can generate random phone numbers
- Numbers generated can be downloaded

### Setting up the application
phone-numbers-generator requires you have [Node.js](https://nodejs.org/) v7+. Check your node version by typing `node -v`

```sh
$ git clone https://github.com/ugonnathelma/phone-numbers-generator.git
$ Run `npm install` - to install the dependencies
$ Run `npm start` to start the application. Navigate to `http://localhost:3000/`
```
## Running tests

Run `npm test` to execute the tests for both frontend and server.

## Endpoints

### Endpoints

| VERB | URL | ACTION |
| ------ | ------ | ------ |
| POST | /phonenumbers/generate | Generates Phone Numbers |
| POST | /phonenumbers/change-sort-order?sortOrder=asc | Sorts phone numbers in ascending order |
| POST | /phonenumbers/change-sort-order?sortOrder=desc | Sorts phone numbers in descending order |

### Future Improvements

 - Write MORE Tests
 - Improve the UI

License
----

MIT
