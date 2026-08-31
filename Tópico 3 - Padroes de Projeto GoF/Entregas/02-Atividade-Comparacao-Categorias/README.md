# Atividade em Sala de Aula (Jigsaw) — Comparação de Padrões Comportamentais

**Disciplina:** SSC0124 - Análise e Projeto Orientados a Objetos (ICMC - USP)  
**Docente:** Profa. Dra. Lina Garcés  
**Data:** 24 de agosto de 2026 | Horário da Turma: 10h10  
**Categoria C:** **Comportamentais**  
**Padrões da Equipe:**
7. **Mediator**
8. **Observer**
9. **Chain of Responsibility (CoR)**

---

## 👥 Especialistas e Composição do Grupo
- **Padrão 8 (Observer):** Rafael Feltrim (15942812), Pedro Hamamoto da Palma (16818280), Nicolas José Mota (16990096)
- **Padrão 7 (Mediator):** Representantes especialistas da turma
- **Padrão 9 (Chain of Responsibility):** Representantes especialistas da turma

---

## 🎯 Síntese Conceitual dos 3 Padrões

### 1. 🔍 Mediator (Mediador)
- **Intenção:** Reduzir o acoplamento caótico (*spaghetti communication*) entre múltiplos objetos (colegas/colleagues), centralizando todas as suas interações em um objeto mediador único.
- **Topologia de Comunicação:** Muitos-para-Um-para-Muitos ($N \leftrightarrow 1 \leftrightarrow M$). Comunicação bidirecional indireta e centralizada.
- **Exemplo Clássico:** Torre de controle de tráfego aéreo (os aviões conversam apenas com a torre, não diretamente entre si) ou formulários complexos com validações e campos interdependentes.

### 2. 📡 Observer (Observador / Pub-Sub)
- **Intenção:** Definir uma dependência um-para-muitos (1:N) onde uma mudança de estado em um objeto (*Subject/Publisher*) notifica automaticamente todos os seus assinantes registrados (*Observers/Subscribers*).
- **Topologia de Comunicação:** Um-para-Muitos ($1 \rightarrow N$). Fluxo unidirecional de emissão de eventos/notificações.
- **Exemplo Clássico:** Sistemas de newsletter, notificações de "avise-me quando chegar", feeds de redes sociais e event listeners em interfaces gráficas.

### 3. ⛓️ Chain of Responsibility (Cadeia de Responsabilidade)
- **Intenção:** Evitar o acoplamento entre o remetente de uma requisição e seus potenciais receptores, encadeando os objetos receptores e passando a requisição ao longo da cadeia até que um deles a processe (ou a cadeia termine).
- **Topologia de Comunicação:** Um-para-Sequência ($1 \rightarrow H_1 \rightarrow H_2 \rightarrow \dots \rightarrow H_n$). Fluxo linear/sequencial com critério de parada ou passagem.
- **Exemplo Clássico:** Middlewares em servidores web (autenticação $\rightarrow$ autorização $\rightarrow$ validação $\rightarrow$ controller), tratamento hierárquico de exceções ou fluxos de aprovação corporativa (Gerente $\rightarrow$ Diretor $\rightarrow$ CFO).

---

## 📊 Matriz Comparativa Aprofundada

| Dimensão de Análise | **Mediator** | **Observer** | **Chain of Responsibility** |
| :--- | :--- | :--- | :--- |
| **Problema Principal** | Complexidade e acoplamento $N \times N$ entre objetos que precisam cooperar. | Acoplamento rígido de notificações e necessidade de *polling* para saber alterações de estado. | Acoplamento rígido entre quem dispara a requisição e a classe exata que a processa. |
| **Topologia da Rede** | **Estrela (Centralizada):** Colegas $\leftrightarrow$ Mediador. | **Broadcast / Árvore:** Subject $\rightarrow$ Lista de Observers. | **Pipeline / Encadeamento Linear:** Handler 1 $\rightarrow$ Handler 2 $\rightarrow$ Handler N. |
| **Direção do Fluxo** | Bidirecional (Colega avisa Mediador, Mediador coordena e despacha ordens). | Unidirecional (Publisher dispara notificação aos Observers cadastrados). | Sequencial / Linear (Requisição flui pelo elo até encontrar quem a trate). |
| **Conhecimento das Partes** | Colegas conhecem apenas o Mediador. Mediador conhece todos os colegas concretos (ou suas interfaces). | Subject conhece apenas a interface genérica `Observer`. Observers podem ou não conhecer o Subject. | Cada Handler conhece apenas o seu próximo sucessor (`next`). O emissor conhece apenas o primeiro nó. |
| **Tratamento da Mensagem** | **Centralizado:** O Mediador decide quem faz o quê e como os colegas interagem. | **Distribuído (Multi-receptor):** Todos os observadores inscritos recebem e tratam a notificação. | **Condicional / Exclusivo:** Um ou mais nós tratam a requisição; cada nó decide se processa ou repassa. |
| **Vantagens Principais** | Desacopla colegas entre si, simplifica protocolos de comunicação, reutilização fácil de colegas. | Princípio Aberto/Fechado (OCP), desacoplamento total entre emissor e receptores, dinamismo em runtime. | Flexibilidade para alterar a cadeia dinamicamente, desacopla emissor do receptor, facilidade de compor regras. |
| **Desvantagens / Riscos** | O Mediador pode se transformar em um *God Object* monolítico e complexo de manter. | Ordem de notificação indeterminada, risco de vazamento de memória (*Lapsed Listener*), loops de eventos. | Não há garantia absoluta de que a requisição será atendida se nenhum handler na cadeia puder tratá-la. |

---

## 🔄 Similitudes (Semelhanças) entre os Três Padrões
1. **Desacoplamento Comportamental:** Todos os três pertencem à categoria comportamental e visam desacoplar o remetente de dados/eventos dos receptores de processamento.
2. **Polimorfismo e Interfaces:** Todos utilizam interfaces ou classes abstratas (`Observer`, `Mediator`/`Colleague`, `Handler`) para permitir extensão em tempo de execução sem alterar código existente (princípio OCP).
3. **Flexibilidade em Tempo de Execução (*Runtime*):** Permitem reconfigurar dinamicamente a comunicação (adicionar novos observers, plugar novos handlers na cadeia, trocar de mediador).

---

## ⚡ Diferenças Chave
- **Destino da Mensagem:**
  - No **Observer**, a mensagem vai para **todos** os inscritos simultaneamente (difusão/multicast).
  - No **Chain of Responsibility**, a mensagem vai sendo repassada sequencialmente até que **alguém** a trate (ou seja descartada).
  - No **Mediator**, a mensagem vai para um **coordenador central**, que arbitra o fluxo e pode acionar um ou mais colegas específicos.
- **Acoplamento Central vs. Distribuído:**
  - O **Mediator** centraliza a inteligência e as regras de negócio de interação em um único ponto.
  - O **Observer** e o **Chain of Responsibility** distribuem as responsabilidades entre os receptores individuais.

---

## 🛠️ Cenários de Combinação dos Padrões
- **Mediator + Observer:** O Mediador pode atuar como um *Subject (Publisher)* e os colegas como *Observers*, notificando o mediador de forma reativa via eventos sem acoplar chamadas diretas.
- **Chain of Responsibility + Command:** A requisição que viaja pelos elos da cadeia pode ser encapsulada como um objeto de comando (`Command`), carregando parâmetros e contexto de execução.
