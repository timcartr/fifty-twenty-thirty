module.exports = {
    get: async (req, res, next) => {
      const dbInstance = req.app.get('db')

      let test = await dbInstance.test()
      res.status(200).send(test)
    }
}
