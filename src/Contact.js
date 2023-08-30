import contactimg from './contact.jpg'

const Contact = (content_div) => {
    const contactPage = document.createElement("div")
    contactPage.className = "about-page"

    const heading = document.createElement("h3")
    heading.textContent = "About US"

    const image = document.createElement("img")
    image.src = contactimg
    image.alt = "Contact Us"
    image.width = 500

    contactPage.appendChild(heading)
    contactPage.appendChild(image)
    content_div.appendChild(contactPage)
}

export default Contact