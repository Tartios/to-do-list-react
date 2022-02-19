const router = require('express').Router();
const ToDo = require('../models/to-do');
const {
    getToDoList,
    createToDo,
    findToDo,
    patchToDo,
    deleteToDo, 
    completeToDo
} = require('../controllers/to-do');

router.get('/', getToDoList);
router.post('/', createToDo);
router.get('/:id', findToDo);
router.put('/:id', patchToDo);
router.put('/completed/:id', completeToDo)
router.delete('/:id', deleteToDo);

// const resik = (req, res) => {
//     res.send(
//         `<html>
//         <body>
//         <p>Привет!</p>
//         </body>
//         </html>`
//     )
// };

// router.get('/', resik);

module.exports = router;