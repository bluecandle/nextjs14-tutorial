# Dynamic Metadata
`generateMetadata` 라고 약속된 이름의 함수를 구현하여 적용 가능.
그리고, export 해야만 nextjs 프레임워크에서 인식 하여 호출함.

그리고, 이 함수 안에서 호출한 데이터는 캐싱되기 때문에, 하위 컴포넌트에서 다시 호출할 때 중복 호출에 대한 걱정은 하지 않아도 된다.

페이지마다 다른 title, description 등을 적용하기에 좋음.