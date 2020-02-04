module.exports = (res, e) => {
    res.status(e.status).json(e)
}