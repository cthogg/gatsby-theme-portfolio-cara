# Gatsby Modern Portfolio Theme

One file developer portfolios.

That's correct. Create your portfolio from just one markdown file. 

## Features

- Write a simple portfolio site from just one markdown file
- change the site's ui with simple theming.
- (coming soon): Deploy to netlify in one click.


## Out of Scope
- Ability to blog - hopefully this can be *composed* with another theme later.

## Installation

1. On a new repo install gatsby and this theme `yarn add gatsby gatsby-theme-portfolio-cara -D`
1. Create a`gatsby-config.js` file in the root
1. Set the `gatsby-theme-portfolio-cara` in the `__experimentalThemes` option inside your `gatsby-config.js` 

```js
module.exports = {
  __experimentalThemes: [    {
    resolve: "gatsby-theme-portfolio-cara" ,
    NOTREADY_options: {
      siteTitle: `Your site title`,
      siteDescription: `Here is a site title`,
    }
  },]
}
```
1. Create directory `src/pages/markdown` `mkdir -p src/pages/markdown`
1. Create `index.md` in `src/pages/markdown` and add the following to it

```markdown
---
title: "this is a stub"
subtitle: "Hello me"
email: 'hi@hi.com'
aboutDesc: 'yoyoyoy'
aboutSub: 'hehehe'
---

Stub page.

```
1. Add `.cache` and `public` to the repo's `.gitignore` file

1. Run with `yarn gatsby develop`  

1. (coming soon): Deploy to netlify to see it live!

## TODO:
- put the config file as a theme option
- Compare to modern-portfolio to make a template for themes so can easily switch between themes. 
## With thanks to:
-  https://github.com/cthogg/gatsby-theme-modern-portfolio for the theme template.
-  https://github.com/LekoArts/gatsby-starter-portfolio-cara for the starter template.