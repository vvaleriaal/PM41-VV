const Repository = require('../mongo/repository');
const PurchaseService = require('../services/purchase-service');
const Purchase = require('../mongo/models/purchase');

module.exports = class Initializer {
    static getPurchaseRepository() {
        return new Repository(Purchase);
    }

    static getPurchaseService() {
        return new PurchaseService(Initializer.getPurchaseRepository());
    }
}