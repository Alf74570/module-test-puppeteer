const timeout = 15000;

describe("Tests du Header", () => {
    let page;

    test('navbar', async () => {
        await page.goto('http://polr.alwaysdata.net');
        await page.waitForSelector('.navbar-default');
        const html = await page.$eval('.navbar-default', e => e.innerHTML);
        await page.screenshot({path: './tests/img/header-home.png'});
        expect(html).toContain("Polr - Campus Annecy")
    }, timeout);

    test('About link', async () => {
        await page.goto('http://polr.alwaysdata.net');
        await page.waitForSelector('#navbar li a');
        await page.evaluate( () => {
            Array
                .from( document.querySelectorAll( '#navbar li a' ) )
                .filter( el => el.textContent === 'About' )[0].click();
        });
        await page.waitForSelector('.about-contents');
        const html = await page.$eval('.about-contents', e => e.innerHTML);
        expect(html).toContain("minimalist link shortening platform");
    }, timeout);

    test('Back home', async () => {
        await page.goto('http://polr.alwaysdata.net/about-polr');
        await page.waitForSelector('.navbar-brand');
        await page.$eval('.navbar-brand', el => el.click());
        await page.waitForSelector('body');
        const html = await page.$eval('body', e => e.innerHTML);
        await page.screenshot({path: './tests/img/homepage.png'});
        expect(html).toContain("Polr - Campus Annecy")
    }, timeout);

    test('Connexion', async () => {
        await page.goto('http://polr.alwaysdata.net');
        await page.waitForSelector('.dropdown-toggle');
        await page.$eval('.dropdown-toggle', el => el.click());
        await page.waitForSelector('input[name=username]');
        await page.waitForSelector('input[name=password]');
        await page.type('input[name=username]', 'Admin');
        await page.type('input[name=password]', 'campus');
        await page.waitForSelector('input[name=login]');
        await page.$eval('input[name=login]', e => e.click());
        const html = await page.$eval('#navbar li.dropdown a', e => e.text);
        expect(html).toEqual("Admin ");

    }, timeout);

    beforeAll(async () => {
        page = await global.__BROWSER__.newPage()
    }, timeout)
});