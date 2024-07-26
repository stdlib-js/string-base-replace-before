<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# replaceBefore

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Replace the substring before the first occurrence of a specified search string.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
replaceBefore = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/string-base-replace-before@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/string-base-replace-before/tags). For example,

```javascript
replaceBefore = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/string-base-replace-before@v0.3.0-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var replaceBefore = require( 'path/to/vendor/umd/string-base-replace-before/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/string-base-replace-before@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.replaceBefore;
})();
</script>
```

#### replaceBefore( str, search, replacement, fromIndex )

Replaces the substring before the first occurrence of a specified search string.

```javascript
var out = replaceBefore( 'beep boop', ' ', 'loop', 0 );
// returns 'loop boop'

out = replaceBefore( 'beep boop', 'o', 'bar', 0 );
// returns 'baroop'
```

To begin searching from a specific index, provide a corresponding `fromIndex` argument.

```javascript
var out = replaceBefore( 'beep boop', 'p', 'bar', 5 );
// returns 'barp'
```

If `fromIndex` is less than zero, the starting index is resolved relative to the last string character, with the last string character corresponding to `fromIndex = -1`.

```javascript
var out = replaceBefore( 'beep boop beep', ' ', 'loop', -6 );
// returns 'loop beep'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If a search string is not present in a provided string, the function returns the provided string unchanged.
-   If a search string is an empty string, the function returns the provided string unchanged.
-   If `fromIndex` resolves to an index which is greater than or equal to `str.length`, the function returns the provided string unchanged.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/string-base-replace-before@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var out = replaceBefore( 'beep boop', 'p', 'see', 0 );
// returns 'seep boop'

out = replaceBefore( 'Hello World!', 'xyz', 'foo', 0 );
// returns 'Hello World!'

out = replaceBefore( 'Hello World!', '', 'foo', 0 );
// returns 'Hello World!'

out = replaceBefore( '', 'xyz', 'foo', 0 );
// returns ''

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-base-replace-before.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-base-replace-before

[test-image]: https://github.com/stdlib-js/string-base-replace-before/actions/workflows/test.yml/badge.svg?branch=v0.3.0
[test-url]: https://github.com/stdlib-js/string-base-replace-before/actions/workflows/test.yml?query=branch:v0.3.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-base-replace-before/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-base-replace-before?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-base-replace-before.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-base-replace-before/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-base-replace-before/tree/deno
[deno-readme]: https://github.com/stdlib-js/string-base-replace-before/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/string-base-replace-before/tree/umd
[umd-readme]: https://github.com/stdlib-js/string-base-replace-before/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/string-base-replace-before/tree/esm
[esm-readme]: https://github.com/stdlib-js/string-base-replace-before/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/string-base-replace-before/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-base-replace-before/main/LICENSE

</section>

<!-- /.links -->
