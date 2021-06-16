# ORV Translation Replacer
This Chrome browser extension was prepared to substitute new translations (ch.363 onward) of the "Omniscient Reader's Viewpoint" (ORV) web novel on novelchapter.com with older variants, for readers who preferred them. 

Note that the extension's scripts are only permitted to run on https://novelchapter.com/omniscient-readers-viewpoint-tueM4 and its subpages, as defined in the [manifest file](../blob/main/manifest.json). 

The extension has two functions:
1. Substitute various names identified via regular expressions.
2. Enable the toggling of a dark mode via a custom stylesheet, and light mode (the default theme) by clicking the extension's icon. Note that it might take some time after a page loads before you can toggle the mode.

## Installation
1. Either [download the repository's files as a ZIP](https://github.com/Yuxianray/ORV-Translation-Replacer/archive/refs/heads/main.zip) or [download the latest release](https://github.com/Yuxianray/ORV-Translation-Replacer/releases).
2. Extract the downloaded ZIP to its own folder.
3. Go to [chrome://extensions/](chrome://extensions/) and click "load unpacked", then select the folder created in the previous step. This should install the extension.
