//middleware to use when unknown route is being accessed
const notFound = (req,res) => res.status(404).send("Route doesn't exist");

module.exports = notFound