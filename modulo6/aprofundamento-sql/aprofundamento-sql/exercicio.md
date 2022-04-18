### Exercício 1
a)R: Este comando ira deletar a coluna salario

```
ALTER TABLE Actor DROP COLUMN salary;
```

b)R: Este comando ira alterar a coluna genero para o sexo com 6 caracteres
```
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
c)R: Este comando ira alterar a coluna genero para o genero com 255 caracteres
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```
d)
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```


### Exercício 2
a)
```
UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";
```
b)
```
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
```
c)
```
UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";
```
d)R:o comando sera  aceito, mas o dado não é guardado na tabela Actor
```
UPDATE Actor
SET name = "thayna"
WHERE id = "55";
```



### Exercício 3
a)
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro"
```
b)
```
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000
```

### Exercício 4
a)
```
SELECT MAX(salary) FROM Actor
```
b)
```
SELECT MAX(salary) FROM Actor
```
c)
```
SELECT COUNT(*) FROM Actor WHERE gender = "female"
```
d)
```
SELECT SUM(salary) FROM Actor
```

### Exercício 5
a)R:o comando cria uma coluna genero e separa a quantidade de cada um deles em outra coluna.
b)

```
SELECT id, name FROM Actor
ORDER BY name DESC;
```
c)

```
SELECT * FROM Actor
ORDER BY salary;
```
d)

```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```
e)

```
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

### Exercício 6
a)
```
ALTER TABLE Movie ADD playing_limit_date DATE;
```
b)
```
ALTER TABLE Movie CHANGE rating rating FLOAT;
```
c)
```
UPDATE Movie
SET playing_limit_date = "2012-10-15"
WHERE id = "001";
UPDATE Movie
SET playing_limit_date = "2015-06-15"
WHERE id = "002";
```
d)R: o comando é aceito mas não é guardado na tabela
```
DELETE FROM Movie WHERE id = "001";
UPDATE Movie
SET synopsis = "sinopse atualizada"
WHERE id = "001";
```

