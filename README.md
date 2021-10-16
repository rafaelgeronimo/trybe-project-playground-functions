![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

![](https://socialify.git.ci/rafaelgeronimo/trybe-project-playground-functions/image?description=1&descriptionEditable=%5BTrybe%20Project%5D%20Playground%20Functions&font=Bitter&language=1&owner=1&pattern=Circuit%20Board&theme=Light)

## 📒 Sobre

Projeto [Trybe](https://www.betrybe.com/) de JavaScript para colocarmos em prática o que foi estudado durante o bloco de introdução à JavaScript e Lógica de Programação.

## 🛠 Instalação
Não é necessário instalar o projeto. Todas as funções desenvolvidas estão no arquivo `src/challenges.js`.

## 💻Tecnologias
Este projeto foi desenvolvido com:

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
## Requisitos do projeto

<details>
  <summary>
    1 - Usando o operador <kbd>&&</kbd>
  </summary>
  <ul>
    <li>
      JavaScript possui um operador lógico <kbd>&&</kbd>, o qual recebe dois valores e retorna <kbd>true</kbd> se ambos os valores são verdadeiros, e retorna <kbd>false</kbd> se algum dos valores não o for.
      Considerando isso, crie uma função chamada `compareTrue` que, ao receber dois booleanos:
      <li>
        Retorne <kbd>true</kbd> se ambos os valores são verdadeiros;
      </li>
      <li>
        Retorne <kbd>false</kbd> se um ou ambos os parâmetros forem falsos.
      </li>
      Faça a função utilizando o operador <kbd>&&</kbd>.
    </li>
  </ul>
</details>
<details>
  <summary>
    2 - Área do triângulo
  </summary>
  <ul>
    <li>
      Escreva uma função com o nome <kbd>calcArea</kbd> que receba um valor de base (chamado <kbd>base</kbd>) e outro de altura (chamado <kbd>height</kbd>) de um triângulo e retorne o cálculo da sua área.
      Lembre-se que a área de um triângulo é calculada através da seguinte fórmula: (base * altura) / 2.
    </li>
  </ul>
</details>
<details>
  <summary>
    3 - Dividindo a frase
  </summary>
  <ul>
    <li>
      Escreva uma função com o nome <kbd>splitSentence</kbd>, a qual receberá uma string e retornará uma array de strings separadas por cada espaço na string original.
      Exemplo: se a função receber a string <kbd>"go Trybe"</kbd>, o retorno deverá ser <kbd>['go', 'Trybe']</kbd>.
    </li>
  </ul>
</details>
<details>
  <summary>
    4 - Concatenação de strings
  </summary>
  <ul>
    <li>
      Escreva uma função com o nome <kbd>concatName</kbd> que, ao receber uma array de strings, retorne uma string com o formato <kbd>'ÚLTIMO ITEM, PRIMEIRO ITEM'</kbd>, independente do tamanho da array.
      Isso quer dizer que, caso o parâmetro passado para <kbd>concatName</kbd> seja a Array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], a função deverá retornar <kbd>Paolillo, Lucas</kbd>.
    </li>
  </ul>
</details>
<details>
  <summary>
    5 - Pontos no futebol
  </summary>
  <ul>
    <li>
    Escreva uma função com o nome <kbd>footballPoints</kbd> que receba o número de vitórias (esse parâmetro deverá se chamar <kbd>wins</kbd>) e o número de empates (esse parâmetro deverá se chamar <kbd>ties</kbd>) e retorne a quantidade de pontos que o time marcou em um campeonato.
    Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.
    </li>
  </ul>
</details>
<details>
  <summary>
    6 - Repetição do maior número
  </summary>
  <ul>
    <li>
      Escreva uma função chamada <kbd>highestCount</kbd> que, ao receber uma array de números, retorne  a quantidade de vezes que o maior deles se repete.
      Exemplo: caso o parâmetro de <kbd>highestCount</kbd> seja uma array com valores <kbd>[9, 1, 2, 3, 9, 5, 7]</kbd>, a função deverá retornar <kbd>2</kbd>, que é a quantidade de vezes que o número <kbd>9</kbd> (maior número do array) se repete.
    </li>
  </ul>
</details>
<details>
  <summary>
    7 - Caça ao rato
  </summary>
  <ul>
    <li>
      Imagine que existem dois gatos, os quais chamaremos de <kbd>cat1</kbd> e <kbd>cat2</kbd>, e que ambos estão atrás de um rato chamado <kbd>mouse</kbd>. Imagine que cada um dos três animais está em uma posição representada por um número.
      Sabendo disso, crie uma função chamada <kbd>catAndMouse</kbd> que, ao receber a posição de <kbd>mouse</kbd>, <kbd>cat1</kbd> e <kbd>cat2</kbd>, ,<strong>nessa ordem</strong>, calcule as distâncias entre o rato e os gatos e retorne qual dos felinos irá alcançar o rato primeiro (sendo aquele que estará mais perto).
      Exemplo: caso o gato <kbd>cat2</kbd> esteja a 2 unidades de distância do rato, e <kbd>cat1</kbd> esteja a 3 unidades, sua função deverá retornar <kbd>"cat2"</kbd>.
      Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string <kbd>"os gatos trombam e o rato foge"</kbd>.
    </li>
  </ul>
</details>
<details>
  <summary>
    8 - FizzBuzz
  </summary>
  <ul>
    <li>
      Crie uma função chamada <kbd>fizzBuzz</kbd> que receba uma array de números e retorne uma array da seguinte forma:
      - Para cada número da Array que seja divisível apenas por 3, apresente uma string <kbd>"fizz"</kbd>;
      - Para cada número da Array que seja divisível apenas por 5, apresente uma string <kbd>"buzz"</kbd>;
      - Caso o número seja divisível por 3 e 5, retorne a string <kbd>"fizzBuzz"</kbd>;
      - Caso o número não possa ser dividido por 3 nem por 5, retorne a string <kbd>"bug!"</kbd>;
      Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar <kbd>["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"]</kbd>.
    </li>
  </ul>
</details>
<details>
  <summary>
    9 - Codifique e Decodifique
  </summary>
  <ul>
    <li>
      Crie duas funções: a primeira deverá se chamar <kbd>encode</kbd> e, ao receber uma string como parâmetro, deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:
      <pre>
        a -> 1 \
        e -> 2 \
        i -> 3 \
        o -> 4 \
        u -> 5
      </pre>
      Ou seja, caso o parâmetro de <kbd>encode</kbd> seja <kbd>"hi there!"</kbd>, o retorno deverá ser <kbd>"h3 th2r2!"</kbd>.
      A segunda função deverá se chamar <kbd>decode</kbd> e faz o contrário de <kbd>encode</kbd> - ou seja, recebe uma string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de <kbd>decode</kbd> seja <kbd>"h3 th2r2!"</kbd>, o retorno deverá ser <kbd>"hi there!"</kbd>).
    </li>
  </ul>
</details>
<details>
  <summary>
    10 - Lista de tecnologias
  </summary>
  <ul>
    <li>
      Crie uma função que recebe um array de nomes de tecnologias que você quer aprender. Essa função deve receber também um segundo parâmetro chamado <kbd>name</kbd> com um nome.
      Para cada tecnologia no array, crie um objeto com a seguinte estrutura:
      <pre>
      {
        tech: "NomeTech",
        name: name
      }
      </pre>
      Estes objetos devem ser inseridos em uma nova lista em ordem crescente a partir do campo <kbd>tech</kbd> no objeto.
      A saída da sua função deve ser uma lista de objetos ordenada pelo campo <kbd>tech</kbd> dos objetos com o formato acima.
      Exemplo:
      <pre>
      Entradas da função:
      ["React", "Jest", "HTML", "CSS", "JavaScript"]
      "Lucas"
      // Saída:
      [
        {
          tech: "CSS",
          name: "Lucas"
        },
        {
          tech: "HTML",
          name: "Lucas"
        },
        {
          tech: "JavaScript",
          name: "Lucas"
        },
        {
          tech: "Jest",
          name: "Lucas"
        },
        {
          tech: "React",
          name: "Lucas"
        }
      ]
      </pre>
      Caso o array venha vazio sua função deve retornar 'Vazio!'
    </li>
  </ul>
</details>

**Bônus**
<details>
  <summary>
    11 - Número de telefone
  </summary>
  <ul>
    <li>
    Crie uma função chamada <kbd>generatePhoneNumber</kbd> que receba uma array com 11 números e retorne um número de telefone, respeitando parênteses, traços e espaços.
    Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], <kbd>generatePhoneNumber</kbd> deverá retornar <kbd>(12) 34567-8901</kbd>.
    - Se a função receber um array com tamanho diferente de 11, a mesma deve retornar <kbd>"Array com tamanho incorreto."</kbd>.
    - Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, <kbd>generatePhoneNumber</kbd> deverá retornar a string <kbd>"não é possível gerar um número de telefone com esses valores"</kbd>.
    </li>
  </ul>
