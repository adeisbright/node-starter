let fs = require("fs").promises 

let createFile = async (fileName , content) => {
    try {
        let file = await fs.writeFile(fileName , content) 
        if (file){
            console.log(`${fileName} was created`) 
            return 
        } 
        throw new Error()
    }catch(error){
        console.log(error.message)
    }
} 
let htmlContent = `
<!Doctype html>
<head lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width , initial-scale=1.0">
    <title> My First Server Powered HTML </title>
    <style>
        body {
            background : #f2f2f2;
            color : #fff ; 
            font-size : 1rem ; 
            line-height : 1.4 ; 
            font-family : "Segoe UI" , Roboto , sans-serif; 
            padding : 0 ;
            margin : 0
        }
        .wrapper {
            padding-right : 20px ; 
            padding-left : 20px;
        }
        .wrap {
            display : flex ; 
        }
        .wrap-6 {
            flex-basis : 0 0 50% ; 
            max-width : 50%;
        }
        .m-r-30 {
            margin-right : 30px;
        }
        .shadow {
            box-shadow : 0 3px 3px #000 , 0 0 2px 3px #222
        }
        .no-border {
            border : none ; 
        }
        .no-outline {
            outline : 0
        }
        .center-text {
            text-align : center
        }
       .center-content {
           margin : 0 auto
       }
    </style>
</head>
<body>
    <main class="center-text">
        <div class="wrapper">
            <div class="wrap">
                <div class="wrap-6">
                    <div class="m-r-30 bg-white shadow pad-10">
                        <h2>Welcome to Bigjara</h2>
                        <p>We make learning of emerging skills easy and fun 
                           with a focus on teaching you how to make money 
                           using the skills 
                        <p>
                        <a class="button no-border no-outline" href="#">Learn more</a>
                    </div>
                </div>
                <div class="wrap-6"> 
                    <form class="shadow pad-10 bg-white radius-5">
                        <h3> Register to get started </h3>
                        <label for="email" class="label"> Email </label>
                        <input type="email" placeholder="Enter your email" name="email" id="email">
                        <button type="submit" role="button"> Sign up</button>
                    </form>
                </div>
          </div>
        </div>
    </main>
</body>
</html>` 

createFile("charity.html" , htmlContent)