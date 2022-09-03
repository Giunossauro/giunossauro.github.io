const cardsIdLength = document.getElementsByTagName("article").length;
const cardsIdNumbers = [];

for (let id = 1; id <= cardsIdLength; id++) {
  cardsIdNumbers.push(id);
}

const elements = [
  [document.getElementById("sobre-nome"), 15],
  [document.getElementById("sobre-cargo"), 85],
  [document.getElementById("sobre-icons"), 107],
  [document.getElementById("sobre-experiencia"), 174],
  ...[1, 2, 3, 4, 5, 6].map(e => [document.getElementById(`sobre-li-${e}`), 145]),
  [document.getElementById("projetos-nome"), 74],
  ...cardsIdNumbers.map(e => [document.getElementById(`card-img-${e}`), 144]),
  ...cardsIdNumbers.map(e => [document.getElementById(`card-title-${e}`), 134]),
  ...cardsIdNumbers.map(e => [document.getElementById(`card-text-${e}`), 134]),
  ...cardsIdNumbers.map(e => [document.getElementById(`card-btn-github-${e}`), 115]),
  ...cardsIdNumbers.map(e => [document.getElementById(`card-btn-link-${e}`), 115]),
  [document.getElementById("form-nome"), 110],
  [document.getElementById("form-email"), 110],
  [document.getElementById("form-tel"), 110],
  [document.getElementById("form-msg"), 100],
  [document.getElementById("submit"), 100],
]//110 - form

console.log(elements)

const zIndexer = (element, yPosition) => {
  element.style.zIndex = element.getBoundingClientRect().top > yPosition ? 3 : 1;
}

elements.forEach(([element, yPosition]) => zIndexer(element, yPosition));

document.addEventListener("scroll", () => {
  elements.forEach(([element, yPosition]) => zIndexer(element, yPosition));
});

const postar = () => fetch("https://servidorcontato.herokuapp.com/contatos", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": JSON.stringify({
    "nome": nome.value,
    "email": email.value,
    "tel": tel.value.replace("(",'').replace(")",'').replace("-",''),
    "msg": msg.value
  })
})
.then((_) => {
  nome.value = "";
  email.value = "";
  tel.value = "";
  msg.value = "";
  alert("Mensagem enviada com sucesso!");
})
.catch((_) => alert(
  "algo deu errado ao enviar os dados. Favor falar com Giuliano pelo WhatsApp: ",
  "(11) 94235-7682, ou pelo e-mail: giuandroide@gmail.com. Obrigado!"
));