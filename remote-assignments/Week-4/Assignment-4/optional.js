function delayedResultPromise(n1, n2, delayTime) {
    return new Promise((resolve, reject) => {
        let result = n1 + n2;
        if (isNaN(result)) {
            reject('Input should be Integer');
        } else {
            setTimeout(function() {
                resolve(result);
            }, delayTime);
        }
    });
    
}

async function main() {
    // your code here, you should call delayedResultPromise here and get the result using async/await.
    let delayedResultAsync = await delayedResultPromise(4, 5, 3000).then(console.log).catch(console.log);

}

delayedResultPromise(4, 5, 3000).then(console.log) // 9 (4+5) will be shown in the console after 3 seconds
main() // result will be shown in the console after <delayTime> seconds