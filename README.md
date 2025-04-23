# Personal Website

This repository contains the source code for my personal website. Full credits go to Martin Saveski for the template.

## Getting Started

### Prerequisites
- [Jekyll](http://jekyllrb.com/) (installation instructions at [Jekyll Docs](https://jekyllrb.com/docs/installation/))
- Ruby and Bundler

### Running Locally
Clone the repository and run:
```
bundle install
jekyll serve
```
This will start a local server at `http://localhost:4000`.

## Development

### Making Updates
The website content is primarily stored in the `_data` directory. To update the website's content without modifying the layout:

1. Edit the relevant files in the `_data` directory
2. Test your changes locally using `jekyll serve`
3. Deploy when satisfied with the results

### Customization
For more extensive customization, you may want to explore:
- `_layouts` directory for page templates
- `_includes` directory for reusable components
- `assets` directory for styles, images, and other resources

## Deployment
The website can be deployed to any standard web hosting service:

1. Build the site with `jekyll build`
2. The generated site will be in the `_site` directory
3. Upload these files to your hosting provider

## Built With
- **Framework:** [Jekyll](http://jekyllrb.com/)
- **CSS:**
  - [Skeleton](https://getskeleton.com)
  - [Skeleton Tabs](https://github.com/nathancahill/skeleton-tabs)
  - Timeline: [Timeline CSS](https://codepen.io/NilsWe/pen/FemfK)
  - Icons: [Font Awesome](http://fontawesome.io/)
- **JavaScript:**
  - [jQuery (3.1.1)](https://jquery.com/)

## Acknowledgements
- [Martin Saveski](https://github.com/msaveski) for creating this very nice website template
