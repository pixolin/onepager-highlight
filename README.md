# Onepager Highlight #
**Contributors:** pixolin  
**Tags:** nav menu, onepager  
**Requires at least:** 4.5  
**Tested up to:** 4.9.8  
**Stable tag:** 0.1.0  
**License:** GPLv2 or later  
**License URI:** https://www.gnu.org/licenses/gpl-2.0.html  

Highlights only current nav menu item for activated section in Onepager

## Description ##

WordPress automatically adds a CSS class `.current-menu-item` to the menu item of the navigation menu that links to the current page. For normal websites, where the menu links to different webpages, this is a nice function. With onepagers, however, it is irritating when the links to all sections are highlighted because they are all on the same web page.

This plugin adds the CSS class `current-menu-item` to the clicked link only. As a result, only the clicked link of the section gets highlighted. If you click the link to another section of the page, it will be assigned the CSS class `.current-menu-item`.

Additionally, you may want to style the initial state of the current-page-links. If you open the webpage, a CSS class `.current-menu-initial` gets added, which you can style in the customizer > additional css, e.g. with
`.current-menu-item.current-menu-initial a {
	color: red !important;
}`
As soon as you click one of the menu links, the class `.current-menu-initial` will be removed; only the clicked link with it's class `.current-menu-item` will be highlighted.

Additionally the plugin also adds a smooth scrolling animation to the links.

## Installation ##

This section describes how to install the plugin and get it working.

1. Upload the plugin folder `onepager-highlight` to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress

## Frequently Asked Questions ##

### I installed the plugin, but the menu items don't get highlighted ###

Check if your theme highlights current menu items at all. If not, you may want to add some styling in Design > Customizer > Additional CSS:
`li.current-menu-item a {
  color: red !important;
}`

### Can I style the initial state of all links to the onepager page? ###

The plugin adds a class `.current-menu-initial` to all links of the current page, allowing you to style `.current-menu-initial.current-menu-item a`.


## Changelog ##

### 0.1.0 ###
Release
