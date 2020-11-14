# todolist data flow!

★ UI 구성하기

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

★ 기능 구현하기

1. App 에서 todos 상태 구현하기

   > > useState를 통해 객체형식의 todos 배열을 만든다.
   > > 속성으로 id(인덱스) / text(글) / checked (체크여부) 를 부여한다.
   > > TodoList의 props로 todos를 넘겨준다.

2. TodoList 에서 props로 받아 온 todos를 매핑하여 TodoListItem에 넘겨 준다.
   > > TodoListItem에는 props로 todo={todo}와 key={todo.id}를 넘겨준다.
   > > 이 todo는 todos를 매핑하여 하나하나 나타내는 todo 객체 한 개 한 개를 의미한다.
   > > key 는 id 값으로 mapping할 때 기본적으로 주어줘야 하는 값인데, todos 객체를 만들 때 설정해 주었다.
