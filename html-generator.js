let fs = require("fs").promises 

let createFile = async (fileName , content) => {
    try {
        let file = await fs.writeFile(fileName , content) 
        if (file){
            console.log(`${fileName} was created`) 
            return 
        }
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
    <link href={Put your css file here} rel="stylesheet">
</head>
<body>
    <header>
        <div class="section-wrapper">
            <div class="wrapper">
            </div>
        </div>
    </header>
    <main>
        <section>
        </section>
    </main>
    <footer>
       <p> Powered by Node.js </p>
    </footer>
</body>
</html>` 

createFile("faq.html" , htmlContent)