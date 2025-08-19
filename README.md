> This repository is archived because it will not receive updates.

# Repository Proposal

A professor from my University asked his students to create a repository for building an Angular project with an architecture for Angular projects. Plus, it's necessary to explain the reasons in the `README.md` file. 

## AgileTaskManager

A aplicação será modularizada, para um melhor aproveitamento dos componentes, seguir padrões do lazy loading e facilitar a organização de rotas.

### Rotas

#### Profile

##### app/profile/

mostra perfil logado no sistema.

##### app/profile/create/

cria um usuário para o sistema.

##### app/profile/edit/

edita informações do usuário logado.

#### Login

##### app/login/

para logar no sistema.

##### app/login/reset

para recuperar acesso do usuário.

#### Dashboard

##### app/dashboard

será a home do sistema onde terá um overview das tarefas.

##### app/dashboard/:id

mostra informação de uma tarefa específica.

##### app/dashboard/:id/:edit

mostra informação de uma tarefa e habilita a edição da mesma.

### Componentes

Vou manter componentes específicos dentro dos seus módulos, e os componentes compartilhados dentro do módulo *Shared*

#### Shared

Módulo responsável por compartilhar todos **componentes**,**diretivas**, **pipes** e **services** que serão compartilhados entre todos os componentes. Por exemplo um componente para um range de datas onde posso utilizar em qualquer lugar no sistema para conseguir um range.

##### BaseComponent

Este componente estará responsável por manter o algumas funções e valores que poderão ser utilizadas em qualquer componente. Por exemplo, ele incluirá funções que exibiram tooltips enviar o feedback para o usuário.

##### Card

esse componente estará responsável pela exibição das tarefas. Compõe um titulo e uma data.

### Serviços

Os serviços estarão na pasta *services* sendo separados por responsabilidade. Por exemplo o controle de criação e alteração de um usuário estará em uma pasta chamada *user*.

#### UserService

responsável por se comunicar com o backend e resgatar informações do usuário

#### CardService

responsável por se comunicar com o backend e resgatar informações dos tarefas dos usuários.  
