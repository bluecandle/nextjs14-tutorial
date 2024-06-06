# use client 는 뭐임??
- server side rendering 은 모든 컴포넌트에 대해 발생한다.
- 하지만, Hydration 은 모든 컴포넌트에 대해 발생하지 않는다.
- Client 에서 interactive 하게 Hydated 될 컴포넌트들은 `"use client"` 지시어(directive)를 맨 위에 갖고 있는 component 뿐임.

### 그럼 언제 써야함??
신경 안써도 된다. 필요하면 프레임워크에서 에러 뱉음.
"interactive 한 페이지인데, use client 지시어 안 넣었네?? 에러! 지시어 입력하셈" 이렇게 한다는거.
이런 의미면 그냥 "use hydrate" 가 더 맞지 않았을까;;

### 장점
`"use client"` 라고 지정된 페이지의 자바스크립트 코드만 다운로드 받게 된다 > 사용성이 좋아진다!