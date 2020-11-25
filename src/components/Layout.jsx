import React, { Fragment } from 'react';
import { Button, Alert, Breadcrumb, BreadcrumbItem, Card } from 'react-bootstrap';

const Layout = () => {
	return (
		<Fragment>
			<Card className='bg-danger'>
				<Card.Img src='https://source.unsplash.com/random/400x400?rain' />
				<Card.Body>
					<Card.Title>Lorem ipsum dolor sit amet.</Card.Title>
					<Card.Text>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem voluptatem sapiente omnis
						obcaecati aliquam alias at ad labore, commodi sequi dolorem id dolores quia explicabo
						reprehenderit, iusto odit quos ipsum.
					</Card.Text>
					<Button variant='primary'>Explore</Button>
				</Card.Body>
			</Card>
			<Breadcrumb>
				<BreadcrumbItem active={true}>Lorem, ipsum.</BreadcrumbItem>
				<BreadcrumbItem>Lorem, ipsum.</BreadcrumbItem>
				<BreadcrumbItem>Lorem, ipsum.</BreadcrumbItem>
				<BreadcrumbItem>Lorem, ipsum.</BreadcrumbItem>
			</Breadcrumb>
			<Alert variant='danger'>Lorem ipsum dolor sit amet.</Alert>
			<Button>Hello Friend</Button>
		</Fragment>
	);
};

export default Layout;
