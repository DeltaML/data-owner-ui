

export const readCSV = async (file) => {
    let lines = [];
    let reader = new FileReader();
        reader.onload = function(e) {
        // Use reader.result
            console.log(typeof reader.result)
            console.log(reader.result)
        };
        reader.readAsText(file);

    return lines;

};




