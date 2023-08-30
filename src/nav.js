const nav = (content_div) => {
    
    const nav_div = document.createElement("div")
    nav_div.className = "nav"

    const main_page = document.createElement("button")
    const about_us = document.createElement("button")
    about_us.className = 'about'
    const contact_us = document.createElement("button")

    main_page.textContent = "Menu"
    about_us.textContent = "About Us"
    contact_us.textContent = "Contact"

    nav_div.appendChild(main_page)
    nav_div.appendChild(about_us)
    nav_div.appendChild(contact_us)
    content_div.appendChild(nav_div)

    main_page.onmouseenter = (e) => (main_page.style.cursor = "pointer")
    about_us.onmouseenter = (e) => (about_us.style.cursor = "pointer")
    contact_us.onmouseenter = (e) => (contact_us.style.cursor = "pointer")

    return { main_page, about_us, contact_us }
}

export default nav