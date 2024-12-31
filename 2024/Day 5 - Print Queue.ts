import fs from "fs";


const input_rules = fs.readFileSync("./2024/day-5-input-rules.txt", {encoding: "utf8"});
const input_updates = fs.readFileSync("./2024/day-5-input.txt", {encoding: "utf8"});
const rules = input_rules.split("\n");
const updates = input_updates.split("\n");
const before_rules: string[] = [];
const after_rules: string[] = [];


for (const rule of rules)
{
    const [before, after] = rule.split("|");
    
    before_rules.push(before);
    after_rules.push(after);
}


const check_page = (page: string, page_after: string, pages: string[]) =>
{
    for (let index = 0; index < after_rules.length; index++)
    {
        const after_rule = after_rules[index];
        const before_rule = before_rules[index];

        if (page_after === before_rule)
        {
            if (page === page_after)
            {
                return false;
            }
            return true;
        }
    }
    return true;
};


const check_update_order = (update: string) =>
{
    const pages = update.split(",");
    let result = true;

    for (let page_index = 0; page_index < pages.length; page_index++)
    {
        const page = pages[page_index];
        const page_before = pages[page_index - 1];
        const page_after = pages[page_index + 1];

        // Before Check
        if (page_after)
        {
            result = check_page(page, page_after, pages);
        }
    }
    return result;
};


for (const update of updates)
{
    console.log(check_update_order(update));
}