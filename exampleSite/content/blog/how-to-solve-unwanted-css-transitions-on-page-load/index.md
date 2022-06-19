---
title: "How to Solve Unwanted CSS Transitions on Page Load"
date: 2022-06-19T09:07:33+07:00
tags: 
    - HTML
    - CSS
    - CSS Transitions
featured_image : "featured-image.jpg"
draft: false 
comments: true # enable or disable comments for spesific page
# publishdate: 2022-06-19T09:07:33+07:00 # for scheduling post
# expirydate : 2022-06-19T09:07:33+07:00 # expiry date for your post
---

There is a case where you need to add transitions to your page. Maybe you put it on some pages or even all pages. Then you noticed there is an unwanted transitions on page load.

## Transitions Enabled Only After Page Load
We can fix that. The idea is to disable transitions in our page first then enable it after the page loaded.

First we can create a CSS class that disable transitions: 

```css
.no-transition * {
    -webkit-transition: none !important;
    -moz-transition: none !important;
    -ms-transition: none !important;
    -o-transition: none !important;
    transition: none !important;
}
```

Then put it on body element:

```html
<body id="body" class="no-transition">
```

When the page loads, remove it:

```js
function transitionAfterPageLoad() {
    document.getElementById("body").classList.remove("no-transition");
}

// call the function inside an Immediately Invoked Function Expression (IIFE) to invoke it immediately after page load
(function() {
    transitionAfterPageLoad();
})()

// jQuery 
$(function() {
    $("#body").removeClass("no-transition");
});
```

That's it, easier than we think.

## Conclusions
To fix unwanted CSS Transitions on page load we can disable transitions to our page first then re-enable it after the page loaded.

Have another tip or even a better one about this issue? Please let us know in the comments section below 👇. Share this if you think this is helpful. Thank you.

This post is originally posted here [How to Solve Unwanted CSS Transitions on Page Load | Fajarwz](https://fajarwz.com/blog/how-to-solve-unwanted-css-transitions-on-page-load/)