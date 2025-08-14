import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import { 
    Container, 
    Typography, 
    Button, 
    TextField, 
    Box, 
    Card, 
    CardContent,
    Snackbar,
    Alert,
    Paper,
    Grid
} from '@mui/material';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import '../App.css';

export default function Authentication() {
    const [formState, setFormState] = useState(0);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [open, setOpen] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    let handleAuth = async () => {
        try {
            if (formState === 0) {
                // Simple login for demo
                login({ username, name: username });
                window.location.href = '/home';
            }
            if (formState === 1) {
                // Simple register for demo
                login({ username, name });
                setUsername("");
                setMessage("Registration successful!");
                setOpen(true);
                setError("")
                setFormState(0)
                setPassword("")
            }
        } catch (err) {
            console.log(err);
            setError("Authentication failed"); // Simplified error message
        }
    }

    return (
        <div style={{ 
            minHeight: '100vh', 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {/* Animated background elements */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `
                    radial-gradient(circle at 20% 30%, rgba(120, 119, 198, 0.4) 0%, transparent 50%),
                    radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
                    radial-gradient(circle at 40% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 90% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
                `,
                zIndex: 1
            }} />
            
            {/* Floating animated shapes */}
            <div style={{
                position: 'absolute',
                top: '15%',
                right: '15%',
                width: '150px',
                height: '150px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                animation: 'float 8s ease-in-out infinite',
                zIndex: 2
            }} />
            <div style={{
                position: 'absolute',
                top: '65%',
                left: '10%',
                width: '100px',
                height: '100px',
                background: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '30px',
                animation: 'float 12s ease-in-out infinite reverse',
                zIndex: 2
            }} />
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '8%',
                width: '120px',
                height: '120px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
                transform: 'rotate(45deg)',
                animation: 'float 10s ease-in-out infinite',
                zIndex: 2
            }} />
            <div style={{
                position: 'absolute',
                top: '40%',
                left: '5%',
                width: '80px',
                height: '80px',
                background: 'rgba(255, 255, 255, 0.12)',
                borderRadius: '50%',
                animation: 'pulse 4s ease-in-out infinite',
                zIndex: 2
            }} />

            <Container maxWidth="lg" sx={{ 
                position: 'relative', 
                zIndex: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                py: 4
            }}>
                <Grid container spacing={0} sx={{ 
                    maxWidth: 1100, 
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '25px',
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    mx: 'auto',
                    width: '100%'
                }}>
                    {/* Left Panel - Form */}
                    <Grid item xs={12} md={5}>
                        <Box sx={{ 
                            p: 5, 
                            height: '100%', 
                            display: 'flex', 
                            flexDirection: 'column', 
                            justifyContent: 'center',
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%)',
                            minHeight: '600px'
                        }}>
                            {/* Logo */}
                            <Box sx={{ textAlign: 'center', mb: 5 }}>
                                <Box sx={{
                                    width: '100px',
                                    height: '100px',
                                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mx: 'auto',
                                    mb: 3,
                                    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
                                    animation: 'pulse 3s ease-in-out infinite'
                                }}>
                                    <LockIcon sx={{ fontSize: 50, color: 'white' }} />
                                </Box>
                                <Typography variant="h3" sx={{ 
                                    fontWeight: 'bold',
                                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    mb: 1
                                }}>
                                    ConvoCam
                                </Typography>
                                <Typography variant="body1" sx={{ 
                                    color: '#666',
                                    fontSize: '1.1rem'
                                }}>
                                    Secure Video Communication
                                </Typography>
                            </Box>

                            {/* Form Tabs */}
                            <Box sx={{ 
                                display: 'flex', 
                                mb: 4, 
                                background: '#f8fafc', 
                                borderRadius: '15px', 
                                p: 1.5,
                                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)'
                            }}>
                                <Button
                                    fullWidth
                                    onClick={() => setFormState(0)}
                                    sx={{
                                        background: formState === 0 ? 'linear-gradient(45deg, #667eea, #764ba2)' : 'transparent',
                                        color: formState === 0 ? 'white' : '#64748b',
                                        borderRadius: '12px',
                                        py: 2,
                                        fontWeight: 'bold',
                                        fontSize: '1rem',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            background: formState === 0 ? 'linear-gradient(45deg, #764ba2, #667eea)' : 'rgba(102, 126, 234, 0.1)',
                                            transform: formState === 0 ? 'none' : 'translateY(-2px)'
                                        }
                                    }}
                                >
                                    SIGN IN
                                </Button>
                                <Button
                                    fullWidth
                                    onClick={() => setFormState(1)}
                                    sx={{
                                        background: formState === 1 ? 'linear-gradient(45deg, #667eea, #764ba2)' : 'transparent',
                                        color: formState === 1 ? 'white' : '#64748b',
                                        borderRadius: '12px',
                                        py: 2,
                                        fontWeight: 'bold',
                                        fontSize: '1rem',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            background: formState === 1 ? 'linear-gradient(45deg, #764ba2, #667eea)' : 'rgba(102, 126, 234, 0.1)',
                                            transform: formState === 1 ? 'none' : 'translateY(-2px)'
                                        }
                                    }}
                                >
                                    SIGN UP
                                </Button>
                            </Box>

                            {/* Form Fields */}
                            <Box sx={{ mb: 5 }}>
                                {formState === 1 && (
                                    <TextField
                                        fullWidth
                                        label="Full Name *"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        sx={{ mb: 3 }}
                                        InputProps={{
                                            startAdornment: <PersonIcon sx={{ mr: 1.5, color: '#667eea' }} />,
                                            style: { 
                                                borderRadius: '12px',
                                                fontSize: '1rem'
                                            }
                                        }}
                                        InputLabelProps={{
                                            style: { color: '#64748b' }
                                        }}
                                    />
                                )}
                                <TextField
                                    fullWidth
                                    label="Username *"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    sx={{ mb: 3 }}
                                    InputProps={{
                                        startAdornment: <PersonIcon sx={{ mr: 1.5, color: '#667eea' }} />,
                                        style: { 
                                            borderRadius: '12px',
                                            fontSize: '1rem'
                                        }
                                    }}
                                    InputLabelProps={{
                                        style: { color: '#64748b' }
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    label="Password *"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    sx={{ mb: 3 }}
                                    InputProps={{
                                        startAdornment: <LockIcon sx={{ mr: 1.5, color: '#667eea' }} />,
                                        style: { 
                                            borderRadius: '12px',
                                            fontSize: '1rem'
                                        }
                                    }}
                                    InputLabelProps={{
                                        style: { color: '#64748b' }
                                    }}
                                />
                            </Box>

                            {/* Submit Button */}
                            <Button
                                fullWidth
                                variant="contained"
                                onClick={handleAuth}
                                sx={{
                                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                                    py: 2.5,
                                    borderRadius: '15px',
                                    fontSize: '1.1rem',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        background: 'linear-gradient(45deg, #764ba2, #667eea)',
                                        transform: 'translateY(-3px)',
                                        boxShadow: '0 12px 35px rgba(102, 126, 234, 0.4)'
                                    }
                                }}
                            >
                                {formState === 0 ? 'LOGIN' : 'REGISTER'}
                            </Button>

                            {/* Error Message */}
                            {error && (
                                <Typography variant="body2" sx={{ 
                                    color: '#ef4444', 
                                    mt: 3, 
                                    textAlign: 'center',
                                    background: 'rgba(239, 68, 68, 0.1)',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(239, 68, 68, 0.2)'
                                }}>
                                    {error}
                                </Typography>
                            )}
                        </Box>
                    </Grid>

                    {/* Right Panel - Visual */}
                    <Grid item xs={12} md={7}>
                        <Box sx={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            height: '100%',
                            minHeight: '600px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Animated background pattern */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundImage: `
                                    radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
                                    radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                                    radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.12) 0%, transparent 50%)
                                `,
                                animation: 'pulse 6s ease-in-out infinite'
                            }} />
                            
                            {/* Main content */}
                            <Box sx={{ 
                                textAlign: 'center', 
                                color: 'white', 
                                position: 'relative', 
                                zIndex: 2,
                                maxWidth: '500px',
                                mx: 'auto',
                                px: 3
                            }}>
                                <Box sx={{
                                    width: '150px',
                                    height: '150px',
                                    background: 'rgba(255, 255, 255, 0.2)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mx: 'auto',
                                    mb: 4,
                                    backdropFilter: 'blur(10px)',
                                    border: '2px solid rgba(255, 255, 255, 0.3)',
                                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                                    animation: 'float 6s ease-in-out infinite'
                                }}>
                                    <VideoCallIcon sx={{ fontSize: 80, color: 'white' }} />
                                </Box>
                                <Typography variant="h2" sx={{ 
                                    fontWeight: 'bold', 
                                    mb: 3,
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                                    fontSize: { xs: '2rem', md: '3rem' }
                                }}>
                                    Welcome to ConvoCam
                                </Typography>
                                <Typography variant="h6" sx={{ 
                                    opacity: 0.95,
                                    maxWidth: 450,
                                    mx: 'auto',
                                    lineHeight: 1.8,
                                    fontSize: '1.2rem',
                                    mb: 4
                                }}>
                                    Experience the future of video communication with crystal-clear quality and seamless collaboration.
                                </Typography>
                                
                                {/* Feature highlights */}
                                <Box sx={{ 
                                    display: 'flex', 
                                    justifyContent: 'center', 
                                    gap: 3, 
                                    flexWrap: 'wrap',
                                    maxWidth: '400px',
                                    mx: 'auto'
                                }}>
                                    <Box sx={{
                                        background: 'rgba(255, 255, 255, 0.15)',
                                        padding: '15px 25px',
                                        borderRadius: '25px',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)'
                                    }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                            🔒 Secure & Private
                                        </Typography>
                                    </Box>
                                    <Box sx={{
                                        background: 'rgba(255, 255, 255, 0.15)',
                                        padding: '15px 25px',
                                        borderRadius: '25px',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)'
                                    }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                            🎥 HD Quality
                                        </Typography>
                                    </Box>
                                    <Box sx={{
                                        background: 'rgba(255, 255, 255, 0.15)',
                                        padding: '15px 25px',
                                        borderRadius: '25px',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)'
                                    }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                            ⚡ Instant Setup
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>

                            {/* Floating decorative elements */}
                            <Box sx={{
                                position: 'absolute',
                                top: '15%',
                                right: '15%',
                                width: '80px',
                                height: '80px',
                                background: 'rgba(255, 255, 255, 0.2)',
                                borderRadius: '50%',
                                animation: 'pulse 4s infinite'
                            }} />
                            <Box sx={{
                                position: 'absolute',
                                bottom: '25%',
                                left: '10%',
                                width: '60px',
                                height: '60px',
                                background: 'rgba(255, 255, 255, 0.15)',
                                borderRadius: '15px',
                                animation: 'float 8s ease-in-out infinite'
                            }} />
                            <Box sx={{
                                position: 'absolute',
                                top: '60%',
                                right: '10%',
                                width: '40px',
                                height: '40px',
                                background: 'rgba(255, 255, 255, 0.1)',
                                borderRadius: '50%',
                                animation: 'pulse 5s infinite'
                            }} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Success Snackbar */}
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={() => setOpen(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert severity="success" sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                
                @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.05); opacity: 0.8; }
                }
            `}</style>
        </div>
    );
}