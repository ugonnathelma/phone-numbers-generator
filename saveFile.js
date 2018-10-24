import writeToFile from './writeToFile';

const saveFile = async(ascendingNumbers, descendingNumbers) => {
    try{
        await writeToFile(ascendingNumbers, './public/ascending.txt')
        await writeToFile(descendingNumbers, './public/descending.txt')
        return ['ascending.txt', 'descending.txt'];
    }catch(err){
        throw new Error('error saving generated numbers')
    }
}

export default saveFile;