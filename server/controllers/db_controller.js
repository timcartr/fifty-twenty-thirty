module.exports = {
    test: async (req, res, next) => {
      const dbInstance = req.app.get('db')

      let test = await dbInstance.test()
      res.status(200).send(test)
    },
    getTransactions: async (req, res, next) => {
      const dbInstance = req.app.get('db')

      let transactions = await dbInstance.Select_Transactions_By_Month()
      res.status(200).send(transactions)
    },
    essentialTransactions: async (req, res, next) => {
      const dbInstance = req.app.get('db')

      let transactions = await dbInstance.Select_Monthly_Essential_Transactions()
      res.status(200).send(transactions)
    },
    lifestyleTransactions: async (req, res, next) => {
      const dbInstance = req.app.get('db')

      let transactions = await dbInstance.Select_Monthly_Lifestyle_Transactions()
      res.status(200).send(transactions)
    }
}
