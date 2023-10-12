import back from "./src/components/back/back.js";
import detail from "./src/components/detail/detail.js";
import nav from "./src/components/nav/nav.js";
import cart from "./src/components/cart/cart.js"
import toggleVisibilityOnClick from "./src/components/cart/toggleVisibilityOnClick.js";

nav()
back()
detail()
cart()

const cartNav = document.getElementById('cart')
const menuCart = document.getElementById('menu_cart')
const x = document.getElementById('x')


toggleVisibilityOnClick(cartNav,menuCart)
toggleVisibilityOnClick(x,menuCart)