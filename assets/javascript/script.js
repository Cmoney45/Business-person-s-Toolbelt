const currentPage = location.href.split("/").slice(-1); 

const createNavBar = () => {
    // Creates the base Nav everything will append to
    const navHead = $(`<nav>`);
        navHead.addClass(`navbar navbar-expand-lg navbar-dark bg-dark`);

    // Creates the Company Header that goes to the left
    const companyHeader = $(`<a>`);
        companyHeader.addClass(`navbar-brand`);
        companyHeader.attr(`href`,`index.html`);
        companyHeader.html(`Business Person's Toolbelt`);
    // Creates the Collapse button when the page get's too small
    const navButton = $(`<button>`);
        navButton.addClass(`navbar-toggler`);
        navButton.attr({
        "type":"button",
        "data-toggle": "collapse",
        "data-target": "#navbarColor01",
        "aria-controls": "navbarColor01", 
        "aria-expanded": "false", 
        "aria-label": "Toggle navigation",});
        const navButtonLook = $(`<span>`);
        navButtonLook.addClass(`navbar-toggler-icon`);
        navButton.append(navButtonLook);
    // Start of the Nav buttons
    const nav = $(`<div>`);
        nav.addClass(`collapse navbar-collapse`);
        nav.attr(`id`,`navBar`);
        // Sets a list container to hold the buttons
        const navList = $(`<ul>`);
            navList.addClass(`navbar-nav mr-auto`);
            // Function to easily add new buttons with the same look
            const createNavButton = (pageLink, name) => {
                const button = $(`<li>`);
                    button.addClass(`nav-item`);
                    // If the page is the current page, make it have the active class
                    if(pageLink === currentPage[0]) {
                        button.addClass(`active`);
                    }
                    const buttonLink =$(`<a>`);
                        buttonLink.addClass(`nav-link`)
                        buttonLink.attr(`href`, pageLink);
                        buttonLink.html(name)
                    button.append(buttonLink);
                // Appends to the UL list
                navList.append(button);
            }
            //Use the following formatting to add any new buttons
            createNavButton(`index.html`,`Home`);
            createNavButton(`payments.html`, `Payment Center`);
            createNavButton(`employeeList.html`, `Employee Directory`);
            createNavButton(`#`,`Settings`);
        // Appends to the Nav holder
        nav.append(navList);
            const searchForm = $(`<form>`);
                searchForm.addClass(`form-inline`);
                const searchBar = $(`<input>`);
                    searchBar.addClass(`form-control mr-sm-2`)
                    searchBar.attr({
                        "type": "search",
                        "placeholder": "Search",
                        "aria-label": "Search"});
                    const submitButton = $(`<button>`)
                        submitButton.addClass(`btn btn-outline-info my-2 my-sm-0`)
                        submitButton.attr(`type`, `submit`)
                        submitButton.html(`Search`);
                    searchForm.append(searchBar);
                    searchForm.append(submitButton);
        nav.append(searchForm);
    
    // Appends each created holder to the Nav Bar
    navHead.append(companyHeader)
    navHead.append(navButton)
    navHead.append(nav);
    //Prepends to the HTML make sure it's always first
    $(`#navBarLoad`).prepend(navHead)
}

createNavBar();