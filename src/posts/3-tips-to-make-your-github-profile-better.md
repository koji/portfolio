---
title: '3 Tips to Make Your GitHub Profile better'
date: '2020-08-17'
keywords: 'GitHub, Markdown'
image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--XZnJ_-Ix--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/vry0m1ca4jm4n44mi8r4.jpg'
summary: 'This article shows 3 tips to make your GitHub profile better.'
---

## What is GitHub Profile?

GitHub profile is a new function that has been released recently. That allows us to add some information(`blue circle part`) to our GitHub profile page.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/w0weflex5f6wynhh8okf.png)

## How to create your GitHub Profile

#### Step 1

Create a new repo and the repo name must be your `username`
The following readme will be generated by GitHub.

```
<!--
**koji/koji** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning deno/flutter/coreML
- 👯 I’m looking to collaborate on something fun
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
```

#### Step 2

Edit Readme.md

## Tip1 Adding Image

You can use 2 ways to upload images.
The one is to add an image to your repository and the other is to use an issue to upload. The way to use the issue is very easy since the comment form generates a tag, `![image_name](image_url)` automatically.

## Tip2 Adding Badge

In this case, I added `dev.to`, twitter, Linkedin, and Gmail badge to the profile.
What you need to add is to change `<yours>` to yours.

```
<p align="center">
  <a href="https://dev.to/<yours>"><img src="https://img.shields.io/badge/DEV.TO-%230A0A0A.svg?&style=for-the-badge&logo=dev-dot-to&logoColor=white" />       </a>&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://twitter.com/<yours>"><img src="https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
 <a href="https://www.linkedin.com/in/<yours>/"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="mailto:<yours>?subject=Came%20from%20Github"><img src="https://img.shields.io/badge/gmail-%23D14836.svg?&style=for-the-badge&logo=gmail&logoColor=white" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
<p>
```

## Tip3 Adding dev.to feed

#### Step 1

Add the following to your Readme.

```
<!-- BLOG-POST-LIST:START -->
<!-- BLOG-POST-LIST:END -->
```

#### step 2

Create a yml file to use `GitHub action`.
Create `.github/workflows` folders and create `blog-post-workflow.yml`.
Then you will need to change `feed_list` to yours.

`feed_list` can be blog feed(medium & WordPress) and youtube channel feed.

You can see the details [here](https://github.com/gautamkrishnar/blog-post-workflow)!

```
name: Latest blog post workflow
on:
  schedule:
    # Runs every hour
    - cron: '0 * * * *'
  workflow_dispatch:

jobs:
  update-readme-with-blog:
    name: Update this repo's README with latest blog posts
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: gautamkrishnar/blog-post-workflow@master
        with:
          feed_list: "https://dev.to/feed/kojikanao"
```

Then, you need to run an action. This step will take around 30 sec.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/r89nqz4fiyvh0p1i5j52.png)

Mine is here.
https://github.com/koji/koji
