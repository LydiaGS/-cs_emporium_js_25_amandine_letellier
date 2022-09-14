import variables from './module/variable.JS'
console.log(variables.btn_1);

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

variables.titres.appendChild(variables.textes);
console.log(variables.titres);

variables.section.appendChild(variables.titres);
console.log(variables.section);

variables.titres.setAttribute('class','container-fluid d-flex justify-content-center color-black');
console.log(variables.titres);

variables.body.appendChild(variables.creationDiv);
variables.img.src = "./public/IMAGE/products/products_mini/product-luxry-sofa.jpg";
console.log(variables.img.src);

variables.creationDiv.appendChild(variables.img)
console.log(variables.img1.src);
variables.section.appendChild(variables.creationDiv)
variables.img.style.height='350px'
variables.img.style.display='flex'
variables.img.style.justifyContent ='center'
variables.creationDiv.appendChild(variables.para)
console.log(variables.creationDiv);
variables.para.appendChild(variables.textes1)
console.log(variables.para);
variables.para.style.fontSize='35px'

variables.creationDiv.appendChild(variables.para1)
console.log(variables.creationDiv);
variables.para1.appendChild(variables.textes2);
console.log(variables.para1);
variables.para1.style.color='red'
variables.para1.style.fontSize="30px"

variables.creationDiv.appendChild(variables.creationDiv2)
console.log(variables.creationDiv);
variables.creationDiv2.appendChild(variables.img2)
variables.img2.src = "./public/IMAGE/products/products_mini/product-gloves.jpg";
variables.img2.style.height='350px'
variables.grande_div.style.display='flex'
variables.creationDiv2.appendChild(variables.grande_div)
console.log(variables.creationDiv2);
variables.creationDiv.appendChild(variables.grande_div)
console.log(variables.creationDiv);
console.log(variables.section);
variables.creationDiv.appendChild(variables.grande_div)
console.log(variables.section);

variables.creationDiv2.appendChild(variables.para2)
variables.para6.appendChild(variables.textes7)
console.log(variables.para6);
variables.para6.style.fontSize='30px'
variables.creationDiv2.appendChild(variables.para6)
variables.para2.appendChild(variables.textes3)
variables.para2.style.fontSize="30px"
variables.creationDiv2.appendChild(variables.para3)
variables.para3.appendChild(variables.textes4)

variables.para3.style.color='red'
variables.para3.style.fontSize="30px"
variables.creationDiv3.appendChild(variables.img3)
variables.img3.src = "./public/IMAGE/products/products_mini/product-cups.jpg";
variables.creationDiv3.appendChild(variables.grande_div)
variables.creationDiv3.appendChild(variables.para4)
variables.para4.appendChild(variables.textes5)
variables.para5.appendChild(variables.textes6)
variables.creationDiv3.appendChild(variables.para5)
console.log(variables.section);
console.log(variables.grande_div);
variables.img3.style.height='350px'
variables.para4.style.color='black'
variables.para4.style.fontSize="30px"
variables.para5.style.color='red'
variables.para5.style.fontSize="30px"
console.log(variables.grande_div);

variables.section.appendChild(variables.super_grande)
console.log(variables.section);
variables.super_grande.appendChild(variables.creationDiv)
console.log(variables.super_grande);

variables.super_grande.appendChild(variables.creationDiv2)
console.log(variables.super_grande);

variables.super_grande.appendChild(variables.creationDiv3)
console.log(variables.super_grande);

variables.super_grande.style.display='flex'
variables.super_grande.style.gap='5em'
variables.super_grande.style.justifyContent='center'
variables.img.flexWrap='wrap'
variables.img2.flexWrap='wrap'
variables.img3.flexWrap='wrap'

////////////////////////////////////////////////////////////////////////////////////

variables.body.appendChild(variables.div_10);
variables.img10.src = "./public/IMAGE/products/products_mini/product-bag.jpg";
console.log(variables.img10.src);
variables.div_10.appendChild(variables.img10)
console.log(variables.img10.src);
variables.section.appendChild(variables.div_10)
variables.img10.style.height='350px'
variables.img10.style.display='flex'
variables.img10.style.justifyContent ='center'

