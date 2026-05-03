// знайти весь список
const categoriesList = document.querySelector('#categories');

// знайти всі категорії
const categories = categoriesList.querySelectorAll('.item');

// вивести кількість
console.log(`Number of categories: ${categories.length}`);

// пройтись по кожній категорії
categories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const elements = category.querySelectorAll('li').length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
});