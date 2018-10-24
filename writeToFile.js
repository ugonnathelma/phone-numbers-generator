import fs from 'fs';
import { Readable } from 'stream';

const writeToFile = async(arr, path) => {
    let readStream = new Readable();

    let writeStream = fs.createWriteStream(path, {
        flags: 'w',
        autoClose: true
    });

    readStream.pipe(writeStream);
    arr.forEach(num => {
        readStream.push(num)
        readStream.push("\n")
    });

    readStream.destroy()
}

export default writeToFile;