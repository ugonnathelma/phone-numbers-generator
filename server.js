import express from 'express';
import bodyParser from 'body-parser';
import generateNumbers from './generatePhoneNumbers';
import saveToFile from './saveFile';

let ASCENDINGFILENAME, DESCENDINGFILENAME;

const port = process.env.PORT || 3000;
const backUpPort = process.env.BACKUPPORT || 3001;

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(express.static('public'))

app.post('/phonenumbers/generate', async(req, res) => {
    let maxCount = 10000;
    let countParam = req.query.count;
    countParam = parseInt(countParam, 10)
    let count = (!countParam || countParam > maxCount) ? maxCount : countParam;
    let { generatedCount, min, max, numbersSortedAscending, numbersSortedDescending } = generateNumbers(count);

    try{
        let [ascendingFileName, descendingFileName] = await saveToFile(numbersSortedAscending,numbersSortedDescending)
            ASCENDINGFILENAME = ascendingFileName;
            DESCENDINGFILENAME = descendingFileName;
    
            res.status(200).send({
                count: generatedCount,
                min,
                max,
                fileName: `http://localhost:${port}/${ascendingFileName}` 
            })
    }catch(err){
        res.status(500).send(err);
    }
})

app.post('/phonenumbers/change-sort-order', (req, res) => {
    let sortOrder = req.query.sortOrder;
    let orders = {
        asc: {fileName: `http://localhost:${port}/${ASCENDINGFILENAME}`},
        desc: {fileName: `http://localhost:${port}/${DESCENDINGFILENAME}`}
    }
    
    let file = orders[sortOrder];

    if(file){
        res.status(200).send(file); 
    }else{
        res.status(400).send({error: 'invalid sort order, sort can either be "asc" or "desc"'})
    }
})

let server;

server = app.listen(port, () => {
    console.log(`Server started. App listening on port ${port}`)
})
.once('error', (err) => {
    // our server test code runs async and can use multiple
    // instance of express. we want allow two instances running
    // on different ports.
    if(err.code === 'EADDRINUSE'){
        server = app.listen(backUpPort, () => {
            console.log(`Server started. App listening on port ${backUpPort}`);  
        })
    }
})

export default server;