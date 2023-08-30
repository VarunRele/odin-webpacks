import Sandwich from './sandwich.jpg'

const loadpage = (content_div) => {
    // console.log("Error")

    const main_page = document.createElement("div")
    main_page.className = "main-page"

    const heading = document.createElement("h3")
    heading.textContent = "The Sandwich shop"

    const image = document.createElement("img")
    image.src = Sandwich
    image.alt = "Sandwich Image"
    image.width = 500

    const p1 = document.createElement("p")
    const p2 = document.createElement("p")
    const p3 = document.createElement("p")

    p1.textContent = "Best sandwiches in the word"
    p2.textContent = "We also sell pastrys and bread if you fancy."
    p3.textContent = "Visit us at local shop near you."

    main_page.appendChild(heading)
    main_page.appendChild(image)
    main_page.appendChild(p1)
    main_page.appendChild(p2)
    main_page.appendChild(p3)
    content_div.appendChild(main_page)

    // return content_div 
}

export default loadpage;