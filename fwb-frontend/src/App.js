import './App.css';
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import {Container, Form, FormControl, Row} from "react-bootstrap";
import logo from './FWB_Logo.svg';
import {getFollowing} from './utilities/getFollowing'
import FollowingList from './components/FollowingList';


function App() {

    const [handle, setHandle] = useState("");
    const [following, setFollowing] = useState([]);
    console.log(handle)
    console.log(following)
    const onFormSubmit = e => {
        e.preventDefault()
        console.log(handle)
        getFollowing(handle).then(list => {
                console.log(list)
                setFollowing(list)
        }
        )
    }
    const onFormChange = e => {
        e.preventDefault()
        const {value} = e.target;
        setHandle(value)
    }
    return (
        <div className="App">
            <Container fluid className="App-header">
                <Row className="logo-row">
                    <img src={logo} className="App-logo" alt="logo" />
                </Row>
                <Row className="App-welcome">
                    Friends With Connections
                </Row>
                <Row className="App-info">
                    Find anyone's connectedness to FWB
                </Row>
                <Row className="App-button-row">
                    <Form inline className="input-group form" onSubmit={onFormSubmit}>
                        <FormControl type="text" placeholder="Twitter handle (Try @Ryder, @Oren)" className="mr-sm-2 inform"
                                     onChange={onFormChange}/>
                        <Button variant="outline-success" className="mr-sm-2 App-button" type="submit">Search</Button>
                    </Form>
                </Row>
                <Row className="App-button-row">
                    <FollowingList members={following}/>
                </Row>
            </Container>
        </div>
    );
}

export default App;
