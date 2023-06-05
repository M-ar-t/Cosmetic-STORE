
let initialState = {
  productsOrigin: [{
    img:"https://api.rivegauche.ru/medias6/?context=bWFzdGVyfHByb2R1Y3RzfDEzMTI5NnxpbWFnZS9qcGVnfHByb2R1Y3RzL2hjNC9oMTgvMTE1MTIwMzc5OTg2MjIuanBnfGQzZDI4ZjQxNDg0MzI4OTkxYjBjZGQ0MDcwNzQzNWJkOGZlOGYxYThhZTc3YjQxZGQ3OGYxZGFmMWRmNjQxMDU",
    article:"",
    title:"Make up base moisturizing ",
    id: 1,
    price:"1 480",
    stars:4
    },
    {
    img: "https://api.rivegauche.ru/medias6/product-954094-0-listingDesktop?context=bWFzdGVyfHByb2R1Y3RzfDEyNjEwfGltYWdlL2pwZWd8cHJvZHVjdHMvaDhiL2gwOS8xMTQ4NTk3NzI4MDU0Mi5qcGd8ZTg4ZWVkYTFiODc2ZThiY2FjOGFhNGYxYzlmOGU0OTBlNTk0M2QzMmU3YTk0OTM4ZmUzZTgxOWZmMDJiYzlkMA",
    article: "",
    title: "Primer 24h smoothing base",
    id: 2,
    price: '2 310',
    stars:5
    },
    {
    img: "https://api.rivegauche.ru/medias6/?context=bWFzdGVyfHByb2R1Y3RzfDk0ODkxfGltYWdlL2pwZWd8cHJvZHVjdHMvaGVjL2gxOS8xMTQ0NTU2NTY4NTc5MC5qcGd8Y2Q0YjJhMzYwMWI2MGRhZTkxYmQ0MzM5ODg5ZmQ2MGQ0ZjY1NDVkMjNhMTQ4N2VkN2ZhMzAxYmFlNDQxNjkyZA",
    article: "",
    title: "Mac powder kiss liquid lipcolour",
    id: 3,
    price: '2 790',
    stars:4
    },
    {
    img: "https://api.rivegauche.ru/medias6/3666057146176.jpg?context=bWFzdGVyfGltYWdlc3w0NjE1NDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDIwL2gyYi8xMTU3MDQ5OTA1OTc0Mi5qcGd8OTQ4YmM5ZTcxNjYxY2YyNTI1NGU4N2FhNmZkNzU3M2M5Njk1ZTk3N2EyNmVmODQ1ZGNjYjdkYmMzNTA2NDZkOQ",
    article: "",
    title: "Clarins summer in rose bronzing compact powder",
    id: 4,
    price: '3 600',
    stars:3
    },
    {
    img: "https://api.rivegauche.ru/medias6/3666057146213.jpg?context=bWFzdGVyfGltYWdlc3wyOTY1NTR8aW1hZ2UvanBlZ3xpbWFnZXMvaGU1L2g0MC8xMTU3MDQ5OTA5MjUxMC5qcGd8MTVjNDA1MTQzNjFhZDk0MGU2YjJiNmY1MjQzMmNhMGJhMzNiZTdiOTRkZmE4MjlmNGM1OGNhZjhmYWMxNDc1ZQ",
    article: "",
    title: "Clarins summer in rose fix make-up",
    id: 5,
    price: '2 600',
    stars:5
    },
    {
    img: "https://api.rivegauche.ru/medias6/?context=bWFzdGVyfHByb2R1Y3RzfDEyMzg3NnxpbWFnZS9qcGVnfHByb2R1Y3RzL2gwZC9oZTcvMTE0ODUzMzYxNDE4NTQuanBnfGJhZTUxYzIzNzJhZjk5Yjk4YTFkZjE4NTJmNTJmOTdkYWM0MWY3NzI4MzQwY2RhZDUwMWU2YjY0ZWZmOGI0NDc",
    article: "",
    title: "Clinique lash power mascara ",
    id: 6,
    price: '1 794',
    stars:5
    },
    {
    img: "https://api.rivegauche.ru/medias6/?context=bWFzdGVyfHByb2R1Y3RzfDM5Njc1MXxpbWFnZS9qcGVnfHByb2R1Y3RzL2g5OS9oOWMvMTE1MTQ4MzMzMDU2MzAuanBnfGIzMmExMTVhNjFlNDhiMmQ2MWEzMWU2NjcxZGNjNTYyNmZmYWIyMDRjMTBjMmY4YzBmNmQ2YjI0ZjM0NDc2ZmY",
    article: "",
    title: "Estee lauder pure color envy sculpting lipstick",
    id: 7,
    price: '1 976',
    stars:5
    },
    {
    img: "https://api.rivegauche.ru/medias6/887167567443.jpg?context=bWFzdGVyfGltYWdlc3wzNDk3MzV8aW1hZ2UvanBlZ3xpbWFnZXMvaGM5L2g4MS8xMTU4NDkxMTczNjg2Mi5qcGd8YzU1ODcwOTgxYmE2ZjI0ZTc3MmVmZjA3YWE4ZjRhZDA2ZGJkNzc2NDljYWVkNjk1NDlhZWVkODJiNTkwYjQyOA",
    article: "",
    title: "Infusion balancing essence lotion ",
    id: 8,
    price: '4 485',
    stars:3
    },
    {
    img: "https://api.rivegauche.ru/medias6/?context=bWFzdGVyfHByb2R1Y3RzfDM3NTU4MXxpbWFnZS9qcGVnfHByb2R1Y3RzL2g3My9oMmMvMTE1MDU0NTU1MzAwMTQuanBnfGYwOWFjN2NkOGVjY2U4YjU2NjVmN2JhYTJjMGQ5OTBmMzkyYWE4NjM1YmQ0YWRlNzk0MjI1MWQ1OGQwODZkN2I",
    article: "",
    title: "Ronda jewerelly box jbl-w01 ",
    id: 9,
    price: '760',
    stars:5
    },
    {
    img: "https://api.rivegauche.ru/medias6/?context=bWFzdGVyfHByb2R1Y3RzfDQzNTc4MnxpbWFnZS9qcGVnfHByb2R1Y3RzL2hjNC9oNDgvMTE1MTMyMTk1Nzk5MzQuanBnfDQ3ZjY0MWI3NjQ5N2IwOTVlN2YwZDNlNDYwYWQ5MWFmOGI1MzhjZjNmZjM0ZmM2Y2ZhZTZkYWE3NjVlNGIxZWM",
    article: "",
    title: "Bespecial brownie",
    id: 10,
    price: '399',
    stars:4
    },
    {
    img: "https://api.rivegauche.ru/medias6/?context=bWFzdGVyfHByb2R1Y3RzfDI5MDY2OHxpbWFnZS9qcGVnfHByb2R1Y3RzL2g1Mi9oZmMvMTE0OTU0NTU0MjQ1NDIuanBnfGRkN2FjZjM4OTUzY2QwMWY3NzI2MGZlMjg5NmM2ZWMxMmIwYTY4OWIwMjdjYWMwMmI5NjJlNjBiN2Y5YjJkZDM",
    article: "",
    title: "Lavelle collection eyebrow duo set",
    id: 11,
    price: '149',
    stars:5
    },
    {
    img: "https://api.rivegauche.ru/medias6/?context=bWFzdGVyfHByb2R1Y3RzfDI2MzM1OHxpbWFnZS9qcGVnfHByb2R1Y3RzL2gxOC9oNWQvMTE1MTIyNjEyNDcwMDYuanBnfDU3OTZjYWQ2NDJlNmY4ZjQ5ZDEwMzBkOGI0ODQxMWU4MjI1OTYwMDRkM2E5ZDU3N2QyYzU2NjdlMTdmMWVkMWQ",
    article: "",
    title: "La miso gold hydrogel eye patch",
    id: 12,
    price: '255',
    stars:3
    },
  ],





  products: [{
    img:"https://api.rivegauche.ru/medias6/?context=bWFzdGVyfHByb2R1Y3RzfDEzMTI5NnxpbWFnZS9qcGVnfHByb2R1Y3RzL2hjNC9oMTgvMTE1MTIwMzc5OTg2MjIuanBnfGQzZDI4ZjQxNDg0MzI4OTkxYjBjZGQ0MDcwNzQzNWJkOGZlOGYxYThhZTc3YjQxZGQ3OGYxZGFmMWRmNjQxMDU",
    article:"",
    title:"Make up base moisturizing ",
    id: 1,
    price:"1 480",
    stars:4
    },
    {
    img: "https://api.rivegauche.ru/medias6/product-954094-0-listingDesktop?context=bWFzdGVyfHByb2R1Y3RzfDEyNjEwfGltYWdlL2pwZWd8cHJvZHVjdHMvaDhiL2gwOS8xMTQ4NTk3NzI4MDU0Mi5qcGd8ZTg4ZWVkYTFiODc2ZThiY2FjOGFhNGYxYzlmOGU0OTBlNTk0M2QzMmU3YTk0OTM4ZmUzZTgxOWZmMDJiYzlkMA",
    article: "",
    title: "Primer 24h smoothing base",
    id: 2,
    price: '2 310',
    stars:5
    },
    {
    img: "https://api.rivegauche.ru/medias6/?context=bWFzdGVyfHByb2R1Y3RzfDk0ODkxfGltYWdlL2pwZWd8cHJvZHVjdHMvaGVjL2gxOS8xMTQ0NTU2NTY4NTc5MC5qcGd8Y2Q0YjJhMzYwMWI2MGRhZTkxYmQ0MzM5ODg5ZmQ2MGQ0ZjY1NDVkMjNhMTQ4N2VkN2ZhMzAxYmFlNDQxNjkyZA",
    article: "",
    title: "Mac powder kiss liquid lipcolour",
    id: 3,
    price: '2 790',
    stars:4
    },
    {
    img: "https://api.rivegauche.ru/medias6/3666057146176.jpg?context=bWFzdGVyfGltYWdlc3w0NjE1NDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDIwL2gyYi8xMTU3MDQ5OTA1OTc0Mi5qcGd8OTQ4YmM5ZTcxNjYxY2YyNTI1NGU4N2FhNmZkNzU3M2M5Njk1ZTk3N2EyNmVmODQ1ZGNjYjdkYmMzNTA2NDZkOQ",
    article: "",
    title: "Clarins summer in rose bronzing compact powder",
    id: 4,
    price: '3 600',
    stars:3
    },
    {
    img: "https://api.rivegauche.ru/medias6/3666057146213.jpg?context=bWFzdGVyfGltYWdlc3wyOTY1NTR8aW1hZ2UvanBlZ3xpbWFnZXMvaGU1L2g0MC8xMTU3MDQ5OTA5MjUxMC5qcGd8MTVjNDA1MTQzNjFhZDk0MGU2YjJiNmY1MjQzMmNhMGJhMzNiZTdiOTRkZmE4MjlmNGM1OGNhZjhmYWMxNDc1ZQ",
    article: "",
    title: "Clarins summer in rose fix make-up",
    id: 5,
    price: '2 600',
    stars:5
    },
    {
    img: "https://api.rivegauche.ru/medias6/?context=bWFzdGVyfHByb2R1Y3RzfDEyMzg3NnxpbWFnZS9qcGVnfHByb2R1Y3RzL2gwZC9oZTcvMTE0ODUzMzYxNDE4NTQuanBnfGJhZTUxYzIzNzJhZjk5Yjk4YTFkZjE4NTJmNTJmOTdkYWM0MWY3NzI4MzQwY2RhZDUwMWU2YjY0ZWZmOGI0NDc",
    article: "",
    title: "Clinique lash power mascara ",
    id: 6,
    price: '1 794',
    stars:5
    },
    {
    img: "https://api.rivegauche.ru/medias6/?context=bWFzdGVyfHByb2R1Y3RzfDM5Njc1MXxpbWFnZS9qcGVnfHByb2R1Y3RzL2g5OS9oOWMvMTE1MTQ4MzMzMDU2MzAuanBnfGIzMmExMTVhNjFlNDhiMmQ2MWEzMWU2NjcxZGNjNTYyNmZmYWIyMDRjMTBjMmY4YzBmNmQ2YjI0ZjM0NDc2ZmY",
    article: "",
    title: "Estee lauder pure color envy sculpting lipstick",
    id: 7,
    price: '1 976',
    stars:5
    },
    {
    img: "https://api.rivegauche.ru/medias6/887167567443.jpg?context=bWFzdGVyfGltYWdlc3wzNDk3MzV8aW1hZ2UvanBlZ3xpbWFnZXMvaGM5L2g4MS8xMTU4NDkxMTczNjg2Mi5qcGd8YzU1ODcwOTgxYmE2ZjI0ZTc3MmVmZjA3YWE4ZjRhZDA2ZGJkNzc2NDljYWVkNjk1NDlhZWVkODJiNTkwYjQyOA",
    article: "",
    title: "Infusion balancing essence lotion ",
    id: 8,
    price: '4 485',
    stars:3
    },
  ],
  clicked: false
};


export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLIK-BUTTON":
      return {...state, clicked:!state.clicked}
    
    case "PROCESSING-ENTER-SYMBOL":
      const text = action.text.toLowerCase();
      return {...state, products: state.productsOrigin.filter(el => el.title.toLowerCase().includes(text))}
    
      case "PRICE-FILTER":     
      return {...state, products: state.productsOrigin.filter(el => Number(el.price.replace(' ','')) > action.minVal &&
      Number(el.price.replace(' ','')) < action.maxVal)}

    case "ALL-PRODUCTS":
      return {...state, products: state.productsOrigin}

    default:
      return state;
  }
}


export default mainReducer