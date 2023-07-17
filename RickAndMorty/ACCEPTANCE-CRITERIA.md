# Critérios de aceite

## Sobre
Sua aplicação deve consumir dados da [The Rick and Morty API](https://rickandmortyapi.com/documentation).

A aplicação consiste em duas páginas:
- Home/Characters, que contém a listagem da primeira página dos personagens sem filtro.
  - Nessa página, os filtros de "Name", "Species", "Gender", "Status" deverão funcionar em conjunto. Com exceção do filtro por nomes que deverá ser um texto livre, os demais filtros são um dropdown e as opções de seleção podem ser encontradas na documentação da  API. 
- Characters detail, que exibe os detalhes de um personagem ao clicar sobre o card.

## Essenciais
- [ ] Utilização do Angular.
- [ ] Fidelidade do layout.
- [ ] Responsividade: foi realizado o protótipo da aplicação também em mobile, o mesmo deve ser seguido.
- [ ] Usabilidade: a aplicação deve informar o usuário quando requisições a API são realizadas e todas as requisições devem ser realizadas (não deve ser utilizado de nenhum cache).


## Bônus
- [ ] Utilização do [Angular Material](https://material.angular.io/) para o desenvolvimento dos componentes.
- [ ] Criação da página de "Locations" e todas suas funcionalidades conforme layout do protótipo.
- [ ] Melhorias visuais no Layout proposto.
- [ ] Criação de componentes reútilizavéis.
- [ ] Paginação complexa, contendo: página atual, número da próxima página e página anterior (se houver) e total de páginas.