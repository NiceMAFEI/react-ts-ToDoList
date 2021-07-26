/**
 * 本地缓存储存todos
 */
import { Todo } from './../type/ToDo';
/**
 * @name 保存数据
 * @param todos 
 */
 export function saveTodos(todos: Todo[]) {
   localStorage.setItem("TODOS_KEY", JSON.stringify(todos));
 }
 
 /**
  * @name 读取数据
  */
 export function readTodos(): Todo[] {
   return JSON.parse(localStorage.getItem("TODOS_KEY") || "[]");
 }
 