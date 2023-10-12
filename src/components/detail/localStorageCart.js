function localStorageCart(size, buttons, productId,name , price, image) {

  if (!size) {
    console.error('No size assigned ❌ ');
    throw new Error('No size assigned ❌ ')
  }

  //obtener el carrito del localStorage y en caso que no existavamos a crear uno

  const  carGet = localStorage.getItem('cart')
  const arrayCart = JSON.parse(carGet) || []

  //[{size , productId , name, price , image , quantity}]

  const matched = arrayCart.find((product)=> product.productId === productId && product.size === size) //me retorna el find el producto que cumpla con la concion que estableci, o me devolvera undefined

  if(matched){
    //si el producto esta en el carrito aumentare la cantidad
    matched.quantity++
  }else{
    //si el producto no esta en el carrito lo agregare, recordar que estoy discriminando por id y tamaño de ropa 
    arrayCart.push({size, productId, name, price, image , quantity : 1})
     //[{size : size , productId : productId , name : name , price : price , image : image , quantity : quantity}]

  }


  //Guardar el carrito actualizado en el localStorage
  const arrayJSON = JSON.stringify(arrayCart)
  localStorage.setItem('cart', arrayJSON)
  console.log(arrayCart)

  buttons.forEach((btn) => {
    btn.classList.remove('div__button--active')
  })


}

export default localStorageCart