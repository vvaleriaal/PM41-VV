let Initializer = require('./initializer');

module.exports = async function () {
    let any = function (arr, predicate) {
        for (let el of arr) {
            if (predicate(el)) {
                return true;
            }
        }
        return false;
    }

    let rep = Initializer.getPurchaseRepository();

    let purchases = await rep.readAll();

    if (!any(purchases, (x) => x.title === 'title 1')) {
        rep.create({
            title: 'title 1',
            description: 'description 1',
            pictureRef: 'https://telegram.org/file/811140509/b45/dQTLEwKZ9gs.22232.gif/4580677d940852f30e',
            cost: 5
        });
    }
}