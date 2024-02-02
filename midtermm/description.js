const apiUrl ='https://dummyjson.com/products?limit=100&skip=0';

fetch(apiUrl)
  .then(response => {
    // Check if the request was successful (status code 200-299)
    if (!response.ok) {
      throw new Error('HTTP error! Status: ${response.status}');
    }
    // Parse the response as JSON
    return response.json();
  })
  .then(data => {
    // Handle the data from the response

    console.log(data)
    const descriptionBox = document.getElementById("description_box");

    const x = ({
        brand: "IELGY fashion",
        category: "womens-shoes",
        description: "Close: Lace, Style with bottom: Increased inside, Sole Material: Rubber",
        discountPercentage: 16.96,
        id: 46,
        images: (5) ['https://cdn.dummyjson.com/product-images/46/1.webp', 'https://cdn.dummyjson.com/product-images/46/2.jpg', 'https://cdn.dummyjson.com/product-images/46/3.jpg', 'https://cdn.dummyjson.com/product-images/46/4.jpg', 'https://cdn.dummyjson.com/product-images/46/thumbnail.jpg'],
        price: 40,
        rating: 4.14,
        stock: 72,
        thumbnail: "https://cdn.dummyjson.com/product-images/46/thumbnail.jpg",
        title: "women's shoes"
    })

    
    const productsImage = document.createElement("img")
    productsImage.classList.add("products_image")
    productsImage.setAttribute("src", x.thumbnail);

    const textBox = document.createElement("div")
    textBox.classList.add("text_box")

    const productsTitle = document.createElement("h1")
    productsImage.classList.add("products_title")
    productsTitle.textContent = x.title
    textBox.appendChild(productsTitle)

    const brand = document.createElement("h4")
    brand.classList.add("brand")
    brand.textContent = `brand : ${x.brand}`
    textBox.appendChild(brand)

    const ratingBox  = document.createElement("div")
    ratingBox.classList.add("rating_box")

    const fivestar = document.createElement("img")
    fivestar.classList.add("fivestar")
    fivestar.setAttribute("src","./Logos/5-star-icon.svg")
    ratingBox.appendChild(fivestar)
   
    const productStars = document.createElement("p")
    productStars.classList.add("product_stars")
    productStars.textContent = `${x.rating}/5`
    ratingBox.appendChild(productStars)
    textBox.appendChild(ratingBox)

    const productsPrice = document.createElement("h4")
    productsPrice.classList.add("products_price")
    productsPrice.textContent = `$ ${x.price}`
    textBox.appendChild(productsPrice)

    const description = document.createElement("p")
    description.classList.add("description")
    description.textContent = x.description
    textBox.appendChild(description)

    const addToCartButton = document.createElement("p")
    addToCartButton.classList.add("addToCart_button")

    const a = document.createElement("a")
    a.textContent = "Add to Cart";
    addToCartButton.appendChild(a)

    
    descriptionBox.appendChild(productsImage)
    descriptionBox.appendChild(textBox)

   
  

  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Custom error message:', error);
  });

