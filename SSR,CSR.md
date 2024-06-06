# SSR VS CSR
https://nomadcoders.co/nextjs-for-beginners/lectures/4695

## CSR
react on the client (browser) > performs all the rendering jobs.

download all the js files and excute them > redered by browser.

if javascript is disabled, no UI to be shown!

### SEO perspective
구글 봇 입장에서는 empty html 파일만 보게 된다.

## SSR
server side rendering is the default in next!

사용자에게 html 을 전달하기 전에, nextjs 에서 backend 에서 application 을 실행하여 response를 전달하는 형태.

Q. 근데...여기서 말하는 backend 라는 영역은 어디에 있다고 말해야 정확한것인가?
- 로컬에서 실행하는 입장에서는...웹 서버를 실행중인 pc 가 백엔드가 되는거긴 함. 그건 ok
- 그럼, 배포 환경을 가정했을 때, 코드를 컴파일하여 cloudfront 에 올려놓는다고 해보자
- 그러면, 사용자가 cloudfront 를 통해 접근했을 때 rendering 을 위한 작업이 수행되고 전달된다는 의미인가?? 그러면 이 상황에서는 cloudfront 가 backend 역할을 해주는거일테고.

`"use client"` 라고 쓰더라도, server side rendering 과 client side rendering 이 둘 다 이루어진다!
client 에서만 이루어지는게 아님!