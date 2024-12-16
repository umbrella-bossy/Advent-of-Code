"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const input = fs_1.default.readFileSync("./2024/day-3-input.txt", { encoding: "utf8" });
const do_regex = /do\(\)/g;
const dont_regex = /don't\(\)/g;
const mul_regex = /mul\((\d+),(\d+)\)/g;
const commands = [];
let match;
while ((match = do_regex.exec(input)) !== null) {
    commands.push({ index: match.index, type: "do" });
}
while ((match = dont_regex.exec(input)) !== null) {
    commands.push({ index: match.index, type: "dont" });
}
while ((match = mul_regex.exec(input)) !== null) {
    const [, num1, num2] = match;
    commands.push({ index: match.index, type: "mul", value: +num1 * +num2 });
}
commands.sort((a, b) => a.index - b.index);
let enabaled = true;
let part_one_result = 0;
let part_two_result = 0;
for (const command of commands) {
    if (command.type === "do") {
        enabaled = true;
    }
    if (command.type === "dont") {
        enabaled = false;
    }
    if (command.type === "mul") {
        part_one_result += command.value;
        if (enabaled) {
            part_two_result += command.value;
        }
    }
}
console.log("Part One Result:", part_one_result);
console.log("Part Two Result:", part_two_result);
