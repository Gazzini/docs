import * as fs from 'fs';

/// Converts image tags from my old blog style (Hugo) to my new one (Docusaraus)
const convertFolderName = (folderName: string) => {
    const inputFileName = `projects/writing/essays/${ folderName }/index.md`;
    const backupFileName = inputFileName + '2';

    const markdownFile = fs.readFileSync(inputFileName, 'utf8');

    // Split the file on {{ characters
    const splitOnOpeners = markdownFile.split('{{< figure');

    // Split each of these on the }} characters
    const reSplitOnClosers = splitOnOpeners.map(x => x.split('}}'));

    const imageTagText = reSplitOnClosers.map(x => x[0]) ?? [];
    const restOfPost = reSplitOnClosers
        .map(x => x.length > 1 ? x[1] : null)
        .filter(x => x !== null);

    // special-case for beginning:
    restOfPost.unshift(imageTagText.shift());

    console.log(imageTagText);

    const updatedImageTagText = imageTagText.map(x => {
        // Example here:
        // {{< figure src="gym_desk_bedroom.jpeg" alt="squat cage in..." position="center" style="border-radius: 8px;" >}}
        const imageNameStart = x.split(' src="')[1];
        const splits2 = imageNameStart.split('" alt="');
        const imageName = splits2[0];
        const altText = splits2[1].split('" ')[0];
        return `![${ altText }](./${ imageName })`;
    });

    const finalString = restOfPost.map((str, i) => {
        if (updatedImageTagText.length > i) {
            return str + updatedImageTagText[i];
        } else {
            return str;
        }
    }).join('');

    fs.renameSync(inputFileName, backupFileName);
    fs.writeFileSync(inputFileName, finalString);

    console.log('ImageTagText:');
    console.dir(imageTagText);

    console.log('UpdatedImageTagText:');
    console.dir(updatedImageTagText);
}

fs.readdirSync('projects/writing/essays').forEach(x => {
    convertFolderName(x);
});
