# redux-toolkit-counter
Building a Counter App with Redux Toolkit: A Journey in State Management, create a dynamic Counter App using the Redux Toolkit library, a powerful tool that streamlines the process of managing state in React applications.

**Key Highlights:**

🔢 Building the Counter Component: Our Counter App's core is, of course, the counter itself. We'll create a sleek and user-friendly component that increments and decrements a numerical value. Redux Toolkit's createSlice and createAsyncThunk functions will be our trusty companions throughout this process.

🔄 State Management Made Effortless: With Redux Toolkit, handling state becomes a breeze. We'll witness how Redux Toolkit abstracts away the complexities of Redux boilerplate code, allowing us to focus on building functionality and delivering a seamless user experience.


git clone https://github.com/alokinfo30/redux-toolkit-counter.git
cd redux-toolkit-counter
npm run dev

**Development steps**

=> npm install @reduxjs/toolkit react-redux 

=> To create a Redux state slice
    create a file src/redux/countslice.jsx. Then import createSlice from @redux/toolkit.

    A Redux slice is a self-contained piece of the Redux store that includes a reducer function, initial state, and action creators.
    Creating a slice requires three things:
    Name, which is usually set to be a string.
    Initial State Value.
    Reducer, which contains actions that define how the state can be updated.
    After you create the slice, the reducers and the Redux actions inside the reducers are exported differently. This is because the slice created will need to be 
    exported before it can be used inside the store.


=> create store & add the slice to the store

=> to connect the Redux Store to React

   to wrap your <App/> with a <Provider/> which will be imported from react-redux. Also, the store you created above will be passed into the provider as a prop.

=> to use the state and actions in your React components.
    using two hooks: useDispatch and useSelector . 
    Data are being read from the store through the useSelector hook while the actions are being dispatched using the useDispatch hook.
    The corresponding actions (increment, decrement, and incrementByAmount) are being imported from the countSlice.jsx file to be used by the dispatch.

    When buttons are clicked, two things happens:
    The Redux action is dispatched to the store.
    The slice reducer will see the action and then update the state.


