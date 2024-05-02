const categoriesList = document.querySelectorAll("li.item");

const categoriesListAmount = `Number of categories : ${categoriesList.length}`;
console.log(categoriesListAmount);


categoriesList.forEach(category => {
    const categoryName = category.querySelector("h2").textContent;
    const categoryElementsAmount = category.querySelectorAll("li").length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElementsAmount}`);
});

