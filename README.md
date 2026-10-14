# Síndico e Zelador — versão de TESTE (v1.11.0)

Aplicativo de **arquivo único** para o dia a dia do condomínio, com três perfis: **Síndico**, **Zelador** e **Presidente da associação**. Funciona **sem internet** depois de aberto uma vez; os dados ficam **no próprio aparelho** (nada é enviado a servidores).

> Esta pasta contém **somente o aplicativo pronto** (arquivo `index.html` já protegido). O código-fonte e as ferramentas de licença ficam em repositório **privado** e **não** vão para cá.

## Publicar para os testes (GitHub Pages)

1. Crie um repositório (público, para usar o Pages grátis) e envie **todo o conteúdo desta pasta** (`git init`, `git add .`, `git commit`, `git push`).
2. No GitHub: **Settings › Pages › Source: GitHub Actions**. O workflow `Publicar no GitHub Pages` publica só `index.html`, `manifest.json`, `sw.js` e os ícones.
3. Abra o endereço (`https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`) no **celular**, em **HTTPS**: a câmera (QR), a instalação e as notificações dependem disso.
4. No celular: **Instalar app / Adicionar à tela inicial**.

## O que o prospect recebe

- **30 dias grátis** com tudo liberado, contados a partir do primeiro uso, em cada aparelho.
- **Manual com exemplos**: em *Ajustes › Manual › Abrir o manual com exemplos*, um condomínio **fictício** já preenchido (moradores, ocorrências, financeiro, vistorias, equipe, reservas). Nada é salvo e os dados reais não são tocados; o botão **Sair do manual** (barra roxa no topo) volta ao app normal.
- **Tutorial guiado com dados fictícios** para cada perfil (síndico, zelador, presidente), com "aprender fazendo": roda num condomínio de exemplo, **não grava nada** e tem o botão **Sair do tutorial** sempre visível (Ajustes › Ajuda › Ver tutorial guiado).
- **Novidades da v1.11.0** (Gestão): **Encomendas** (aviso por WhatsApp e baixa na retirada), **Obras, mudanças e prestadores**, **Chaves**, **Consumo** (água, energia e gás, com alerta de alta), **Enquetes** simples, **Veículos, vagas e pets** e **modelos prontos de vencimentos** (AVCB, para-raios, elevadores, extintores, gás, fachada, brigada…). O perfil **Zelador** agora é **laranja claro**.

## Roteiro rápido para o prospect (15 minutos)

1. Abra o link no celular e instale o app. Escolha o perfil e informe nome e condomínio.
2. Faça o **tutorial** (aparece sozinho) ou abra o **Manual com exemplos** em Ajustes.
3. No manual, abra **Ocorrências**, **Vistoria**, **Financeiro** e **Reservas** (veja a lista de espera).
4. Saia do manual e cadastre **3 moradores** e **1 ocorrência** de verdade.
5. Se tiver QR: Gestão › **Vistoria** › cadastre um local e **imprima/mostre o QR**; leia com a câmera.
6. Gere um **PDF** (Relatório do dia) e confira.
7. Envie a opinião: o que ficou claro, o que travou, o que faltou.

## Limites desta versão de teste (avise o prospect)

- Os dados ficam só no aparelho: **faça backup** (Ajustes › Exportar backup) antes de trocar de celular ou limpar o navegador.
- Sem sincronização na nuvem: síndico e zelador trocam **arquivos** (PDF/texto) pelo WhatsApp.
- Cada cópia leva um **ID de cópia** (Ajustes › Sobre esta cópia) que identifica a origem; repassar o app a terceiros não é permitido.
- Valores e condições do plano Pro mostrados no app são **provisórios**.
