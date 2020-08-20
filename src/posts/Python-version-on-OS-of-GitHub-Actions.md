---
title: "Python version on OS of GitHub Actions"
date: "2020-08-20"
keywords: "GitHub, GitHub Actions"
image: "https://res.cloudinary.com/practicaldev/image/fetch/s--IwrEbm3S--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/1iy1wri6vdaimld39xl9.png"
summary: "This article shows Python version on GitHub's VMs and how to get them"
---


Started learning `GitHub Actions` for `Actions Hackathon` on Dev.to
All cases are using the `latest`.

08/20/2020

## Ubuntu
`ubuntu-18.04`
`Python 2.7.17`
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/axze9crofjtg3wdcp41d.png)

## Windows
`windows-2019`
`Python 3.7.8`
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/x64tgu9mb4453dl9bhus.png)

## macOS
`macos-10.15`
`Python 2.7.17`
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/jb7wtv2wihw6k2d95fxy.png)

The repo is here.
https://github.com/koji/github_actions
```yml
name: Python version check
on: push

jobs:
    python-version-check-on-windows:
        name: python version check
        runs-on: windows-latest
        steps:
            - name: ver check
              run: python --version

    python-version-check-on-linux:
        name: python version check
        runs-on: ubuntu-latest
        steps:
            - name: ver check
              run: python --version


    python-version-check-on-macos:
        name: python version check
        runs-on: macos-latest
        steps:
            - name: ver check
              run: python --version

```