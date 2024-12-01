import fs from "fs";
import fsp from "fs/promises";

//readFile() __ callback version
fs.readFile("./text_random.txt", "utf8", (err, data) => {
	if (err) throw err;
	console.log("CAllback => : ", data);
});

// readFileSync() - synchronous version
const data = fs.readFileSync("./text_random.txt", "utf8");
console.log("Sync => : ", data);

//readFile() -- promises .then() version
fsp.readFile("./text_random.txt", "utf8")
	.then((data) => console.log("Promise.then() => : ", data))
	.catch((err) => {
		throw err;
	});
//readFile() -- promises Async await version

const readFile = async () => {
    try {
        const data = await fsp.readFile("./text_random.txt", "utf8")
        console.log('Promise-Async => : ' , data)
    }catch(error){
         throw new Error(error)
    }
};

// writeFile Async
const writeFile = async () => {
    try{
        await fsp.writeFile('./text_random.txt' ,"The text added by write file async")
        console.log("file written asynchronosely to ...")
    }catch(err){
        console.log(err)
    }
}


//appendFile()

const appendFile = async() => {
    try {
        await fsp.appendFile('./text_random.txt' , '\n----** Some appending text')
        console.log('appending text asychronosely....')
    } catch (error) {
        console.log(error)
    }
}

writeFile()
appendFile()
readFile()