$('#get-number').on('submit', async function (e) {
  e.preventDefault();
  let num = $('#number').val();
  let num2 = $('#number2').val();
  let num3 = $('#number3').val();
  let response = await axios.get(`http://numbersapi.com/${num},${num2},${num3}`)
  
  for (let idx in response.data) {
    $('#display-number').append(`${response.data[idx]}`)
  }
});