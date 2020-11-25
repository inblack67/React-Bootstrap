import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Forms = () => {
	return (
		<Form className='mt-4'>
			<Row>
				<Col md>
					<Form.Group>
						<Form.Label>Name</Form.Label>
						<Form.Control type='text' placeholder='Name' />
					</Form.Group>
				</Col>
				<Col md>
					<Form.Group>
						<Form.Label>Email</Form.Label>
						<Form.Control type='email' placeholder='Email' />
						<Form.Text className='text-muted'>Lorem ipsum dolor sit amet.</Form.Text>
					</Form.Group>
				</Col>
			</Row>
			<Row className='align-items-center'>
				<Col md>
					<Form.Group>
						<Form.Label>Password</Form.Label>
						<Form.Control type='password' placeholder='Password' />
					</Form.Group>
				</Col>
				<Col md>
					<Button type='submit' variant='success' className='mb-4'>
						Submit
					</Button>
				</Col>
			</Row>
		</Form>
	);
};

export default Forms;
