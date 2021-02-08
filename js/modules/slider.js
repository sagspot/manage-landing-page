function slider() {
  const testimonials = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.dot');
  const mobile = document.documentElement.clientWidth;

  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      if (mobile < 991)
        testimonials.forEach(
          (testimonial) => (testimonial.style.display = 'none')
        );

      const dotValue = e.currentTarget.id.slice(3);
      const cardId = `card${dotValue}`;
      const displayCard = document.getElementById(cardId);

      dots.forEach((activeDot) => activeDot.classList.remove('active'));
      dot.classList.add('active');

      displayCard.style.display = 'block';
    });
  });
}

export { slider };
