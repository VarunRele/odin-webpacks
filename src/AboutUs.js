import aboutimg from './about.png'

const AboutUs = (content_div) => {

    const aboutPage = document.createElement("div")
    aboutPage.className = "about-page"

    const heading = document.createElement("h3")
    heading.textContent = "About US"

    const image = document.createElement("img")
    image.src = aboutimg
    image.alt = "About Image"
    image.width = 500

    aboutPage.appendChild(heading)
    aboutPage.appendChild(image)
    content_div.appendChild(aboutPage)
    
    // return content_div
}

export default AboutUs