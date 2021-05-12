## Following apis we need to support

- /todos - get, post
- /todos/:todoId - get, put, delete
- /todos?status=pending|in-progress|done & dueDate='today'
- validations

```
    TodoItem 
    id: number | uuid
    title: string 
    status: enum (pending|in-progress|done)
    dueDate: Date, Optional 
```