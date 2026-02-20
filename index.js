import fs from "fs";
import fetch from "node-fetch";

const URL = "https://gist.githubusercontent.com/aamiaa/204cd9d42013ded9faf646fae7f89fbb/raw/CompleteDiscordQuest.md";

try {
    const resposta = await fetch(URL);

    if (!resposta.ok) {
        throw new Error(`Falha na requisição: ${resposta.status} ${resposta.statusText}`);
    }

    const texto = await resposta.text();
    const codigo = texto.match(/```(?:js|javascript)([\s\S]*?)```/)?.[1]?.trim();

    if (!codigo) {
        throw new Error("Nenhum bloco de código JavaScript encontrado no conteúdo.");
    }

    fs.writeFileSync("script.js", codigo);
    console.log("script.js salvo com sucesso!");

} catch (e) {
    console.error("Erro:", e.message);
    process.exit(1);
}