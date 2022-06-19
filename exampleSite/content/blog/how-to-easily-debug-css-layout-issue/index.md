---
title: "How to Easily Debug CSS Layout Issue"
date: 2022-06-17T09:48:07+07:00
tags: 
    - CSS
    - HTML
featured_image : "featured-image.jpg"
draft: false
comments: true # enable or disable comments for spesific page
# publishdate: {{ .Date }} # for scheduling post
# expirydate : {{ .Date }} # expiry date for your post
---

Writing CSS seems easy, but sometimes it is as challenging as coding with some programming language.

There are some issue that often we meet in our daily CSS coding. Such as styling that does not work, inconsistency design, responsive gone fail, unwanted scroll bar, etc.

Here I just want to give a tip about unwanted scroll bar or unwanted overflow element.

You can debug your layout using some kind of wireframe mode. The idea is to set border to every element in the page and make it visible enough for you so you can clearly see the width and height of every element of the page.

Here is the example code

```css
* {
    border: 1px solid red;
}
```

And now we can see all of the element's width and height. If an element is overflowed we can see it clearly now.

{{< imgresize "wireframe-mode-page2.jpg" >}}

## Conclusion

So to debug a CSS layout issue such as an unwanted scroll bar or unwanted overflow element easily, add border to all elements of your page.

Have another tip on this issue or a better one? Please let us know in the comment below. Thank you.

This post is originally posted here [How to Easily Debug CSS Layout Issue | Fajarwz](https://fajarwz.com/blog/how-to-easily-debug-css-layout-issue/)