# Apollo Systems LLC website

Static mirror of https://apollosys.net/ for hosting on GitHub Pages.

## Deploying

1. Repo **Settings → Pages**: set *Source* to "Deploy from a branch", pick the branch and `/ (root)`.
2. For a custom domain (e.g. `apollosys.net`), add it under **Settings → Pages → Custom domain**
   (this creates a `CNAME` file) and point the domain's DNS at GitHub Pages.

`.nojekyll` is included so the files are served as-is.

## Known limitation

The contact form (`contact.html`) posts to `contact.php`, a server-side script that
GitHub Pages cannot run. To make the form work, point it at a static form service
(e.g. Formspree, Getform, Basin) or replace it with a `mailto:` link.
