# MyReads Project

This is a reading list app to save books on the following bookshelves:

    1. Currently Reading
    2. Want to Read
    3. Read



## TL;DR

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## What You're Getting

```bash
├── CODEOWNERS # Udacity Starter Code
├── CONTRIBUTING.md # Udacity Licensing Agreement
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with the app.
├── package.json # npm package manager file.
├── package-lock.json # depedency lock file.
├── public
│   ├── favicon.ico # React Icon
│   └── index.html # DO NOT MODIFY
├── yarn.lock # dependency lock file
└── src
    └── components
    │   ├── App.js # This is the root of the app.  
    │   ├── Book.js # This handles the book information in the app.
    │   ├── BookShelf.js # This is the bookshelf to hold books.
    │   ├── ChangeShelf.js # This allows changing books to a bookshelf.
    │   ├── ListBooks.js # This lists books from each bookshelf.
    │   ├── SearchBooks.js # This is the search feature of the app.
    └──  css
    │   ├── App.css # Styles for your app.
    │   └── index.css # Global styles.
    └── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    └──utils
    │   └── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/components/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](starter/SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
