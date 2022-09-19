import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.min.css';
import { Col, Row} from 'antd';
import UserCard from './components/UserCard';
import Collapse from './components/Collapse';


function App() {
    return (
        <Row>
            <Col xs={20} sm={16} md={12} lg={8} xl={8}>
                <Collapse collapseId='1'>
                    <UserCard image='https://picsum.photos/id/1/200/300' />
                </Collapse>
            </Col>

            <Col xs={20} sm={16} md={12} lg={8} xl={8}>
                <Collapse collapseId='2'>
                    <UserCard cardTitle='Galatalı' image='https://picsum.photos/id/10/200/300' />
                </Collapse>
            </Col>

            <Col xs={20} sm={16} md={12} lg={8} xl={8}>
                <Collapse collapseId='3'>
                    <UserCard cardTitle='Beşiktaşlı' image='https://picsum.photos/id/100/200/300' />
                </Collapse>
            </Col>
        </Row>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* ReactDOM.render(
    <App />,
    document.querySelector('#root')
); */