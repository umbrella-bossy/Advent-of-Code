import fs from "fs";


type do_command =
{
    index: number;
    type: "do";
};
type dont_command =
{
    index: number;
    type: "dont";
};
type mul_command =
{
    index: number;
    type: "mul";
    value: number;
};
type command = do_command | dont_command | mul_command;


const input = fs.readFileSync("./2024/day-3-input.txt", {encoding: "utf8"});
const do_regex = /do\(\)/g;
const dont_regex = /don't\(\)/g;
const mul_regex = /mul\((\d+),(\d+)\)/g;
const commands: command[] = [];
let match: RegExpExecArray | null;


while ((match = do_regex.exec(input)) !== null)
{
	commands.push({ index: match.index, type: "do" });
}
while ((match = dont_regex.exec(input)) !== null)
{
	commands.push({ index: match.index, type: "dont" });
}
while ((match = mul_regex.exec(input)) !== null)
{
    const [, num1, num2] = match;

	commands.push({ index: match.index, type: "mul", value: +num1 * +num2 });
}

commands.sort((a, b) => a.index - b.index);

let enabaled = true;
let part_one_result = 0;
let part_two_result = 0;

for (const command of commands)
{
    if (command.type === "do")
    {
        enabaled = true;
    }
    if (command.type === "dont")
    {
        enabaled = false;
    }
    if (command.type === "mul")
    {
        part_one_result += command.value;

        if (enabaled)
        {
            part_two_result += command.value;
        }
    }
}


console.log("Part One Result:" , part_one_result);
console.log("Part Two Result:" , part_two_result);