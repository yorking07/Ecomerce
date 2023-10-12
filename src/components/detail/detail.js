import localStorageCart from "./localStorageCart.js"

function detail() {

  const params = window.location.search

  //obtencion del id
  const productId = Number(params.split('=')[1]) //5

  const sectionDetail = document.querySelector('#section_detail')

  const ul = document.createElement('ul')
  ul.classList.add('section__ul')
  ul.classList.add('ul')

  const li = document.createElement('li')
  li.classList.add('ul__li--detail')

  async function productApi() {

    const url = 'https://ecommercebackend.fundamentos-29.repl.co/'

    const res = await fetch(url)
    try {
      const data = await res.json()

      for (const product of data) {
        if (product.id === productId) {
          console.log(product);
          li.innerHTML +=
            `
            <div class="ul__div--li">
              <h1 class="ul__h1--div">${product.name}</h1>
              <h2 class="ul__h2--div">$${product.price}.00</h2>
              <p class="ul__p--div">Colores</p>
              <img src=${product.image} alt=${product.name} class="ul__img--div">
        
        
              <div class="ul__div--div">
                <h3 class="ul__h3--div">Tallas</h3>
                <h4 class="ul__h4--div">Guía de tallas</h4>
              </div>
        
              <div class="ul__div--buttons div">
                <button class="div__button--sizes "> S </button>
                <button class="div__button--sizes"> M </button>
                <button class="div__button--sizes"> L </button>
                <button class="div__button--sizes"> XL </button>
                <button class="div__button--sizes"> 2XL </button>
                <button class="div__button--sizes"> 3XL </button>
              </div>
        
              <button class="ul__button--div">
                Añadir al carrito
              </button>
      
          </div>
      
          <figure class="ul__figure">
            <img src=${product.image} alt=${product.name} class="ul__img--figure">
          </figure>
          
          `
          const divButtonSizes = document.querySelectorAll('.div__button--sizes')
          //console.log(divButtonSizes); //6 elementos que tienen esa clase

          let size = null

          divButtonSizes.forEach((button) => {

            button.addEventListener(('click'), function () {

              divButtonSizes.forEach((btn) => {
                btn.classList.remove('div__button--active')
              })

              button.classList.add('div__button--active')
              size = button.textContent
              console.log(size);

            })

          })

          const ulButtonDiv = document.querySelector('.ul__button--div')

          ulButtonDiv.addEventListener(('click'), () => {
            localStorageCart(size, divButtonSizes, productId, product.name , product.price, product.image)
          })








        }

      }


    } catch (error) {
      console.log(error);
    }

  }



  sectionDetail.appendChild(ul)
  ul.appendChild(li)

  productApi()
}

export default detail