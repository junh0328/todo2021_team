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

2. TodoList 에서 props로 받아 온 todos를 매핑하기

   > > TodoListItem에는 props로 todo={todo}와 key={todo.id}를 넘겨준다.
   > > 이 todo는 todos를 매핑하여 하나하나 나타내는 todo 객체 한 개 한 개를 의미한다.
   > > key 는 id 값으로 mapping할 때 기본적으로 주어줘야 하는 값인데, todos 객체를 만들 때 설정해 주었다.

3. TodoInsert에서 value 상태 관리하기

   > > App.js 에서 임시로 onInsert()라는 함수를 만들어 TodoInsert에게 props로 넘겨준다.
   > > TodoInsert에서는 props로 넘겨받은 onInsert()릁 통해서 value 값을 통제하고, onChange() 함수를 만들어 value값을 입력할 수 있도록 한다.

4. todos 배열에 새로운 객체를 추가하기

   > > App 컴포넌트에서 todos 배열에 새 객체를 추가하는 onInsert 함수를 만든다.
   > > 새로운 객체를 만들 때마다 id를 추가해줘야 하므로, useRef를 사용하여 관리한다.
   > > 기존에 3가지의 todos를 작성했으므로, 다음 id를 부여하기 위해 useRef는 4를 사용한다.

5. TodoInsert에서 onSubmit 이벤트 설정하기

   > > App.js에서 useState로 관리하였던 todos 배열을 todoList에서 매핑하여 todoListItem에 props로 전달하게 되는데, 이 todo를 하나 추가할 때마다 todos에 concat(todo)로 넣어주어야 한다.
   > > 따라서 TodoInsert에서 onSubmit 함수가 발생할 때 마다 App.js에서 만든 onInsert 기능을 props로 받아와 실행하게 된다.
   > > onInsert 함수에는 id 값과, value로 넘어오는 text 그리고 check 유무를 받아오게 되고, 앞서 말한 useState 문의 setTodos를 통해 todos 배열에 작성한 todo를 추가하고, id를 1 올려주며 마무리한다.
   > > form 태그 내부에서 button onclick={onclick}과 같이 버튼에 onclick을 주는 것이 아닌 form의 onSubmit 속성을 사용하는 이유는, 마우스의 클릭 이벤트뿐만 아니라, Enterkey의 입력 또한 받기 위해서 입니다.

6. 지우기 기능 구현하기

   > > App.js 에서 filter 내장 함수를 사용하여 onRemove 함수를 만듭니다. onRemove 함수는 id 를 파라미터로 받아와서 선택한 id 와 해당 id가 같은 todo를 지우고 나머지 todo를 보여줍니다.

   > > TodoList에게 props로 전달해줍니다. 실제로 사용되는 곳은 TodoListItem 입니다.

   > > App에게 받은 onRemove props를 TodoListItem에게 넘겨줍니다.

   > > TodoListItem에서 넘겨 받은 onRemove 함수를 사용합니다. 기존에 비구조화 할당을 통해 전달받은 todo에 id props를 추가합니다. 이 id를 통해 TodoListItem은 클릭시에 해당 id에 따른 onRemove 함수를 발생시킵니다. => !todo.checked

7. 토글을 통해 ListItem 수정하기

   > > App.js 에서 map 내장 함수를 사용하여 onToggle 함수를 만듭니다. onToggle 함수는 id를 파라미터로 받아와서 선택한 todo의 id와 id가 같은 todo를 spread 함수로 가져와서 todo의 키인 checked 를 반전시킵니다.

   > > TodoList에게 props로 전달해줍니다. 실제로 사용되는 곳은 TodoListItem 입니다.

   > > App에게 받은 onToggle props를 TodoListItem에게 넘겨줍니다.

   > > TodoListItem에서 넘겨 받은 onRemove 함수를 사용합니다. 이미 onRemove를 사용할 때 비구조화 할당을 통해 id를 props로 추가했기 때문에, MdCheckBox와 MdCheckBoxOutlineBlank를 감싸고 있는 div에 onToggle 함수를 추가합니다.

   > > onClick이 되면 해당 onToggle 함수를 실행할 수 있도록 합니다.

8. useCallvack Hook을 사용하여 재사용 가능 함수 만들기

   > > 기존 리렌더링이 되는 함수들을 useCallback으로 감싸고, 해당 상황에만 렌더링 될 수 있도록 [] 에 해당 값을 넣어줍니다.
