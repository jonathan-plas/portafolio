const menu = document.querySelector('#menu');

menu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    event.preventDefault();
    const section = document.querySelector(event.target.hash);
    section.scrollIntoView({ behavior: 'smooth' });
  }
});