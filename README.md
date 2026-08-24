# SSC0124 — Análise e Projeto Orientados a Objetos (2026)

[![ICMC - USP](https://img.shields.io/badge/USP-ICMC-blue.svg)](https://www.icmc.usp.br/)
[![Department](https://img.shields.io/badge/Departamento-SSC-informational.svg)](https://www.icmc.usp.br/departamentos/ssc)
[![Course](https://img.shields.io/badge/Disciplina-SSC0124-brightgreen.svg)](https://edisciplinas.usp.br/course/view.php?id=143121)
[![Status](https://img.shields.io/badge/Status-Em%20Andamento-success.svg)]()

Repositório central de estudos, anotações, trabalhos práticos, resumos teóricos e materiais de apoio da disciplina **SSC0124 - Análise e Projeto Orientados a Objetos (APOO)**, ministrada no Instituto de Ciências Matemáticas e de Computação (**ICMC - USP**).

---

## 📌 Informações Gerais

- **Instituição:** Universidade de São Paulo (USP) - ICMC São Carlos
- **Departamento:** Departamento de Sistemas de Computação (SSC)
- **Código da Disciplina:** SSC0124
- **Semestre:** 2026.2
- **Docente Responsável:** Profa. Dra. Lina Garcés ([linagarces@usp.br](mailto:linagarces@usp.br))
  - *Gabinete:* Sala 4-107, Bloco 4 do ICMC
- **Horários e Locais:**
  - **Turma 1 (10h10):** Sala 1104, 1º Andar - Bloco 1 do ICMC
  - **Turma 2 (08h10):** Sala 1104, 1º Andar - Bloco 1 do ICMC
- **Ambiente Virtual:** [e-Disciplinas Moodle USP (SSC0124-2026)](https://edisciplinas.usp.br/course/view.php?id=143121)

---

## 🎯 Objetivos da Disciplina

1. Compreender a fundo os princípios fundamentais e avançados do **Paradigma Orientado a Objetos (POO)**.
2. Dominar técnicas de **Análise e Design de Software**, utilizando modelagem com **UML** e **Processos Unificados (UP / RUP)**.
3. Aplicar **Padrões de Projeto (Design Patterns - GoF)**: Criacionais, Estruturais e Comportamentais para resolução de problemas arquiteturais.
4. Desenvolver visão crítica sobre **arquiteturas desacopladas, extensibilidade, manutenibilidade e boas práticas (SOLID, Clean Architecture)**.

---

## 🗂️ Estrutura do Repositório

```text
APOO - USP/
│
├── .gitignore
├── README.md                                   # Documento principal do repositório
│
├── Aula 0 - Apresentação da Disciplina.pdf      # Slides introdutórios e metodologia
├── Aula 01 - O paradigma de orientação a objetos.pdf
├── Aula 02 - Análise e Design de Software e o Processo Unificado.pdf
├── SSC0124 - APOO - Planejamento disciplina.docx.pdf # Plano de ensino e cronograma detalhado
│
├── Atividade 1 - Resumo.pdf                    # Resumo Cap. 2 (Engenharia de Software Moderna)
├── Atividade 2 - Padrões GoF - primeira parte.pdf
├── Rafael_Feltrim_Entrega_Observer.pdf         # Relatório completo do padrão Observer
│
└── Observer - Apresentacao/                    # Aplicação web interativa para apresentação do GoF Observer
    ├── index.html                              # Apresentação interativa em slides/cards modernos
    ├── documento-apoio.html                    # Documento formatado para leitura técnica e exportação PDF
    ├── styles.css                              # Estilização com design system moderno
    ├── script.js                              # Lógica de interatividade e navegação
    ├── print.css                               # Estilos otimizados para impressão/PDF
    └── generate_pdf.js                         # Script Puppeteer para exportação automatizada de PDF
```

---

## 📚 Conteúdo Programático & Registro das Aulas

### 🔹 Módulo 1: Fundamentos do Paradigma OO & Processos de Software
- **Aula 00:** Apresentação da disciplina, contrato pedagógico, avaliação e cronograma.
- **Aula 01:** O Paradigma Orientado a Objetos (Abstração, Encapsulamento, Herança, Polimorfismo, Acoplamento e Coesão).
- **Aula 02:** Processos de Desenvolvimento de Software & Processo Unificado (Engenharia de Software Moderna - Valente, Cap. 2).
  - *Entregável:* Resumo individual manuscrito e digitalizado sobre Processos de Software (`Atividade 1 - Resumo.pdf`).

---

### 🔹 Módulo 2: Padrões de Projeto (Design Patterns — GoF)

#### Grupo de Especialistas: Padrão Observer (Comportamental)
- **Integrantes da Equipe:**
  - Pedro Hamamoto da Palma — Nº USP: 16818280
  - Nicolas José Mota — Nº USP: 16990096
  - Rafael Feltrim — Nº USP: 15942812
- **Ficha Resumo do Padrão Observer:**
  - **Classificação:** Padrão Comportamental (Behavioral Pattern).
  - **Propósito:** Definir um mecanismo de assinatura um-para-muitos (1:N) para notificar múltiplos objetos assinantes sobre quaisquer eventos que ocorram no objeto que estão observando.
  - **Problemas que resolve:** *Polling* excessivo (cliente consultando periodicamente se houve mudança de estado) e *Spam* / Acoplamento rígido (notificar quem não precisa ou acoplar o sujeito a implementações concretas).
  - **Solução Arquitetural:** Criação de uma classe `Subject` / `Publisher` que gerencia a lista de inscritos e emite notificações através de uma interface genérica `Observer` / `Subscriber`.
  - **Casos de Uso Reais:** Feeds de Redes Sociais, sistemas de e-commerce ("Avise-me quando chegar"), plataformas de mensageria/eventos, UI Data Binding e Newsletters.
  - **Vantagens:** Princípio Aberto/Fechado (OCP), baixo acoplamento entre publicador e inscritos, flexibilidade em tempo de execução.
  - **Desvantagens / Cuidados:** Ordem de notificação não determinística, risco de vazamento de memória se o observador não se desinscrever (*Lapsed Listener Problem*), sobrecarga com eventos de alta frequência.

---

## 🚀 Como Executar os Materiais Interativos

Para rodar a apresentação interativa do padrão Observer localmente:

1. Acesse o diretório da apresentação:
   ```bash
   cd "Observer - Apresentacao"
   ```
2. Abra o arquivo `index.html` em qualquer navegador moderno, ou execute um servidor local:
   ```bash
   # Utilizando Python
   python -m http.server 8000
   
   # Ou utilizando Node.js (npx serve)
   npx serve .
   ```
3. Acesse via navegador em: `http://localhost:8000`

---

## 👥 Colaboradores

- **Rafael Feltrim** ([GitHub](https://github.com/RafaelFeltrim)) — ICMC USP
- **Pedro Hamamoto da Palma** — ICMC USP
- **Nicolas José Mota** — ICMC USP

---

## 📄 Licença & Propósito

Este repositório possui finalidade estritamente acadêmica e educacional, servindo de base de conhecimento para a comunidade do ICMC-USP e estudantes de Engenharia/Ciência da Computação interessados em Engenharia de Software e Padrões de Projeto.
