async function init() {
  const resp = await fetch('/findAll');
  const games = await resp.json();
  const arrGames = games.allGames

  const map = new ymaps.Map('map', {
    center: [55.76, 37.64],
    zoom: 10
  }, {
    searchControlProvider: 'yandex#search'
  })

  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('rulerControl');

  for (let i = 0; i < arrGames.length; i++) {
    let placemark = new ymaps.Placemark([arrGames[i].coordsA, arrGames[i].coordsB], {
      balloonContentHeader: `${arrGames[i].date}`,
      balloonContentBody: `${arrGames[i].text}
      <div>
        <button id="joinButton" type="click">Участвовать</button>
      </div>`,
      balloonContentFooter: `${arrGames[i].time}`,
    }, {
      iconLayout: 'default#image',
      iconImageHref: '/images/1_1735.png',
      iconImageSize: [30, 30],
      iconImageOffset: [-15, -15],
    })

    map.geoObjects.add(placemark);

  }
}

ymaps.ready(init);
