import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ID가 root인 엘레먼트 안에 App 컴포넌트를 밀어넣으려고 함.
ReactDOM.render(
    <App />,
  document.getElementById('photato')
);