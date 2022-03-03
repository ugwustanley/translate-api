

const  {
  _getBooks,
  _getBook,
  _addBook,
  _deleteBook,
}  = require("../services/books.service")


/**
 *
 * @param req
 * @param res
 */
async function getBooks(req, res) {

  const books = await _getBooks();

  if (!books) {
    res.status(404).send("no books found");
  }

  if (books) {
    res.status(200).send({
      success: true,
      message: "Books fetch successful",
      data: books,
    });
  }
}


/**
 *
 * @param req
 * @param res
 */
async function getBook(req, res) {

    const book_id = req.query.id;
    console.log(book_id , 'book id')

    const book = await _getBook(book_id);
  
    if (!book) {
      res.status(404).send(`The book with the id ${book_id} was not found`);
    }
  
    if (book) {
      res.status(200).send({
        success: true,
        message: "Book fetch successful",
        data: book,
      });
    }
}


/**
 *
 * @param req
 * @param res
 */
 async function addBook(req, res) {

    const book = req.body;
    console.log(book , 'con')

    const response = await _addBook(book);
    console.log(response , 'res')
    if (!response) {
      res.status(404).send(`The book was not added`);
    }
  
    if (response) {
      res.status(200).send({
        success: true,
        message: "Book added successful",
        data: response,
      });
    }
}


/**
 *
 * @param req
 * @param res
 */
 async function deleteBook(req, res) {

    const { id } = req.body;

    const response = await _deleteBook(id);
  
    if (!response) {
      res.status(404).send(`Book with id ${id} could not be deleted`);
    }
  
    if (response) {
      res.status(200).send({
        success: true,
        message: "Book delete successful",
        data: req.body,
      });
    }
}

module.exports = { addBook, getBooks, getBook, deleteBook }
