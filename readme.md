# Vite dynamic import error

Running `cowsayEval` from `cowsay.js` using regular Node works fine, but when running it from Vite, the following error appears:

![error](error.png)

It looks like Vite doesn't support the dynamic import when using `eval` or `new Function()`. Perhaps it's related to this error?: https://github.com/nodejs/node/issues/30591
