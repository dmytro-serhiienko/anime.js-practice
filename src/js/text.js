import { animate, splitText, stagger } from 'animejs';

// Використовуємо більш точний селектор .text
const { words } = splitText('.text', {
  words: { wrap: 'clip' },
});

animate(words, {
  // Анімуємо з 100% (знизу) до 0% (початкове положення)
  y: ['100%', '0%'],

  duration: 750,
  ease: 'out(3)',
  delay: stagger(100), // Почергова поява слів

  // Прибираємо loop: true, щоб текст залишився на екрані
});
