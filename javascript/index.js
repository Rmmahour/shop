var express = require("express");
var mongoClient = require("mongodb").MongoClient;
var cors = require("cors");
var app = express();
app.use(cors());



app.use(express.urlencoded({
    extended:true
}));

app.use(express.json());

var conStr = "mongodb://127.0.0.1:27017";

// app.get("/Products",(req,res)=>{
//     mongoClient.connect(conStr,(err,clientObject)=>{
//         if(!err){
//             var database = clientObject.db("Cars");
//             database.collection("Models").find({}).toArray((req,Products)=>{
//                 if(!err){
//                     res.send(Products);
//                     res.end();
//                 }else{
//                     console.log(err);
//                 }
//             })
//         }else{
//             console.log(err);
//         }
//     })
// })

// app.get("/ram",(req,res)=>{
//     mongoClient.connect(conStr,(err,clientObject)=>{
//         if(!err){
//             var database = clientObject.db("Ishop");
//             database.c
//         }
//     })
// })


app.get("/Admins",(req,res)=>{
    mongoClient.connect(conStr,(err,clientObject)=>{
        if(!err){
            var database = clientObject.db("CityShop");
            database.collection("Admins").find({}).toArray((req,Admins)=>{
                if(!err){
                    res.send(Admins);
                    res.end();
                }else{
                    console.log(err);
                }
            })
        }else{
            console.log(err);
        }
    })
})

app.get("/Cart/Items/:cartid",(req,res)=>{
    var id=parseInt(req.params.id);
    mongoClient.connect(conStr,(err,clientObject)=>{
        if(!err){
            var database = clientObject.db("CityShop");
            database.collection("Carts").find({CartId:req.params.cartid}).toArray((req,result)=>{
                if(!err){
                    res.send(result[0].Items);
                    res.end();
                }else{
                    console.log(err);
                }
            })
        }else{
            console.log(err);
        }
    })
})

app.get("/Items/Id/:id",(req,res)=>{
    var id=parseInt(req.params.id);
    mongoClient.connect(conStr,(err,clientObject)=>{
        if(!err){
            var database = clientObject.db("CityShop");
            database.collection("Carts").find({"Items.Id":id}).toArray((err,result)=>{  
                if(!err){
                    res.send(result);
                    res.end();
                }else{
                    console.log(err);
                }
            })
        }else{
            console.log(err);
        }
    })
})


app.get("/Users",(req,res)=>{
    mongoClient.connect(conStr,(err,clientObject)=>{
        if(!err){
            var database = clientObject.db("CityShop");
            database.collection("Users").find({}).toArray((req,Users)=>{
                if(!err){
                    res.send(Users);
                    res.end();
                }else{
                    console.log(err);
                }
            })
        }else{
            console.log(err);
        }
    })
})

app.get("/Categories",(req,res)=>{
    mongoClient.connect(conStr,(err,clientObject)=>{
        if(!err){
            var database = clientObject.db("CityShop");
            database.collection("Categories").find({}).toArray((req,Products)=>{
                if(!err){
                    res.send(Products);
                    res.end();
                }else{
                    console.log(err);
                }
            })
        }else{
            console.log(err);
        }
    })
})

app.get("/User/:cartid",(req,res)=>{
    mongoClient.connect(conStr,(err,clientObject)=>{
        if(!err){
            var database=clientObject.db("CityShop");
            database.collection("Carts").find({CartId:req.params.cartid}).toArray((req,result)=>{
                if(!err){
                    res.send(result);
                    res.end();
                }else{
                    console.log(err);
                }
            })
        }else{
            console.log(err);
        }
    })
})

app.get("/Products/:title",(req,res)=>{
    mongoClient.connect(conStr,(err,clientObject)=>{
        if(!err){
            var database=clientObject.db("CityShop");
            database.collection("Products").find({Title:req.params.title}).toArray((req,result)=>{
                if(!err){
                    res.send(result);
                    res.end();
                }else{
                    console.log(err);
                }
            })
        }else{
            console.log(err);
        }
    })
})

app.get("/Users/:user",(req,res)=>{
    mongoClient.connect(conStr,(err,clientObject)=>{
        if(!err){
            var database = clientObject.db("CityShop");
            database.collection("Users").find({Userid:req.params.user}).toArray((req,Users)=>{
                if(!err){
                    res.send(Users);
                    res.end();
                }else{
                    console.log(err);
                }
            })
        }else{
            console.log(err);
        }
    })
})

