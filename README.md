# web-ble-printer

## Printer information

| Attribute | Value |
| --- | --- |
| Name: | MX06|
| Address: | `34:D4:22:33:02:8B` |
| RSSI: | -40 |

### Services:
* `0000ae30-0000-1000-8000-00805f9b34fb`
    * Data characteristic: `0000ae01-0000-1000-8000-00805f9b34fb`
* `0000ae3a-0000-1000-8000-00805f9b34fb`

### Where to find this information?
* Go to `chrome://bluetooth-internals`
* Click on the Bluetooth Printer (in this case - MX06)
* Click on each service to inspect the characteristics
* Find a characteristic with 'Write with no response' which will be used for printing

## References

### Cat Printer Protocol
* [Wiki](https://github.com/fulda1/Thermal_Printer/wiki/Cat-printer-protocol)
* Same protocol should be used for the MX06 printer because the service and characteristic is the same

### Bitluni
* [Livestream](https://www.youtube.com/watch?v=Co0IVvGF0jY&ab_channel=bitlunilive)

### Github Repos
* [Cat Printer app](https://github.com/NaitLee/Cat-Printer)
* [Kitty Printer web](https://github.com/NaitLee/kitty-printer)
    * Image dithering etc: [Image worker](https://github.com/NaitLee/kitty-printer/blob/main/static/image_worker.js)
* [Python Cat Printer](https://github.com/WerWolv/PythonCatPrinter/blob/master/pattern/print.py)