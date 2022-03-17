

const  {

  _addSlang,
 
}  = require("../services/slangs.service")


// /**
//  *
//  * @param req
//  * @param res
//  */
// async function getSlangs(req, res) {

//   const slangs = await _getSlangs();

//   if (!slangs) {
//     res.status(404).send("no books found");
//   }

//   if (slangs) {
//     res.status(200).send({
//       success: true,
//       message: "Books fetch successful",
//       data: slangs,
//     });
//   }
// }


// /**
//  *
//  * @param req
//  * @param res
//  */
// async function getSlang(req, res) {

//     const slang_id = req.query.id;
//     console.log(slang_id , 'book id')

//     const slang = await _getSlang(slang_id);
  
//     if (!Slang) {
//       res.status(404).send(`The book with the id ${book_id} was not found`);
//     }
  
//     if (book) {
//       res.status(200).send({
//         success: true,
//         message: "Book fetch successful",
//         data: book,
//       });
//     }
// }


/**
 *
 * @param req
 * @param res
 */
 async function addSlang(req, res) {

    const slangObject = req.body;

    console.log(slangObject , 'this is the slang object')

    const response = await _addSlang(slangObject);

    console.log(response , 'res')

    if (!response) {
      res.status(404).send(`There was an error while adding slang`);
    }
  
    if (response) {

      res.status(200).send({
        success: true,
        message: "Slang added successful",
        data: response,
      });

    }
}


// /**
//  *
//  * @param req
//  * @param res
//  */
//  async function deleteBook(req, res) {

//     const { id } = req.body;

//     const response = await _deleteBook(id);
  
//     if (!response) {
//       res.status(404).send(`Book with id ${id} could not be deleted`);
//     }
  
//     if (response) {
//       res.status(200).send({
//         success: true,
//         message: "Book delete successful",
//         data: req.body,
//       });
//     }
// }

//module.exports = { addBook, getBooks, getBook, deleteBook }

module.exports = { addSlang }
