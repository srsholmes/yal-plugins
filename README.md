# yal-plugins

A collection of Yal Plugins.

## Yal Main Repo

The main Yal repo can be found here: [Yal App](https://github.com/srsholmes/yal)

## Install a plugin

```
yarn install:plugin <plugin-name>
```

This will install a single plugin from the plugins folder. The plugin name is the name of the folder in the plugins folder.

## Building and installing all plugins

```
yarn install:plugins
```

## Building and installing all plugins and watching

This will watch the plugins src directory and install the plugin when a change is detected.

Yal will automatically reload when it detects any changes in it's plugin folder.

```
yarn build:watch
```

## Screenshots

![Colors plugin](./resources/color.png 'Colors plugin')
![Google maps plugin](./resources/google-maps-app.png 'Google maps plugin')
![Simulator Plugin ](./resources/simulators.png 'iOS Simulator Plugin')
![Tabs Plugin ](./resources/google-chrome-tabs.png 'Chrome Tabs Plugin')
![Menu Bar Plugin ](./resources/menu-bar.png 'Menu Bar Plugin')
![Emoji plugin ](./resources/emoji.png 'Emoji plugin')
