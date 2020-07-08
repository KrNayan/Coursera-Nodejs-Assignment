const http = require("http");
const express = require("express");
const app = express();

const dishRouter1 = require('./dishRouter');
const promoRouter1 = require('./promoRouter');
const leaderRouter1 = require('./leaderRouter');


app.use("/dishes", dishRouter1);  //aftr  the "host" localhost:3000 if found "/dishes" (user),
								  //then It will redirect to "dishRouter.js" file


app.use("/promotion", promoRouter1); //aftr  the "host" localhost:3000 if found "/promotion" (user),
								  	//then It will redirect to "promotionRouter.js" file


app.use("/leaders", leaderRouter1);	//aftr  the "host" localhost:3000 if found "/leaders" (user),
								  	//then It will redirect to "leaderRouter.js" file


const srvr = http.createServer(app);
srvr.listen(3000,"localhost",()=>{
	console.log("Hey,srvr is running at http://localhost:3000");
});

