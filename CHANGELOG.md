# CHANGELOG

> Package changelog.

<section class="release" id="v0.3.0">

## 0.3.0 (2024-07-26)

<section class="features">

### Features

-   [`693efb2`](https://github.com/stdlib-js/stdlib/commit/693efb2eb159d1cd25c6cffe2440e36e6a14b9b2) - resolve negative indices relative to the last character index
-   [`29d7b0d`](https://github.com/stdlib-js/stdlib/commit/29d7b0dc141e1112af120eab76fa6731b8fdbe78) - add support for `fromIndex`

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`693efb2`](https://github.com/stdlib-js/stdlib/commit/693efb2eb159d1cd25c6cffe2440e36e6a14b9b2): resolve negative indices relative to the last character index
-   [`693efb2`](https://github.com/stdlib-js/stdlib/commit/693efb2eb159d1cd25c6cffe2440e36e6a14b9b2): resolve negative indices relative to the last index 

    -   Previously, negative index arguments would resolve to zero and
    search would start from the beginning of the string. To preserve
    previous behavior, users should clamp `fromIndex` values to string
    index bounds before calling into `replaceBefore`.

-   [`29d7b0d`](https://github.com/stdlib-js/stdlib/commit/29d7b0dc141e1112af120eab76fa6731b8fdbe78): add support for `fromIndex`
-   [`29d7b0d`](https://github.com/stdlib-js/stdlib/commit/29d7b0dc141e1112af120eab76fa6731b8fdbe78): require `fromIndex` argument 

    -   To migrate, users should provide an explicit `fromIndex` of `0` in
    order to retain previous behavior.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`693efb2`](https://github.com/stdlib-js/stdlib/commit/693efb2eb159d1cd25c6cffe2440e36e6a14b9b2) - **feat:** resolve negative indices relative to the last character index _(by Athan Reines)_
-   [`29d7b0d`](https://github.com/stdlib-js/stdlib/commit/29d7b0dc141e1112af120eab76fa6731b8fdbe78) - **feat:** add support for `fromIndex` _(by Athan Reines)_
-   [`6bff34f`](https://github.com/stdlib-js/stdlib/commit/6bff34fcc4cbc7c17b7ff99beed20cdd0ea1b3c0) - **style:** add missing space _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Athan Reines

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-21)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="commits">

### Commits

<details>

-   [`f9c75ce`](https://github.com/stdlib-js/stdlib/commit/f9c75ce726ed4e5fade8622315bb98094dad8561) - **build:** remove tslint directives _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.1">

## 0.1.1 (2023-10-03)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-22)

<section class="features">

### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version
-   [`a7e60d8`](https://github.com/stdlib-js/stdlib/commit/a7e60d8aae80fa67f961db4221263782edc89f99) - remove CLI
-   [`ae68d17`](https://github.com/stdlib-js/stdlib/commit/ae68d1783e4d97a36bc6a74d8cbe8004dae79ad2) - add support for replacing the substring before the first occurrence of a search string [(#843)](https://github.com/stdlib-js/stdlib/pull/843)

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version
-   [`a7e60d8`](https://github.com/stdlib-js/stdlib/commit/a7e60d8aae80fa67f961db4221263782edc89f99): remove CLI
-   [`a7e60d8`](https://github.com/stdlib-js/stdlib/commit/a7e60d8aae80fa67f961db4221263782edc89f99): remove CLI 

    -   This is a \"base\" package, and thus should not normally have a CLI.
    The CLI has moved to `@stdlib/string-replace-before`. Users relying
    on the CLI should migrate to using that package.

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

This release closes the following issue:

[#811](https://github.com/stdlib-js/stdlib/issues/811)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`440034d`](https://github.com/stdlib-js/stdlib/commit/440034de6d7d057f3afb7399b6a3951dc0749c70) - **chore:** fix indentation in package meta data [(#928)](https://github.com/stdlib-js/stdlib/pull/928) _(by stdlib-bot, Athan Reines)_
-   [`a7e60d8`](https://github.com/stdlib-js/stdlib/commit/a7e60d8aae80fa67f961db4221263782edc89f99) - **feat:** remove CLI _(by Athan Reines)_
-   [`35622d7`](https://github.com/stdlib-js/stdlib/commit/35622d74bcfebc1cd92859618f5f3bf0dcd29003) - **refactor:** clean-up implementation, tests, and docs _(by Athan Reines)_
-   [`ae68d17`](https://github.com/stdlib-js/stdlib/commit/ae68d1783e4d97a36bc6a74d8cbe8004dae79ad2) - **feat:** add support for replacing the substring before the first occurrence of a search string [(#843)](https://github.com/stdlib-js/stdlib/pull/843) _(by Harshita Kalani, Athan Reines, Pranav)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 4 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Harshita Kalani
-   Philipp Burckhardt
-   Pranav

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

