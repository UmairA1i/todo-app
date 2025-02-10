document.addEventListener("DOMContentLoaded", function() {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const listItem = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
    
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
    
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-btn');
    
        deleteButton.addEventListener('click', function() {
            listItem.remove();
        });
    
        editButton.addEventListener('click', function() {
            const newTaskText = prompt('Edit your task:', taskSpan.textContent);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                taskSpan.textContent = newTaskText.trim();
            }
        });
    
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('buttons');
        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(deleteButton);
    
        listItem.appendChild(taskSpan);
        listItem.classList.add('li-btn');
        listItem.appendChild(buttonContainer);
        taskList.appendChild(listItem);
    }
});
