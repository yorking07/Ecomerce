function toggleVisibilityOnClick(triggerElement, targetElement){
    triggerElement.addEventListener('click', function(){
        targetElement.classList.toggle('main__section--cartActive')
    })
}

export default toggleVisibilityOnClick