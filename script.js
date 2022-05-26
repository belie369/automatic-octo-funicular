let todoInput; //miejsce, gdzie użytkownik wpisuje swoje zadania
let alertInfo; //info o braku zadań / konieczności wpisania tekstu
let addBtn; //przycisk ADD - dodaje nowe elementy do listy
let ulList; //lista zadań, tagi ul
let newTask; //nowododany LI, nowe zadanie
let allTasks; //lista wszystkich dodanych LI
let idNumber = 0;

let popup; //popup
let popupInfo; //tekst w popupie, jak się doda pusty tekst
let todoToEdit; //edytowany Todo
let popupInput; //input w popupie
let popupAddBtn; //przycisk "zatwierdź" w popupie
let popupCloseBtn; //przycik "anuluj" w popupie

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	todoInput = document.querySelector('.todo-input');
	alertInfo = document.querySelector('.alert-info');
	addBtn = document.querySelector('.add-btn');
	ulList = document.querySelector('.todo-list ul');
	allTasks = document.getElementsByTagName('li');

	popup = document.querySelector('.popup');
	popupInfo = document.querySelector('.popup-info');
	popupInput = document.querySelector('.popup-input');
	popupAddBtn = document.querySelector('.accept');
	popupCloseBtn = document.querySelector('.cancel');
	//pobieramy wszystkie elementy
};

const prepareDOMEvents = () => {
	addBtn.addEventListener('click', addNewTask);
	todoInput.addEventListener('keyup', enterCheck);
};

const addNewTask = () => {
	if (todoInput.value !== '') {
		idNumber++;
		newTask = document.createElement('li');
		newTask.textContent = todoInput.value;
		newTask.setAttribute('id', `todo-${idNumber}`);
		ulList.before(newTask);

		todoInput.value = '';
		alertInfo.textContent = '';
		createToolsArea();
	} else {
		alertInfo.textContent = 'Wpisz treść zadania!';
	}
};

const enterCheck = (e) => {
	if (e.code === 'Enter' || e.key === 'Enter') {
		addNewTask();
	}
};

const createToolsArea = () => {
	const toolsPanel = document.createElement('div');
	toolsPanel.classList.add('tools');
	newTask.append(toolsPanel);

	const completeBtn = document.createElement('button');
	completeBtn.classList.add('complete');
	completeBtn.innerHTML = '<i class="fas fa-check"></i>';

	const editBtn = document.createElement('button');
	editBtn.classList.add('edit');
	editBtn.textContent = 'EDIT';

	const deleteBtn = document.createElement('button');
	deleteBtn.classList.add('delete');
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

	toolsPanel.append(completeBtn, editBtn, deleteBtn);

	/* <div class="tools">
<button class="complete"><i class="fas fa-check"></i></button>
<button class="edit">EDIT</button>
<button class="delete"><i class="fas fa-times"></i></button>
</div> */
};

document.addEventListener('DOMContentLoaded', main);
