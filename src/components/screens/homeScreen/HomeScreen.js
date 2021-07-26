import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import {Row,Col} from 'react-bootstrap'
import "../../categoriesBar/CategoriesBar"
import '../../video/Video'
import CategoriesBar from '../../categoriesBar/CategoriesBar'
import Video from '../../video/Video'

const HomeScreen = () => {
    return (
        <div>
            <Container>
                <CategoriesBar/>
                <Row>
                    {
                        [...new Array(20)].map(() =>
                            <Col lg={3} md={4}>
                                <Video/>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    )
}

export default HomeScreen
