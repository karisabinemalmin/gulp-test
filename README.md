# Getting started

This is me testing and learning Gulp.

## 1. Install dependencies
<pre>$ npm install</pre>

## 2. Run default task
<pre>$ gulp</pre>

## Files
- <code>gulpfile.js</code>: Stores all Gulp configurations, like requirements and tasks.
- <code>package.json</code>: Stores information about the project, like dependencies.

## Tasks
* <code>$ gulp greeting</code> Says «hello!»
* <code>$ gulp browserSync</code> Creates local server (localhost:3000) and opens the browser window.
* <code>$ gulp watch</code> Watches scss-folder for changes, then writes them to styles.css.
* <code>$ gulp scss-lint</code> Checks your sass for suspiciousness.
* <code>$ gulp sass</code> Compiles your sass to styles.css.

* <code>$ gulp zip</code> Creates a zip of the entire project.