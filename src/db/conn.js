const mongoose=require("mongoose");
url ="mongodb+srv://curdOperation:curdOperation@cluster0.a5aoxmf.mongodb.net/curdOperation?retryWrites=true&w=majority";
mongoose.connect(url,{
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection Sucessfull")
}).catch((e)=>{
    console.log(e);
    console.log("No connection");
})
