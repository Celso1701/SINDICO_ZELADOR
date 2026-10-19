# Síndico e Zelador — versão de TESTE (v1.15.1)

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
- **Novidades da v1.15.1**: **Inadimplência simples**, **advertências e multas** (com notificação em PDF), **prestação de contas** mensal para moradores, **telefones úteis e de emergência** (botão ligar), **edital, lista de presença e pauta** de assembleia em PDF e **registro de visitantes e prestadores** com relatório. Tutorial revisado: agora cobre estoque, fornecedores, reuniões, encomendas e chaves em todos os perfis que usam esses módulos. Manual atualizado.
- **Novidades da v1.14.0**: **Calendário anual** (os 12 meses, com vencimentos, manutenções, reuniões, obras, mandato e obrigações); **Obrigações e prazos** (lembretes trabalhistas e fiscais com modelos editáveis; só lembram, não calculam); **Passagem de plantão** entre zelador, síndico e presidente (situação do condomínio automática, "Li e ciente", WhatsApp e PDF); **composição da diretoria** (dados opcionais; RG e CPF ficam fora dos PDFs e dos arquivos de troca); novos módulos no **relatório mensal em PDF**. Manual e tutorial atualizados.
- **Novidades da v1.13.0**: **Estoque** com entrada/saída, data, responsável automático e relatório de movimentação (resumo e completo); botão **Fornecedores** no Início; **cadastro na hora** (tipo de documento, fornecedor e espaço de reserva podem ser criados sem sair da tela); **máscara de dinheiro** (9.999,99) em todos os valores; **senha em branco durante os 30 dias grátis**, níveis de senha por função e **aviso de fim de mandato** (30/15/7 dias); **calendário de reservas** com detalhe do dia e cores nas abas; **consulta de manutenções** (por data, prevista ou realizada); destaque em vermelho claro no texto do livro da ronda. Manual e tutorial atualizados.
- **Novidades da v1.12.0**: **Meus dados por função** (cada função tem a sua tela; o mandato do síndico e o do presidente ficam cada um na sua), com regras de quem altera os dados de quem; **senha individual** de síndico, zelador e presidente, pedida ao trocar de módulo (no manual e no tutorial com dados fictícios as senhas não são verificadas); ícones dos botões como marca d'água; laranja do zelador mais claro; aviso de direitos autorais em *Ajustes › Sobre esta cópia*.
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
