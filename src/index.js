import $ from 'jquery'

$(document).ready(() => {
  fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')
    .then(response => response.json())
    .then(json => topWord(json))
    .catch(error => console.log(error))

  function topWord(data) {
    var word = Object.keys(data.word)[0]
    var value = data.word[word];
    $('.top-word').append(`<p>${word} is the most popular word </p>`)
    $('.word-count').append(`<p>Count : ${value} </p>`)
  }

  $('#submit-word').on('click', function() {
    var word = $('#word-input').val()

    fetch('https://wordwatch-api.herokuapp.com/api/v1/words', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        word: { value: word }
      })
    })
  })
})
