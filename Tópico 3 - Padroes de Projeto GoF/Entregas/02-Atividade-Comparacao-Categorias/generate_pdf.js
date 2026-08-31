const puppeteer = require('../01-Padrao-Observer/Apresentacao-Web/node_modules/puppeteer-core');
const fs = require('fs');
const path = require('path');

(async () => {
    try {
        console.log("Launching browser for Relatório PDF...");
        const browser = await puppeteer.launch({
            executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
            headless: 'new'
        });
        
        const page = await browser.newPage();
        
        console.log("Loading HTML...");
        const documentUrl = 'file:///' + path.join(__dirname, 'relatorio-discussao.html').replace(/\\/g, '/');
        await page.goto(documentUrl, { waitUntil: 'networkidle0' });
        
        console.log("Generating PDF...");
        const outputPath = path.join(__dirname, 'Relatorio_Discussao_Comportamentais_Grupo.pdf');
        await page.pdf({
            path: outputPath,
            format: 'A4',
            printBackground: true,
            margin: { top: '15mm', right: '15mm', bottom: '15mm', left: '15mm' }
        });

        await browser.close();
        console.log('SUCCESS: Relatorio_Discussao_Comportamentais_Grupo.pdf gerado com sucesso!');
    } catch (err) {
        console.error("Error generating PDF:", err);
    }
})();
