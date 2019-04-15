function update() {
  localStorage.setItem('disabled', this.checked);
}

window.addEventListener('load', function () {
  var checkbox = document.getElementById('disabled');
  checkbox.checked = localStorage.getItem('disabled') == 'true';
  checkbox.addEventListener('click', update);
});
