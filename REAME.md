- Add [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) to tell our shell how to invoke this script

```bash
...
  "author": "Tim Pettersen",
  "license": "Apache-2.0",
+ "bin": {
+   "snippet": "./index.js"
+ }
}
```

- Install npm package globally:

```bash
$ npm install -g
$ snippet
Hello, world!
```

- Publish script to the public npm registry with `npm publish`:

```bash
$ npm install -g bitbucket-snippet
```
