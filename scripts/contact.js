$.ajax({
  url: 'shared/navbar.html',
  method: 'GET',
  success: function (rslt) {
    // inject navbar html
    document.getElementById('navbar').innerHTML = rslt;

    // shared navbar ended up not working need to update
    // about link in contact page
    let about = document.getElementById('about');
    about.href = '../index.html#About';

    let home = document.getElementById('home');
    home.href = '../index.html';

    // need to remove self reference, not needed here
    let contact = document.getElementById('contact').remove();

    // need to update portfolio link
    let portfolio = document.getElementById('portfolio');
    portfolio.href = '../index.html#cards';

    // need to update portfolio link
    let projects = document.getElementById('projectsa');
    projects.href = '../index.html#projects';
  },
});
