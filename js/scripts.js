const API_KEY = "d6766c54-1a40-47bd-81c4-f1fac2c82e6d";

const requestOptions = {
  method: 'GET',
  headers: {
    'X-CMC_PRO_API_KEY': API_KEY
  },
}

fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/map`, requestOptions)
  .then((response) => {
    if (!response) throw new Error(`Erro ao executar a requisição, status ${response.status}`);
    return response.json();
  }).then((api) => {
    let text = "";

    console.log(api);

    for (let i = 0; i < 10; i++) {
      text = text + `
        <div class="media">
          <img src="coin.png" class="align-self-center mr-3" alt="coin" width="80" height="80">
          <div class="media-body">
            <h5 class="mt-2">${api.data[i].name}</h5>
            <h6 class="mb-1">${api.data[i].symbol}</h6>
            <p>${api.data[i].first_historical_data}</p>
          </div>
        </div>
      `;

      document.getElementById("coins").innerHTML = text;
    }
  }).catch((err) => {
    console.error(err.message);
  });