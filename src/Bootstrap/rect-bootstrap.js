import React, { useState } from "react";
import {Container,Row,Col,Form,Button,Alert} from "react-bootstrap";

function App(){

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const [city,setCity]=useState("")
const [weatherData,setWeatherData]=useState(null)
const [error,setError]=useState(null)


const fetchWeather=async()=>{
    try{
        const apiKey=""
        const response=await fetch("")

        if(!response.ok){
            throw new Error ('city not found')
        }
        const data=await response.json()
        setWeatherData(data)
        setError(null)
    }
    catch(err){
        setWeatherData(null)
    }
}


    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <h1>Weather App</h1>
                    <Form>
                        <Form.Group controlId="cityForm">
                            <Form.Label>Enter City</Form.Label>
                            <Form.Control type="text" placeholder="Enter city" value={city} onChange={(e)=>setCity(e.target.value)}/>
                        </Form.Group>
                        <Button variant="primary mt-2">Get Weather</Button>
                    </Form>
                </Col>
            </Row>
                {error && (
                    <Row className="mt-3">
                         <Col>
                    <Alert variant="danger">{error}</Alert>
                    </Col>
                    </Row>
                     )}
                     {weatherData && (
                        <Row className="mt-3">
                            <Col>
                            <h2>
                                {weatherData.name},{weatherData.sys.country}
                            </h2>
                            <p>Temperature : {weatherData.main.temp}c</p>
                            <p>weather : {weatherData.weather[0].description}</p>
                            </Col>
                        </Row>
                     )}
               
        </Container>
    )
}
export default App;