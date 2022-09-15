import variables from './module/variable.JS'
import {construire_article} from'./module/function.JS'
// import './style/class_full_JS.sass/'

function background_font(params) {
    variables.body.style.backgroundColor = "black"
    variables.body.style.color ='white'
    variables.btn_nav.style.backgroundColor = "black"
    variables.center.style.backgroundColor = "black"
    variables.navbar.style.backgroundColor = "black"
    variables.btn_2.style.backgroundColor = '#2F4F4F'
    variables.btn_1.style.backgroundColor ='#708090'
    variables.nav.style.color ='white'
    variables.nav2.style.color ='white'
    variables.nav.style.color ='white'
    variables.nav3.style.color ='white'
    variables.nav4.style.color ='white'
    variables.nav5.style.color ='white'
    variables.nav6.style.color ='white'
    variables.body.style.color ='white'
    variables.paragraphe_1.style.color ='black'
    variables.txt1.style.color='black'
    variables.txt2.style.color='black'
    variables.txt3.style.color='black'
    variables.t1.style.color='black'
    variables.t2.style.color='black'
    variables.t3.style.color='black'
    }
    
    variables.btn_2.addEventListener('click', background_font)
    
    function background_fonts(params) {
        variables.body.style.backgroundColor = "white"
        variables.body.style.color ='black'
        variables. btn_2.style.backgroundColor = 'black'
        variables.btn_nav.style.backgroundColor = "white"
        variables.center.style.backgroundColor = "white"
        variables.navbar.style.backgroundColor = "white"
        variables.nav.style.color ='black'
        variables.nav2.style.color ='black'
        variables.nav.style.color ='black'
        variables.nav3.style.color ='black'
        variables.nav4.style.color ='black'
        variables.nav5.style.color ='black'
        variables.nav6.style.color ='black'
        variables.body.style.color ='black'
        }
        variables.btn_1.addEventListener('click', background_fonts)
    
    ////////////////////////////////////////////////////////////////////////////////////
    
    let section_js = document.createElement("section")
    let section_js_div = document.createElement("div")
    section_js.className="section-js"
    
    variables.titres.appendChild(variables.textes);
    section_js.appendChild(variables.titres);
    section_js.appendChild(section_js_div);

variables.titres.classList.add('txte_style')
let x = document.querySelectorAll('.article-js .img_style')
let xAr = Array.from(x)

    section_js_div.appendChild(construire_article("./public/IMAGE/products/products_mini/product-luxry-sofa.jpg", "Leather gloves", "$27.00"))
    section_js_div.appendChild(construire_article("./public/IMAGE/products/products_mini/product-gloves.jpg", "Leather gloves", "$27.00"))
    section_js_div.appendChild(construire_article("./public/IMAGE/products/products_mini/product-cups.jpg", "Leather gloves", "$27.00"))
    section_js_div.appendChild(construire_article("./public/IMAGE/products/products_mini/product-bag.jpg", "Leather gloves", "$27.00"))
    section_js_div.appendChild(construire_article("./public/IMAGE/products/products_mini/product-tshitr.jpg", "Leather gloves", "$27.00"))
    section_js_div.appendChild(construire_article("./public/IMAGE/products/products_mini/product-plates.jpg", "Leather gloves", "$27.00"))
    section_js_div.appendChild(construire_article("./public/IMAGE/products/products_mini/product-modern-sofa.jpg", "Leather gloves", "$27.00"))
    section_js_div.appendChild(construire_article("./public/IMAGE/products/products_mini/product-bed.jpg", "Leather gloves", "$27.00"))
    section_js_div.appendChild(construire_article("./public/IMAGE/products/products_mini/product-shoes.jpg", "Leather gloves", "$27.00"))
    
    variables.body.insertBefore( section_js, variables.discover_section)

    console.log(x);

    // Modal button de connexion
    
    variables.btn_connexions.forEach(btn => {
        btn.addEventListener("click", event => {
            variables.modal_container.style.display = variables.modal_container.style.display === "block" ? "none" : "block";
            event.preventDefault()
        })
    })
    
    variables.modal_container.addEventListener("click", event => {
        if (event.target === variables.modal_container) {
            variables.modal_container.style.display = "none"
        }
    })
    
    let carousel_index = 0;
    let carousel_clicked = false;
    
    document.querySelector(".carousel__nav").addEventListener("click", () => {
        carousel_clicked = true
    })
    
    function change_carousel_index() {
        
        if (carousel_clicked === false) {
            variables.carousel_tableau[carousel_index].checked = false
            carousel_index = (carousel_index + 1) % 4
            variables.carousel_tableau[carousel_index].checked = true
            setTimeout(() => {
                change_carousel_index();
            }, 2000)
        }
    }
change_carousel_index()
