const router = require('express').Router();
const initializer = require('../helpers/initializer');
const reponseHandler = require('../helpers/response-handler');

let purchaseService = initializer.getPurchaseService();


router.get('/get/:id', function (request, response) {
    reponseHandler(purchaseService.get(request.params.id), response);
});

router.get('/getall', function (_, response) {
    reponseHandler(purchaseService.getAll(), response);
});

router.post('/add', function (request, response) {
    reponseHandler(purchaseService.create(request.body), response);
});

router.put('/update', function (request, response) {
    reponseHandler(purchaseService.update(request.body), response);
});

router.delete('/delete/:id', function (request, response) {
    reponseHandler(purchaseService.delete(request.params.id), response);
});

module.exports = router;