# Atividade em Sala de Aula — Comparação entre Padrões de uma Categoria

## 📅 Data: 24 de Agosto de 2026

## 🎯 Dinâmica da Atividade
1. Especialistas de cada padrão apresentam seu padrão para os demais colegas do grupo misto (10 minutos por padrão).
2. O grupo de categoria discute as similitudes, diferenças, cenários ideais de uso e combinações entre os padrões.
3. Elaboração e envio de documento com a síntese da discussão no e-Disciplinas.

---

## 📊 Matriz Comparativa — Padrões Comportamentais (GoF)

| Padrão | Intenção Central | Comunicação | Quando Usar |
| :--- | :--- | :--- | :--- |
| **Observer** | Notificação de mudança de estado 1:N com acoplamento fraco | Produtor $\rightarrow$ Múltiplos Assinantes | Mudanças em um objeto exigem atualização automática em outros sem acoplamento direto. |
| **Strategy** | Encapsular uma família de algoritmos intercambiáveis | Cliente $\rightarrow$ Algoritmo Selecionado | Quando existem múltiplas formas de executar uma operação e a escolha ocorre em tempo de execução. |
| **Command** | Encapsular uma requisição como um objeto | Emissor $\rightarrow$ Comando $\rightarrow$ Receptor | Suporte a operações desfeitas (*undo/redo*), enfileiramento de tarefas e logs de transações. |
