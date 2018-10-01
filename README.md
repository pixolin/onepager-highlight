# Onepager Highlight #
**Contributors:** pixolin  
**Tags:** nav menu, onepager  
**Requires at least:** 4.5  
**Tested up to:** 4.9.8  
**Stable tag:** 0.3.0  
**License:** GPLv2 or later  
**License URI:** https://www.gnu.org/licenses/gpl-2.0.html  

Highlights only current nav menu item for activated section in Onepager

## Description ##

By default, WordPress adds a CSS class `.current-menu-item` to all menu items of your navigation menu, that link to the current webpage. That is not desired, if you want to use a navigation menu with several links to sections within the same page (typically for a onepager).

This plugin

* uses some JavaScript magic to keep the CSS class `.current-menu-item` only for the *first* link in the menu,
* adds a smooth scrolling animation to slide (not jump) to sections of the website and
* highlights the link to the currently displayed section for better orientation.

To use the plugin, first create your onepager webpage and add IDs to your sections in text mode of your editor, e.g. `<h2 id="summary">Summary</h2>`. Then go to design > menus and create a menu with individual links, e.g. `https://example.com/onepager#summary`.

## To do

Add customizer settings to alter scrolling speed and menu height.

## Installation ##

This section describes how to install the plugin and get it working.

1. Upload the plugin folder `onepager-highlight` to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress

## Frequently Asked Questions ##

### I installed the plugin, but the menu items don't get highlighted ###

Check if your theme highlights current menu items at all. If not, you may want to add some styling in Design > Customizer > Additional CSS, e.g.
`li.current-menu-item a {
  color: red !important;
}`

### I added anchors to sections of my web page, but the menu doesn't change when I scroll down ###

Make sure to add an ID to your sections, e.g. `<h2 id="summary">`. The JavaScript function of the plugin searches for corresponding IDs, not anchor names. Therefore, the menu highlighting **won't** work, if you just add anchors with names (e.g. `<a name="summary">Summary</a>`).


## Changelog ##

### 0.3.0 ###
Adds JavaScript function to highlight menu items when scrolling to sections.

### 0.2.0 ###
CSS class `.current-menu-item` only gets assigned to one menu item.

### 0.1.0 ###
Release
