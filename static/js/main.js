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

function headingLink() {
    const headings = document.querySelectorAll('article h1, article h2, article h3');

    headings.forEach(element => {
        const link = document.createElement('a');

        link.setAttribute('href', `#${element.id}`);
        link.setAttribute('aria-label', `Link to ${element.innerText}`);
        link.setAttribute('style', 'margin-left: -1.5rem; margin-right: 0.5rem; color: rgb(56, 189, 248); display:inline-block;');
        link.innerHTML = '<i data-feather="link" style="width: 1rem; height: 1rem"></i>';
        element.insertBefore(link, element.firstChild);
        element.style.scrollMargin = '120px';
    });

    feather.replace();
}

function navbarShrink() {
    // const header = document.getElementById("header");
    const nav = document.getElementById("nav");

    if (document.documentElement.scrollTop > 200) {
        nav.classList.add("sticky");
        nav.classList.remove("py-6");
        nav.classList.add("py-1");

        if (document.getElementById("brand-title") !== null)
            document.getElementById("brand-title").classList.add("text-3xl");

        if (localStorage.getItem("theme") === "dark") {
            nav.classList.remove("dark:bg-slate-800");
            nav.classList.add("dark:bg-slate-900");
        } else {
            nav.classList.remove("bg-sky-50");
            nav.classList.add("bg-sky-100");
        }
    } else if (document.documentElement.scrollTop < 1) {
        nav.classList.remove("sticky");
        nav.classList.add("py-6");
        nav.classList.remove("py-1");

        if (document.getElementById("brand-title") !== null)
            document.getElementById("brand-title").classList.remove("text-3xl");

        if (localStorage.getItem("theme") === "dark") {
            nav.classList.add("dark:bg-slate-800");
            nav.classList.remove("dark:bg-slate-900");
        } else {
            nav.classList.add("bg-sky-50");
            nav.classList.remove("bg-sky-100");
        }
    }
}

function transitionAfterPageLoad() {
    document.getElementById("body").classList.remove("no-transition");
}

function displayResults (results, store) {
    const searchResults = document.getElementById('results')
    if (results.length) {
      let resultList = ''
      // Iterate and build result list elements
      for (const n in results) {
        const item = store[results[n].ref]
        resultList += `
        <div class="bg-white overflow-hidden rounded-lg shadow-md dark:bg-slate-900 dark:shadow-slate-700">
  
          <!-- image -->
          <div class="overflow-hidden">
            <img data-src="${item.image}" class="h-[13rem] lozad object-cover w-full" alt="${item.title}'s featured image">
          </div>
  
          <!-- body  -->
          <div class="p-5">
  
            <!-- title  -->
            <a href="${item.url}" class="text-slate-900 dark:text-slate-50 hover:no-underline hover:text-sky-600 dark:hover:text-sky-500">
              <h3>${item.title}</h3>
            </a>
  
            <!-- summary  -->
            <p class="mb-3">
              ${item.summary}
            </p>
  
            <!-- published date  -->
            <div class="mb-3 text-sm">
              <div class="text-gray-500">
                Updated <time datetime="${item.lastmodDate}">${item.lastmodDateWithFormat}</time>
              </div>
            </div>
  
            <!-- tags  -->
            <ul class="flex flex-wrap justify-start list-none pl-0">
              ${(function() {
                let html = '';
  
                for(let i = 0; i < item.tagName.length; i++){
                  html += 
                  `<li class="m-1">
                    <a href="${item.tagUrl[i]}">
                      <span
                        class="bg-gray-300 px-4 h-min py-1 rounded-md text-sm text-slate-900 
                        hover:bg-sky-600 hover:text-white dark:bg-slate-600 
                        dark:text-slate-50 dark:hover:bg-sky-500"
                      >${item.tagName[i]}</span>
                    </a>
                  </li>`;
                } 
  
                return html;
              })()}
            </ul>
          </div>
  
        </div>`;
      }
      searchResults.innerHTML = resultList
    } else {
      searchResults.innerHTML = 'No results found.'
    }
}
  
// Get the query parameter(s)
const params = new URLSearchParams(window.location.search)
const query = params.get('query')

// Perform a search if there is a query
if (query) {
    // Retain the search input in the form when displaying results
    document.getElementById('search-input').setAttribute('value', query)

    const idx = lunr(function () {
        this.ref('id')
        this.field('title', {
        boost: 15
        })
        this.field('tags')
        this.field('content', {
        boost: 10
        })

        for (const key in window.store) {
        this.add({
            id: key,
            title: window.store[key].title,
            tags: window.store[key].category,
            content: window.store[key].content
        })
        }
    })

    // Perform the search
    const results = idx.search(query)
    // Update the list with results
    displayResults(results, window.store)

    document.getElementById('search-title').innerText = 'Search Results for ' + query
}

function makeCollapsibleCollapsible() {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      toggleCollapsible(this);
    });
  }
}

function toggleCollapsible(el) {
  el.classList.toggle("active");
  el.classList.toggle("rounded-b-lg");

  var content = el.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}

function hideTocWhenClicked()
{
  var listItems = document.querySelectorAll('#TableOfContents > ul > li');

  for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function(e) {
      var coll = document.getElementsByClassName("collapsible");

      for (let j = 0; j < coll.length; j++) {
        toggleCollapsible(coll[j]);
      }
    })
  }
}

(function() {
    transitionAfterPageLoad();
    feather.replace();
    setThemeIcon();
    headingLink();
    navbarShrink();
    makeCollapsibleCollapsible();
    hideTocWhenClicked();

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

    const observer = window.lozad();
    observer.observe();
})();

window.onscroll = function() {
  navbarShrink();
};