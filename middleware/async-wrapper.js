//middleware to eliminate repetitive use fo async functions
const asyncWrapper = (fn) => {
    return async(req,res,next) => {
        try{
            await fn(req,res,next)
        } catch(error){
            next(error);
        }
    }
}

module.exports = asyncWrapper