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
