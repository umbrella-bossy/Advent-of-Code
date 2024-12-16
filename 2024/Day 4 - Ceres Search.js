"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const input = fs_1.default.readFileSync("./2024/day-4-input.txt", { encoding: "utf8" });
const lines = input.split("\n");
let XMAS_count = 0;
for (let line_index = 0; line_index < lines.length; line_index++) {
    const line = lines[line_index];
    for (let char_index = 0; char_index < line.length; char_index++) {
        const H1 = line[char_index];
        const H2 = line[char_index + 1];
        const H3 = line[char_index + 2];
        const H4 = line[char_index + 3];
        const HH = H1 + H2 + H3 + H4;
        if (HH === "XMAS" || HH === "SAMX") {
            XMAS_count += 1;
        }
        const V1 = lines[line_index][char_index];
        const V2 = lines[line_index + 1]?.[char_index];
        const V3 = lines[line_index + 2]?.[char_index];
        const V4 = lines[line_index + 3]?.[char_index];
        const VV = V1 + V2 + V3 + V4;
        if (VV === "XMAS" || VV === "SAMX") {
            XMAS_count += 1;
        }
        const D1 = lines[line_index][char_index];
        const D2 = lines[line_index + 1]?.[char_index + 1];
        const D3 = lines[line_index + 2]?.[char_index + 2];
        const D4 = lines[line_index + 3]?.[char_index + 3];
        const DD = D1 + D2 + D3 + D4;
        if (DD === "XMAS" || DD === "SAMX") {
            XMAS_count += 1;
        }
        const reverse_char_index = (line.length - 1) - char_index;
        const RD1 = lines[line_index][reverse_char_index];
        const RD2 = lines[line_index + 1]?.[reverse_char_index - 1];
        const RD3 = lines[line_index + 2]?.[reverse_char_index - 2];
        const RD4 = lines[line_index + 3]?.[reverse_char_index - 3];
        const RDD = RD1 + RD2 + RD3 + RD4;
        // console.log(reverse_char_index);
        if (RDD === "XMAS" || RDD === "SAMX") {
            XMAS_count += 1;
        }
    }
}
let X_MAS_count = 0;
for (let line_index = 0; line_index < lines.length; line_index++) {
    const line = lines[line_index];
    for (let char_index = 0; char_index < line.length; char_index++) {
        const D1 = lines[line_index][char_index];
        const D2 = lines[line_index + 1]?.[char_index + 1];
        const D3 = lines[line_index + 2]?.[char_index + 2];
        const DD = D1 + D2 + D3;
        const RD1 = lines[line_index][char_index + 2];
        const RD2 = lines[line_index + 1]?.[char_index + 1];
        const RD3 = lines[line_index + 2]?.[char_index];
        const RDD = RD1 + RD2 + RD3;
        if ((DD === "MAS" || DD === "SAM") && (RDD === "MAS" || RDD === "SAM")) {
            X_MAS_count += 1;
        }
    }
}
console.log("XMAS:", XMAS_count);
console.log("X-MAS:", X_MAS_count);
