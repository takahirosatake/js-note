import { TodoListModel } from "./model/TodoListModel.js";
import { TodoItemModel } from "./model/TodoItemModel.js";
import { TodoListView } from "./views/TodoListView.js";
import { render } from "./views/html-util.js";


export class App {
  constructor() {
    this.todoListView = new TodoListView();
    this.todoListModel = new TodoListModel([]);
  }
  /**
     * Todoを追加するときに呼ばれるリスナー関数
     * @param {string} title
     */
   handleAdd(title) {
    this.todoListModel.addTodo(new TodoItemModel({ title, completed: false }));
   }

  /**
   * Todoの状態を更新したときに呼ばれるリスナー関数
   * @param {{ id:number, completed: boolean }}
   */
  handleUpdate({ id, completed }) {
      this.todoListModel.updateTodo({ id, completed });
  }

  /**
   * Todoを削除したときに呼ばれるリスナー関数
   * @param {{ id: number }}
   */
  handleDelete({ id }) {
      this.todoListModel.deleteTodo({ id });
  }
  mount() {
      const formElement = document.querySelector("#js-form");
      const inputElement = document.querySelector("#js-form-input");
      const containerElement = document.querySelector("#js-todo-list");
      const todoItemCountElement = document.querySelector("#js-todo-count");
      this.todoListModel.onChange(() => {
          const todoItems = this.todoListModel.getTodoItems();
          const todoListView = new TodoListView();
          // todoItemsに対応するTodoListViewを作成する
          const todoListElement = todoListView.createElement(todoItems, {
              // Todoアイテムが更新イベントを発生したときに呼ばれるリスナー関数
              onUpdateTodo: ({ id, completed }) => {
                  this.todoListModel.updateTodo({ id, completed });
              },
              // Todoアイテムが削除イベントを発生したときに呼ばれるリスナー関数
              onDeleteTodo: ({ id }) => {
                  this.todoListModel.deleteTodo({ id });
              }
          });
          render(todoListElement, containerElement);
          todoItemCountElement.textContent = `Todoアイテム数: ${this.todoListModel.getTotalCount()}`;
      });
      formElement.addEventListener("submit", (event) => {
          event.preventDefault();
          this.todoListModel.addTodo(new TodoItemModel({
              title: inputElement.value,
              completed: false
          }));
          inputElement.value = "";
      });
  }
}
