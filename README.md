## Peep

This is a simple chat/conferencing service I made from different tutorials I was checking out.
Also, as a mini project for school, i tried it as first 
using <a href="https://www.okta.com">Okta</a> from this <a href="https://scotch.io/tutorials/build-a-video-chat-service-with-javascript-webrtc-and-okta">tutorial</a> but
the okta module has some issues setting up, so i settled up with <a href="https://www.auth0.com">Auth0</a> and worked it out, both okta and auth0 are authentication module, with free and paid versions. 
Ok, enough talk, lets get to the fun part.

Clone my repo for your testing..

```sh
git clone https://github.com/AnoRebel/ChatService.git
```

Enter into the directory..

```sh
cd ChatService
```

Install all the dependencies using yarn (i prefer yarn to npm).

```sh
yarn install
```

Start the server (default port 5001, which you can change to any in the package.json)..

```sh
yarn start
```
 
 ## TODO
- [ x ] Host online with a free static site hosting site (probably <a href="https://www.netlify.com">Netlify</a> since it intergrates well with github.)..

- Now hosted at peep.netlify.com
