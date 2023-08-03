#!/usr/bin/env sh

name: Build project
on: [push]
jobs:
  build_vue:
    runs-on: ubuntu-latest
    name: Build project
    steps:
    - uses: actions/checkout@v2
    - id: Build-Vue
      uses: xRealNeon/VuePagesAction@1.0.1
      with:
        username: 'marihemori'
        reponame: 'blog-users-crud'
        token: ${{ secrets.GITHUB_TOKEN }}