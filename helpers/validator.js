const ErrorHelper = require('./error-helpers');
const ModelNames = require('../mongo/model-names');

function checkPurchase(purchase) {
    return purchase.title
        && purchase.description
        && purchase.pictureRef
        && purchase.cost;
}

module.exports = class Validator {
    static isValid(obj, name) {
        if (!obj || !name) throw ErrorHelper.notValidModelException;
        switch (name) {
            case ModelNames.PURCHASE: return checkPurchase(obj);
            default: throw ErrorHelper.argumentsException;
        }
    }
}