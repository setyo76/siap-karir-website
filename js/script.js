const writeElement= ['Explore Jenis Karir & Profesi', 'Kenali Minat Bakat', 'Free Konsultasi', 'Free Booster Skill'];
let count = 0;
let writeIndex = 0;
let currentWrite = '';
let words = '';

(function write() {

    if(count == writeElement.length){
        count = 0;
    }

    currentWrite = writeElement[count];

    words = currentWrite.slice(0, ++writeIndex);
    document.querySelector('.write-efect').textContent = words;

    if(words.length == currentWrite.length){
        count++;
        writeIndex = 0;
    }
    setTimeout(write, 200);
})();

const writeElementFooter= [' Platform khusus pelajar','agar siap menyongsong masa depan gemilang', 'Dapatkan aplikasinya!'];
let countFooter = 0;
let writeIndexFooter = 0;
let currentWriteFooter = '';
let wordsFooter = '';

(function writeFooter() {

    if(count == writeElementFooter.length){
        countFooter = 0;
    }

    currentWriteFooter = writeElementFooter[countFooter];

    wordsFooter = currentWriteFooter.slice(0, ++writeIndexFooter);
    document.querySelector('.about-efect').textContent = wordsFooter;

    if(wordsFooter.length == currentWriteFooter.length){
        countFooter++;
        writeIndexFooter = 0;
    }
    setTimeout(writeFooter, 200);
})();

window.onscroll = function () {
    showBackToTopButton();
  };
  
  function showBackToTopButton() {
    var button = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  }
  
  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }