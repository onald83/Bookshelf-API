// const { options } = require('@hapi/hapi/lib/cors')
const { addBooksHandler, getAllBooksHandler } = require('./handler')

const routes = [
  {
    method: 'POST',
    path: '/books',
    // handler: () => {}
    handler: addBooksHandler
    /* options: {
        cors: {
            origin: ['*']
        }
    } */
  },

  {
    method: 'GET',
    path: '/books',
    // handler: () => {}
    handler: getAllBooksHandler
  },

  /*{
    method: 'GET',
    path: '/books/{id}',
    // handler: () => {}
    handler: getBooksByIdHandler
  },

  {
    method: 'PUT',
    path: '/books/{id}',
    // handler: () => {}
    handler: editBooksByIdHandler
  },

  {
    method: 'DELETE',
    path: '/books/{id}',
    // handler: () => {}
    handler: deleteBooksByIdHandler
  } */

]

module.exports = routes
