# Check Devices Firmware
Check and manage active reqistered devices firmware version

# Table of Contents
1. [Installation](https://github.com/AnusBaig/check-devices-firmware#installation)
2. [App Layout](https://github.com/AnusBaig/check-devices-firmware#layout)

## Installation

### Install the dependencies
npm install

### Start the app in development mode (hot-code reloading, error reporting, etc.)
quasar dev

### Build the app for production
quasar build

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

## Layout
The app will be a basic Quasar layout with header, footer, and left drawer. The header will have
an option on the right side to logout and show the user profile (these could be the same thing
like a user icon that has a dropdown option for logout). The left drawer will have the following
options:
● Home - The main dashboard that is shown when the app is first opened. See below for
more details.
● Devices - The devices page will show devices that have received updates for the
currently active product. See below for more details.
● Firmware - A list of firmwares for the currently active product. See below for more
details.
● Submit Feedback - Will show a simple form for customers to submit bugs and/or
feature requests)
● Create New Product - Opens a dialog or q-page to create a new product. More details
below. This could be an icon with tooltip, regular quasar drawer option or a button.
Somewhere else in the header or drawer the user can select the active product. All of the left
drawer navigation items will apply to that active product (devices, firmware, home). Once
selected the product name should be displayed in the header area.

### Main Dashboard (Product Overview)
The main dashboard (home route) will have a visual overview that allows the user to see some
basic information about the active product. Multiple products can be created from the left
drawer.
The dashboard will show the following information in some form:
● Total number of devices associated with the active product
● The product-specific URL used by devices to request OTA updates. An example of this
URL’s form is https://test.com/ota/48af3e
● Current default firmware version for the active product
● All firmwares in use and how many devices are on each one (e.g 500 devices on v0.1.1,
15 devices on v0.1.2 and 3 devices on v0.1.3)
● Number of firmware binaries uploaded for the active product.
● Time graph of how many devices have checked in over the last day/week/month

### Devices View
This view will be a simple table-like view of all the devices that are associated with the active
product. Each row should show the following for each device:
● Device ID (most likely in the form of a MAC address)
● Firmware version
● Last check-in time
● Last update time
Above the table area should be a search/filter option along with a total of how many items are in
the table.
If no devices are associated with the product yet the view should just display a message like
“Devices requesting firmware updates from this product will display here”
Devices will auto-associate with the product as they hit the OTA service with the product specific
URL. For the purpose of this exercise feel free to mock up devices with the attributes listed
above.

### Firmware Overview View
The firmware view will be a list of firmware binaries that have been uploaded for the active
product. The list will be displayed in two ways. All firmware binaries that are actively running on
devices will be cards. The firmware cards will be sorted left to right based on the number of
devices running that version of firmware. Each card will display the following information in order
of visual importance:
● Visual indicator if it is the default firmware for the active product
● Version
● Number of devices running this version
● Release notes (should truncate to not make the card to long but have an option to open
the firmware in it’s own dedicated view to see all of the release notes)
All other firmwares that do not have active devices running them should be in a table view below
the active firmware cards. They should be sorted by version (semver) newest to oldest. Clicking
on a firmware card or firmware in the table should open the Single Firmware View.
The most important feature on this view is the ability to upload a new firmware. This should be a
very obvious call to action mechanism that is easy to find. Clicking on it will open a file upload
dialog. The other option would be to drag and drop the firmware onto the page to initiate an
upload. Either method should also prompt the user to enter a version for the firmware and a
checkbox to indicate whether or not it should be the default firmware for the product.
If no firmware binaries have been uploaded for the product the Firmware Overview View should
display a message prompting the user to upload a binary.

### Single Firmware View
This is a view of a single firmware. It should show the following information:
● Version
● Number of devices running this version
● Indicator if it is signed or not (perhaps just an icon indicator)
● Size in KB
● Full release notes
● Created date

### Create New Product
When a user wants to create a new product a dialog or q-page should be displayed that
prompts for the following information:
● Name of the product
The newly created product becomes the active product in the dashboard and it’s name should
be displayed in the header area. Upon creation the app should transition to the Firmware
Overview screen so a firmware binary can be uploaded.
