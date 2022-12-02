'use strict';






const router = express.Router();

router.get('/customer', async (req, res, next) => {
  // const users = await User.findAll();
  try {
    const customers = await CustomerModel.findAll();
    res.status(200).send(customers);
  } catch (e) {
    next(e);
  }
});

router.post('/customer', async (req, res, next) => {
  try {
    const newCustomer = await CustomerInterface.read(req.body);
    res.status(200).send(newOrder);
  } catch (e) {
    next(e);
  }
});



module.exports = router;
