//a comment added
// This script was generated and reflects raw data. It is recommended to change this code to your required logic
load.initialize("Initialize", async function () {
});

load.action("Action", async function () {
    const webResponse1 = new load.WebRequest({
        id: 1,
        url: "http://edgedl.me.gvt1.com/edgedl/chromewebstore/L2Nocm9tZV9leHRlbnNpb24vYmxvYnMvYjFkQUFWdmlaXy12MHFUTGhWQUViMUVlUQ/0.57.44.2492_hnimpnehoodheedghdeeijklkeaacbdc.crx",
        method: "GET",
        headers: {
            "Accept": "*/*",
            "Accept-Encoding": "identity",
            "If-Unmodified-Since": "Wed, 10 Oct 2018 17:49:21 GMT",
            "Proxy-Connection": "Keep-Alive",
            "Range": "bytes=189023-431021",
            "User-Agent": "Microsoft BITS/7.8"
        },
        resources: [
            "http://edgedl.me.gvt1.com/edgedl/chromewebstore/L2Nocm9tZV9leHRlbnNpb24vYmxvYnMvYjFkQUFWdmlaXy12MHFUTGhWQUViMUVlUQ/0.57.44.2492_hnimpnehoodheedghdeeijklkeaacbdc.crx",
        ],
    }).sendSync();

    const webResponse2 = new load.WebRequest({
        id: 2,
        url: "http://nimbusserver:8000/",
        method: "GET",
        headers: {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "en-US,en;q=0.9",
            "Proxy-Connection": "keep-alive",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
        },
        resources: [
            "http://nimbusserver:8000/vendor/requirejs/require.js",
            "http://nimbusserver:8000/main.min.js",
        ],
    }).sendSync();

    const webResponse3 = new load.WebRequest({
        id: 3,
        url: "http://nimbusserver:8000/services.properties",
        method: "GET",
        headers: {
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "en-US,en;q=0.9",
            "Proxy-Connection": "keep-alive",
            "Referer": "http://nimbusserver:8000/",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
        },
    }).sendSync();

    const webResponse4 = new load.WebRequest({
        id: 4,
        url: "http://nimbusserver.aos.com:8002/catalog/api/v1/DemoAppConfig/parameters/by_tool/ALL",
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "en-US,en;q=0.9",
            "Origin": "http://nimbusserver:8000",
            "Proxy-Connection": "keep-alive",
            "Referer": "http://nimbusserver:8000/",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
        },
    }).sendSync();

    const webResponse5 = new load.WebRequest({
        id: 5,
        url: "http://nimbusserver.aos.com:8001//accountservice/ws/GetAccountConfigurationRequest",
        method: "OPTIONS",
        headers: {
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "en-US,en;q=0.9",
            "Access-Control-Request-Headers": "content-type,soapaction",
            "Access-Control-Request-Method": "POST",
            "Origin": "http://nimbusserver:8000",
            "Proxy-Connection": "keep-alive",
            "Referer": "http://nimbusserver:8000/",
            "Sec-Fetch-Mode": "cors",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
        },
    }).sendSync();

    const webResponse6 = new load.WebRequest({
        id: 6,
        url: "http://nimbusserver.aos.com:8001//accountservice/ws/GetAccountConfigurationRequest",
        method: "POST",
        headers: {
            "Accept": "application/xml, text/xml, */*; q=0.01",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "en-US,en;q=0.9",
            "Content-Type": "text/xml; charset=UTF-8",
            "Origin": "http://nimbusserver:8000",
            "Proxy-Connection": "keep-alive",
            "Referer": "http://nimbusserver:8000/",
            "SOAPAction": "com.advantage.online.store.accountserviceGetAccountConfigurationRequest",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
        },
        body: `<?xml version="1.0" encoding="UTF-8"?>        <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
            <soap:Body>
                <GetAccountConfigurationRequest xmlns="com.advantage.online.store.accountservice"></GetAccountConfigurationRequest>
            </soap:Body>
        </soap:Envelope>`,
    }).sendSync();

    const webResponse7 = new load.WebRequest({
        id: 7,
        url: "http://nimbusserver.aos.com:8002/catalog/api/v1/categories",
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "en-US,en;q=0.9",
            "Origin": "http://nimbusserver:8000",
            "Proxy-Connection": "keep-alive",
            "Referer": "http://nimbusserver:8000/",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
        },
    }).sendSync();

    const webResponse8 = new load.WebRequest({
        id: 8,
        url: "http://nimbusserver.aos.com:8002/catalog/api/v1/deals/search",
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "en-US,en;q=0.9",
            "Origin": "http://nimbusserver:8000",
            "Proxy-Connection": "keep-alive",
            "Referer": "http://nimbusserver:8000/",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
        },
        queryString: {
            "dealOfTheDay": "true"
        },
    }).sendSync();

    const webResponse9 = new load.WebRequest({
        id: 9,
        url: "http://nimbusserver:8000/app/tempFiles/popularProducts.json",
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "en-US,en;q=0.9",
            "Proxy-Connection": "keep-alive",
            "Referer": "http://nimbusserver:8000/",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
        },
    }).sendSync();

    const webResponse10 = new load.WebRequest({
        id: 10,
        url: "http://nimbusserver:8000/app/views/home-page.html",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "en-US,en;q=0.9",
            "Proxy-Connection": "keep-alive",
            "Referer": "http://nimbusserver:8000/",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
        },
    }).sendSync();

    const webResponse11 = new load.WebRequest({
        id: 11,
        url: "http://nimbusserver.aos.com:8002/catalog/api/v1/categories/4/products",
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "en-US,en;q=0.9",
            "Origin": "http://nimbusserver:8000",
            "Proxy-Connection": "keep-alive",
            "Referer": "http://nimbusserver:8000/",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
        },
    }).sendSync();

    const webResponse12 = new load.WebRequest({
        id: 12,
        url: "http://nimbusserver.aos.com:8002/catalog/api/v1/categories/attributes",
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "en-US,en;q=0.9",
            "Origin": "http://nimbusserver:8000",
            "Proxy-Connection": "keep-alive",
            "Referer": "http://nimbusserver:8000/",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
        },
    }).sendSync();

    const webResponse13 = new load.WebRequest({
        id: 13,
        url: "http://nimbusserver:8000/app/views/category-page.html",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "en-US,en;q=0.9",
            "Proxy-Connection": "keep-alive",
            "Referer": "http://nimbusserver:8000/",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
        },
    }).sendSync();

    const webResponse14 = new load.WebRequest({
        id: 14,
        url: "http://nimbusserver.aos.com:8002/catalog/api/v1/categories/all_data",
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "en-US,en;q=0.9",
            "Origin": "http://nimbusserver:8000",
            "Proxy-Connection": "keep-alive",
            "Referer": "http://nimbusserver:8000/",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
        },
    }).sendSync();

    const webResponse15 = new load.WebRequest({
        id: 15,
        url: "http://nimbusserver.aos.com:8002/catalog/api/v1/products/25",
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "en-US,en;q=0.9",
            "Origin": "http://nimbusserver:8000",
            "Proxy-Connection": "keep-alive",
            "Referer": "http://nimbusserver:8000/",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
        },
    }).sendSync();

    const webResponse16 = new load.WebRequest({
        id: 16,
        url: "http://nimbusserver.aos.com:8002/catalog/api/v1/categories/4/products",
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "en-US,en;q=0.9",
            "Origin": "http://nimbusserver:8000",
            "Proxy-Connection": "keep-alive",
            "Referer": "http://nimbusserver:8000/",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
        },
    }).sendSync();

    const webResponse17 = new load.WebRequest({
        id: 17,
        url: "http://nimbusserver:8000/app/views/product-page.html",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "en-US,en;q=0.9",
            "Proxy-Connection": "keep-alive",
            "Referer": "http://nimbusserver:8000/",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
        },
    }).sendSync();

    const webResponse18 = new load.WebRequest({
        id: 18,
        url: "http://nimbusserver:8000/app/views/shoppingCart.html",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "en-US,en;q=0.9",
            "Proxy-Connection": "keep-alive",
            "Referer": "http://nimbusserver:8000/",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
        },
    }).sendSync();

});

load.finalize("Finalize", async function () {
});
