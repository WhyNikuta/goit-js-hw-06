const ulEl = document.querySelectorAll('.item');
console.log('Number of categories:', ulEl.length);

ulEl.forEach((elem) => {
    console.log("Category:", elem.firstElementChild.textContent);
    console.log("Elements:", elem.lastElementChild.children.length);
  });
  