# mdn-flavored-markdown

"MDN-Flavored Markdown" is the version of Markdown used for prose content on MDN, and specifically in the [mdn/content](https://github.com/mdn/content) repository. MDN-Flavored Markdown is the same as [GitHub-Flavored Markdown](https://github.github.com/gfm/) (GFM), plus a couple of extensions, as detailed in https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN.

This package is a standalone copy of the code in https://github.com/mdn/yari/ that converts from MDN-Flavored Markdown into HTML. That in turn uses mostly packages from [unified](https://unifiedjs.com/) to convert GFM, plus some custom extensions.

The mdn/yari code is used under the terms of the [MPL 2.0](https://www.mozilla.org/en-US/MPL/2.0/) license.

## API

The module has two main exports:

- `m2h(md, options)`
- `m2hSync(md, options)`

Both exports take the same arguments:

- `md`: a string that contains MDN-Flavored Markdown
- `options`: an object containing a single property `locale`, which is a string identifying the locale of the content.

The `m2h()` variant is asynchronous, returning a `Promise` that resolves with the converted HTML.

The `m2hSync()` variant is synchronous, returning the converted HTML.

## Usage

The following code imports `m2hSync()` and uses it to process a string that contains MDN-Flavored Markdown:

```js
import { m2hSync } from "mdn-flavored-markdown";

const md = `This is a \`test\`:
- a dl term
  - : a dl description

> **Note:** A note!`;

const html = m2hSync(md, { locale: "en-US" });
```

The resulting HTML is:

```html
<p>This is a <code>test</code>:</p>
<dl>
  <dt>a dl term</dt>
  <dd>
    <p>a dl description</p>
  </dd>
</dl>
<div class="notecard note">
  <p><strong>Note:</strong> A note!</p>
</div>
```
