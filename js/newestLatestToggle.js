const toggleHandle = (event) => {
  const toggleButton = event.currentTarget;
  if (!toggleButton.classList.contains('bg-dark')) {
    const siblingElement =
      toggleButton.nextElementSibling || toggleButton.previousElementSibling;
    const lightClasses = [
      'bg-white',
      'text-dark',
      'border',
      'border-2',
      'border-borders',
    ];
    const darkClasses = ['bg-dark', 'text-white'];

    siblingElement.classList.remove(...darkClasses);
    siblingElement.classList.add(...lightClasses);

    toggleButton.classList.remove(...lightClasses);
    toggleButton.classList.add(...darkClasses);
  }
};

const sortToggle = () => {
  const sortBox = document.querySelector('.sortBox');

  for (const toggle of sortBox.children) {
    toggle.addEventListener('click', toggleHandle);
  }
};

export default sortToggle;
