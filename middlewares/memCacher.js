const memCache = require('memory-cache');

const cache = (duration) => {
    return(req, res, next) => {
        let key = '_express_' + req.originalUrl || req.url
        let cachedBody = memCache.get(key)
        if(cachedBody){
            res.send(cachedBody)
        } else {
            res.sendResponse = res.send
            res.send = (body) => {
                memCache.put(key, body, duration * 1000);
                res.sendResponse(body)
            }
            next()
        }
    }
}

module.exports = cache