</details>
<details>
  <summary>
    12 - Condição de existência de um triângulo
  </summary>
  <ul>
    <li>
    Um triângulo é composto de três linhas: <kbd>lineA</kbd>, <kbd>lineB</kbd> e <kbd>lineC</kbd>. Crie uma função chamada <kbd>triangleCheck</kbd> que deverá receber as três linhas como parâmetro e retornar se é possível formar um triângulo com os valores apresentados de cada linha
    Para tanto, tenha em mente algumas considerações:
    - Para que seja possível formar um triângulo, é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.
    - Para obter o valor absoluto de um número em JavaScript, pesquise pela função <kbd>Math.abs</kbd>.
    - O retorno da sua função deverá ser um booleano.
    Exemplo: o retorno de <kbd>triangleCheck(10, 14, 8)</kbd> deverá ser <kbd>true</kbd>.
    </li>
  </ul>
</details>
<details>
  <summary>
    13 - Bem vindo ao Bar da Trybe!
  </summary>
  <ul>
    <li>
    Segundo as regras desse bar, a cada bebida deve-se beber um copo de água para que não se tenha ressaca.
    Crie a função <kbd>hydrate</kbd> que recebe uma string, e retorne a sugestão de quantos copos de água você deve beber. Exemplos:
    <pre>
    String recebida:
      "1 cerveja"
    String retornada:
      "1 copo de água"
    </pre>
    <pre>
    String recebida:
      "1 cachaça, 5 cervejas e 1 copo de vinho"
    String retornada:
      "7 copos de água"
    </pre>
    <pre>
    String recebida:
      "1 cachaça, 5 cervejas e 1 copo de vinho"
    String retornada:
      "7 copos de água"
    </pre>
    <strong>Notas</strong>
    - Para simplificar, consideraremos que qualquer coisa com um número à frente é uma bebida **e que a sua string sempre virá com o formato quantidade (em número) + tipo da bebida.
    - O número na frente de cada bebida está no intervalo entre 1 e 9.
    <strong>Dica:</strong> pesquise por algo similar a <kbd>get all integers inside a string js</kbd>.
    </li>
  </ul>
</details>
