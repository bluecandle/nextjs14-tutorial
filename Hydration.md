# Hydration
https://nomadcoders.co/nextjs-for-beginners/lectures/4696

사용자가 처음으로 server side rendered 결과물 HTML 을 본 이후, React 가 활성화 되는 과정을 Hydration 이라고 한다.

navigation 예시
`Link` 태그를 통해 작성된 코드가, HTML 형태로 render 되면 `a` tag 의 형태로 anchor 된다. 그리고, JS 가 꺼진 상태로 네비게이션을 해보면, 새로고침이 발생하며 페이지가 이동되는 것을 볼 수 있음. 즉, 순전히 브라우저에 의해 페이지 이동이 이루어진다는 것.

하지만, JS 를 활성화하면?? 새로고침 없이 끊김없이 페이지 이동이 되는 것을 볼 수 있다. 왜 그럴까?? React Component 가 hydrate 되었기 때문이다.

Q. 왜 이름을 Hydration 이라고 지었을까??
HTMl 덩어리에 React Component 가 채워지면서... 뭔가 물이 채워지듯 채워진다는 의미에서 hydrate 인듯. 반응성이 없다가 반응성이 채워지는거니까.

### 정리
- 즉 프로세스를 정리하자면... `단순 HTML 을 React Application으로 초기화하는 과정`
- 처음에 HTML 덩어리를 만들어내서 사용자에게 던져주어서 일단 사용자가 페이지를 볼 수 있도록 만든다. 그리고 직후에 바로 HTML 덩어리를 토대로 React App 을 initialize 하여 interactive 하게 만든다. 그래서, HTML 덩어리가 React Component 가 된다.

