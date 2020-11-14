# todolist data flow!

1. App에 들어갈 컴포넌트 구성하기

   > > TodoTemplate.js / TodoInsert.js / TodoList.js / TodoListItem.js

2. TodoTemplate 구성

   > > 전체적인 ui 구성
   > > children으로 TodoInsert.js / TodoList.js 를 받음

3. TodoInsert 구성

   > > react-icons 모듈 다운로드
   > > form 태그를 통해 input / submit button을 만들었다.

4. TodoList 구성

   > > TodoListItem을 컴포넌트로 전달 받을 수 있는 div를 나눈다.

5. TodoListItem 구성
   > > react-icons 에서 아이콘을 받아와서 div에 넣어 사용한다.
   > > div는 display : flex를 사용하여 나누어준다.
