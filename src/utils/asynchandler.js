const asyncHandler=(requestHandler)=>{// this is a wrapper function for handling database connection
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next )).catch((err)=>next(err))
    }

}
export default asyncHandler;