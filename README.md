# Components Collection
Implementations of accessible components that are used on most sites

# Development
Each folder in this repository is a single component. Name of the folder is also name of the component.
Naming components must be in a kebab case. For example if component name is `Hamburger Menu`, then folder name sholud be `hamburger-menu`.

Main SCSS/CSS file should be named `main.scss/css`.

To use SCSS in components you can use gulp tasks:
```sh
gulp scss -c COMPONENT_NAME
gulp watch -c COMPONENT_NAME
```
