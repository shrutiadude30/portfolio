const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetSection   
 = document.getElementById(link.href.split('#')[1]);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
      // Remove active class from all links
      navLinks.forEach(link => link.classList.remove('active'));
      // Add active class to the clicked link
      link.classList.add('active');   

    }
  });
});
