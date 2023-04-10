const clickSwitchHandler = () => {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark');
    localStorage.removeItem('themeVar');
  } else {
    document.body.classList.add('dark');
    // save in LocalStorage
    localStorage.setItem('themeVar', 'dark');
  }
};

const initSwitch = (selector) => {
  const switchs = document.querySelectorAll(selector || '.btnSwitch');

  if (!switchs.length) return;
  // check theme in LocalStorage
  localStorage.getItem('themeVar') === 'dark' && clickSwitchHandler();

  switchs.forEach((switcher) => {
    switcher.addEventListener('click', clickSwitchHandler);
  });
};

export default initSwitch;
