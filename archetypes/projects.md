---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
featured_image: "my-featured-image.jpg" # create your md file inside a folder named your slug page along with this featured image
stack: 
    - Hugo
    - Another Stack
# website: "https://example.com" # your project live / in production
# repo: "https://example2.com" # your project's repository or source code
draft: false
_build:
    render: false   # don't render as a page
---

A bit description about the project.