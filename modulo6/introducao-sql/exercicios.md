### Exercício 1
a)
VARCHAR = strings de no máximo n caracteres
PRIMARY KEY= primeira chave
FLOAT=números não inteiros
NOT NULL= não deve ser nula
DATE= representa uma data


b) o comando SHOW TABLES abre uma informação da minha database adicionada, já o comando SHOW TABLES abre o nome das tabelas criadas.

c) o comando DESCRIBE Actor mostra uma tabela com descrições , descrevendo qual o tipo , se é null , se possui chava , default e extras.

### Exercício 2

a)```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```

b)
```
Error Code: 1062 Duplicate entry '002' for key 'PRIMARY'
```
O erro ocorreu por já possuir uma outra entrada com essa chave.

c) 
```
Error Code: 1136 Column Count doesn't match value count at now 1
```
Contagem da coluna não corresponde a quantidade de itens adicionados
correção:

```
INSERT INTO Actor (id, name, salary,birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

```
d) 
```
Error Code: 1364 Field 'name' doesn't have a default value
```
Campo "name" não tem um valor definido

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "mariana fernandes",
  400000,
  "1949-04-18", 
  "male"
);

```

e)  
```
Error Code: 1292 Incorrect date value : '1950' for column 'birth_date' at row 1
```
Valor da data está incorreto, pois não foi adicionado entre aspas

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

```

f)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "João Guilherme Ávila",
  1500000,
  "2002-02-01", 
  "male"
  );
```

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Jeniffer Nascimento",
  1200000,
  "1993-06-29", 
  "female"
  );
```

### Exercício 3
a)
```
SELECT * FROM Actor WHERE gender = "female";
```

b)
```
SELECT salary from Actor WHERE name = "Tony Ramos";
```

c)
```
SELECT * FROM Actor WHERE gender = "invalid";
```
não apareceu nenhum resultado pois não tem nenhum valor invalid adicionado

d)
```
SELECT id, name, salary FROM Actor WHERE salary < 500000;
```


e)

```
Error Code: 1054 unknown column 'home' in field list'
```
O Valor "nome" não existe na lista 

```
SELECT id, name from Actor WHERE id = "002"

```




### Exercício 4

a) selecionar todos os campos nome começam com "A" ou 'J' e cujos salários sejam maior que  R$300.000

b)
```
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

```

c)

```
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

```

d)
```
SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;

  ```

### Exercício 5

a)  ```

CREATE TABLE Movie (
		id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
)

 ```

 b)

 ```
  INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06",
  7
);

 ```

 c)

 ```
  INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27",
  10
);

 ```

 d)

 ```
  INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02",
  8
);

 ```

 e)

 ```
   INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "004", 
  "Cidade de Deus",
  "Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. Amedrontado com a possibilidade de se tornar um bandido, Buscapé é salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É por meio de seu olhar atrás da câmera que ele analisa o dia a dia da favela em que vive, onde a violência aparenta ser infinita.",
  "2002-08-30",
  10
);

 ```


### Exercício 6

a)
```
SELECT id, title, rating FROM Movie WHERE id = "001";
```
b)
```
SELECT * FROM Movie WHERE name = "Deus é Brasileiro";
```
c)
```
SELECT id, title, synopsis FROM Movie WHERE rating > 7;
```

### Exercício 7

a)
```
SELECT * FROM Movie
WHERE title LIKE "%vida%";
```
b)
```
SELECT * FROM Movie
WHERE title LIKE "%sedutora%" OR
      synopsis LIKE "%sedutora%";
```
c)
```
SELECT * FROM MOVIE
WHERE release_date < "2022-04-16";
```
d)
```
SELECT * FROM MOVIE
WHERE release_date < "2022-04-16" AND 
      (title LIKE "%vida%" OR
      synopsis LIKE "%vida%") AND rating > 7;
```