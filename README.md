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

## 🗂️ Estrutura e Organização do Repositório por Semanas/Módulos

```text
APOO - USP/
│
├── 📂 00-Informacoes-Gerais/
│   ├── README.md                                    # Informações docentes, e-mails, horários e plano
│   ├── Aula 0 - Apresentação da Disciplina.pdf      # Slides introdutórios da disciplina
│   └── SSC0124 - APOO - Planejamento disciplina.docx.pdf # Cronograma completo e planejamento
│
├── 📂 01-Revisao-Paradigma-OO/
│   ├── README.md                                    # Resumo teórico dos 4 pilares e boas práticas POO
│   └── Aula 01 - O paradigma de orientação a objetos.pdf # Slides de revisão da Profa. Lina Garcés
│
├── 📂 02-Processos-Desenvolvimento-Software/
│   ├── README.md                                    # Resumo do Processo Unificado (UP) e métodos ágeis
│   ├── Aula 02 - Análise e Design de Software e o Processo Unificado.pdf
│   └── Atividade 1 - Resumo.pdf                     # Resumo manuscrito do Cap. 2 (Valente)
│
├── 📂 03-Padroes-de-Projeto-GoF/
│   ├── README.md                                    # Panorama geral dos Padrões GoF (Criacionais, Estruturais, Comportamentais)
│   ├── Atividade 2 - Padrões GoF - primeira parte.pdf
│   │
│   ├── 📂 01-Padrao-Observer/
│   │   ├── README.md                                # Ficha técnica, painel Padlet e análise detalhada
│   │   ├── Rafael_Feltrim_Entrega_Observer.pdf      # Documento oficial entregue no Moodle
│   │   ├── Rafael_Feltrim_Atividade2_Observer.zip   # Arquivo compactado da entrega
│   │   └── 📂 Apresentacao-Web/                     # Aplicação interativa em HTML5/CSS3/JS para apresentação
│   │       ├── index.html                           # Slides interativos da apresentação
│   │       ├── documento-apoio.html                 # Documentação técnica formatada
│   │       ├── styles.css / script.js / print.css
│   │       └── generate_pdf.js                      # Script Puppeteer para exportação PDF
│   │
│   └── 📂 02-Atividade-Comparacao-Categorias/
│       └── README.md                                # Matriz de comparação dos padrões comportamentais (Observer vs Strategy vs Command)
│
├── .gitignore
└── README.md                                        # Portal central de navegação do repositório
```

---

## 📚 Navegação Rápida por Módulo

| Módulo / Semana | Tópico Principal | Materiais & Entregas |
| :--- | :--- | :--- |
| **[00-Informações Gerais](./00-Informacoes-Gerais/)** | Contrato Pedagógico & Cronograma | [Slides Aula 0](./00-Informacoes-Gerais/Aula%200%20-%20Apresenta%C3%A7%C3%A3o%20da%20Disciplina.pdf), [Plano de Ensino](./00-Informacoes-Gerais/SSC0124%20-%20APOO%20-%20Planejamento%20disciplina.docx.pdf) |
| **[01-Revisão POO](./01-Revisao-Paradigma-OO/)** | Pilares da OO, Coesão e Acoplamento | [Slides Aula 1](./01-Revisao-Paradigma-OO/Aula%2001%20-%20O%20paradigma%20de%20orienta%C3%A7%C3%A3o%20a%20objetos.pdf), [Resumo Teórico](./01-Revisao-Paradigma-OO/README.md) |
| **[02-Processos de Software](./02-Processos-Desenvolvimento-Software/)** | Processo Unificado (UP) & Valente Cap. 2 | [Slides Aula 2](./02-Processos-Desenvolvimento-Software/Aula%2002%20-%20An%C3%A1lise%20e%20Design%20de%20Software%20e%20o%20Processo%20Unificado.pdf), [Atividade 1 (Resumo)](./02-Processos-Desenvolvimento-Software/Atividade%201%20-%20Resumo.pdf) |
| **[03-Padrões GoF](./03-Padroes-de-Projeto-GoF/)** | Padrões de Projeto (GoF) | [Slides Atividade 2](./03-Padroes-de-Projeto-GoF/Atividade%202%20-%20%20Padr%C3%B5es%20GoF%20-%20primeira%20parte.pdf) |
| ↳ **[Padrão Observer](./03-Padroes-de-Projeto-GoF/01-Padrao-Observer/)** | Especialistas Observer (Turma 10h) | [Apresentação Interativa](./03-Padroes-de-Projeto-GoF/01-Padrao-Observer/Apresentacao-Web/), [PDF Entrega](./03-Padroes-de-Projeto-GoF/01-Padrao-Observer/Rafael_Feltrim_Entrega_Observer.pdf), [Ficha Técnica](./03-Padroes-de-Projeto-GoF/01-Padrao-Observer/README.md) |
| ↳ **[Comparação Categorias](./03-Padroes-de-Projeto-GoF/02-Atividade-Comparacao-Categorias/)** | Comparação dos Padrões Comportamentais | [Matriz Comparativa](./03-Padroes-de-Projeto-GoF/02-Atividade-Comparacao-Categorias/README.md) |

---

## 👥 Colaboradores

- **Rafael Feltrim** ([GitHub](https://github.com/RaFeltrim)) — ICMC USP
- **Pedro Hamamoto da Palma** — ICMC USP
- **Nicolas José Mota** — ICMC USP

---

## 📄 Licença & Propósito

Este repositório possui finalidade estritamente acadêmica e educacional, servindo de base de conhecimento para a comunidade do ICMC-USP e estudantes de Engenharia/Ciência da Computação interessados em Engenharia de Software e Padrões de Projeto.
