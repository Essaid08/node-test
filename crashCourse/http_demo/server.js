import http from 'http'
import fs from "fs/promises"
import url from "url"
import path from "path"

const PORT = process.env.PORT

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)



const server = http.createServer(async(req ,res) => {
    
    try{
        if(req.method === 'GET'){
            let filePath ;
            switch (req.url) {
                case '/':
                    filePath = path.join(__dirname , 'public' , 'index.html')
                    break;
                    case "/about" :
                    filePath = path.join(__dirname , 'public' , 'about.html')
                    break;
                default: 
                    filePath = path.join(__dirname , 'public' , "not_found.html")
                    break;
            }

            const data = await fs.readFile(filePath)
            res.setHeader( "Content-Type" , "text/html")
            res.write(data)
            res.end()

        }else{
            throw new Error("Methode not allowed")
        }
    }catch (err){
        res.writeHead(500 , {'content-type' : "text/plain"})
        res.end("something wrong with the server")
    }
})

server.listen(PORT , () => {
    console.log(`server is running on port ${PORT}`)
})


