const PORT = 63027;
const app = require('./app');
const purchaseTestCollection = require('./helpers/purchase-test-collection');

app.listen(PORT, purchaseTestCollection);