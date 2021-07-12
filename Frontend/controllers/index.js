import { categoriesService } from "../models/categories.js";
const carousel = document.getElementById('carousel');
const features = document.getElementById('features');
const data = new categoriesService();
const setIndexPage = async (data) => {
    data.trends = await data.getTrendsBycategories();
    const categories = await data.getRandomTrendProducts(data.trends);
    for (let i = 0; i <= 2; i++) {
        const product = categories[i].results[0]
        i === 0 ? setCarouselData(product, carousel, true) :
            setCarouselData(product, carousel);
    }
    for (let i = 3; i <= 6; i++) {
        setHeadingData(categories[i].results[0], features);
    }
    for (let i = 7; i <= 9; i++) {
        setFeaturetteData(categories[i].results[0], features);
    }
}
setIndexPage(data);

const setCarouselData = (product, element, firstItem = false) => {
    element.innerHTML +=
        `
    <div class="carousel-item" id="${product.id}">
    <img src="${product.thumbnail}" class="d-block w-100" alt="thumbnail">
    
    <div class="container">
      <div class="carousel-caption text-start">
        <h1 class="text-info">${product.title}</h1>
        <p class="text-success">$${product.price}</p>
        <p><a class="btn btn-lg btn-primary" href="${product.permalink}">Ver más</a></p>
      </div>
    </div>
    </div>
    `;
    const prodElement = document.getElementById(product.id);
    if (firstItem)
        prodElement.classList.add('active');
}
const setHeadingData = (product, element) => {
    element.innerHTML +=
        `
    <div class="col-lg-4">
        <img src="${product.thumbnail}"
        class="img-thumbnail rounded-circle w-25">
        <h2>${product.title}</h2>
        <p>$${product.price}</p>
        <p><a class="btn btn-secondary" href="${product.permalink}">Ver detalles &raquo;</a></p>
    </div>
    `;
}
const setFeaturetteData = (product, element) => {
    element.innerHTML +=
        `
    <hr class="featurette-divider">
    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">${product.title}.</h2>
        <p class="lead">$${product.price}</p>
      </div>
      <div class="col-md-5">
      
      <a href="${product.permalink}">
      <img src="${product.thumbnail}" class="featurette-image img-fluid mx-auto" width="500" height="500">
      </a>

      </div>
    </div>
    `;
}

