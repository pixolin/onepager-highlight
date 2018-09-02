=== Onepager Highlight ===
Contributors: pixolin
Tags: nav menu, onepager
Requires at least: 4.5
Tested up to: 4.9.8
Stable tag: 0.2.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Highlights only current nav menu item for activated section in Onepager

== Description ==

WordPress automatically adds a CSS class `.current-menu-item` to the menu item of the navigation menu that links to the current page. For normal websites, where the menu links to different webpages, this is a nice function. With onepagers however, it is irritating when the links to _all_ sections are highlighted at once, as they are all on the same web page.

This plugin removes the CSS class `.current-menu-item` from all links in the menu, _except the first_. If you click on a link to another link, the class gets added to this link. As a result, only the clicked link of the section gets highlighted.

Additionally the plugin also adds a smooth scrolling animation to the links.

## To do
Switch classes when scrolling to other sections (handy for sticky menus).

== Installation ==

This section describes how to install the plugin and get it working.

1. Upload the plugin folder `onepager-highlight` to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress

== Frequently Asked Questions ==

= I installed the plugin, but the menu items don't get highlighted =

Check if your theme highlights current menu items at all. If not, you may want to add some styling in Design > Customizer > Additional CSS, e.g.
`li.current-menu-item a {
  color: red !important;
}`

== Changelog ==

= 0.2.0 =
CSS class `.current-menu-item` only gets assigned to one menu item.

= 0.1.0 =
Release
