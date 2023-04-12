exports.addTask = ({id, description}) => new Promise(async (resolve, reject) => {
    console.log('id:', id);
    console.log('description:', description);
    try {
        resolve({
            success: true
        });
    }
    catch(err){
        reject(err);
    };
});