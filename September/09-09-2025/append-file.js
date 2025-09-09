import { appendFile, readFile, writeFile } from 'fs';

appendFile("file.txt", " Hello there!", "utf8", (err, data) => {
    if(err)
        console.log(err);
    else
        console.log(data);
});

console.log("Execution Completed!")