1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

 - Array.map()
 - Array.filter()
 - Array.concat()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

 - Actions: They describe the event and possible changes that the reducer needs to act on
 - Reducers: They handle the action and uses it to update the sate of the store accordingly
 - Store: The store sets the state of the Application globally.
 - The store is the single source of truth because it holds the state of the application globally at any point in time. Every component get its state from the store.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is stored in the store and it is possible for all components to access it while a component state is stored locally in the component and only accessable by the component or sub components passing it as props.
We use component state when changes in a component does not really affect the state of the whole application.

1.  What is middleware?

    A middleware is an used to intercept a process, run a function at the point it is intercepted(say validation) and countinue or stop the process depending on the result of the function.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Redux thunk is a middleware thaat makes the flow of redux asynchronous, intercepting the flow of redux , carrying out a specified action before the action creators reach the reducers.
    
1.  Which `react-redux` method links up our `components` with our `redux store`?
    - Provider