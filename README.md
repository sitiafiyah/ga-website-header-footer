# Garuda Indonesia Website Layout Base Version 1.0.1

This project is a foundational HTML implementation for the Garuda Indonesia website that integrates reusable Web Components for common layout sections, including the header, sky-team and footer. By leveraging custom elements such as `<ga-header>`,`<ga-sky-team>` and `<ga-footer>`, the project promotes component reusability, consistency, and easier maintenance across multiple web pages and applications.

## How to Use Garuda Indonesia Web Components
To use the shared Garuda Indonesia Web Components, include the required stylesheet and scripts in the `<head>` section of HTML document:

 ```bash
<link rel="stylesheet" href="https://www.garuda-indonesia.com/shared/web-components.css" />
<script defer src="https://www.garuda-indonesia.com/shared/web-components.iife.js"></script>
```

Once the dependencies are loaded, we can add the available custom elements directly to your page:

Available Components
| Component | Description |
|-----------|-------------|
| `<ga-header>` | Displays the Garuda Indonesia website header navigation. |
| `<ga-sky-team>` | Displays the SkyTeam section. |
| `<ga-footer>` | Displays the Garuda Indonesia website footer. |

## Features

- **Multi-language Support**: Garuda Indonesia web components are available in multiple languages, including Indonesian, English, Dutch, Thai, Chinese, Korean, and Japanese.
- **Responsive Design**: The layout is optimized for various screen sizes, ensuring a seamless user experience on both desktop and mobile devices.
- **Reusable Components**: The project uses modular HTML components for headers, sky team and footers, making it easy to update and maintain.

## How to Run Project

1. Clone the repository and checkout the required branch:
   ```bash
   git clone -b header-footer-seabury-v3 https://github.com/asyst-git/ga-website-html-layout-base.git
   ```
2. Navigate to the project directory:
   ```bash
   cd garuda-indonesia-layout-base
   ```
3. Open the desired HTML file in a browser or serve the project using a local web server.
   Access URL Format
   To access the page correctly, the URL must follow the format below:

   https://domain.com/{location}/{language}

   Where:
   - location : Regional or country code (must be the first URL parameter).
   - language : Language code (must be the second URL parameter).

   Examples:
   - https://ga-website-header-footer.vercel.app/id/en
   - https://ga-website-header-footer.vercel.app/id/id

## Live Demo

You can access the live version of the project at the following links:

### Main Website
- [Main](https://ga-website-header-footer.vercel.app/)

## Project Structure

The project is organized based on location and language URL parameters using the following structure:
```text
.
├── id/
│   ├── id/
│   │   └── index.html
│   └── en/
│       └── index.html
├── sg/
│   └── en/
│       └── index.html
├── my/
│   └── en/
│       └── index.html
├── au/
│   └── en/
│       └── index.html
├── uk/
│   └── en/
│       └── index.html
├── sa/
│   └── en/
│       └── index.html
├── in/
│   └── en/
│       └── index.html
├── oc/
│   └── en/
│       └── index.html
├── jp/
│   ├── ja/
│   │   └── index.html
│   └── en/
│       └── index.html
├── nl/
│   ├── nl/
│   │   └── index.html
│   └── en/
│       └── index.html
├── kr/
│   ├── ko/
│   │   └── index.html
│   └── en/
│       └── index.html
├── th/
│   ├── th/
│   │   └── index.html
│   └── en/
│       └── index.html
├── cn/
│   ├── cn/
│   │   └── index.html
│   └── en/
│       └── index.html
├── hk/
│   ├── en/
│   │   └── index.html
│   └── zh/
│       └── index.html
└── qa/
│   └── en/
│       └── index.html
└── script/
    └── base.js
```
