import multer from "multer";

const storage = multer. diskStorage( {

destination: function (req, file, cb) // cb is a callback function which is used to send the response back to the client
{
cb (null, "./public/temp")
},

filename: function (req, file, cb) 
{
cb(null, file.originalname)
}
}
)

export const upload = multer({
storage,
})