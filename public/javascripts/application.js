function init() {

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

  map.events.add('click', function (e) {
    const coords = e.get('coords');
    map.geoObjects.add(new ymaps.Placemark(coords, {
      balloonContentHeader: 'Введите данные',
      balloonContentBody:
        `<form class="lol">
          <div>
            <input name="date" type="date" placeholder="Дата начала игры">
            <input name="time" type="time" placeholder="Время начала игры">
            <input name="text" type="text" placeholder="Описание игры">
            <hr>
            <button type="submit">Создать игру</button>
          </div>
        </form>`,
      balloonContentFooter: 'Пожалуйста, подробнее опишите вашу игру',
    }, {
      iconLayout: 'default#image',
      iconImageHref: '/images/1_1735.png',
      iconImageSize: [30, 30],
      iconImageOffset: [-15, -15],
    }))

    map.events.add('balloonopen', (e) => {
      const formGame = document.querySelector('.lol')
      formGame.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = Object.fromEntries(new FormData(formGame));
        formData.coordsA = coords[0];
        formData.coordsB = coords[1];
        const res = await fetch('/', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        window.location.assign(`/`)
        map.balloon.close();
      })
    })
  });
}

ymaps.ready(init);
