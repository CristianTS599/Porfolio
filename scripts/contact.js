$.ajax({
  url: '/views/shared/navbar.html',
  method: 'GET',
  success: function (rslt) {
    document.getElementById('navbar').innerHTML = rslt;
    let about = document.getElementById('about');
    about.href = '/views/index.html#About';

    let contact = document.getElementById('contact').remove();

    let portfolio = document.getElementById('portfolio');
    portfolio.href = '/views/index.html#cards';
  },
});
