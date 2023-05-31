const { CustomAPIError } = require('../errors/custom-error')

const errorHandlerMiddleware = (err, req, res, next) => {

    if (err instanceof CustomAPIError) {
        return res.status(err.statuscode).json({ msg: err.message })
    }
    return res.status(500).json({ msg: `Something weent wrong, try again later...` })

}

module.exports = errorHandlerMiddleware