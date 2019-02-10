### Gatsby.js theme

# Elevator Pitch

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

Create a folders for `markdown` files with the screens content and the image.

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

You have to create a structure of folders exactly like this one presented above.

#### Files names

You can't change the name of `avatar.jpg`. The names of `markdown` files have to obey pattern `X___slug.md`. Where `X` is a number indicating position of the screen. The number must be follewed by the `___` separator. The last part of the name `slug` is optional, so you could name the file like this `1___.md`.

#### Markdown `screen` files

This is example of a `markdown` file with content for one screen.

```
# This is the screen's title

And the screen's body copy.
```

You can add as many `screen` files as you want.

### Start

Start the server:

```
gatsby develop
```
