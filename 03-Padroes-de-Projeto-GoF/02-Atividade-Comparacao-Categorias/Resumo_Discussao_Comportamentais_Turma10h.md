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

## 2. Matriz Comparativa entre os Padrões

| Dimensão de Análise | 7. Mediator | 8. Observer | 9. Chain of Responsibility |
| :--- | :--- | :--- | :--- |
| **Topologia** | Estrela ($N \leftrightarrow 1 \leftrightarrow M$): Centralizada | Broadcast ($1 \rightarrow N$): 1 Publicador para N Assinantes | Pipeline Linear ($1 \rightarrow H_1 \rightarrow H_2 \dots$): Encadeado |
| **Destino da Mensagem** | O Mediador arbitra e aciona colegas específicos | **Todos** os observadores inscritos recebem | **Um** ou mais manipuladores tratam sequencialmente |
| **Conhecimento Mútuo** | Colegas conhecem apenas o Mediador | Publicador conhece apenas a interface `Observer` | Cada nó conhece apenas seu sucessor (`next`) |
| **Direção do Fluxo** | Bidirecional (Colega $\leftrightarrow$ Mediador) | Unidirecional (Publisher $\rightarrow$ Observers) | Sequencial / Unidirecional (Handler $\rightarrow$ Next Handler) |
| **Casos de Uso Típicos** | Diálogos de UI complexos, Torre de tráfego aéreo | Feeds de Redes Sociais, Newsletter, "Avise-me quando chegar" | Middlewares de autenticação, filtros de requisição HTTP |

---

## 3. ⚡ Arquitetura Integrada: Utilizando os 3 Padrões Juntos

Em sistemas modernos e robustos (ex: **Processamento e Faturamento de Pedidos de E-Commerce**), os 3 padrões podem operar em perfeita harmonia em camadas distintas:

1. **Chain of Responsibility (Pipeline de Entrada e Validações):**
   - A requisição HTTP de compra passa sequencialmente por: `ValidaçãoPayloadHandler` $\rightarrow$ `AutenticacaoHandler` $\rightarrow$ `AnaliseAntifraudeHandler` $\rightarrow$ `LimiteCreditoHandler`.
   - Se qualquer elo falhar, o fluxo é interrompido imediatamente.
2. **Mediator (Orquestração e Execução de Negócio):**
   - Com o pedido aprovado na cadeia, ele é entregue ao `OrderMediator`.
   - O mediador orquestra as dependências complexas entre subsistemas: reserva produtos no `EstoqueService`, processa cobrança no `PaymentGateway`, gera nota fiscal no `FiscalService` e despacha para o `LogisticaService`.
3. **Observer (Difusão de Eventos Pós-Transação):**
   - Concluído o faturamento, o `OrderSubject` emite o evento `PEDIDO_FATURADO` via broadcast 1:N.
   - Assinantes autônomos reagem de forma assíncrona: `EmailNotificationService` envia o comprovante, `DashboardService` atualiza o faturamento em tempo real e o `AnalyticsService` registra o evento no Data Lake.

---

## 4. 🧭 Guia de Decisão: Quando Abordar Cada Padrão?

- **Escolha OBSERVER quando:** O evento já ocorreu e você precisa apenas avisar múltiplos serviços independentes (broadcast reativo) que realizam tarefas secundárias, sem que o publicador precise saber quem são ou esperar pelo término de suas execuções.
- **Escolha MEDIATOR quando:** Existe uma forte interdependência e necessidade de orquestração ativa entre componentes (ex: alterar um campo de formulário desabilita outros 3 e calcula um total). Os componentes precisam de um coordenador inteligente central.
- **Escolha CHAIN OF RESPONSIBILITY quando:** Você tem uma série de verificações, filtros ou tratadores com prioridade ordenada, onde a requisição pode ser consumida/interrompida no meio do caminho ou enriquecida passo a passo.

### ⚠️ Quando NÃO usar:
- Evite **Mediator** se os objetos quase não interagem (adiciona complexidade desnecessária).
- Evite **Observer** se a ordem de execução for mandatória ou se o emissor precisar do retorno síncrono dos assinantes.
- Evite **Chain of Responsibility** se todos os elementos precisarem sempre executar e a ordem for irrelevante (para isso, **Observer** é muito mais limpo).
