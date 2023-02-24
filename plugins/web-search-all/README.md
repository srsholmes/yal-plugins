## @yal-app/plugin-web-search-all

This is a plugin for Yal which allows you to search many different websites at once. You can search for a term and it will allow you to select which website you want to search on. There is a huge list of websites that you can search on, so I suggest filtering them to only the sites you use.

To enable a site to search on set the 

```
metadata: {
      enabled: false, // <-- set this to true to enable the site
```

I would also suggest sorting the results in some way. I havn't included a sorting algorithm in this plugin, as it will depend on the user. Please reach out if you need some help sorting the results.

## Screenshot

![web-search-all](./resources/web-search-all.png 'web-search-all')

## How do I install it?

From the root directory of this repo run:

```
yarn install:plugin web-search-all
```
