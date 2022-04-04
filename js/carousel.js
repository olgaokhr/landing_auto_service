$('#carouselhAuto').jsCarousel({
    onthumbnailclick: function(src) { /* alert(src);*/  },  //функция при нажатии на картинку
    autoscroll: true,   //вкл/выкл автопрокрутку
    itemstodisplay: 5,  //сколько слайдов отображать
    scrollspeed: 1500,  //время эффекта прокрутки
    delay: 3000,        //время прокрутки слайдов
    orientation: 'h',   //горизонтальная h или вертикальная v карусель
    circular: true
    });