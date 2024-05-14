import React from 'react'
import { Button, Card } from 'react-bootstrap'
export function ProductItem() {
    return (
        <div className="col-sm-4 col-md-3 mb-3">
            <Card>
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="outline-success">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
