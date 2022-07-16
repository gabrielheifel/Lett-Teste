const cheerio = require("cheerio");
const axios = require("axios").default;
const [url] = process.argv.slice(2);

const crawler = async function () {
  if (url) {
    try {
      const response = await axios.get(url);
      const htmlBody = await cheerio.load(response.data);
      const validPage = htmlBody(".floating-button__box").text();
      if (validPage != "") {
        console.log("******* Title ******* \n");
        console.log(htmlBody(".floating-button__box h2").text());
        console.log("\n******* Price *******\n");
        console.log(
          htmlBody(".default-price span strong").text()
        );
        console.log("\n******* Description *******\n");
        console.log(htmlBody("#features > p").text());
        console.log("\n******* Initial image *******\n");
        console.log(htmlBody(".photo-figure img").attr("src"));
        console.log("\n******* Carrusel images *******\n");
        htmlBody(".swiper-wrapper li").each(
          await function () {
            console.log(htmlBody(this).find("img").attr("src"));
          }
        );
      } else {
        console.log(
          "Url invalida, por favor forneça uma url valida, de um produto da loja Netshoes."
        );
      }
    } catch (error) {
      console.error("Request Error: " + error);
    }
  } else {
    console.log(
      "Erro: Por favor envie a url do produto que deseja extrair os dados.\n  Siga a sintax Node index.js <link de produto na Loja netShoes>, para mais informações leia o readMe."
    );
  }
};

crawler();
