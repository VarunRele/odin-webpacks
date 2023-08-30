import loadpage from './loadpage.js'
import AboutUs from './AboutUs.js'
import Contact from './Contact.js'
import nav from './nav'

const index = () => {
    const content_div = document.createElement("div")
    content_div.className = "content"

    const {main_page, about_us, contact_us } = nav(content_div)
    loadpage(content_div)

    main_page.onclick = (e) => {
        content_div.removeChild(content_div.childNodes[1])
        loadpage(content_div)
    }

    about_us.onclick = (e) => {
        content_div.removeChild(content_div.childNodes[1])
        AboutUs(content_div)
    }

    contact_us.onclick = (e) => {
        content_div.removeChild(content_div.childNodes[1])
        Contact(content_div)
    }
    return content_div
}


document.body.appendChild(index())