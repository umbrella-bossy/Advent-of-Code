import fs from "fs";


const colors = {
    green: "\x1b[1m\x1b[32m",
    white: "\x1b[1m\x1b[37m",
    blue: "\x1b[1m\x1b[34m",
    orange: "\x1b[33m",
    red: "\x1b[1m\x1b[31m",
    yellow: "\x1b[1m\x1b[33m",
};


const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


const run = async () =>
{
    const tree = fs.readFileSync("./Merry Chirstmas/tree.txt", "utf8");
    const tree_root = fs.readFileSync("./Merry Chirstmas/treeroot.txt", "utf8");
    const marry = fs.readFileSync("./Merry Chirstmas/marry.txt", "utf8");
    const chirstmas = fs.readFileSync("./Merry Chirstmas/chirstmas.txt", "utf8");

    const tree_lines = tree.split("\n");
    const tree_root_lines = tree_root.split("\n");
    const marry_lines = marry.split("\n");
    const chirstmas_lines = chirstmas.split("\n");

    for (const line of tree_lines)
    {
        console.log(`${colors.green}${line}`);
        await delay(100);
    }
    for (const line of tree_root_lines)
    {
        console.log(`${colors.orange}${line}`);
        await delay(100);
    }
    for (const line of marry_lines)
    {
        console.log(`${colors.red}${line}`);
        await delay(100);
    }
    for (const line of chirstmas_lines)
    {
        console.log(`${colors.blue}${line}`);
        await delay(100);
    }
};


run();