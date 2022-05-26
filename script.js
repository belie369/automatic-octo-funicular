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
	} else {
		alertInfo.textContent = 'Wpisz treść zadania!';
	}
};

const enterCheck = (e) => {
	if (e.code === 'Enter' || e.key === 'Enter') {
		addNewTask();
	}
};

document.addEventListener('DOMContentLoaded', main);
