# Roadmap.sh-Tab

JS works like the following:

The main event listener is inside a loop because it needs to run the callback function repeatedly. When a tab’s event is fired, it runs a callback function that adds and moves the slider under the tab (the .indicator in the code).
The callback function creates one .indicator span, and when you use appendChild through the event listener and its callback, JavaScript doesn't create more .indicator elements — it just moves the existing slider under different tabs.

This works by taking the tab’s offset data (offsetWidth and offsetLeft) and applying it to the slider/indicator’s left property. This pushes the slider/indicator just enough to place it under the clicked tab.
offsetLeft gives the starting position of the tab from the left side of the container, and offsetWidth gives the total width of that tab.
When the slider’s left and width properties are set using those values, it starts at the left edge of the tab and ends at the right edge.

Then the callback function removes all .active classes from every tab’s content using a loop. This is necessary because if you simply add .active to all contents, they would stack and all appear at once.
After removing all .active classes, the script adds .active only to the content div that matches the clicked tab’s index (since the tab and its content share the same index).

HTML is structured this way because:

The tabs and the slider/indicator must be inside the same div so that CSS and JS can easily move the indicator around.
The tab contents are separated into another div to make their positioning easier.

CSS is styled this way because:

body and .container both use display: flex; justify-content: center; align-items: center; to center the layout. The body needs a defined height and width for justify-content and align-items to work.

.tabs needs to be position: relative, and the slider/indicator must be position: absolute so it doesn’t interfere with the layout. If it were positioned normally, it would push the clicked tab upward, which looks bad. Being absolutely positioned allows it to move freely without affecting other elements.

.indicator is styled with bottom: 0; left: 0; so it starts at the bottom-left. Its width is initially set to 0px so JavaScript can increase it to match the first tab's total width.

All tab contents are set to display: none; by default to avoid the inconvenience of manually handling .active and .inactive classes everywhere. Only one class, .active, uses display: block;.
When JavaScript adds the .active class to the content that matches the clicked tab’s index—after removing .active from all other contents—only that one tab’s content becomes visible.
