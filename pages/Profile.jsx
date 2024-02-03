// Profile.js
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const Profile = () => {
    const location = useLocation();
    const userData = location.state?.userData || {};

    return (
        <Container className="mt-5">
            <Row className="mb-4">
                <Col xs={12} md={4} className="text-center">
                    <Image
                        src={userData.image || 'https://via.placeholder.com/150'}
                        alt="Profile Picture"
                        roundedCircle
                        fluid
                    />
                </Col>
                <Col xs={12} md={8} className="d-flex align-items-center">
                    <div>
                        <h2>{userData.firstName} {userData.lastName}</h2>
                        <p className="text-muted">{userData.profession}</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={8}>
                    <p><strong>Name:</strong> {userData.name}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Phone:</strong> {userData.phoneNumber}</p>
                    <p><strong>Date of Birth:</strong> {userData.dateOfBirth}</p>
                    <p><strong>Gender:</strong> {userData.gender}</p>
                    <p><strong>Profession:</strong> {userData.Profession}</p>
                </Col>
                <Col xs={12} md={4} className="mt-3 mt-md-0">
                    <Button variant="primary" block>Edit Profile</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Profile;
