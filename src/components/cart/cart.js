function cart() {
    const ul = document.getElementById('cart_list')

    const itemsCart = JSON.parse(localStorage.getItem('cart')) || []

    ul.innerHTML = ``
    for (const product of itemsCart){
        const li = document.createElement('li')
        li.classList.add('section__li--cart')

        li.innerHTML = `
        
            <img src=${product.image} alt=${product.name} class="section__img--cart">

            <div class="section__div--cart">

                <h3 class="section__h3--cart">${product.name}</h3>
                <h4 class="section__h4--cart">${product.price}.00</h4>
                <p class="section__p--cart">Talla: ${product.size}</p>
                
                <div class="section__div--buttonsCart">

                    <div class="section__div--modifed">
                        <button class="decrement">-</button>
                        <p class="quantity">${product.quantity}</p>
                        <button class="increment">+</button>
                    </div>

                    <button class="remove">
                    <i class='bx bxs-trash' style='color:rgba(37,36,36,0.85)'  ></i>
                    </button>
                </div>

            </div>
        
        `

        ul.appendChild(li)
    }

}

export default cart