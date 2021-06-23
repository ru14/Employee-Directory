import React from 'react'
import { Col, Form } from 'react-bootstrap'

export default function SearchForm(params, onParamChange) {
    return (
        <Form className="mb-4">
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Search By:</Form.Label>
                    <Form.Control onChange={onParamChange} as="select" defaultValue="Choose...">
                        <option value="0">Choose...</option>
                        <option value={params.name}>Employee name</option>
                        <option value={params.Location}>Location</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Search By:</Form.Label>
                    <Form.Control onChange={onParamChange} value={params.name } type="text">
                    </Form.Control>
                </Form.Group>
            </Form.Row>
        </Form>
    )
}
