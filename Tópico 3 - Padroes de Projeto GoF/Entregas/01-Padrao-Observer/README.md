# Padrão de Projeto GoF: Observer (Comportamental)

## 👥 Grupo de Especialistas (Turma 10h)
- **Pedro Hamamoto da Palma** — Nº USP: 16818280
- **Nicolas José Mota** — Nº USP: 16990096
- **Rafael Feltrim** — Nº USP: 15942812

---

## 📌 Ficha Técnica do Padrão

### 1. Nome do Padrão
**Observer** (também conhecido como *Dependents*, *Publish-Subscribe*).

### 2. Propósito
Definir uma dependência um-para-muitos entre objetos, de maneira que quando um objeto muda de estado, todos os seus dependentes são notificados e atualizados automaticamente.

### 3. Problemas que o padrão resolve
- **Polling:** O cliente consultar repetidamente o estado do produtor/servidor para saber se algo mudou (desperdício de CPU e I/O).
- **Spam / Acoplamento Direto:** O produtor ter que conhecer diretamente todos os clientes concretos e enviar dados que eles talvez não queiram receber.

### 4. Solução Arquitetural
- **Subject / Publisher:** Mantém a lista de observadores (`List<Observer>`) e oferece métodos para registrar (`attach`), remover (`detach`) e notificar (`notifyObservers`).
- **Observer / Subscriber:** Interface que define o método de atualização (`update()`).
- **ConcreteObserver:** Implementa a interface e reage à mudança de estado do sujeito.

### 5. Aplicações Práticas
- Notificação de e-commerce (*"Avise-me quando este produto chegar"*).
- Feeds e Notificações de Redes Sociais.
- Assinaturas de Newsletters e Feeds RSS.
- Sistemas orientados a eventos (Event Listeners no Frontend / React / Node.js EventEmitter / RxJS / Swing).

### 6. Benefícios
- **Princípio Aberto/Fechado (OCP):** Novos observadores podem ser criados sem alterar o código do Subject.
- **Acoplamento Fraco:** O Subject só conhece a interface abstrata `Observer`.
- Dinamismo: Assinaturas podem ser feitas ou canceladas em tempo de execução.

### 7. Trade-offs e Desvantagens
- **Ordem Indeterminada:** Não há garantia na ordem de notificação dos observadores.
- **Lapsed Listener Problem:** Se o observador não for removido (`detach`), ele pode não ser coletado pelo Garbage Collector, gerando vazamento de memória.
- **Cascata de Eventos:** Em sistemas complexos, notificações em cadeia podem degradar a performance.

---

## 📂 Arquivos e Entregáveis
- [`Apresentacao-Web/`](./Apresentacao-Web/): Aplicação web interativa para apresentação em slides/cards modernos.
- [`Rafael_Feltrim_Entrega_Observer.pdf`](./Rafael_Feltrim_Entrega_Observer.pdf): Documento formal de entrega no e-Disciplinas.
- [`Rafael_Feltrim_Atividade2_Observer.zip`](./Rafael_Feltrim_Atividade2_Observer.zip): Pacote compactado com código e materiais.

---

## 🌐 Resumo Enviado no Padlet da Turma

> **Nome do Padrão:** Observer  
> **Propósito do padrão:** Criar uma interface que permite que apenas determinados objetos do projeto recebam informações/notificações.  
> **Problema(s) que esse padrão ajuda a resolver:** Polling (o cliente ter que checar toda vez a informação) e Spam (clientes que não querem receber determinada informação acabam recebendo).  
> **A solução que o padrão propõe:** Criação de uma classe Publisher que guarda uma lista de Observers. O publisher lida com o envio das notificações e com a lista de assinantes. O Observer é uma interface que lida com a abstração dos objetos a serem notificados.  
> **Aplicações do padrão:** Sistemas de lojas ("avise-me quando chegar"), Newsletter, Redes Sociais...  
> **Benefícios:** Não é necessário criar lógicas de notificação para cada nova classe criada (todas caem na lógica da interface observer).  
> **Problemas:** A ordem de notificação fica indeterminada, há necessidade de se desinscrever (esquecer de fazer isso acaba virando spam), eventos em excesso atrapalham o fluxo geral.
