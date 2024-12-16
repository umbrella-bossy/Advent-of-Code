import fs from "fs";


const input = fs.readFileSync("./2024/day-2-input.txt", {encoding: "utf8"});
const lines = input.split("\n");
const reports: string[][] = [];
let safe_reports_count = 0;
let unsafe_reports_count = 0;


// Converting Input into arrays
lines.forEach((line) =>
{
    const levels = line.split(" ");

    reports.push(levels);
});


const analyze = (levels: number[]): boolean =>
{
    let safe = true;

    for (let level_index = 0; level_index < levels.length; level_index++)
    {
        const level = levels[level_index];

        if (level_index < levels.length - 1)
        {
            const next_level = levels[level_index + 1];
            const distance = next_level - level;

            if (distance > 0 && distance <= 3 && next_level > level)
            {
                safe = true;
            }
            else
            {
                safe = false;
                break;
            }
        }
    }
    return safe;
};
const deep_analyze = (levels: number[]): boolean =>
{
    let safe = false;
    const variants: number[][] = [];

    for (let level_index = 0; level_index < levels.length; level_index++)
    {
        let new_levels: number[] = [];

        for (let value_index = 0; value_index < levels.length; value_index++)
        {
            const value = levels[value_index];

            if (value_index !== level_index)
            {
                new_levels.push(value);
            }
        }

        variants.push(new_levels);
    }
    for (let variant_index = 0; variant_index < variants.length; variant_index++)
    {
        const variant = variants[variant_index];

        if (analyze(variant))
        {
            safe = true;
            break;
        }
        else
        {
            safe = false;
        }
    };

    return safe;
};


reports.forEach((report) =>
{
    const levels = report.map(value => Number(value));
    const first_level = levels[0];
    const last_level = levels[levels.length - 1];
    let safe = false;

    if (first_level < last_level)
    {
        // Increasing
        if (!analyze(levels))
        {
            safe = deep_analyze(levels);
        }
        else
        {
            safe = true;
        }
    }

    levels.reverse();

    if (last_level < first_level)
    {
        // Decreasing
        if (!analyze(levels))
        {
            safe = deep_analyze(levels);
        }
        else
        {
            safe = true;
        }
    }
    
    if (safe)
    {
        safe_reports_count += 1;
    }
    else
    {
        unsafe_reports_count += 1;
    }
});
console.log("Safe Reports:", safe_reports_count);
console.log("Unsafe Reports:", unsafe_reports_count);
console.log("Total:", reports.length);