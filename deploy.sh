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

git config --global user.email "1532217526@qq.com"
git config --global user.name "pcery"
git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/pcerypeng/pcery-home.git main:gh-pages

cd -
