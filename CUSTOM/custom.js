console.log('hi custom.js');


document.addEventListener('DOMContentLoaded', function() {
      fetch('text/about-me.txt')
          .then(response => response.text())
          .then(data => {
              document.getElementById('about-me').innerHTML = data;
          });
      fetch('text/intro.txt')
      .then(response => response.text())
      .then(data => {
          document.getElementById('project-text').innerHTML = data;
      });
});


 fetch('/content.json') // replace this with the path to your JSON file
     .then(response => response.json())
     .then(data => {
         content = data;
     });

// fetch('/content.yaml')
//        .then(response => response.text())
//        .then(data => {
//            content = jsyaml.safeLoad(data);
//        });

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
