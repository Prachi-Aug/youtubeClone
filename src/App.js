import React from 'react'
import Header from './components/header/Header'
import Container from 'react-bootstrap/Container'
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './components/screens/homeScreen/HomeScreen'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
    return (
        <>
            <Header />
            <div className="app-container">
                <Sidebar />
                <Container fluid className="app_main">
                    <HomeScreen/>
                </Container>
            </div>
        </>
    )
}

export default App
