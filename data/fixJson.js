const fixJson = (data) => {
    const newData = data.map((row) => {
        if(typeof(row)=='string'){
            return JSON.parse(row)
        }
        return row    
    })
    return newData
}

module.exports = fixJson