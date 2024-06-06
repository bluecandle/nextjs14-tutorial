# Server Side Fetching
https://nomadcoders.co/nextjs-for-beginners/lectures/4705

## Loading Component
https://nomadcoders.co/nextjs-for-beginners/lectures/4706

server component와 같은 레벨에 loading 파일을 두면, server component 의 데이터를 로딩하는 동안, 로딩 페이지를 자동으로 보여준다.

### HTTP Streaming
백엔드에서 데이터를 **streaming** 중이라서 가능하다.

실제로 Nextjs 입장에서는, 데이터를 조금씩 내보내고 있는거다. api response 가 오기 전까지, layout 과 loading component 를 미리 내보내고, api response 가 오면 fetch 된 데이터를 함께 내주는것.
브라우저에게 "야야, 나 아직 다 안 끝났어, 기다려봐!!"
