console.log('i run');

var login = document.getElementById('login');
var modal = document.getElementById('modal');
var span = document.getElementsByClassName("close")[0];

console.log('span:', span);

login.addEventListener('onclick', function() {
  login.style.display = "block";
})
