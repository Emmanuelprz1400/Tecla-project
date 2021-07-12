import { categoriesService } from "../models/categories.js";
const categories = document.getElementById('categories');
const data = new categoriesService();
const setCategoriesList = async (data) => {
    data.categories = await data.getCategories();
    for (let i = 0; i <= 5; i++) {
        i <= 5 ? setCategories(data.categories[i]) :
            setCategories(data.categories[i], true);
    }
}
setCategoriesList(data);

const setCategories = (categories, lastItem = false) => {
    categories.innerHTML +=
        `
        <li><a class="dropdown-item" href="#" id="${categories.id}">${categories.name}</a></li>
        ${!lastItem ? '<li><hr class="dropdown-divider"></li>' : ''}
    `;
}

