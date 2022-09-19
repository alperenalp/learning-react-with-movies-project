import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

const App = (props) => (
    <Card
        hoverable
        style={{
            width: 240
        }}
        cover={<img alt="example" src={props.image}/>} //"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" 
    >
        <Meta title={props.cardTitle} description="www.instagram.com" />
    </Card>
);

App.defaultProps={
    cardTitle:"Default Card Title"
}


export default App;