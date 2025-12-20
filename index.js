import fs from "fs";
import fetch from "node-fetch";

const url = "https://gist.githubusercontent.com/aamiaa/204cd9d42013ded9faf646fae7f89fbb/raw/CompleteDiscordQuest.md";

async function baixarEExtrairCodigo() {
    try {
        console.log("Baixando arquivo...");

        const resposta = await fetch(url);
        const texto = await resposta.text();

        // Expressão regular para capturar o conteúdo entre ```js e ```
        const match = texto.match(/```js([\s\S]*?)```/);

        if (!match) {
            console.error("Não foi encontrado nenhum bloco ```js ... ``` no arquivo!");
            return;
        }

        const codigoExtraido = match[1].trim();

        fs.writeFileSync("script.js", codigoExtraido);

        console.log("script.js criado com sucesso!");
    } catch (erro) {
        console.error("Erro:", erro);
    }
}

baixarEExtrairCodigo();