# [Keepmalink](https://keepmalink.firebase.com) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/nrogapp/keepmalink/blob/master/LICENSE) [![Travis-CI Status](https://travis-ci.org/nrogapp/keepmalink.svg?branch=master)](https://travis-ci.org/nrogapp/keepmalink)

Keepmalink is a web keeper of your favourite links.


# Installation

```sh
npm install
npm start
```

# Architecture Overview

## Frontend
- [React](https://facebook.github.io/react/) - UI
- [React-Router](https://github.com/ReactTraining/react-router) - Navigation
- [Bulma](https://github.com/jgthms/bulma) - CSS framework
- [Fort Awesome](https://github.com/FortAwesome/Font-Awesome) - Iconic SVG

## Backend
- [Firebase](https://firebase.google.com/)

## CI/CD
- [Travis CI](https://travis-ci.org/) - Not allow us to deploy on `Push Request`
- [Circle CI](https://circleci.com/) - Next time we will try it


# Tools & Extension

- [Vistual Studio Code](https://code.visualstudio.com)
- [Dracula Theme](https://draculatheme.com/)
- [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [RegExr](https://regexr.com/)

# Knowledge Source

## React
- [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

## Setup Project
- [Using React in VS Code](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial)
- [มาลอง deploy create-react-app ขึ้น Firebase hosting และทำ CI/CD ด้วย Travis-ci กันเถอะ](https://medium.com/muze-innovation/%E0%B8%A1%E0%B8%B2%E0%B8%A5%E0%B8%AD%E0%B8%87-deploy-create-react-app-%E0%B8%82%E0%B8%B6%E0%B9%89%E0%B8%99-firebase-hosting-%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%97%E0%B8%B3-ci-cd-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-travis-ci-%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%96%E0%B8%AD%E0%B8%B0-7a010a2005ed)
- [ทำโค้ดให้สวย และเป็นมาตรฐานด้วย ESlint และ Prettier](https://medium.com/@boomauakim/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%80%E0%B8%88%E0%B9%87%E0%B8%84%E0%B9%80%E0%B8%A3%E0%B8%B4%E0%B9%88%E0%B8%A1%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B9%86-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-koa-node-js-framework-eslint-and-prettier-b3ed866e826)

## CSS
- [4. Four ways to style react components](https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822)
- [Building a website with React and Bulma](https://hackernoon.com/building-a-website-with-react-and-bulma-d655214bff2a)

## Route
- [ทำ Routing ให้กับ React ด้วย React Router v4](https://devahoy.com/posts/basic-web-with-react-router-v4/) (+ Setup ESLint and Bulma)

## Firebase
- [A Complete Firebase in React Authentication Tutorial [2018]](https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/)

## Travis
- [Learn Travis](https://github.com/dwyl/learn-travis)

## Security
### Source Code
- [How do I stop somebody from viewing the source code of the webpage in browsers?](https://www.quora.com/How-do-I-stop-somebody-from-viewing-the-source-code-of-the-webpage-in-browsers)
- [How do I protect javascript files?](https://stackoverflow.com/questions/4766834/how-do-i-protect-javascript-files)
### Firebase Config
- [Is it safe to expose Firebase apiKey to the public?](https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public)
- [How to restrict Firebase data modification?](https://stackoverflow.com/questions/35418143/how-to-restrict-firebase-data-modification)

# Note

## 2018-07-18 Solved `bad decrypt` file by openssl
- If you are using Windows, don't try to use `travis encrypt-file` in `CMD` or `Powershell`. You must use `WSL` instead. [more detail](https://github.com/travis-ci/travis-ci/issues/4746)
- We think the problem is about version of `openssl` mismatch or the `end-of-line` problem in different OS?

## 2018-07-19 Can't stop someone to view the source code
- We use `travis encrypt-file` to encrypt `firebase config`. But we can see the `firebase config` when it was decrypted on `Inspect > Source`
- We research about the security of this case and the refs is in [Knowledge > Security Section](# Security)


# License

Keepmalink is open source software [licensed as MIT](https://github.com/nrogapp/keepmalink/blob/master/LICENSE).