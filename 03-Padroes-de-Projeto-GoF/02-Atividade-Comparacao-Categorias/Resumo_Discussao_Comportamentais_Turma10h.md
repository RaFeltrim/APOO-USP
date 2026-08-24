# Relatório de Discussão em Sala de Aula — Padrões Comportamentais (GoF)

**Disciplina:** SSC0124 - Análise e Projeto Orientados a Objetos (ICMC - USP)  
**Atividade:** Jigsaw - Comparação de Padrões por Categoria (Turma 10h)  
**Categoria:** C - Padrões Comportamentais  
**Padrões Discutidos:**
- **7. Mediator**
- **8. Observer**
- **9. Chain of Responsibility**

**Integrantes da Discussão:**
- Especialistas em Observer: Rafael Feltrim (15942812), Pedro Hamamoto da Palma (16818280), Nicolas José Mota (16990096)
- Especialistas em Mediator e Chain of Responsibility da Turma 10h

---

## 1. Síntese dos Padrões

### 7. Mediator (Mediador)
- **Propósito:** Centralizar e coordenar as interações complexas entre múltiplos objetos (colegas), evitando que eles se comuniquem diretamente entre si.
- **Topologia:** Comunicação centralizada em estrela ($N \leftrightarrow 1 \leftrightarrow M$).
- **Problema que resolve:** Elimina o alto acoplamento $N \times N$ gerado quando muitos componentes interagem diretamente.
- **Vantagens:** Centraliza o controle e a lógica de comunicação; facilita a reutilização individual dos componentes colegas.
- **Desvantagens:** Risco de transformar o Mediador em um *God Object* (monolítico e excessivamente acoplado à regra de negócio).

### 8. Observer (Observador)
- **Propósito:** Estabelecer uma relação de dependência 1:N para que múltiplos objetos assinantes sejam automaticamente notificados sobre mudanças de estado em um objeto publicador.
- **Topologia:** Comunicação *one-to-many* / *broadcast* ($1 \rightarrow N$).
- **Problema que resolve:** Evita a sobrecarga de *polling* (consultas periódicas) e o acoplamento do publicador a classes concretas receptoras.
- **Vantagens:** Princípio Aberto/Fechado (OCP); baixo acoplamento; possibilita inscrições e desinscrições dinâmicas em tempo de execução.
- **Desvantagens:** Ordem de notificação não determinística; risco de *memory leaks* (*lapsed listeners*) caso o observador não seja desinscrito.

### 9. Chain of Responsibility (Cadeia de Responsabilidade)
- **Propósito:** Desacoplar o remetente de uma requisição de seus receptores, passando a mensagem ao longo de uma cadeia encadeada de manipuladores até que um deles processe o pedido.
- **Topologia:** Pipeline sequencial linear ($1 \rightarrow H_1 \rightarrow H_2 \rightarrow \dots \rightarrow H_n$).
- **Problema que resolve:** Evita o acoplamento rígido de vincular o emissor da requisição a um receptor específico de antemão.
- **Vantagens:** Flexibilidade na ordem e composição da cadeia em runtime; cada nó foca em uma responsabilidade de tratamento.
- **Desvantagens:** Não há garantia de que a requisição seja atendida caso nenhum nó da cadeia consiga processá-la.

---

## 2. Similitudes (Semelhanças)
1. **Objetivo Arquitetural Comum:** Todos os três são padrões **comportamentais** voltados a desacoplar remetentes e destinatários de mensagens, aumentando a flexibilidade do design.
2. **Uso de Interfaces/Polimorfismo:** Todos utilizam abstrações (`Observer`, `Mediator`, `Handler`) permitindo que novas classes sejam adicionadas sem alterar o código existente.
3. **Dinamismo em Runtime:** A estrutura de relacionamentos (lista de inscritos, elos da cadeia, mediador ativo) pode ser modificada dinamicamente durante a execução da aplicação.

---

## 3. Diferenças Fundamentais

| Critério | Mediator | Observer | Chain of Responsibility |
| :--- | :--- | :--- | :--- |
| **Fluxo da Informação** | Centralizado: Colegas conversam via Mediador | Difusão (Broadcast): Publicador notifica todos os assinantes | Sequencial: A mensagem flui nó a nó até ser tratada |
| **Quem recebe a mensagem?** | O Mediador decide quem recebe e processa | **Todos** os observadores inscritos | **Um** ou mais manipuladores ao longo da cadeia |
| **Conhecimento Mútuo** | Colegas só conhecem o Mediador; Mediador conhece os colegas | Publicador só conhece a interface genérica `Observer` | Cada nó só conhece seu próximo sucessor (`next`) |
| **Ponto Único de Controle** | Sim (o Mediador centraliza a lógica) | Não (distribuído entre os observadores) | Não (distribuído entre os elos da cadeia) |

---

## 4. Conclusão da Equipe
Os três padrões oferecem abordagens complementares para gerenciar a comunicação entre objetos:
- Se precisamos **notificar múltiplos interessados** sobre um evento ocorrido $\rightarrow$ **Observer**.
- Se precisamos **coordenar regras complexas entre componentes que precisam colaborar** $\rightarrow$ **Mediator**.
- Se precisamos **processar uma requisição por etapas ou escolher dinamicamente quem a trata** $\rightarrow$ **Chain of Responsibility**.
