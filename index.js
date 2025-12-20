import fs from "fs";
import fetch from "node-fetch";

(async () => {
    try {
        const texto = await (await fetch("https://gist.githubusercontent.com/aamiaa/204cd9d42013ded9faf646fae7f89fbb/raw/CompleteDiscordQuest.md")).text();
        const codigo = texto.match(/```js([\s\S]*?)```/)?.[1]?.trim();
        if (codigo) {
            fs.writeFileSync("script.js", codigo);
            console.log("script.js salvo!");
        }
    } catch (e) { console.error(e); }
})();