app.get("/Products/Id/:id",(req,res)=>{
    var id = parseInt(req.params.id);
    mongoClient.connect(conStr,(err,clientObject)=>{
        if(!err){
            var database=clientObject.db("CityShop");
            database.collection("Products").find({Id:id}).toArray((req,result)=>{
                if(!err){
                    res.send(result);
                    res.end(err);
                }else{
                    console.log(err);
                }
            })
        }else{
            console.log(err);
        }
    })
})

app.get("/Categories/:category",(req,res)=>{
    mongoClient.connect(conStr,(err,clientObject)=>{
        if(!err){
            var database=clientObject.db("CityShop");
            database.collection("Products").find({Category:req.params.category}).toArray((req,document)=>{
                if(!err){
                    res.send(document);
                    res.end();
                }else{
                    console.log(err);
                }
            })
        }else{
            console.log(err);
        }
    })
})

app.get("/AdminId/:adminId",(req,res)=>{
    mongoClient.connect(conStr,(err,clientObject)=>{
        if(!err){
            var database = clientObject.db("CityShop");
            database.collection("Admins").find({AdminId:req.params.adminId}).toArray((req,Admin)=>{
                if(!err){
                    res.send(Admin);
                    res.end();
                }else{
                    console.log(err);
                }
            })
        }else{
            console.log(err);
        }
    })
})

app.get("/Cart/:cartid/Id/:id",(req,res)=>{
    // var id=parseInt(req.params.id);
    mongoClient.connect(conStr,(err,clientObject)=>{
        if(!err){
            var database=clientObject.db("CityShop");
            let id = req.params.id;
            database.collection("Carts").find({"CartId":req.params.cartid}).toArray((req,result)=>{
                if(!err){
                    for(var i of result){
                        for(var j of i.Items){
                            if(j.Id==id){
                                res.send(j);
                            }
                        }
                    }
                    
                    res.end();
                }else{
                    console.log(err);
                }
            })
        }else{
            console.log(err);
        }
    })
})


app.post("/newAdmin",(req,res)=>{
    var new_Admin={
        AdminId: req.body.AdminId,
        Password: req.body.Password,
        Role: req.body.Role
    };
    mongoClient.connect(conStr,(err,clientObject)=>{
        if(!err){
            var database= clientObject.db("CityShop");
            database.collection("Admins").insertOne(new_Admin,(err,NewAdmin)=>{
                if(!err){
                    alert("Admin Added");
                    res.send(NewAdmin);
                }else{
                    console.log(err);
                }
            })
        }else{
            console.log(err);
        }
    })
})

app.post("/newCategory",(req,res)=>{
    var new_Category= {
        Category: req.body.Category
    };
    mongoClient.connect(conStr,(err,clientObject)=>{
        if(!err){
            var database=clientObject.db("CityShop");
            database.collection("Categories").insertOne(new_Category,(req,Category)=>{
                if(!err){
                    res.send(Category);
                }else{
                    console.log(err);
                }
            })
        }else{
            console.log(err);
        }
    })
})

app.post("/newUser",(req,res)=>{
    var new_User = {
        "FirstName": req.body.FirstName,
        "LastName": req.body.LastName,
        "Date_Of_Birth": req.body.Date_Of_Birth,
        "Email": req.body.Email,
        "Gender": req.body.Gender,
        "Userid": req.body.Userid,
        "Company": req.body.Company,
        "Street": req.body.Street,
        "City": req.body.City,
        "State": req.body.State,
        "Pincode": parseInt(req.body.Pincode),
        "Country": req.body.Country,
        "Mobile": parseInt(req.body.Mobile),
        "Fax": req.body.Fax,
        "Password": req.body.Password
    };
    mongoClient.connect(conStr,(err,clientObject)=>{
        if(!err){
            var database= clientObject.db("CityShop");
            database.collection("Users").insertOne(new_User,(req,User)=>{
                if(!err){
                    res.send(User);
                }else{
                    console.log(err);
                }
            })
        }else{
            console.log(err);
        }
    })
})

app.post("/newCart",(req,res)=>{
    var new_Cart = {
        "CartId": req.body.CartId,
    };
    mongoClient.connect(conStr,(err,clientObject)=>{
        if(!err){
            var database= clientObject.db("CityShop");
            database.collection("Carts").insertOne(new_Cart,(req,User)=>{
                if(!err){
                    res.send(User);
                }else{
                    console.log(err);
                }
            })
        }else{
            console.log(err);
        }
    })
})

