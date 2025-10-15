    // Truy cập các phần tử trong DOM
    const todoInput = document.getElementById('todoInput');
    const addButton = document.getElementById('addButton');
    const todoList = document.getElementById('todoList');

    if (!todoInput || !addButton || !todoList) {
        // Nếu bất kỳ phần tử nào không tồn tại, không gán sự kiện để tránh lỗi
        console.warn('Missing DOM elements: check IDs in HTML');
    } else {
        // Hàm tạo và thêm task mới
        function addTask() {
            const task = todoInput.value.trim();
            if (!task) return; // bỏ qua nếu input rỗng

            const li = document.createElement('li');
            li.textContent = task;

            // Tạo nút Xóa
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Xóa';
            deleteButton.style.marginLeft = '10px';

            // Gán sự kiện nút Xóa
            deleteButton.addEventListener('click', function() {
                todoList.removeChild(li);
            });

            li.appendChild(deleteButton);
            todoList.appendChild(li);

            // Xóa và focus lại ô input
            todoInput.value = '';
            todoInput.focus();
        }

        // Gán sự kiện cho nút Add
        addButton.addEventListener('click', addTask);

        // Hỗ trợ thêm task bằng phím Enter
        todoInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') addTask();
        });
    }
            