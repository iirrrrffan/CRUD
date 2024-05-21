const tryCatchMidleware = (trycatchHandler)=>{
    return async (req,res,next)=>{
        try {
            await trycatchHandler(req,res,next)
        } catch (error) {

            next(error)
        }
    }
}
module.exports = tryCatchMidleware;