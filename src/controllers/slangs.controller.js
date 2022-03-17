

const  {

  _addSlang,
  _getSlangs,
  _addSlangs,
  _getSlang,
 
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


/**
 *
 * @param req
 * @param res
 */
async function getSlang(req, res) {

    const{ abbr} = req.query;

    //console.log(abbr , 'slang id')

    const slang = await _getSlang(abbr);
  
    if (!slang) {

      res.status(404).send(`The slang ${abbr} was not found`);
    }
  
    if (slang) {

      res.status(200).send({
        success: true,
        message: "slang fetch successful",
        data: slang,
      });

    }
}


/**
 *
 * @param req
 * @param res
 */
 async function getSlangs(req, res) {


  const slang = await _getSlangs();

  if (!slang) {

    res.status(404).send(`slangs not found`);
  }

  if (slang) {

    res.status(200).send({
      success: true,
      message: "slang fetch successful",
      data: slang,
    });

  }
}


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
        message: "Slang added successfully",
        data: response,
      });

    }
}



/**
 *
 * @param req
 * @param res
 */
 async function addSlangs(req, res) {

  const slangsArray = req.body;

  console.log(slangsArray, 'this is the slang object')

  const response = await _addSlangs(slangsArray);

  console.log(response , 'res')

  if (!response) {
    res.status(404).send(`There was an error while adding slang`);
  }

  if (response) {

    res.status(200).send({
      success: true,
      message: "Slangs added successfully",
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

module.exports = { addSlang , addSlangs , getSlang , getSlangs };
