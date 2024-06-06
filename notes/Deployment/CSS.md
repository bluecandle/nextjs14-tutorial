# nextjs out of the box CSS!
뭐 다른거 써도 되지만, 일단 Nextjs 내장이 있음!

우선 global style 을 지정해준다. 그리고 global style 은 root layout 에 import 해준다.

`.module.css` 라는 이름으로 끝나는 것이 중요하다. 어디에 위치하는지는 상관없음. 그냥 component 옆에 둬도 된다! styles 폴더에 몰아둬도 되고.

그리고, 어떻게 적용하느냐?? JSX에 className 을 텍스트 형태로 적용해주는게 아니다. 일단, JS 파일처럼 import 를 해줘야함.

`import styles from '../styles/navigation.module.css'` 이렇게! 그리고, styles 변수가 javascript object 라고 생각하는거지.

그리고 import 된 styles 변수를 사용해서 className 에 적용한다.

이렇게 했을 때, `nav` 라고 단순히 css className 을 지정했더라도, 브라우저에서 표시될 때는 className 이 랜덤하게 변경되어서 적용되어서, 절대 충돌이 발생하지 않는다!

그리고, 모듈 파일 안에서는 class 로 시작해야함 `.nav ~~~` ~~~ 에는 `ul` `ul li` 등등 맘대로 해도 됨.