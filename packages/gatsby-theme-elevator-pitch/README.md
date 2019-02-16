### Gatsby.js theme

# Elevator Pitch

![Elevator Pitch - Gatsby.js theme](static/preview.png)

## Get started

### Install

Create a new directory for your site and move into it.

```
mkdir mysite
cd mysite
```

Create a `package.json`.

```
yarn init -y
```

Install dependencies

```
yarn add react react-dom gatsby gatsby-theme-elevator-pitch
```

Create a `gatsby-config.js`.

```
touch gatsby-config.js
```

Inside gatsby-config.js, set up the theme:

```
module.exports = {
  __experimentalThemes: ['gatsby-theme-elevator-pitch']
};
```

### Add content

#### Folders structure

Find folders `images` and `screens` inside the `content/elevator-pitch` folder.

```
root
  ├── content
  │   └── elevator-pitch
  │       ├── images
  │       │   └── ...
  │       └── screens
  │           └── ...
```

Put a `jpg` file named `avatar.jpg` into the `images` folder. Then add two or more `markdown` files to the `screens` folder.

```
root
  ├── content
  │   └── elevator-pitch
  │       ├── images
  │       │   └── avatar.jpg
  │       └── screens
  │           ├── 1___first-screen.md
  │           └── 2___second-screen.md
```

#### Files names

You can not use a different name for avatar than `avatar.jpg`.

The names of `markdown` files have to obey a pattern `X___slug.md`. Where `X` is a number indicating position of the screen. The number must be follewed by the `___` separator ( 3 x undescore ). The last part of the name, a `slug` is optional. Knowing that, you can name a file like this `1___.md` or `1__first-scrren.md`. Take a look at the [demo content files](https://github.com/greglobinski/gatsby-themes/tree/master/packages/gatsby-theme-elevator-pitch/content/screens) of the theme in the repository.

#### Markdown `screen` files

This is example of a `markdown` file with content for one screen. Two sections: title (`#`) and a paragraph text below.

```
# This is the screen's title

And the screen's body copy.
```

You can add as many `screen` files as you want. But remember it should be an elevator pitch so less is better. ;)

### Start

Start the server:

```
gatsby develop
```
