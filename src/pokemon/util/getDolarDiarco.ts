import puppeteer, { Page } from 'puppeteer';

export async function getDolarDiarco(): Promise<[string, string]> {
    const browser = await puppeteer.launch();
    const page: Page = await browser.newPage();

    await page.goto('https://www.diarco.com.ar/dolardiarco/');

    const [compra, fecha] = await page.evaluate(() => {
        const compraElement = document.querySelector(
            '.elementor-element-6e837b8 .elementor-heading-title.elementor-size-default',
        );
        let compra = compraElement?.textContent?.trim() || null;

        compra = compra
            ? compra.replace('$', '').replace('.', '').concat(',00').trim()
            : null;

        const fechaElement = document.querySelectorAll(
            'h2.elementor-heading-title',
        )[1];
        const fecha = fechaElement?.textContent?.trim() || null;

        return [compra, fecha];
    });

    await browser.close();

    return [compra, fecha];
}
