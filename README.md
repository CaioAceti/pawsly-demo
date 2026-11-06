# Pawsly

Protótipo web acadêmico do Pawsly, aplicativo de acompanhamento da saúde e da rotina de animais de estimação. Esta versão corresponde à segunda iteração de construção (C2) da disciplina Práticas Profissionais em Desenvolvimento de Sistemas.

## Funcionalidades da Iteração 2

- Cadastro de pets com validação de nome obrigatório.
- Registro de eventos de saúde com validação de descrição, data não futura e próxima data posterior ao evento.
- Persistência local de pets e eventos usando `localStorage` do navegador.
- Filtro visual da carteira de saúde por categoria.
- Consulta da carteira, rotina diária, lembretes e assistente informativo mantidos da primeira iteração.

## Requisitos

- Um navegador moderno atualizado: Chrome, Edge, Firefox ou Safari.
- Não há dependências, banco de dados, instalação de pacotes ou credenciais necessários.

## Como executar

1. Baixe ou clone o repositório.
2. Abra o arquivo `index.html` no navegador.
3. Navegue pelos módulos usando o menu lateral.

Opcionalmente, para executar por servidor local com Node.js 18 ou superior:

```bash
npx serve .
```

Depois, abra no navegador o endereço exibido pelo comando, normalmente `http://localhost:3000`.

## Como verificar a Iteração 2

1. Em **Meus pets**, selecione **Adicionar pet**, informe um nome e salve. O novo pet aparece na lista e continua disponível após recarregar a página.
2. Em **Carteira de saúde**, selecione **Novo evento**, informe descrição, categoria e uma data válida. O evento aparece no topo da carteira e permanece após recarregar a página.
3. Use os filtros de categoria para restringir a visualização dos eventos.
4. Tente salvar um pet sem nome ou um evento sem descrição: o protótipo apresenta a validação correspondente.

## Estrutura

- `index.html`: interface e estrutura visual do protótipo.
- `app.js`: comportamentos implementados na Iteração 2.
- `video-demo.html` e `Pawsly_Demonstracao_Iteracao_1.webm`: registro da demonstração da Iteração 1.

## Controle de versão

- `v1`: linha de base da primeira iteração.
- `iteracao2`: branch que registra o desenvolvimento da segunda iteração.
- `v2`: versão consolidada da segunda iteração, após merge em `master`.
