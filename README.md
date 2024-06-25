# Pocket WiFi

An ultra lite no-dependency mini website for the Wemos D1 mini. Hosts articles and a zine that I like.

## About

Made during [ITP Camp](https://tisch.nyu.edu/itp/camp) based on the [Iffy Books Zine](https://iffybooks.net/wp-content/uploads/zines/Iffy_Books_Pocket_Wifi_Portal_Zine_screen.pdf).

[When a pigeon no longer has a home...](https://www.tiktok.com/@verbamea/photo/7315589415772949802)
[“This Is What Our Ruling Class Has Decided Will Be Normal”](https://crimethinc.com/2024/02/26/this-is-what-our-ruling-class-has-decided-will-be-normal-on-aaron-bushnells-action-in-solidarity-with-gaza)
[What if AI treats humans the way we treat animals?](https://www.vox.com/the-highlight/23777171/ai-animals-rights-cruelty-transhumanism-bostrom)

Color scheme and dot background inspired by/stolen from [Mate Bateman](https://mattbateman.xyz/)

## Development

These instructions are more in depth and have pictures in the [Iffy Book zine](https://iffybooks.net/wp-content/uploads/zines/Iffy_Books_Pocket_Wifi_Portal_Zine_screen.pdf). The relevant sections are included here for reference.

1. Clone the repo

```bash
git clone git@github.com:leviv/pocket-wifi.git
```

2. Download the [Arduino 1.8.x IDE](https://www.arduino.cc/en/software)

3. Double click to open `pocket_wifi.ino` in the IDE.

4. Go to File > Preferences and add this line to 'Additional Boards Manager URLs'. Hit Ok.

```
https://arduino.esp8266.com/stable/package_esp8266com_index.json
```

5. Go to Tools > Board > Boards Manager. Type `esp8266` to find the package, then click Install. Close when done.

6. Now go to Tools > Board > ESP8266 Boards and select LOLIN(WEMOS) D1 mini (clone).

7. Connect your Wemos D1 mini to your computer using a USBC cable. In the menu bar, go to Tools > Port and select /dev/cu.usbserial-XXX.

### Install SPIFFS uploader plugin

8. Download the [latest release](https://github.com/esp8266/arduino-esp8266fs-plugin/releases) of the plugin. Unzip the file to create a directory called ESP8266FS.

9. Go to Arduino > Preferences and make a note of the path under "Sketchbook location." In the sketchbook directory, look for a directory called tools. If you don't see one, you can create it yourself. Move the ESP8266FS directory from your Downloads folder to the tools directory. Relaunch the IDE if needed.

10. To upload files = In the menu bar, select Tools > ESP8266 Sketch Data Upload. This plugin will look for a directory called data in the project directory and upload its contents to SPIFFS storage on the ESP8266.

11. Click the Upload button in the top left to compile and upload the project code to your Wemos D1 mini.

## Deploy

Run

```bash
 chmod +x ./deploy.sh
./deploy.sh
```

To deploy the site to [GitHub pages](https://leviv.cool/pocket-wifi)
