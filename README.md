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

## 🗂️ Estrutura Oficial do Repositório por Módulos & Semanas

```text
APOO - USP/
│
├── 📁 00-Informacoes-Gerais/
│   ├── README.md                                         # Informações docentes, e-mails, horários e plano
│   ├── Aula 0 - Apresentação da Disciplina.pdf           # Slides introdutórios da disciplina
│   └── SSC0124 - APOO - Planejamento disciplina.docx.pdf # Planejamento e cronograma do semestre
│
├── 📁 01-Revisao-Paradigma-OO/                           # (Semana 1)
│   ├── README.md                                         # Resumo: 4 Pilares da POO, Coesão & Acoplamento
│   └── Aula 01 - O paradigma de orientação a objetos.pdf # Slides de revisão da Profa. Lina Garcés
│
├── 📁 02-Processos-Desenvolvimento-Software/             # (Semana 2)
│   ├── README.md                                         # Resumo: Processo Unificado (UP) e Ágil
│   ├── Aula 02 - Análise e Design de Software e o Processo Unificado.pdf
│   └── Atividade 1 - Resumo.pdf                          # [ENTREGA 1] Resumo manuscrito do Cap. 2 (Valente)
│
├── 📁 03-Padroes-de-Projeto-GoF/                         # (Semanas 3 e 4)
│   ├── README.md                                         # Panorama dos Padrões GoF
│   ├── Atividade 2 - Padrões GoF - primeira parte.pdf
│   ├── Aula - Jigsaw - Padrões GoF - 10h.pdf             # Slides da dinâmica Jigsaw em sala
│   │
│   ├── 📁 01-Padrao-Observer/
│   │   ├── README.md                                     # Ficha técnica, painel Padlet e conceitos
│   │   ├── Rafael_Feltrim_Entrega_Observer.pdf           # [ENTREGA 2] Relatório do padrão Observer
│   │   ├── Rafael_Feltrim_Atividade2_Observer.zip        # Pacote compactado da entrega individual
│   │   └── 📁 Apresentacao-Web/                          # Aplicação interativa em HTML5/CSS3/JS
│   │       ├── index.html                                # Slides interativos da apresentação
│   │       ├── documento-apoio.html                      # Documentação técnica formatada
│   │       ├── styles.css / script.js / print.css
│   │       └── generate_pdf.js                           # Script Puppeteer para exportação PDF
│   │
│   ├── 📁 02-Atividade-Comparacao-Categorias/
│   │   ├── README.md                                     # Matriz de comparação dos padrões comportamentais
│   │   ├── Relatorio_Discussao_Comportamentais_Grupo.pdf  # [ENTREGA 3] Relatório da discussão em sala (Jigsaw)
│   │   ├── relatorio-discussao.html                      # Versão HTML para compilação PDF
│   │   ├── Resumo_Discussao_Comportamentais_Turma10h.md  # Síntese em Markdown
│   │   └── generate_pdf.js                               # Automação Puppeteer
│   │
│   └── 📁 03-Atividade-Comparacao-Categorias-Completa/
│       ├── README.md                                     # Diretrizes da Atividade 3 (GoF Parte 2)
│       ├── Rafael_Feltrim_Atividade3_Comparacao_Categorias_GoF.pdf # [ENTREGA 4] Relatório Individual Completo (3 categorias, 9 padrões, 3 tabelas)
│       ├── relatorio-gof-completo.html                   # Versão HTML estilizada
│       └── generate_pdf.js                               # Automação Puppeteer
│
├── .gitignore                                            # Filtro de dependências e arquivos temporários
└── README.md                                             # Portal central de navegação
```

---

## 📚 Mapa de Atividades & Entregas da Disciplina

| Atividade | Tópico Abordado | Status | Arquivo Final de Entrega |
| :--- | :--- | :--- | :--- |
| **Atividade 1** | Resumo Cap. 2 Eng. Software Moderna (Processos de Software) | ✅ **Concluída** | [`Atividade 1 - Resumo.pdf`](./02-Processos-Desenvolvimento-Software/Atividade%201%20-%20Resumo.pdf) |
| **Atividade 2** | Estudo Individual de Padrão (Padrão Observer) | ✅ **Concluída** | [`Rafael_Feltrim_Entrega_Observer.pdf`](./03-Padroes-de-Projeto-GoF/01-Padrao-Observer/Rafael_Feltrim_Entrega_Observer.pdf) |
| **Atividade em Sala (Jigsaw)** | Comparação de Padrões Comportamentais (Mediator, Observer, CoR) | ✅ **Concluída** | [`Relatorio_Discussao_Comportamentais_Grupo.pdf`](./03-Padroes-de-Projeto-GoF/02-Atividade-Comparacao-Categorias/Relatorio_Discussao_Comportamentais_Grupo.pdf) |
| **Atividade 3 (GoF Parte 2)** | Estudo Comparativo Completo: 3 Categorias, 9 Padrões e 3 Tabelas | ✅ **Concluída** | [`Rafael_Feltrim_Atividade3_Comparacao_Categorias_GoF.pdf`](./03-Padroes-de-Projeto-GoF/03-Atividade-Comparacao-Categorias-Completa/Rafael_Feltrim_Atividade3_Comparacao_Categorias_GoF.pdf) |

---

## 👥 Autor

- **Rafael Feltrim** ([GitHub](https://github.com/RaFeltrim)) — ICMC USP
