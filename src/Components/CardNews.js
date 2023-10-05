class Cardnews extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(this.build())
    shadow.appendChild(this.styles())
  }

  build() {
    const componentRoot = document.createElement('div')
    componentRoot.setAttribute('class', 'card')

    const cardLeft = document.createElement('div')
    cardLeft.setAttribute('class', 'card__left')

    const autor = document.createElement('span')
    autor.textContent = 'by ' + (this.getAttribute('autor') || 'Anonymous')

    const linkTitle = document.createElement('a')
    linkTitle.textContent = this.getAttribute('title')
    linkTitle.href = this.getAttribute('link-url')

    const newsContent = document.createElement('p')
    newsContent.textContent = this.getAttribute('content')

    cardLeft.appendChild(autor)
    cardLeft.appendChild(linkTitle)
    cardLeft.appendChild(newsContent)

    const cardRight = document.createElement('div')
    cardRight.setAttribute('class', 'card__right')

    const newsImage = document.createElement('img')
    newsImage.src = this.getAttribute('photo') || './assets/photo-default.jpg'
    newsImage.alt = 'Darth Vader'
    cardRight.appendChild(newsImage)

    componentRoot.appendChild(cardLeft)
    componentRoot.appendChild(cardRight)

    return componentRoot
  }

  styles() {
    const style = document.createElement('style')
    style.textContent = `
  .card {
    width: 80%;
    border: 1px solid gray;
    box-shadow: 18px 9px 47px -6px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 18px 9px 47px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 18px 9px 47px -6px rgba(0, 0, 0, 0.75);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  
  .card__left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
  }
  
  .card__left > span {
    font-weight: 400;
  }
  
  .card__left > a {
    margin-top: 10px;
    font-size: 25px;
    color: black;
    text-decoration: none;
    font-weight: 600;
  }
  
  .card__left > p {
    color: rgb(70, 70, 70);
  }
  
  .card__right > img {
    height: 150px;
  }
  
    
    
    
    
    `

    return style
  }
}

customElements.define('card-news', Cardnews)
