import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Headers = () => {
    const [value, setValue] = useState('');

    const handleSearch = async () => {
        const productData = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        const products = await productData.json()
        console.log(products)

        setValue("");
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" className='text-warning fw-bold fs-2'>TheCocktailDB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/" className='me-4'>Home</Link>
                            <Link to="/orders">Order</Link>
                            
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                id='searchField'
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                value={value}
                                onChange={(value) => setValue(value.target.value)}
                                name='q'
                            />
                            <Button onClick={handleSearch} variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Headers;