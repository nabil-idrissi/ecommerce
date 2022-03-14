const menu_top = document.querySelector('.top')
const menu_middle = document.querySelector('.middle')
const menu_bottom = document.querySelector('.bottom')
const menu_mobile = document.querySelector('.menu-mobile')
const links = document.querySelector('.links')
const blackdiv = document.querySelector('.black')

const right_arrow = document.querySelector('.fa-angle-right')
const left_arrow = document.querySelector('.fa-angle-left')
const images = document.querySelectorAll('.slider img')
const big_image = document.querySelector('.image-container img')


const choose1_ps = document.querySelectorAll('.choose1 p')
const choose2_ps = document.querySelectorAll('.choose2 p')
const choose2_last = document.querySelector('.Marjolaine')
const _12 = document.querySelector('.counter')
var plus = document.querySelector('.plus')
var minus = document.querySelector('.minus')


const composition_p = document.querySelector('.composition-p')
const detail_p = document.querySelector('.detail-p')
const greendiv = document.querySelector('.greendiv')
const composition_text = document.querySelector('.composition-text')
const detail_text = document.querySelector('.detail-text')


//mobile menu start
menu_mobile.addEventListener('click',()=>{
    menu_top.classList.toggle('clicked')
    menu_middle.classList.toggle('clicked')
    menu_bottom.classList.toggle('clicked')
    links.classList.toggle('clicked')
    blackdiv.classList.toggle('clicked')
    
    
})

blackdiv.addEventListener('click',()=>{
    menu_top.classList.toggle('clicked')
    menu_middle.classList.toggle('clicked')
    menu_bottom.classList.toggle('clicked')
    links.classList.toggle('clicked')
    blackdiv.classList.toggle('clicked')
})
//mobile menu end

//slider start
var steps = 0
left_arrow.addEventListener('click',()=>{
            
    steps--;
    console.log(steps)
    images.forEach(image=>{
    var slider1 = document.querySelector('.slider');
    console.log(slider1.style.width+'kk')
    var left1 = image.style.left.replace(/%/,'');
    var left2 = Number(left1) + 19.5;
    image.style.left = left2 +'%';
    if(steps==0){
        left_arrow.style.display = 'none'
    }else{
        left_arrow.style.display = 'block'
    }
    if(steps==1){
        right_arrow.style.display = 'none'
    }else{
        right_arrow.style.display = 'block'
    }
    })
})
right_arrow.addEventListener('click',()=>{
    /* if(lls[4].style.left==790+'px'){
        right.style.display = 'none'
    }
    if(lls[4].style.left==790+'px'){
        right.style.display = 'none'
    } */
    
    steps++;
    console.log(steps)
    images.forEach(image=>{
    console.log(image.style.left)
    var left1 = image.style.left.replace(/%/,'');
   
    var left2 = Number(left1) - 19.5;
    
    image.style.left = left2 +'%';
    if(steps==1){
        right_arrow.style.display = 'none'
    }else{
        right_arrow.style.display = 'block'
    }
    if(steps==0){
        left_arrow.style.display = 'none'
    }else{
        left_arrow.style.display = 'block'
    }
    })
})
images.forEach(image=>{
    image.addEventListener('click',()=>{
        
        big_image.src = `${image.src}`
        images.forEach(image=>{
            image.classList.remove('borderON')
        })
        image.classList.add('borderON')
    })
})
//slider end

//product start

choose1_ps.forEach(choose1_p=>{
    choose1_p.addEventListener('click',()=>{
        
        
        choose1_ps.forEach(choose1_p=>{
            choose1_p.classList.remove('selected-choose1')
            choose1_p.classList.add('notselected-choose1')
        })
        choose1_p.classList.add('selected-choose1')
    })
})
choose2_ps.forEach(choose2_p=>{
    choose2_p.addEventListener('click',()=>{
        
        
        choose2_ps.forEach(choose2_p=>{
            choose2_p.classList.remove('selected-choose2')
            choose2_p.classList.add('notselected-choose2')
        })
        
        choose2_last.classList.remove('selected-choose2')
        choose2_last.classList.add('notselected-choose2')
        choose2_p.classList.add('selected-choose2')
    })
})
choose2_last.addEventListener('click',()=>{
        
        
    choose2_ps.forEach(choose2_p=>{
        choose2_p.classList.remove('selected-choose2')
        choose2_p.classList.add('notselected-choose2')
    })
    
    
    choose2_last.classList.add('selected-choose2')
    choose2_last.classList.remove('notselected-choose2')
})
/* _12 = document.querySelector('.counter')
const plus = document.querySelector('.plus')
const minus = */
var count = 12;

plus.addEventListener('click',()=>{
    count++;
    _12.innerHTML = count
    
   
})

minus.addEventListener('click',()=>{
    
    

    _12.innerHTML = count
    
    if(count==0){
        count=0
    }else{
        count--;
    }
})
//product end

//composition-detail start
/* const composition_p = document.querySelector('.composition-p')
const datail_p = document.querySelector('.detail-p')
const greendiv = document.querySelector('.greendiv')
const composition_text = document.querySelector('.composition-text')
const datail_text = document.querySelector('.detail_text') */
composition_p.addEventListener('click',()=>{
    composition_text.style.display = 'block'
    detail_text.style.display = 'none'
    greendiv.style.left = 0+'%'
})

detail_p.addEventListener('click',()=>{
    detail_text.style.display = 'block'
    composition_text.style.display = 'none'
    if(window.innerWidth<= 1597 && window.innerWidth> 569){
        greendiv.style.left = 150+'px'
    }else if(window.innerWidth<= 569){
        greendiv.style.left = 115+'px'
    }
    else{
        greendiv.style.left = 11.75+'%'
    }
   
    
})

//composition-detail end