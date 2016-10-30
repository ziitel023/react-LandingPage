import { IDispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

// import {
//   Header,
//   MainSection,
//   model,
//   addTodo,
//   editTodo,
//   clearCompleted,
//   completeAll,
//   completeTodo,
//   deleteTodo
// } from '../../todos';

import {
  WebTable
} from '../../WebTable';

// interface AppProps {
//   todos: model.Todo[];
//   dispatch: IDispatch;
// }

// class App extends React.Component<AppProps, void> {
  class App extends React.Component<void, void> {
  render() {
    // const { todos, dispatch } = this.props;

    return (
      <div id="WebTable">
        <WebTable point={0} />
      </div>
      // <div className="todoapp">
      //   <Header addTodo={(text: string) => dispatch(addTodo(text))} />
      //   <MainSection
      //       todos={todos}
      //       editTodo={(t,s) => dispatch(editTodo(t, s))}
      //       deleteTodo={(t: model.Todo) => dispatch(deleteTodo(t))}
      //       completeTodo={(t: model.Todo) => dispatch(completeTodo(t))}
      //       clearCompleted={() => dispatch(clearCompleted())}
      //       completeAll={() => dispatch(completeAll())}/>
      // </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(App);
