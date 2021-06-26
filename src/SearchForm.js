import React from 'react'
import { Col, Form } from 'react-bootstrap'

export default function SearchForm({ params, onFilterChange, onFilterValueChange }) {
    return (
        <Form className="mb-4">
            <Form.Row>                
                <Form.Group as={Col}>
                    <Form.Label>Search By:</Form.Label>
                    <Form.Control name="type" onChange={onFilterChange} as="select" defaultValue="Choose...">
                        <option value="0">Choose...</option>
                        <option value="EmployeeName">Employee name</option>
                        <option value="Location">Location</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Location</Form.Label>                    
                    <Form.Control onChange={onFilterValueChange} value={params.searchValue} name="searchValue" type="text">
                    </Form.Control>
                </Form.Group>
            </Form.Row>
        </Form>
    )
}
