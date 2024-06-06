# Suspense
https://nomadcoders.co/nextjs-for-beginners/lectures/4708

- await for the async functional component
- 기다리는 동안 fallback component 를 보여주고, 데이터 로딩이 완료되는대로 바로 보여준다.
- Suspense 로 둘러진 여러 개의 컴포넌트를 하나의 페이지에 넣어놓으면, 데이터가 불러와지는대로 해당 각각의 영역이 보여지도록 할 수 있음.

- Suspense 자체는 React component 임. 하지만, SSR 환경에서 streaming 형태로 동작하는 것은 nextjs 에서 제공하는 것.