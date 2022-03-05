module.exports = (req, res, next) => {
    const authenticated = req.header("authenticate");

    if (authenticated === 'yes') next();
    else {
        res.status(403).json({
            msg: "not authenticate"
        })
    }
}