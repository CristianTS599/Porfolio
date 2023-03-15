$.ajax({
  url: 'views/shared/navbar.html',
  method: 'GET',
  success: function (rslt) {
    document.getElementById('navbar').innerHTML = rslt;
  },
});
