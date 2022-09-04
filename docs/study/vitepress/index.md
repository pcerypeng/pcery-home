---
title: vitepress部署
author: pcery
date: '2022-09-04'
showAccessNumber: true
categories:
 - 文档
tags:
 - study
 - vitepress
---

# vitepress部署到GitHub pages踩坑
### 问题
[vitepress部署官方文档](https://vitepress.vuejs.org/guide/deploying#github-pages)
通过官方文档配置到github后，GitHub显示的是readme的内容，没有显示构建后的index.html。

### 原因
各方面查阅显示，github pages只会寻找根目录下的index.html文件；如果没有就会显示md文件，也就是readme。
因此，对于vitepress项目，应该新建一个分支（gh-pages）放构建后的dist文件。

### 解决方法
通过自动化脚本解决，并在deploy.yml文件中使用该脚本构建并将构建后的dist文件推到gh-pages分支。以下为解决办法。

``` bash
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 获取leetcode
# npm run ac_record

# git add ./docs/.vitepress/components/lcData.json
# git commit -m "get ac record"
# git push

# 生成静态文件
yarn build

# 进入生成的文件夹
cd docs/.vitepress/dist


git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:pcerypeng/pcery-home.git main:gh-pages

cd -
```

```javascript
name: build to my github

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 16
          cache: npm
      - run: yarn install --frozen-lockfile

      - name: Build
        run: bash deploy.sh

      # - name: CreateTag
      #   run git tag -a
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```

### 比较正式的解决办法

其实，github的Action构建，会依据**publish_dir**自动生成gh-pages,**自动生成的前提就是：你构建后的dist文件在推送的时候应该存在，换言之，在第一次推送到主分支的时候应该在本地打包构建一次**。