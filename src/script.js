import ScrollReveal from 'scrollreveal';
export const initializeScrollAnimations = () => {
  const isMobile = window.innerWidth <= 800; 

  if (!isMobile) {
    const sr = ScrollReveal({
        distance: '60px',
        duration: 1500,
        delay: 40
      });
    
      sr.reveal('.contactForm', { delay: 100, origin: 'top', interval: 200 });
      sr.reveal('.connectHeading', { delay: 100, origin: 'bottom', interval: 100, distance: '10px' });
      sr.reveal('.icon_scroll', { delay: 300, origin: 'bottom', interval: 100, distance: '10px' });
      sr.reveal('.outercontainer', { delay: 0, origin: 'left' });
      sr.reveal('.content', { delay: 0, origin: 'right' });
      sr.reveal('.about_heading', { delay: 0, origin: 'right' });
      sr.reveal('.odd', { delay: 20, origin: 'left' });
      sr.reveal('.even', { delay: 20, origin: 'right' });
      sr.reveal('.top', { delay: 20, origin: 'top' });
      sr.reveal('.down', { delay: 10, origin: 'bottom' ,distance: '15px'});
    }

    const options = {
      threshold: 0.2
    };
  
    const animateOnScroll = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observeItems = (items) => {
      const observer = new IntersectionObserver(animateOnScroll, options);
      items.forEach(item => {
        observer.observe(item);
      });
    };
  
    const projectItems = document.querySelectorAll('.pro');
    observeItems(projectItems);
  
    const eduItems = document.querySelectorAll('.edu');
    observeItems(eduItems);
  
    const aboutItems = document.querySelectorAll('.aboutinfo');
    observeItems(aboutItems);
  
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const contactObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const connectHeading = document.querySelector('.connectHeading');
            const contactForm = document.querySelector('.contactForm');
            if (connectHeading) connectHeading.style.opacity = 1;
            if (contactForm) contactForm.style.opacity = 1;
            contactObserver.unobserve(entry.target);
          }
        });
      }, options);
  
      contactObserver.observe(contactSection);
    }  
 
  };
  