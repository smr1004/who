<script>
      // DOM 요소를 선택해야합니다.
      const taskInput = document.getElementById('taskInput');
      const addButton = document.getElementById('addButton');
      const taskList = document.getElementById('taskList');
​
      // addButton이 클릭되면 이벤트가 발생하는 리스너를 추가해주세요.
      addButton.addEventListener('click', addTask);
​
      // addTask 함수를 만듭니다.
      function addTask() {
        // 인풋창에 입력된 텍스트가 있어야 합니다. taskText
        const taskText = taskInput.value.trim();
​
        // li 태그를 생성(create)합니다. taskItem
        const taskItem = document.createElement('li');
        // taskItem 텍스트(taskText)를 대입(=)합니다.
        taskItem.textContent = taskText;
        // ul 태그 밑에 자식 태그로 추가(append)합니다.
        taskList.appendChild(taskItem);
        // 추가되고 난 이후 input창 값을 비워줍니다.(초기화)
        taskInput.value = '';
​
        // 생성한 taskItem에 이벤트리스너를 추가(click -> completeTask)해주세요.
        taskItem.addEventListener('click', completeTask);
      }
​
      // 할일을 완료했을 때 사용하는 함수
      function completeTask(event) {
        const taskItem = event.target;
        // 할일 완료 했을때 중간 줄이 쫙! 글자색도 연하게!
        // (CSS selctor .complete)
        taskItem.classList.add('completed');
        taskItem.addEventListener('click', removeTask);
      }
​
      // 할 일 삭제
      function removeTask(event) {
        const taskItem = event.target;
        taskItem.parentNode.removeChild(taskItem);
      }
    </script>