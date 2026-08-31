const puppeteer = require('../01-Padrao-Observer/Apresentacao-Web/node_modules/puppeteer-core');
const fs = require('fs');
const path = require('path');

(async () => {
    try {
        console.log("Launching browser for GoF Part 2 PDF...");
        const browser = await puppeteer.launch({
            executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
            headless: 'new'
        });
        
        const page = await browser.newPage();
        
        console.log("Loading HTML...");
        const documentUrl = 'file:///' + path.join(__dirname, 'relatorio-gof-completo.html').replace(/\\/g, '/');
        await page.goto(documentUrl, { waitUntil: 'networkidle0' });
        
        console.log("Generating PDF...");
        const outputPath = path.join(__dirname, 'Atividade_3_Padroes_GoF_Segunda_Parte_Grupo.pdf');
        await page.pdf({
            path: outputPath,
            format: 'A4',
            printBackground: true,
            margin: { top: '12mm', right: '12mm', bottom: '12mm', left: '12mm' }
        });

        await browser.close();
        console.log('SUCCESS: Atividade_3_Padroes_GoF_Segunda_Parte_Grupo.pdf gerado com sucesso!');
    } catch (err) {
        console.error("Error generating PDF:", err);
    }
})();
