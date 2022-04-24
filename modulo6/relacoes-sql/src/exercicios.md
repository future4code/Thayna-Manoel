### Exercício 1
a) Chave estrangeira, ou Foreign Key (FK), ou ainda chave externa é a chave que permite a referência a registros oriundos de outras tabelas. Ou seja, é o campo ou conjunto de campos que compõem a chave primária de uma outra tabela.

b) 
```
CREATE TABLE Rating(
id INT PRIMARY KEY,
comment VARCHAR(500)
rate FLOAT NOT NULL
movie_id VARCHAR(255)
FOREIGN KEY(movie_id) REFERENCES movie_id
);
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
);
```
c) não consegui adicionar uma linha poisé não foi encontrado um id

d)
```
ALTER TABLE Movie DROP COLUMN rating;
``` 

e)



### Exercício 2
a) uma tabela que possui id de um filme e id de um ator

b) 
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"004",
"001"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"004",
"002"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"004",
"003"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"004",
"004"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"004",
"005"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"004",
"006"
);
```

c)não consegui adicionar uma linha pois não foi encontrado um id

d)não é possivel apagar o ator pois sua relação ainda existe 


### Exercício 3

a) busca info das duas tabelas de acordo com a relaçoes estabelecidas , já o ON sig uma condicional
b)
```
SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
```