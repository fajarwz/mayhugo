# Mayhugo
A Clean, Lightweight, Minimalist Hugo Theme for personal web and blog.

![Mayhugo thumbnail](/images/tn.png)

## Installation
**Step 1:** First you have to install Hugo on your machine. **Note: You need to have the extended version of Hugo v0.99.1 or above.** You can install it by following [these instructions](https://gohugo.io/getting-started/installing/) based on your device.

**Step 2:** After your installation finished, verify it by running this in your terminal
```
hugo version
```

**Step 3:** Create the Hugo website template 

```
hugo new site your-site-name
```

**Step 4:** Add Mayhugo theme by entering your folder then create folder named themes

**Step 5:** Add this repository as your submodule project. Type this inside `/themes`

```
git submodule add https://github.com/fajarwz/mayhugo.git 
```

For more information read the official [setup guide](https://gohugo.io/themes/installing-and-using-themes/) of the Hugo themes.

## Features
1. Post
2. Project showcase
3. Skills list
4. Social media links
5. Tags
6. Post by tags
7. Disqus (Comment for spesific post)
8. Share post
9. Trakteer
10. Google Tag Manager (GTM)
11. Favicon
12. Image optimization
13. Automated meta link settings for SEO
14. Syntax Highlighter
15. Switchable Light/Dark Mode
16. Post Pagination
17. Featured image of post
18. Responsive
19. Green lighthouse

## Demo
I use this theme on my personal website [`fajarwz.com`](http://fajarwz.com/)

## Getting Started
Set the theme option in your `config.toml` for using this theme:

```
theme = "mayhugo"
```

There is an example site in `/exampleSite` folder inside the theme folder
1. Copy the `/content` folder to your `/content` folder project
2. Copy `/data` folder to your root folder project
3. Also copy `package.json` and `tailwind.config.js` to your folder project
4. You can also copy the entire content of `config.toml` there to your `config.toml` project in your root folder
5. To customize the avatar and default image for post, create folder named `/assets` in your project root and copy your desired image inside it.
6. To customize the skills, edit it in the `/data/skills.toml`
7. Create new post by typing `hugo new blog/my-cool-post/index.md`
8. You can add featured image by copying your image to your post folder, name it, and type the name in `featured_image` params
9. You can add post image also by inserting your desired image to post folder, name it, insert it in the markdown with `{{< imgresize "wireframe-mode-page2.jpg" >}}` shortcode
10. Create new project by typing `hugo new project/my-cool-project/index.md`
11. Customize projects like in the `exampleSite`

All site setting can be found in `config.toml`

## Check the website
In your root folder, start Hugo development server by typing this in the terminal:
```
hugo server
```
You can go to your website by typing this in your browser [`localhost:1313`](http://localhost:1313/)

## Showcase
If you use Mayhugo as your Hugo site theme, please tell me in [this discussion](https://github.com/fajarwz/mayhugo/discussions/2#discussion-4159428). Thank you!

## Author
- Developed by [fajarwz](https://fajarwz.com).