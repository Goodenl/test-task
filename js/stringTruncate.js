// toggle "Show more" and expand text | truncate string
const toggleHandle = (event, parentSelector, selectorString, maxLength) => {
  const toggleItem = event.currentTarget;
  const parentBox = toggleItem.closest(parentSelector);
  const stringItem = parentBox.querySelector(selectorString);

  if (stringItem.dataset.fullText) {
    // set full text and change toggleButton text on 'Show less'
    stringItem.innerText = stringItem.dataset.fullText;
    stringItem.removeAttribute('data-full-text');
    toggleItem.innerText = 'Show less';
  } else {
    // slice string and change toggleButton text on 'Show more...'
    sliceString(stringItem, maxLength);
    toggleItem.innerText = 'Show more...';
  }
};

// slice string and set dataset with full text
const sliceString = (item, maxLength) => {
  item.dataset.fullText = item.innerText;
  item.innerText = `${item.innerText.slice(0, maxLength)}...`;
  item.classList.remove('init-hide');
};

const initStringTruncate = (parentSelector, selectorString, selectorToggle) => {
  const parentItems = document.querySelectorAll(parentSelector);

  parentItems.forEach((parent) => {
    const maxStringLength = 84;

    const stringItem = parent.querySelector(selectorString);
    if (!stringItem) return;

    // decide whether to truncate and set listener
    const fullText = stringItem.innerText;
    if (fullText.length && fullText.length > maxStringLength) {
      sliceString(stringItem, maxStringLength);

      // set click listener if find item && find toggle
      const toggleItem = parent.querySelector(selectorToggle);
      if (!toggleItem) return;

      toggleItem.style.visibility = 'visible';

      toggleItem.addEventListener('click', (event) =>
        toggleHandle(event, parentSelector, selectorString, maxStringLength)
      );
    }
  });
};

export default initStringTruncate;

export const args = ['.card--spec', '.card-text', '.moreToggle'];
