console.log('Success! 1');

chrome.devtools.panels.create(
  "My Panel",
  "MyPanelIcon.png",
  "Panel.html",
  ({ show }) => show()
);