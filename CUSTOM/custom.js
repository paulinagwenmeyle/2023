console.log('hi custom.js');

document.addEventListener('DOMContentLoaded', function() {
      fetch('text/about-me.txt')
          .then(response => response.text())
          .then(data => {
              document.getElementById('about-me').innerHTML = data;
          });
      fetch('text/text1.txt')
      .then(response => response.text())
      .then(data => {
          document.getElementById('project-text').innerHTML = data;
      });
});


// var images = ['images/1.png', 'images/2.png', 'images/3.png', 'images/4.png','images/5.png','images/6.png','images/7.png','images/8.png','images/9.png','images/10.png','images/11.png','images/12.png','images/13.png','images/14.png','images/15.png','images/16.png','images/17.png','images/18.png','images/graduation-collection-22.mp4']; // Add your image URLs here
// var texts = ['text/text1.txt', 'text/text1.txt', 'text/text2.txt', 'text/text2.txt']; // Add your text file URLs here


fetch('/2023/content.json') // replace this with the path to your JSON file
    .then(response => response.json())
    .then(data => {
        content = data;
    });

var currentIndex = 0;

function updateText(fileUrl) {
    fetch(fileUrl)
        .then(response => response.text())
        .then(data => {
            document.getElementById('project-text').innerHTML = data;
        });
}

document.getElementById('next-button').addEventListener('click', function() {
    currentIndex++;
    if (currentIndex >= content.length) {
        currentIndex = 0; // If we've gone past the end of the array, reset to the start.
    }
    document.getElementById('carousel').src = content[currentIndex].image;
    updateText(content[currentIndex].text);
    document.getElementById('media-status').innerText = (currentIndex + 1) + '/' + content.length;
});

document.getElementById('previous-button').addEventListener('click', function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = content.length - 1; // If we've gone past the start of the array, go to the end.
    }
    document.getElementById('carousel').src = content[currentIndex].image;
    updateText(content[currentIndex].text);
    document.getElementById('media-status').innerText = (currentIndex + 1) + '/' + content.length;
});

console.log('tschüss custom.js')
