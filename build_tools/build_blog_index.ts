import {readdirSync, statSync} from 'fs';
import {join} from 'path';

const basePath = 'public/blog_files';

let files = readdirSync('public/blog_files');

let fileData: {created: number, path: string, name: string}[] = [];

for (let file of files) {
    let stats = statSync(join(basePath, file));

    fileData.push({
        created: Math.floor(stats.ctimeMs),
        path: `/blog_files/${file}`,
        name: file.split('.')[0],
    });
}

console.log(JSON.stringify(fileData.sort((a, b) => a.created > b.created ? -1 : 1), undefined, 0));
