# Checkpoint Web3.0 DApp created with Warp(by RedStone) and Arweave blockchain

Briefly - it is the decentralised platform for bloggers and content creators. Nowadays, content in internet could be as valuable as profitable for creators. That's why our DApp main theme is to give ability for people to create content, but not being censored by big corporations. The problem of actual social medias is also the algorithm of content fitting. Often, the least worth content is gratified and being share for the most of society. Our software could solve it, by giving ability for people to create decentralised content and earning on them.

# Team members:

- Maksym Malicki
- Kamil Chmielewski
- Dominik Nuszkiewicz

# Presentation of project is on the film created by us, the link is here:
```https://youtu.be/FTbAHd0BtT8```

# Demo of our app is here:
``` https://srv33622.seohost.com.pl/ ```
You need to have Arweave wallet to use our app. You can connect with it or install by clicking "Connect with waller". 
Sometimes, app needs to be refreshed, after wallet adding process.

# Docs

## 1. Running app
'''
git clone https://github.com/arweave-wizzards/frontend.git
cd frontend
npm install 
npm run start
'''
## 2. Go to the:
``` localhost:4200/```

## 3. Enjoy the app!

# Project structure and specification

Our project was created in Angular and Warp library to connect on Arwearve blockachain. We have also second repo for contract deploying:
```https://github.com/arweave-wizzards/backend.git```

The structure is simple - we have frontend in Angular and backend in one service which is combining whole functions as some kind of interface: 
```src\app\shared-services\wallet-connect.service.ts```



