var toggleClass = 'toggle';
var toggledClass = 'toggled';


// general

var cursorVisible = true;
setInterval(function() {
  cursorVisible = !cursorVisible;
  renderSubtitle();
  renderFavIcon();
}, 1000);


// images

var imageTags = document.getElementsByTagName('IMG');
for (var imageIndex = 0; imageIndex < imageTags.length; imageIndex++) {
  var imageTag = imageTags[imageIndex];
  if (imageTag.dataset.src) imageTag.src = images[imageTag.dataset.src];
}
var iconTags = document.getElementsByTagName('I');
for (var iconIndex = 0; iconIndex < iconTags.length; iconIndex++) {
  var iconTag = iconTags[iconIndex];
  if (iconTag.dataset.icon) iconTag.innerHTML = icons[iconTag.dataset.icon];
}

var toggles = document.getElementsByClassName(toggleClass);
for (var toggleIndex = 0; toggleIndex < toggles.length; toggleIndex++) {
  var toggle = toggles[toggleIndex];
  (function(toggle) {
    toggle.addEventListener('click', function() {
      var action = toggle.classList.contains(toggledClass) ? 'remove' : 'add';
      toggle.classList[action](toggledClass);
    });
  })(toggle);
}


// hero

var subtitle = '';
var subtitleTyping = false;
var subtitles = [];
var currentSubtitle = -1;
var subtitleContainer = document.getElementById('subtitle');
var subtitleElements = document.getElementsByClassName('subtitle');
for (var subElementIdx = 0; subElementIdx < subtitleElements.length; subElementIdx++) {
  subtitles.push(subtitleElements[subElementIdx].innerHTML);
}

var renderSubtitle = function() {
  var text = '> ' + subtitle;
  subtitleContainer.className = cursorVisible && !subtitleTyping ? 'cursor' : '';
  subtitleContainer.innerHTML = text;
}

setInterval(function() {
  currentSubtitle = (currentSubtitle + 1) % subtitles.length;
  var nextSubtitle = subtitles[currentSubtitle];
  subtitleTyping = true;
  for (var charIndex = 0; charIndex < nextSubtitle.length; charIndex++) {
    (function(charIndex){
      setTimeout(function() {
        subtitle = nextSubtitle.substr(0, charIndex + 1);
        if (charIndex == nextSubtitle.length - 1) subtitleTyping = false;
        renderSubtitle();
      }, charIndex * 50);
    })(charIndex);
  }
}, 5000);


// bottombar

var impress = document.getElementById('impress');
impress.addEventListener('click', function() {
  window.scrollTo(0, 9999);
});


// favicon

var canvas = document.createElement('canvas');
canvas.width = 16;
canvas.height = 16;
var ctx = canvas.getContext('2d');
ctx.fillStyle = '#000';
var link = document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
document.getElementsByTagName('head')[0].appendChild(link);
var favCommand = '';
var favHidden = false;

var renderFavIcon = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var text = favHidden ? ' ❙❙' : (favCommand[favCommand.length - 1] || '>') + (cursorVisible ? '_' : '');
  ctx.fillText(text, 3, 11);
  link.href = canvas.toDataURL('image/x-icon');
}
renderFavIcon();

// easteregg

document.addEventListener('keypress', function(e) {
  if (e.key && e.key.length === 1) favCommand += e.key;
  if (e.key && e.key === 'Enter') {
    var cmdEcho = '$ ' + favCommand + '\n';
    switch (favCommand) {
      case '':
        break;
      case 'ls':
        alert(cmdEcho + 'index.html');
        break;
      case 'cat index.html':
        alert(cmdEcho + document.documentElement.outerHTML);
        break;
      case 'rm index.html':
        document.documentElement.innerHTML = '';
        break;
      default:
        alert(cmdEcho + '-bash: ' + favCommand + ': command not found');
    }
    favCommand = '';
  }
  renderFavIcon();
});

function handleVisibilityChange() {
  favHidden = document[hidden];
  renderFavIcon();
}

var hidden, visibilityChange;
if (typeof document.hidden !== 'undefined') {
  hidden = 'hidden';
  visibilityChange = 'visibilitychange';
} else if (typeof document.msHidden !== 'undefined') {
  hidden = 'msHidden';
  visibilityChange = 'msvisibilitychange';
} else if (typeof document.webkitHidden !== 'undefined') {
  hidden = 'webkitHidden';
  visibilityChange = 'webkitvisibilitychange';
}

handleVisibilityChange();
document.addEventListener(visibilityChange, handleVisibilityChange, false);