app.post("/newProduct",(req,res)=>{
    var new_Product = {
        "Id": parseInt(req.body.Id),
        "Title": req.body.Title,
        "Image": req.body.Image,
        "Price": parseFloat(req.body.Price),
        "Category": req.body.Category
    };
    mongoClient.connect(conStr,(err,clientObject)=>{
        if(!err){
            var database= clientObject.db("CityShop");
            database.collection("Products").insertOne(new_Product,(req,Product)=>{
                if(!err){
                    res.send(Product);
                }else{
                    console.log(err);
                }
            })
        }else{
            console.log(err);
        }
    })
})

app.put("/Carts/additem/:cartid",(req,res)=>{
    var Items = {
        "Id": parseInt(req.body.Id),
        "Title": req.body.Title,
        "Image": req.body.Image,
        "Price": parseFloat(req.body.Price),
        "Category": req.body.Category
    };
    mongoClient.connect(conStr,(err,clientObject)=>{
        if(!err){
            var database=clientObject.db("CityShop");
            database.collection("Carts").updateOne({CartId:req.params.cartid},{$push:{Items}},(err,result)=>{
                if(!err){
                    res.send(result);
                    console.log("Item Added");
                }else{
                    console.log(err);
                }
            })
        }
    })
})

app.delete("/Carts/Cutitem/:id",(req,res)=>{
    var id = parseInt(req.params.id);
    mongoClient.connect(conStr,(err,clientObject)=>{
        if(!err){
            var database=clientObject.db("CityShop");
            database.collection("Carts").deleteOne({Items:{Id:id}},(err,result)=>{
                if(!err){
                    res.send(result);
                    console.log("Item Deleted");
                }else{
                    console.log(err);
                }
            })
        }
    })
})

app.delete("/removeProduct/Id/:id",(req,res)=>{
    var id = parseInt(req.params.id);
    mongoClient.connect(conStr,(err,clientObject)=>{
        if(!err){
            var database=clientObject.db("CityShop");
            database.collection("Products").deleteOne({Id:id},(req,result)=>{
                if(!err){
                    console.log("Product Deleted");
                    res.send(result);
                }else{
                    console.log(err);
                }
            })
        }else{
            console.log(err);
        }
    })
})

app.delete("/removeAdmin/:adminId",(req,res)=>{
    mongoClient.connect(conStr,(err,clientObject)=>{
        if(!err){
            var database = clientObject.db("CityShop");
            database.collection("Admins").deleteOne({AdminId:req.params.adminId},(err,result)=>{
                if(!err){
                    console.log("Admin Deleted");
                }else{
                    console.log(err);
                }
            })
        }else{
            console.log(err);
        }
    })
})

app.delete("/removeItem/Id/:id",(req,res)=>{
    var id=parseInt(req.params.id);
    mongoClient.connect(conStr,(err,clientObject)=>{
        if(!err){
            var database=clientObject.db("CityShop");
            database.collection("Carts").deleteOne({Id:id},(req,result)=>{
                if(!err){
                    console.log("Item Deleted");
                    res.send(result);
                }else{
                    console.log(err);
                }
            })
        }else{
            console.log(err);
        }
    })
})

app.delete("/Cart/removeItems/:cartid/Id/:id",(req,res)=>{
    var id=parseInt(req.params.id);
    mongoClient.connect(conStr,(err,clientObject)=>{
        if(!err){
            var database=clientObject.db("CityShop");
            database.collection("Carts").deleteOne({"Carts[0].Items.Id":id},(err,result)=>{
                if(!err){
                    let status = 200;
                    let data = {status,result};
                    res.send(data);
                  }else{
                    res.send(err);
                }
            })
        }else{
            console.log(err);
        }
    })
})


// app.delete("/Cart/removeItem/:cartid/Id/:id",(req,res)=>{
//     var id=parseInt(req.params.id);
//     mongoClient.connect(conStr,(err,clientObject)=>{
//         if(!err){
//             var database=clientObject.db("CityShop");
//             // let id = req.params.id;
//             database.collection("Carts").find({"CartId":req.params.cartid}).toArray((req,result)=>{
//                 if(!err){
//                     let index=0;
//                     for(var i of result){
//                         for(var j of i.Items){
//                             if(j.Id==id){
//                                 database.collection("Carts").deleteOne({"Carts.Items.Id":id},(x,result)=>{
//                                     if(!err){
//                                         let status = 200;
//                                         let data = {status,result};
//                                         res.send(data);
//                                     }else{
//                                         res.send(err);
//                                     }
                                    
//                                 });
//                             }
//                         }
//                         index++
//                     }
//                     // res.end();
//                 }else{
//                     console.log(err);
//                 }
//             })
//         }else{
//             console.log(err);
//         }
//     })
// })

app.listen(50505);
console.log("Server Started:127.0.0.1:50505");