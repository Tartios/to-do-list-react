const router = require('express').Router();
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


module.exports = router;