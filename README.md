# Projeto de E-COMMERCE de teste
## Front end escrito em Angular 9
## Backend escrito em Java usando Spring Boot, Spring Data e Spring Security Oauth para Autenticação e Autorização

### Para rodar esse projeto, você vai precisar de:
- Um banco de dados MYSQL (Instalado direto ou rodando em container. Só precisa se atentar para abrir a porta 3306 para ele ser acessado de fora do container)
- NPM & Node instalados
- JRE Instalado

## Backend
Para subir o banco com dados presentes, crie um database chamado 'ecomm_services'. Execute o arquivo 'import.sql' e pronto. O banco já vai possui um usuario e senha:
- usuario1@gmail.com
- 123456

E 5 Produtos pré cadastrados.

Mas você pode também criar um usuário no sistema

Após executar o script sql no banco, acesse a pasta ecomm.services.
Se você estiver no windows, execute o comando `.\mvnw.cmd clean install`
Se for no linux, `./mvnw clean install`
Após isso, ainda na pasta do projeto de services, execute o comando `java -jar target/ecomm.services-0.0.1-SNAPSHOT.jar`. Espere o spring boot iniciar e pronto. O backend já está configurado



## Frontend

Acesse a pasta ecomm-front, e execute o comando `npm install` (se você tiver o yarn instalado, execute `yarn install`).
Aguarde os pacotes serem baixados.

Após isso, execute um `npm start`. Acesso, através do seu navegador url http://localhost:4200. Se tudo der certo, você já vai entrar na tela inicial do meu e-commerce já com alguns produtos carregados para você.


OBS: Todos os produtos do site são fictícios. Assim como a finalização de um pedido.