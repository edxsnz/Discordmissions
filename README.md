# Automação de Quests do Discord

> **Aviso:** Este projeto é apenas educacional e pode violar os [Termos de Serviço do Discord](https://discord.com/terms). Use por sua conta e risco.

---

## O que esse script faz?

Completa automaticamente as **Quests do Discord** sem você precisar jogar ou assistir nada. Suporta os seguintes tipos de quest:

| Tipo | Status |
|------|--------|
| ▶️ Assistir vídeos | ✅ Funcionando |
| 🎮 Jogar no PC | ✅ Funcionando |
| 📺 Fazer stream no PC | ✅ Funcionando |
| 🧩 Jogar Atividades | ⚠️ Pode apresentar erros |

---

## Requisitos

- **Discord Desktop** — a versão do navegador não funciona
- **Vencord** — modificação gratuita do Discord, necessária para o script rodar

---

## Passo 1 — Instalar o Vencord

1. Acesse **[vencord.dev](https://vencord.dev/)** e baixe o **VencordInstaller.exe**
2. Feche o Discord, execute o instalador e clique em **Install**
3. Abra o Discord novamente — o Vencord já estará ativo

> **Atenção:** O Discord atualiza automaticamente e costuma **desinstalar o Vencord** nessas atualizações. Se o script parar de funcionar do nada, basta acessar o site e reinstalar.

---

## Passo 2 — Aceitar as Quests

1. Abra o Discord Desktop
2. Vá em **Mensagens Diretas** → **Missões**
3. Aceite as quests disponíveis e confirme que há alguma ativa

---

## Passo 3 — Executar o script

1. No Discord, pressione **`Ctrl + Shift + I`** para abrir o console
2. Clique na aba **Console**
3. Cole o código abaixo e pressione **Enter**

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

Acompanhe o progresso pelas mensagens que aparecem no console. **Não feche o Discord** enquanto o script estiver rodando.

---

## Solução de problemas

| Problema | Solução |
|----------|---------|
| `"This no longer works in browser"` | Use o Discord Desktop, não o navegador |
| `"You don't have any uncompleted quests!"` | Acesse **Missões** e aceite uma quest primeiro |
| Erro de CSP ou fetch bloqueado | Reinstale o Vencord em [vencord.dev](https://vencord.dev/) |
| Script parou do nada | O Discord atualizou e desinstalou o Vencord — reinstale |
| Nenhuma mensagem no console | Verifique se está na aba **Console** e não em outra |
| Quest de Atividade 🧩 dá erro | Problema conhecido — mesmo com Vencord ativo pode falhar |
| Tudo certo mas ainda dá erro | O script deste repositório pode estar desatualizado em relação ao código original — aguarde atualizações |

---

## Licença e créditos

GPL-3.0 — baseado no trabalho original de **aamiaa**:
[gist.github.com/aamiaa](https://gist.github.com/aamiaa/204cd9d42013ded9faf646fae7f89fbb)