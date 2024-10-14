
 const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;

  let season;
  let seasonText;

  if (currentMonth >= 3 && currentMonth <= 5) {
    season = 'spring';
    seasonText = 'Весна';
  } else if (currentMonth >= 6 && currentMonth <= 8) {
    season = 'summer';
    seasonText = 'Лето';
  } else if (currentMonth >= 9 && currentMonth <= 11) {
    season = 'autumn';
    seasonText = 'Осень';
  } else {
    season = 'winter';
    seasonText = 'Зима';
  }

  const iconUrl = `path/to/${season}_icon.png`;

  document.getElementById('seasonal-icon').src = iconUrl;
  document.getElementById('season-text').textContent = seasonText;



  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    effect: "fade",
    speed: 900,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    
  });


  var swiper = new Swiper(".mySwiperr", {
    slidesPerView: 1,
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  function openPopup(imageSrc) {
    document.getElementById('popup-image').src = imageSrc;
    document.getElementById('popup').style.display = 'flex';
  }

  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }




document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') {
    showNextImage();
  } else if (e.key === 'ArrowLeft') {
    showPrevImage();
  } else if (e.key === 'Escape') {
    closePopup();
  }
});




function showDiv2() {
  var div2 = document.getElementById("div2");

  // Добавляем стили -webkit-filter и filter
  div2.style.webkitFilter = "grayscale(100%)";
  div2.style.filter = "grayscale(100%)";
}

function hideDiv2() {
  var div2 = document.getElementById("div2");

  // Удаляем стили -webkit-filter и filter
  div2.style.webkitFilter = "none";
  div2.style.filter = "none";
}


function showDiv2() {
  var div2 = document.getElementById("div2");
  var div3 = document.getElementById("div3");

  // Добавляем стили -webkit-filter и filter
  div2.style.webkitFilter = "grayscale(100%)";
  div2.style.filter = "grayscale(100%)";
  div3.style.webkitFilter = "grayscale(100%)";
  div3.style.filter = "grayscale(100%)";
}

function hideDiv2() {
  var div2 = document.getElementById("div2");
  var div3 = document.getElementById("div3");

  // Удаляем стили -webkit-filter и filter
  div2.style.webkitFilter = "none";
  div2.style.filter = "none";
  div3.style.webkitFilter = "none";
  div3.style.filter = "none";
}



function showDiv3() {
  var div1 = document.getElementById("div1");
  var div2 = document.getElementById("div2");

  // Добавляем стили -webkit-filter и filter
  div1.style.webkitFilter = "grayscale(100%)";
  div1.style.filter = "grayscale(100%)";
  div2.style.webkitFilter = "grayscale(100%)";
  div2.style.filter = "grayscale(100%)";
}

function hideDiv3() {
  var div1 = document.getElementById("div1");
  var div2 = document.getElementById("div2");

  // Удаляем стили -webkit-filter и filter
  div1.style.webkitFilter = "none";
  div1.style.filter = "none";
  div2.style.webkitFilter = "none";
  div2.style.filter = "none";
}




function showDiv1() {
  var div1 = document.getElementById("div1");
  var div3 = document.getElementById("div3");

  // Добавляем стили -webkit-filter и filter
  div1.style.webkitFilter = "grayscale(100%)";
  div1.style.filter = "grayscale(100%)";
  div3.style.webkitFilter = "grayscale(100%)";
  div3.style.filter = "grayscale(100%)";
}

function hideDiv1() {
  var div1 = document.getElementById("div1");
  var div3 = document.getElementById("div3");

  // Удаляем стили -webkit-filter и filter
  div1.style.webkitFilter = "none";
  div1.style.filter = "none";
  div3.style.webkitFilter = "none";
  div3.style.filter = "none";
}

Fancybox.bind("[data-fancybox='gallery1']", {
  // Your custom options
});
Fancybox.bind("[data-fancybox='gallery2']", {
  // Your custom options
});


Fancybox.bind("[data-fancybox='gallery3']", {
  // Your custom options
});
Fancybox.bind("[data-fancybox='gallery4']", {
  // Your custom options
});

Fancybox.bind("[data-fancybox='gallery5']", {
  // Your custom options
});
Fancybox.bind("[data-fancybox='gallery6']", {
  // Your custom options
});


Fancybox.bind("[data-fancybox='gallery7']", {
  // Your custom options
});
Fancybox.bind("[data-fancybox='gallery8']", {
  // Your custom options
});


