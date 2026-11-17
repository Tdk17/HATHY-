# Publicar a HATHY na Hostinger

O projeto é um site estático. É necessário um plano que permita publicar arquivos de site. Não depende de Node, PHP, banco ou Parse em produção.

## Enviar os arquivos

No gerenciador de arquivos da hospedagem, localize a pasta pública associada ao domínio. Em hospedagens com `public_html`, envie e extraia `downloads/hathy-hostinger.zip` diretamente nela. A estrutura final deve conter:

- `public_html/index.html`
- `public_html/styles.css`
- `public_html/app.js`
- `public_html/assets/`
- `public_html/robots.txt`
- `public_html/.htaccess`

O arquivo `.htaccess` é oculto em alguns gerenciadores. Inclui apenas página inicial, cabeçalhos e compressão quando suportados. Não há redirecionamentos para outro host.

Faça backup antes de substituir um site existente. Se já houver `index.php` ou outra página inicial, confira qual arquivo a hospedagem está servindo; não apague arquivos sem identificar sua função.

## Domínio e Google

O domínio definitivo ainda não foi informado, portanto não foi inserida uma URL fictícia no site.

Quando ele for definido, opcionalmente execute no computador, na pasta do projeto:

```bash
node scripts/configure-domain.mjs https://www.seudominio.com.br
```

Substitua o exemplo pelo domínio HTTPS real. Esse script local cria `sitemap.xml`, atualiza `robots.txt` e adiciona canonical e `og:url`. Não precisa instalar Node no servidor. Publique novamente a pasta `public_html` após executá-lo.

Ative HTTPS na hospedagem, escolha uma versão única do endereço com ou sem `www` e cadastre o domínio no Google Search Console. Envie o sitemap depois da configuração. Isso facilita rastreamento, mas não garante posições nem tráfego. Não há promessa de que todas as concessionárias encontrarão o site.

## Conferência depois do envio

- Abrir no computador e no celular.
- Buscar por Mégane, A3 ou Fluence e testar o resultado vazio.
- Girar cada card, voltar à foto e abrir detalhes.
- Conferir galeria, FAQ e navegação.
- Abrir os botões de orçamento e conferir número e produto na mensagem antes de enviar.
- Revisar logotipo, CNPJ, medidas e aplicações com o cliente.

## Atualizações

Edite HTML, CSS, JavaScript ou imagens e envie os arquivos atualizados. Limpe o cache do navegador ao conferir mudanças. Para voltar a uma versão anterior, recupere o backup ou os arquivos do commit correspondente no GitHub.
