import { animate, spring } from "../node_modules/animejs";

export function loadAnimations() {
  animate('#intro-illustration-img',
    {
      y: ['8rem', '0'],
      opacity: ['0', '1'],
      ease: spring({ bounce: .35 }),
    });

  animate('#intro-character-img',
    {
      y: ['8rem', '0'],
      opacity: ['0', '1'],
      ease: spring({ bounce: .35 }),
      delay: 100
    });

  animate('#intro-portfolio-img',
    {
      y: ['8rem', '0'],
      opacity: ['0', '1'],
      ease: spring({ bounce: .35 }),
      delay: 200
    });

  animate('#intro-author-img',
    {
      y: ['8rem', '0'],
      opacity: ['0', '1'],
      ease: spring({ bounce: .35 }),
      delay: 300
    });


  animate('#intro-about-cloud-img',
    {
      y: ['8rem', '0'],
      opacity: ['0', '1'],
      ease: spring({ bounce: .6 }),
      rotate: ['-45', '0'],
      duration: 1000,
      delay: 800
    });
}
