console.log('i run');

var login = document.getElementById('login');
var modal = document.getElementById('modal');
var span = document.getElementsByClassName("close")[0];

console.log('span:', span);

login.addEventListener('click', function() {
  console.log(login.style);
  modal.style.display = "block";
});

span.addEventListener('click', function() {
  modal.style.display = "none";
});

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
