# HATHY® — Catálogo de produtos automotivos

Site em **HTML, CSS e JavaScript**, pronto para hospedagem estática na **Hostinger**. Sem Flutter, Parse, banco de dados, instalação de pacotes ou etapa de compilação.

## Publicação rápida

1. Baixe `downloads/hathy-hostinger.zip` deste repositório.
2. No gerenciador de arquivos da hospedagem, abra a pasta pública do domínio, normalmente `public_html`.
3. Faça backup de um eventual site anterior antes de substituí-lo.
4. Envie e extraia o ZIP nessa pasta. `index.html`, `styles.css`, `app.js` e `assets/` precisam ficar diretamente em `public_html`, sem uma pasta extra intermediária.
5. Acesse o domínio em HTTPS e teste navegação, fotos e WhatsApp.

Leia [HOSTINGER.md](HOSTINGER.md) para os detalhes. O ZIP contém somente os arquivos publicáveis. Não envie scripts, documentação ou arquivos Git à pasta pública.

## Estrutura

- `public_html/index.html`: apresentação, produtos, cards com frente/verso, informações técnicas, FAQ e contatos.
- `public_html/styles.css`: layout responsivo, preto/grafite e degradê âmbar/coral, giro dos cards e suporte a movimento reduzido.
- `public_html/app.js`: busca, filtros, giro acessível dos cards, detalhes, galeria e links de WhatsApp.
- `public_html/assets/`: fotografias originais fornecidas e favicon provisório.
- `scripts/configure-domain.mjs`: configuração opcional de canonical, sitemap e URL de compartilhamento após definição do domínio.
- `downloads/hathy-hostinger.zip`: versão pronta para envio à hospedagem.

## Manutenção

O catálogo usa o mesmo identificador em `data-id` dos cards no HTML e no objeto `products` do JavaScript. Atualize ambos ao adicionar produtos. O conteúdo principal permanece no HTML para leitura sem execução de JavaScript e indexação.

Edite fotos em `assets/`. O telefone está na constante `WHATSAPP` e nos links de fallback do HTML. Hoje é **5547996401236**. O WhatsApp abre com uma mensagem; o visitante decide enviá-la. O site não envia mensagens sozinho.

Após alterar `public_html`, atualize também o ZIP antes de distribuí-lo. Basta compactar o conteúdo interno dessa pasta, incluindo `.htaccess`; não compacte a pasta pai.

## Conteúdo que depende do cliente

- O logotipo oficial ainda será fornecido. A marca tipográfica e o favicon são provisórios.
- Fotografias e medidas vêm dos materiais fornecidos. A galeria do modelo redondo mostra referências de formatos e não certifica aplicação.
- Nomes de veículos vieram dos links comerciais. A leitura dos anúncios foi bloqueada; a compatibilidade continua sob consulta por ano, versão e sensor.
- Não foi recebida foto da embalagem de 5 ml. A composição tipográfica mostra apenas a quantidade e não pretende representar embalagem.
- Preço, estoque, pagamento, prazo e entrega são combinados no WhatsApp; não há promessas inventadas.
- CNPJ reproduzido conforme informado: 27.000.187/0001-80. Não houve verificação cadastral.

## Verificações

Na primeira versão foram testados no navegador: busca sem acento, resultados vazios, filtros, modal, galeria, links de orçamento e largura de celular sem transbordamento horizontal. A revisão escura e o giro dos cards tiveram sintaxe e estrutura verificadas; a nova inspeção visual foi bloqueada pelo ambiente de prévia. Conferir o acabamento no navegador após publicar na Hostinger.

Nenhum backend, cookie próprio, formulário de captura ou ferramenta de análise está integrado. O site não depende da hospedagem de prévia utilizada durante a criação.
