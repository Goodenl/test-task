import generateCard from './generateCard.js';

// debounce to scroll down
const debounce = (func, time = 500) => {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(func, time);
  };
};

const scrollEndHandle = (templateSelector, listSelector) => {
  const bottomOffset = 80;
  if (
    window.innerHeight + window.scrollY + bottomOffset >=
    document.body.offsetHeight
  ) {
    generateCard(templateSelector, listSelector);
  }
};

const cardOnScroll = (templateSelector, listSelector) => {
  document.addEventListener(
    'scroll',
    debounce(scrollEndHandle.bind(null, templateSelector, listSelector), 1000),
    { passive: true }
  );
};

export default cardOnScroll;