variables.body.appendChild(variables.div_11);
variables.img11.src = "./public/IMAGE/products/products_mini/product-tshitr.jpg";
console.log(variables.img11.src);
variables.div_11.appendChild(variables.img11)
console.log(variables.img11.src);
variables.section.appendChild(variables.div_11)
variables.img11.style.height='350px'
variables.img11.style.display='flex'
variables.img11.style.justifyContent ='center'

variables.body.appendChild(variables.div_12);
variables.img12.src = "./public/IMAGE/products/products_mini/product-plates.jpg";
console.log(variables.img12.src);
variables.div_12.appendChild(variables.img12)
console.log(variables.img11.src);
variables.section.appendChild(variables.div_12)
variables.img12.style.height='350px'
variables.img12.style.display='flex'
variables.img12.style.justifyContent ='center'

variables.body.appendChild(variables.grande_div2)
variables.section.appendChild(variables.grande_div2)

variables.grande_div2.appendChild(variables.div_10)
variables.grande_div2.appendChild(variables.div_11)
variables.grande_div2.appendChild(variables.div_12)

variables.grande_div2.style.display='flex'
variables.grande_div2.style.gap='5em'
variables.grande_div2.style.justifyContent='center'

variables.titres2.appendChild(variables.texte2)
variables.titres3.appendChild(variables.texte3)
variables.titres4.appendChild(variables.texte4)

variables.div_13.appendChild(variables.titres2)
variables.div_14.appendChild(variables.titres3)
variables.div_15.appendChild(variables.titres4)

variables.body.appendChild(variables.div_13)
variables.body.appendChild(variables.div_14)
variables.body.appendChild(variables.div_15)

variables.section.appendChild(variables.div_13)
variables.section.appendChild(variables.div_14)
variables.section.appendChild(variables.div_15)

variables.body.appendChild(variables.grande_div3)
variables.section.appendChild(variables.grande_div3)

variables.grande_div3.appendChild(variables.div_13)
variables.grande_div3.appendChild(variables.div_14)
variables.grande_div3.appendChild(variables.div_15)

variables.grande_div3.style.display='flex'
variables.grande_div3.style.justifyContent='center'
variables.grande_div3.style.gap='12em'
variables.grande_div3.style.fontSize='30px'

////
variables.titres5.appendChild(variables.texte5)
variables.titres6.appendChild(variables.texte6)
variables.titres7.appendChild(variables.texte7)

variables.div_17.appendChild(variables.titres5)
variables.div_18.appendChild(variables.titres6)
variables.div_19.appendChild(variables.titres7)


variables.body.appendChild(variables.div_20)
variables.section.appendChild(variables.div_20)
variables.body.appendChild(variables.grande_div5)
variables.section.appendChild(variables.grande_div5)
variables.titres8.appendChild(variables.texte8)
variables.div_20.appendChild(variables.titres8)
variables.div_20.style.display='flex'
variables.div_20.style.justifyContent='center'
variables.grande_div5.appendChild(variables.titres8)
variables.grande_div5.appendChild(variables.titres5)

variables.titres5.style.color='red'
variables.grande_div5.style.fontSize='30px'
variables.grande_div5.style.display='flex'
variables.grande_div5.style.gap='1em'
variables.grande_div5.style.justifyContent='lefts'
variables.grande_div5.appendChild(variables.div_17)
variables.grande_div5.appendChild(variables.div_18)

variables.body.appendChild(variables.div_17)
variables.body.appendChild(variables.div_18)
variables.body.appendChild(variables.div_19)

variables.section.appendChild(variables.div_17)
variables.section.appendChild(variables.div_18)
variables.section.appendChild(variables.div_18)

variables.body.appendChild(variables.grande_div4)
variables.section.appendChild(variables.grande_div4)

variables.grande_div4.appendChild(variables.div_17)
variables.grande_div4.appendChild(variables.div_18)
variables.grande_div4.appendChild(variables.div_19)

// variables.div_13.appendChild(variables.grande_div4)

variables.grande_div4.style.display='flex'
variables.grande_div4.style.justifyContent='center'
variables.grande_div4.style.gap='15em'
variables.grande_div4.style.fontSize='30px'
variables.grande_div4.style.color='red'
// insert baefort