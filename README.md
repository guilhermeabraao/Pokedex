![pokebola](https://user-images.githubusercontent.com/112726349/222795805-6d447082-0a96-4e32-b5da-aec5f8457eca.jpg)


# Pokedex
Projecto com interface de pokedex, fazendo requisições http para uma API buscando informações do pokemon usando como parâmetro o ID.


# Interface geral
![pokedex](https://user-images.githubusercontent.com/112726349/222797937-b4397cb5-0fb2-4572-937f-3c5cce90075d.png)


# Input do ID
![pokedex](https://user-images.githubusercontent.com/112726349/222798142-9f64c737-613e-4619-8a17-272667ff7c2b.png)

Neste input é possível passar um ID personalizado ou aleatório conforme os botões mostram na imagem acima.

Ao digitar um valor, o input chama uma função que não permite que o valor seja menor de 1 ou maior que 649. Este limite máximo se deve ao pokemon de maior ID que possui sprites em gif no retorno da API.

Ao clicar em 'Random' o botão chamará uma função que também atribiu um valor entre 1 e 649 ao input.
Ambos os botões 'Search' e 'Random' chamam a função que enviará o request HTTP que retornará as informações do pokemon com o mesmo ID passado como parâmetro na requisição.

# Exemplo de resultado

![pokedex](https://user-images.githubusercontent.com/112726349/222801365-2fe41bf8-847a-42b4-a568-406eab861200.png)
