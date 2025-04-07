class ApiError extends Error {
//here we are creating a custom error class that extends the built-in Error class from Node .js
// this allows us to create our own error types with custom properties and methods
    constructor(
    statusCode,
    message= "Something went wrong",
    errors = [],
    statck ="",
    )
    {
    super(message)
    this.statusCode = statusCode
    this.data = null
    this.message = message
    this.errors = errors
    this.success=false

    if(statck){
        this.stack=statck;
    }
    else{
        Error.captureStackTrace(this,this.constructor)
    }
    }
}

export default ApiError;