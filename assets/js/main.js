

const navToggler = document.querySelector(".nav_toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
};

document.addEventListener("click", function(e){
    if(e.target.closest(".nav_item")){
        toggleNav();
    }
})

window.addEventListener("scroll", ()=>{
    if(this.pageYOffset > 60){
        document.querySelector(".header").classList.add("sticky");
    }else{
        document.querySelector(".header").classList.remove("sticky");
    }
})

const menuTabs = document.querySelector(".menu_tabs");

menuTabs.addEventListener("click", function(e){
    if (e.target.classList.contains("menu_tab_item") && !e.target.classList.contains("active")) {
        const target = e.target.getAttribute("data-target");
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const menuSection = document.querySelector(".menu_section");
        menuSection.querySelector(".menu_tab_content.active").classList.remove("active");
        menuSection.querySelector(target).classList.add("active");
    }

})