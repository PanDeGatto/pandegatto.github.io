export function scrollTrigger(selector, options = {}) {
  const els = Array.from(document.querySelectorAll(selector));

  els.forEach(el => addObserver(el, options));
}

function addObserver(el, options) {
  const triggerHeight = options.triggerHeight ?? 0;

  if (!('IntersectionObserver' in window)) {
    options.cb ? options.cb(el) : el.classList.add('active');
    return;
  }

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          options.cb ? options.cb(entry.target) : entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0,
      rootMargin: `0px 0px -${triggerHeight}px 0px`,
    }
  );

  observer.observe(el);
}
