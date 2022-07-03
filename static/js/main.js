function setThemeIcon() {
    let darkModeTogglerSun = document.getElementById("dark-mode-toggler-sun");
    let darkModeTogglerMoon = document.getElementById("dark-mode-toggler-moon");

    if (localStorage.getItem("theme") === "dark") {
        darkModeTogglerSun.style.display = "none";
        darkModeTogglerMoon.style.display = "flex";
    } 
    else {
        darkModeTogglerSun.style.display = "flex";
        darkModeTogglerMoon.style.display = "none";
    }
}

function toggleDarkMode() {
    let html = document.getElementById("html");
    let darkModeTogglerSun = document.getElementById("dark-mode-toggler-sun");
    let darkModeTogglerMoon = document.getElementById("dark-mode-toggler-moon");

    if (!("theme" in localStorage)) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");

            darkModeTogglerSun.style.display = "flex";
            darkModeTogglerMoon.style.display = "none"; 
        } else {
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");

            darkModeTogglerSun.style.display = "none";
            darkModeTogglerMoon.style.display = "flex";
        }
    } else {
        if (localStorage.getItem("theme") === "dark") {
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");

            darkModeTogglerSun.style.display = "flex";
            darkModeTogglerMoon.style.display = "none";                    
        } else {
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");

            darkModeTogglerSun.style.display = "none";
            darkModeTogglerMoon.style.display = "flex";
        }
    }
}

function headingLink() {
    const headings = document.querySelectorAll('article h1, article h2, article h3');

    headings.forEach(element => {
        const link = document.createElement('a');

        link.setAttribute('href', `#${element.id}`);
        link.setAttribute('style', 'margin-left: -1.5rem; margin-right: 0.5rem; color: rgb(56, 189, 248); display:inline-block;');
        link.innerHTML = '<i data-feather="link" style="width: 1rem; height: 1rem"></i>';
        element.insertBefore(link, element.firstChild);
    });

    feather.replace();
}

function navbarShrink() {
    const header = document.getElementById("header");
    const nav = document.getElementById("nav");

    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        nav.classList.add("my-1");

        if (document.getElementById("brand-title") !== null)
            document.getElementById("brand-title").classList.add("text-3xl");

        if (localStorage.getItem("theme") === "dark") {
            header.classList.remove("dark:bg-slate-800");
            header.classList.add("dark:bg-slate-900");
        } else {
            header.classList.remove("bg-sky-50");
            header.classList.add("bg-sky-100");
        }
    } else {
        nav.classList.remove("my-1");

        if (document.getElementById("brand-title") !== null)
            document.getElementById("brand-title").classList.remove("text-3xl");

        if (localStorage.getItem("theme") === "dark") {
            header.classList.add("dark:bg-slate-800");
            header.classList.remove("dark:bg-slate-900");
        } else {
            header.classList.add("bg-sky-50");
            header.classList.remove("bg-sky-100");
        }
    }
}

function transitionAfterPageLoad() {
    document.getElementById("body").classList.remove("no-transition");
}

(function() {
    transitionAfterPageLoad();
    feather.replace();
    setThemeIcon();
    headingLink();
    navbarShrink();

    document
        .getElementById("hamburger-btn")
        .addEventListener("click", function () {
            var navLink = document.getElementById("nav-link");

            navLink.classList.toggle("hidden");
            navLink.classList.toggle("flex");
        });

    document
        .getElementById("dark-mode-toggler")
        .addEventListener("click", function () {
            toggleDarkMode();
        });

    document
        .getElementById("copy-link")
        .addEventListener("click", function () {
            const copyText = document.getElementById("post-link");
            
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(copyText.value);

            document.getElementById("link-copied-notif").classList.remove("hidden")
            document.getElementById("link-copied-notif").classList.add("block")

            setTimeout(function() {
                document.getElementById("link-copied-notif").classList.remove("block")
                document.getElementById("link-copied-notif").classList.add("hidden")
            }, 3000)
        });
})()

window.onscroll = function() {navbarShrink()};