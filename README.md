# 🎯 Missão — Automação de Quests do Discord

> **Atenção:** este projeto é apenas educacional. O uso pode violar os Termos de Serviço do Discord. Utilize **por sua conta e risco**.

---

## 📌 Sobre o projeto

Este repositório contém scripts que **automatizam ou auxiliam na conclusão de quests (missões) do Discord**. O script detecta automaticamente a quest ativa e tenta concluí-la simulando atividades como:

* ▶️ Assistir vídeos
* 🎮 Jogar no desktop
* 📺 Fazer stream no desktop
* 🧩 Jogar atividades (Activities)

O script principal foi feito para ser executado **diretamente no console do Discord** (Web ou Desktop), enquanto um script auxiliar em Node.js facilita a atualização automática do código.

---

## ⚠️ Avisos importantes (leia antes)

* ❗ **Uso por sua conta e risco**: não me responsabilizo por banimentos, limitações ou qualquer punição aplicada à sua conta.
* 🖥️ Algumas quests **só funcionam no aplicativo desktop do Discord**.
* 🔄 O Discord pode alterar o funcionamento interno a qualquer momento, quebrando o script.
* 🚫 Não há garantia de funcionamento nem de segurança da conta.

---

## 🧩 Requisito obrigatório — Vencord

Para que o script funcione **corretamente e sem erros**, é **necessário** utilizar uma modificação do Discord chamada **Vencord**.

O Vencord permite remover ou contornar certas restrições internas do Discord que impedem a execução correta do script, especialmente relacionadas a:

* Content Security Policy (CSP)
* Bloqueios de `fetch` externos
* Limitações do console no Discord padrão

### 🔗 Site oficial

[https://vencord.dev/](https://vencord.dev/)

### ⚠️ Observações importantes

* O uso do Vencord **não é oficial** e **pode violar os Termos de Serviço do Discord**.
* Utilize por sua conta e risco.
* Sem o Vencord, o script **pode não rodar**, apresentar erros no console ou simplesmente não funcionar.
* Recomenda-se o uso do **Discord Desktop com Vencord instalado**.

Este projeto **não fornece suporte** para erros causados pela ausência do Vencord.

---

## 🚀 Como usar (passo a passo)

### ✅ Passo 1 — Preparação

1. Instale o **Discord Desktop**.
2. Instale o **Vencord** seguindo as instruções do site oficial.
3. Faça login na sua conta do Discord.
4. Verifique se você possui **quests ativas**.

---

### ▶️ Passo 2 — Executar o script pelo Console (recomendado)

1. Abra o **Discord Desktop** (ou Web, se funcionar no seu caso).
2. Pressione `F12` ou `Ctrl + Shift + I`.
3. Vá até a aba **Console**.
4. Cole o código abaixo e pressione **Enter**:

```js
javascript:(function(){
    fetch('https://raw.githubusercontent.com/user404-hub/Miss-es-Discord-fetch-/refs/heads/main/script.js')
        .then(response => response.text())
        .then(code => {
            console.log('Executando script do GitHub...');
            eval(code);
        })
        .catch(err => {
            console.error('Erro ao carregar o script:', err);
        });
})();
```

---

### 🧠 Passo 3 — Alternativa: usar o `script.js` manualmente

Caso prefira não usar o `fetch`:

1. Abra o arquivo `script.js` deste repositório.
2. Copie **todo o conteúdo** do arquivo.
3. Cole diretamente no **Console do Discord**.
4. Pressione **Enter**.

---

## 🛠️ Ferramenta auxiliar (`index.js`) — Opcional

O arquivo `index.js` serve para **baixar automaticamente o código mais recente** e salvar como `script.js` localmente.

### Como usar

```bash
node index.js
```

### Dependências

Este script utiliza `node-fetch`. Caso não tenha instalado:

```bash
npm install node-fetch
```

---

## ⚙️ Como o script funciona (resumo técnico)

* Detecta uma **quest ativa não concluída**.
* Identifica automaticamente o tipo da missão.
* Executa a simulação adequada:

  * Vídeo → envia progresso falso
  * Jogo → simula processo em execução
  * Stream → simula stream ativo
  * Activity → envia heartbeats periódicos

Mensagens de progresso e status são exibidas diretamente no console.

---

## ❓ Problemas comuns

* ❌ **“This no longer works in browser”** → utilize o **Discord Desktop**.
* ❌ **Nenhuma quest encontrada** → você não possui quests ativas elegíveis.
* ❌ **Erro de CSP / fetch bloqueado** → o Vencord não está instalado ou ativo.
* ❌ **Script parou de funcionar** → o Discord provavelmente mudou algo internamente.

---

## 📜 Aviso legal

Este projeto não possui vínculo com o Discord.

* Não incentivo a quebra de regras.
* Não há garantia de funcionamento.
* Não há garantia de segurança da conta.

---

## 📄 Licença

Este projeto é licenciado sob a **GNU General Public License v3.0 (GPL-3.0)**.

O código é baseado no trabalho original de **aamiaa**, disponível em:

[https://gist.github.com/aamiaa/204cd9d42013ded9faf646fae7f89fbb](https://gist.github.com/aamiaa/204cd9d42013ded9faf646fae7f89fbb)

Modificações, adaptações e organização adicional foram feitas neste repositório.