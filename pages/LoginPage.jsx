import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simulating authentication, replace with actual authentication logic
        if (email === 'user@example.com' && password === 'password') {
            console.log('Login successful!');
            // Reset input fields after successful login
            setEmail('');
            setPassword('');
            setError('');
            // Redirect or perform necessary actions after successful login
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div>
            <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
                <Form onSubmit={handleSubmit} className="w-100 p-4 shadow-lg bg-light rounded">
                    <h2 className="mb-4 text-center">Login</h2>
                    {error && <p className="text-danger text-center">{error}</p>}
                    <Form.Group controlId="formEmail">
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formPassword" className="mt-2">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100 mt-3">
                        Login
                    </Button>
                </Form>
                <Button variant="danger" onClick={() => console.log('Google Login')} className="mt-3">
                    Google Login
                </Button>
            </Container>


        </div>
    );
};

export default LoginPage;
