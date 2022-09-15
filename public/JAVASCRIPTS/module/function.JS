export function construire_article(photo_url, texte, prix) {

    let div=document.createElement('div');
    let img=document.createElement('img');
    let paragraphe_texte= document.createElement('h4')
    let prix_texte= document.createElement('span')
    img.classList.add('img_style')

    prix_texte.style.display='flex'
    prix_texte.style.textAlign='lefts'

    paragraphe_texte.style.display='flex'
    paragraphe_texte
    
    div.className = "article-js"
    prix_texte.classList.add('prix_texte')
    paragraphe_texte.classList.add('para_texte')
    img.src = photo_url;
    img.alt = "alt"
    div.appendChild(img)
    paragraphe_texte.appendChild(document.createTextNode(texte))
    div.appendChild(paragraphe_texte)
    prix_texte.appendChild(document.createTextNode(prix))
    div.appendChild(prix_texte)

    return div;
}

