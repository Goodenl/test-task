import initStringTruncate from './../stringTruncate.js';
// default args
import { args } from './../stringTruncate.js';

/**
 * Set values by queries
 * @param  {HTMLElement}  item   The init module functions
 * @param  {[String]}     queries   The selectors
 * @param  {Object}       values   The values
 */
const setValues = (item, queries, { src, title }) => {
  item.querySelector(queries[0]).src = src;
  item.querySelector(queries[1]).innerText = title;
};

const generateCard = async (templateSelector, listSelector) => {
  // get html elements
  const template = document.querySelector(templateSelector);
  const cardList = document.querySelector(listSelector);
  // fetch data
  const response = await fetch('https://picsum.photos/v2/list?page=1&limit=9');
  const fetchedData = await response.json();

  for (const { author, download_url } of fetchedData) {
    // clone template
    const cardItem = template.content.cloneNode(true);
    setValues(cardItem, ['.card-img-top', '.card-title'], {
      src: download_url,
      title: author,
    });
    cardList.appendChild(cardItem);
  }

  // update stringTruncate
  initStringTruncate(...args);
};

export default generateCard;
