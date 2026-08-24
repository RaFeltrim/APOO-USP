const puppeteer = require('puppeteer-core');
const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

(async () => {
    try {
        console.log("Launching browser...");
        const browser = await puppeteer.launch({
            executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
            headless: 'new'
        });
        
        const page = await browser.newPage();
        
        // Generate Presentation PDF
        console.log("Generating Presentation PDF...");
        const presentationUrl = 'file:///' + path.join(__dirname, 'index.html').replace(/\\/g, '/');
        await page.goto(presentationUrl, { waitUntil: 'networkidle0' });
        const presentationPdf = await page.pdf({
            format: 'A4',
            landscape: true,
            printBackground: true,
            margin: { top: 0, right: 0, bottom: 0, left: 0 }
        });

        // Generate Document PDF
        console.log("Generating Document PDF...");
        const documentUrl = 'file:///' + path.join(__dirname, 'documento-apoio.html').replace(/\\/g, '/');
        await page.goto(documentUrl, { waitUntil: 'networkidle0' });
        const documentPdf = await page.pdf({
            format: 'A4',
            printBackground: true,
            margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' }
        });

        await browser.close();

        // Merge PDFs
        console.log("Merging PDFs...");
        const mergedPdf = await PDFDocument.create();
        
        const presDoc = await PDFDocument.load(presentationPdf);
        const presPages = await mergedPdf.copyPages(presDoc, presDoc.getPageIndices());
        presPages.forEach(p => mergedPdf.addPage(p));

        const docDoc = await PDFDocument.load(documentPdf);
        const docPages = await mergedPdf.copyPages(docDoc, docDoc.getPageIndices());
        docPages.forEach(p => mergedPdf.addPage(p));

        const pdfBytes = await mergedPdf.save();
        const outputPath = path.join(__dirname, 'Rafael_Feltrim_Entrega_Observer.pdf');
        fs.writeFileSync(outputPath, pdfBytes);
        
        console.log('SUCCESS: Rafael_Feltrim_Entrega_Observer.pdf');
    } catch (err) {
        console.error("Error generating PDF:", err);
    }
})();
