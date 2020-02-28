import React from "react";
import { Provider } from "react-redux";
import App from '../app/App';

interface Props {
  store: any 
}

const Root: React.FC<Props> = ({ store }) => (
  <Provider store={store}>
      <App />
  </Provider>
);

export default Root;