Projeto desenvolvido para conclusão do bloco 17 do módulo de front-end da Trybe.
Aqui foi desenvolvida uma aplicação React com requisição à api externa que retorna uma lista de planetas da série famosa de filmes Star Wars. Foi trabalhado alteração nos estados globais da aplicação com op uso de Context API e componentes funcionais.
O projeto foi desenvolvido seguindo os requisitos a seguir:
1 - Faça uma requisição para o endpoint `/planets` da API de Star Wars e preencha uma tabela com os dados retornados, com exceção dos da coluna `residents`.
API: `https://swapi-trybe.herokuapp.com/api/planets/`
A tabela deve ter uma primeira linha com os headers e as demais com as informações de cada campo.

2 - Filtre a tabela através de um texto, inserido num *campo de texto*, exibindo somente os planetas cujos nomes incluam o texto digitado.

3 - Crie um filtro para valores numéricos.

Ele funcionará com três seletores:

  - O primeiro deve abrir um dropdown que permita a quem usa selecionar uma das seguintes colunas: `population`, `orbital_period`, `diameter`, `rotation_period` e `surface_water`. Deve ser uma tag `select` com a propriedade `data-testid='column-filter'`;
  - O segundo deve determinar se a faixa de valor será `maior que`, `menor que` ou `igual a` o numero que virá a seguir. Uma tag `select` com a propriedade `data-testid='comparison-filter'`;
  - O terceiro deve ser uma caixa de texto que só aceita números. Essa caixa deve ser uma tag `input` com a propriedade `data-testid='value-filter'`;
  - Deve haver um botão para acionar o filtro, com a propriedade `data-testid='button-filter'`.

A combinação desses três seletores deve filtrar os dados da tabela de acordo com a coluna correspondente e com os valores escolhidos. Por exemplo:
  - A seleção `population | maior que | 100000` - Seleciona somente planetas com mais de 100000 habitantes.
  - A seleção `diameter | menor que | 8000` - Seleciona somente planetas com diâmetro menor que 8000.

4 - Implemente múltiplos filtros numéricos.

Por exemplo, você pode filtrar pelos planetas que possuam _Orbital period > 400_  **e** _Diameter < 10000_.

5 - Não utilize filtros repetidos.

Caso um filtro seja totalmente preenchido, um novo filtro de valores numéricos deve ser carregado. Este novo filtro não deve incluir quaisquer colunas que já tenham sido selecionadas em filtros de valores numéricos anteriores. Caso todas as colunas já tenham sido inclusas em filtros anteriores, não deve ser carregado um novo filtro. 

6 - Apague um filtro de valor numérico ao clicar no ícone de `X` de um dos filtros e apague todas filtragens numéricas simultaneamente ao clicar em outro botão de `Remover todas filtragens`.

O `button` com o ícone de `x` deve existir em cada filtro de valores numéricos.

A coluna que este filtro selecionava deve passar a ficar disponível nos dropdowns dos demais filtros já presentes na tela. 

7 - Ordene as colunas de forma ascendente ou descendente.
![Gravação de tela de 23-05-2022 21_07_34](https://user-images.githubusercontent.com/86837443/169923581-a49975e4-c3a4-4e57-be26-e00063e08578.gif)


