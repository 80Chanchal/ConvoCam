import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SecurityIcon from '@mui/icons-material/Security';
import HighQualityIcon from '@mui/icons-material/HighQuality';
import GroupIcon from '@mui/icons-material/Group';
import '../App.css';

export default function Landing() {
    const navigate = useNavigate();

    return (
        <div style={{ 
            minHeight: '100vh', 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
        }}>
            {/* Background decorative elements */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `
                    radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.4) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 40% 40%, rgba(240, 147, 251, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 60% 60%, rgba(245, 87, 108, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 10% 90%, rgba(79, 172, 254, 0.3) 0%, transparent 50%)
                `,
                zIndex: 1
            }} />
            
            {/* Floating geometric shapes */}
            <div style={{
                position: 'absolute',
                top: '10%',
                right: '10%',
                width: '120px',
                height: '120px',
                background: 'linear-gradient(45deg, rgba(102, 126, 234, 0.4), rgba(118, 75, 162, 0.3))',
                borderRadius: '50%',
                animation: 'float 6s ease-in-out infinite',
                zIndex: 2,
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
            }} />
            <div style={{
                position: 'absolute',
                top: '60%',
                left: '5%',
                width: '80px',
                height: '80px',
                background: 'linear-gradient(45deg, rgba(240, 147, 251, 0.4), rgba(245, 87, 108, 0.3))',
                borderRadius: '20px',
                animation: 'float 8s ease-in-out infinite reverse',
                zIndex: 2,
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '20%',
                width: '100px',
                height: '100px',
                background: 'linear-gradient(45deg, rgba(79, 172, 254, 0.4), rgba(102, 126, 234, 0.3))',
                borderRadius: '10px',
                transform: 'rotate(45deg)',
                animation: 'float 7s ease-in-out infinite',
                zIndex: 2,
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
            }} />

            <Container maxWidth="lg" sx={{ 
                position: 'relative', 
                zIndex: 3,
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/* Navigation */}
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    py: 3,
                    width: '100%',
                    maxWidth: '1200px'
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <VideoCallIcon sx={{ fontSize: 40, color: 'white', mr: 1 }} />
                        <Typography variant="h4" sx={{ 
                            color: 'white',
                            fontWeight: 'bold',
                            background: 'linear-gradient(45deg, #fff, #f0f0f0)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            ConvoCam
                        </Typography>
                    </Box>
                    <Button 
                        variant="outlined" 
                        onClick={() => navigate('/auth')}
                        sx={{ 
                            borderColor: 'white', 
                            color: 'white',
                            '&:hover': { 
                                borderColor: 'white', 
                                backgroundColor: 'rgba(255, 255, 255, 0.1)' 
                            }
                        }}
                    >
                        Get Started
                    </Button>
                </Box>

                {/* Hero Section */}
                <Box sx={{ 
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    py: 4
                }}>
                    <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center" justifyContent="center" sx={{ 
                        maxWidth: '1400px',
                        width: '100%'
                    }}>
                        <Grid item xs={12} md={6} className="fadeIn">
                            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                                <Typography variant="h2" sx={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    mb: 3,
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                                    lineHeight: 1.2
                                }}>
                                    Connect with Anyone, Anywhere
                                </Typography>
                                <Typography variant="h5" sx={{
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    mb: 4,
                                    lineHeight: 1.6,
                                    fontSize: { xs: '1.1rem', md: '1.3rem' }
                                }}>
                                    Experience the future of video communication with our advanced platform.
                                    Crystal-clear quality, secure connections, and seamless collaboration.
                                </Typography>
                                <Box sx={{ 
                                    display: 'flex', 
                                    gap: 2, 
                                    flexWrap: 'wrap',
                                    justifyContent: { xs: 'center', md: 'flex-start' }
                                }}>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        onClick={() => navigate('/auth')}
                                        sx={{
                                            background: 'linear-gradient(45deg, #667eea, #764ba2)',
                                            px: 4,
                                            py: 1.5,
                                            borderRadius: '50px',
                                            fontSize: '1.1rem',
                                            fontWeight: 'bold',
                                            boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
                                            '&:hover': {
                                                background: 'linear-gradient(45deg, #764ba2, #667eea)',
                                                transform: 'translateY(-3px)',
                                                boxShadow: '0 12px 35px rgba(102, 126, 234, 0.6)'
                                            }
                                        }}
                                    >
                                        Start Free Call
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        size="large"
                                        sx={{
                                            borderColor: 'white',
                                            color: 'white',
                                            px: 4,
                                            py: 1.5,
                                            borderRadius: '50px',
                                            fontSize: '1.1rem',
                                            fontWeight: 'bold',
                                            '&:hover': {
                                                borderColor: 'white',
                                                backgroundColor: 'rgba(255, 255, 255, 0.1)'
                                            }
                                        }}
                                    >
                                        Learn More
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} className="slideIn">
                            <Box sx={{
                                display: 'flex',
                                justifyContent: { xs: 'center', md: 'center' },
                                alignItems: 'center',
                                position: 'relative',
                                width: '100%',
                                height: '100%',
                                minHeight: { xs: 240, sm: 300, md: 400 }
                            }}>
                                {/* Main hero image with overlay */}
                                <Box sx={{
                                    position: 'relative',
                                    borderRadius: '25px',
                                    overflow: 'hidden',
                                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
                                    transition: 'all 0.4s ease',
                                    width: '100%',
                                    maxWidth: '650px',
                                    margin: '0 auto',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    '&:hover': {
                                        transform: 'scale(1.03) translateY(-5px)',
                                        boxShadow: '0 35px 70px rgba(0, 0, 0, 0.5)'
                                    }
                                }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                                        alt="Modern Video Conferencing"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            display: 'block',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    {/* Enhanced overlay with gradient */}
                                    <Box sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.4), rgba(118, 75, 162, 0.4), rgba(240, 147, 251, 0.3), rgba(245, 87, 108, 0.3))',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backdropFilter: 'blur(2px)'
                                    }}>
                                        <Box sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: 2
                                    }}>
                                        <VideoCallIcon sx={{ 
                                                fontSize: 100, 
                                            color: 'white',
                                                filter: 'drop-shadow(3px 3px 6px rgba(0,0,0,0.4))',
                                                animation: 'pulse 3s ease-in-out infinite'
                                            }} />
                                            <Typography variant="h6" sx={{
                                                color: 'white',
                                                fontWeight: 'bold',
                                                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                                                textAlign: 'center'
                                            }}>
                                                HD Video Calls
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                
                                {/* Enhanced floating elements around the image */}
                                <Box sx={{
                                    position: 'absolute',
                                    top: '-30px',
                                    right: '-30px',
                                    width: '80px',
                                    height: '80px',
                                    background: 'linear-gradient(45deg, rgba(102, 126, 234, 0.4), rgba(118, 75, 162, 0.3))',
                                    borderRadius: '50%',
                                    animation: 'pulse 3s infinite',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.3)'
                                }} />
                                <Box sx={{
                                    position: 'absolute',
                                    bottom: '-25px',
                                    left: '-25px',
                                    width: '60px',
                                    height: '60px',
                                    background: 'linear-gradient(45deg, rgba(240, 147, 251, 0.4), rgba(245, 87, 108, 0.3))',
                                    borderRadius: '15px',
                                    animation: 'float 5s ease-in-out infinite',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.25)'
                                }} />
                                <Box sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    right: '-40px',
                                    width: '50px',
                                    height: '50px',
                                    background: 'linear-gradient(45deg, rgba(79, 172, 254, 0.4), rgba(102, 126, 234, 0.3))',
                                    borderRadius: '10px',
                                    animation: 'float 4s ease-in-out infinite reverse',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.25)'
                                }} />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                {/* Features Section */}
                <Box sx={{ 
                    mt: 8, 
                    mb: 6,
                    textAlign: 'center'
                }}>
                    <Box sx={{
                        position: 'relative',
                        mb: 8
                    }}>
                        {/* Decorative background elements */}
                        <Box sx={{
                            position: 'absolute',
                            top: -50,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '200px',
                            height: '200px',
                            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                            borderRadius: '50%',
                            zIndex: 0
                        }} />
                        <Box sx={{
                            position: 'absolute',
                            top: 100,
                            right: '10%',
                            width: '150px',
                            height: '150px',
                            background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
                            borderRadius: '50%',
                            zIndex: 0
                        }} />
                        <Box sx={{
                            position: 'absolute',
                            bottom: -50,
                            left: '15%',
                            width: '120px',
                            height: '120px',
                            background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
                            borderRadius: '50%',
                            zIndex: 0
                        }} />
                        
                    <Typography variant="h3" sx={{
                        textAlign: 'center',
                        color: 'white',
                            mb: 2,
                        fontWeight: 'bold',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                            fontSize: { xs: '2rem', md: '2.5rem' },
                            position: 'relative',
                            zIndex: 1
                    }}>
                        Why Choose ConvoCam?
                    </Typography>
                        
                        <Typography variant="body1" sx={{
                            textAlign: 'center',
                            color: 'rgba(255, 255, 255, 0.8)',
                            mb: 6,
                            maxWidth: '600px',
                            mx: 'auto',
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            position: 'relative',
                            zIndex: 1
                        }}>
                            Experience the next generation of video communication with cutting-edge features designed for modern collaboration
                        </Typography>
                    </Box>
                    
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mb: 6
                    }}>
                    <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ 
                        maxWidth: '1200px',
                        px: { xs: 2, sm: 0 },
                        justifyContent: 'center',
                        alignItems: 'stretch'
                    }}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card sx={{
                                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
                                backdropFilter: 'blur(15px)',
                                borderRadius: '25px',
                                textAlign: 'center',
                                p: { xs: 2, sm: 3 },
                                height: { xs: 280, sm: 300, md: 320 },
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                '&:hover': {
                                    transform: 'translateY(-15px) scale(1.02)',
                                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
                                    '& .icon-glow': {
                                        boxShadow: '0 0 30px rgba(102, 126, 234, 0.6)',
                                        transform: 'scale(1.1)'
                                    },
                                    '& .card-shine': {
                                        transform: 'translateX(100%)'
                                    }
                                }
                            }}>
                                {/* Shine effect */}
                                <Box className="card-shine" sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: '-100%',
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                                    transition: 'transform 0.6s ease',
                                    zIndex: 1
                                }} />
                                
                                <CardContent sx={{ 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    height: '100%',
                                    justifyContent: 'space-between',
                                    position: 'relative',
                                    zIndex: 2
                                }}>
                                    <Box>
                                        <Box className="icon-glow" sx={{
                                            width: '90px',
                                            height: '90px',
                                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mx: 'auto',
                                            mb: 3,
                                            position: 'relative',
                                            transition: 'all 0.3s ease',
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: '-5px',
                                                left: '-5px',
                                                right: '-5px',
                                                bottom: '-5px',
                                                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                                                borderRadius: '50%',
                                                zIndex: -1,
                                                opacity: 0.3,
                                                filter: 'blur(10px)'
                                            }
                                        }}>
                                            <HighQualityIcon sx={{ fontSize: 45, color: 'white' }} />
                                        </Box>
                                        <Typography variant="h6" sx={{ 
                                            fontWeight: 'bold', 
                                            mb: 2,
                                            color: '#1f2937',
                                            fontSize: '1.25rem'
                                        }}>
                                            HD Quality
                                        </Typography>
                                        <Typography variant="body2" sx={{ 
                                            color: '#374151',
                                            lineHeight: 1.6,
                                            fontSize: '0.95rem'
                                        }}>
                                            Crystal clear video and audio for the best communication experience
                                        </Typography>
                                    </Box>
                                    
                                    {/* Feature badge */}
                                    <Box sx={{
                                        mt: 2,
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}>
                                        <Box sx={{
                                            background: 'linear-gradient(135deg, #667eea, #764ba2)',
                                            color: 'white',
                                            px: 2,
                                            py: 0.5,
                                            borderRadius: '15px',
                                            fontSize: '0.75rem',
                                            fontWeight: 'bold',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px'
                                        }}>
                                            Premium
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        
                        <Grid item xs={12} sm={6} md={3}>
                            <Card sx={{
                                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
                                backdropFilter: 'blur(15px)',
                                borderRadius: '25px',
                                textAlign: 'center',
                                p: { xs: 2, sm: 3 },
                                height: { xs: 280, sm: 300, md: 320 },
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                '&:hover': {
                                    transform: 'translateY(-15px) scale(1.02)',
                                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
                                    '& .icon-glow': {
                                        boxShadow: '0 0 30px rgba(255, 107, 107, 0.6)',
                                        transform: 'scale(1.1)'
                                    },
                                    '& .card-shine': {
                                        transform: 'translateX(100%)'
                                    }
                                }
                            }}>
                                {/* Shine effect */}
                                <Box className="card-shine" sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: '-100%',
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                                    transition: 'transform 0.6s ease',
                                    zIndex: 1
                                }} />
                                
                                <CardContent sx={{ 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    height: '100%',
                                    justifyContent: 'space-between',
                                    position: 'relative',
                                    zIndex: 2
                                }}>
                                    <Box>
                                        <Box className="icon-glow" sx={{
                                            width: '90px',
                                            height: '90px',
                                            background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mx: 'auto',
                                            mb: 3,
                                            position: 'relative',
                                            transition: 'all 0.3s ease',
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: '-5px',
                                                left: '-5px',
                                                right: '-5px',
                                                bottom: '-5px',
                                                background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
                                                borderRadius: '50%',
                                                zIndex: -1,
                                                opacity: 0.3,
                                                filter: 'blur(10px)'
                                            }
                                        }}>
                                            <SecurityIcon sx={{ fontSize: 45, color: 'white' }} />
                                        </Box>
                                        <Typography variant="h6" sx={{ 
                                            fontWeight: 'bold', 
                                            mb: 2,
                                            color: '#1f2937',
                                            fontSize: '1.25rem'
                                        }}>
                                            Secure & Private
                                        </Typography>
                                        <Typography variant="body2" sx={{ 
                                            color: '#374151',
                                            lineHeight: 1.6,
                                            fontSize: '0.95rem'
                                        }}>
                                            End-to-end encryption ensures your conversations stay private
                                        </Typography>
                                    </Box>
                                    
                                    {/* Feature badge */}
                                    <Box sx={{
                                        mt: 2,
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}>
                                        <Box sx={{
                                            background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
                                            color: 'white',
                                            px: 2,
                                            py: 0.5,
                                            borderRadius: '15px',
                                            fontSize: '0.75rem',
                                            fontWeight: 'bold',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px'
                                        }}>
                                            Encrypted
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        
                        <Grid item xs={12} sm={6} md={3}>
                            <Card sx={{
                                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
                                backdropFilter: 'blur(15px)',
                                borderRadius: '25px',
                                textAlign: 'center',
                                p: { xs: 2, sm: 3 },
                                height: { xs: 280, sm: 300, md: 320 },
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                '&:hover': {
                                    transform: 'translateY(-15px) scale(1.02)',
                                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
                                    '& .icon-glow': {
                                        boxShadow: '0 0 30px rgba(78, 205, 196, 0.6)',
                                        transform: 'scale(1.1)'
                                    },
                                    '& .card-shine': {
                                        transform: 'translateX(100%)'
                                    }
                                }
                            }}>
                                {/* Shine effect */}
                                <Box className="card-shine" sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: '-100%',
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                                    transition: 'transform 0.6s ease',
                                    zIndex: 1
                                }} />
                                
                                <CardContent sx={{ 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    height: '100%',
                                    justifyContent: 'space-between',
                                    position: 'relative',
                                    zIndex: 2
                                }}>
                                    <Box>
                                        <Box className="icon-glow" sx={{
                                            width: '90px',
                                            height: '90px',
                                            background: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mx: 'auto',
                                            mb: 3,
                                            position: 'relative',
                                            transition: 'all 0.3s ease',
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: '-5px',
                                                left: '-5px',
                                                right: '-5px',
                                                bottom: '-5px',
                                                background: 'linear-gradient(135deg, #4ecdc4, #44a08d)',
                                                borderRadius: '50%',
                                                zIndex: -1,
                                                opacity: 0.3,
                                                filter: 'blur(10px)'
                                            }
                                        }}>
                                            <GroupIcon sx={{ fontSize: 45, color: 'white' }} />
                                        </Box>
                                        <Typography variant="h6" sx={{ 
                                            fontWeight: 'bold', 
                                            mb: 2,
                                            color: '#1f2937',
                                            fontSize: '1.25rem'
                                        }}>
                                            Group Calls
                                        </Typography>
                                        <Typography variant="body2" sx={{ 
                                            color: '#374151',
                                            lineHeight: 1.6,
                                            fontSize: '0.95rem'
                                        }}>
                                            Connect with multiple people simultaneously with ease
                                        </Typography>
                                    </Box>
                                    
                                    {/* Feature badge */}
                                    <Box sx={{
                                        mt: 2,
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}>
                                        <Box sx={{
                                            background: 'linear-gradient(135deg, #4ecdc4, #44a08d)',
                                            color: 'white',
                                            px: 2,
                                            py: 0.5,
                                            borderRadius: '15px',
                                            fontSize: '0.75rem',
                                            fontWeight: 'bold',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px'
                                        }}>
                                            Multi-user
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        
                        <Grid item xs={12} sm={6} md={3}>
                            <Card sx={{
                                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
                                backdropFilter: 'blur(15px)',
                                borderRadius: '25px',
                                textAlign: 'center',
                                p: 3,
                                height: '320px',
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                '&:hover': {
                                    transform: 'translateY(-15px) scale(1.02)',
                                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
                                    '& .icon-glow': {
                                        boxShadow: '0 0 30px rgba(168, 237, 234, 0.6)',
                                        transform: 'scale(1.1)'
                                    },
                                    '& .card-shine': {
                                        transform: 'translateX(100%)'
                                    }
                                }
                            }}>
                                {/* Shine effect */}
                                <Box className="card-shine" sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: '-100%',
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                                    transition: 'transform 0.6s ease',
                                    zIndex: 1
                                }} />
                                
                                <CardContent sx={{ 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    height: '100%',
                                    justifyContent: 'space-between',
                                    position: 'relative',
                                    zIndex: 2
                                }}>
                                    <Box>
                                        <Box className="icon-glow" sx={{
                                            width: '90px',
                                            height: '90px',
                                            background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mx: 'auto',
                                            mb: 3,
                                            position: 'relative',
                                            transition: 'all 0.3s ease',
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: '-5px',
                                                left: '-5px',
                                                right: '-5px',
                                                bottom: '-5px',
                                                background: 'linear-gradient(135deg, #a8edea, #fed6e3)',
                                                borderRadius: '50%',
                                                zIndex: -1,
                                                opacity: 0.3,
                                                filter: 'blur(10px)'
                                            }
                                        }}>
                                            <VideoCallIcon sx={{ fontSize: 45, color: '#667eea' }} />
                                        </Box>
                                        <Typography variant="h6" sx={{ 
                                            fontWeight: 'bold', 
                                            mb: 2,
                                            color: '#1f2937',
                                            fontSize: '1.25rem'
                                        }}>
                                            Easy Setup
                                        </Typography>
                                        <Typography variant="body2" sx={{ 
                                            color: '#374151',
                                            lineHeight: 1.6,
                                            fontSize: '0.95rem'
                                        }}>
                                            Get started in seconds with our intuitive interface
                                        </Typography>
                                    </Box>
                                    
                                    {/* Feature badge */}
                                    <Box sx={{
                                        mt: 2,
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}>
                                        <Box sx={{
                                            background: 'linear-gradient(135deg, #a8edea, #fed6e3)',
                                            color: '#1f2937',
                                            px: 2,
                                            py: 0.5,
                                            borderRadius: '15px',
                                            fontSize: '0.75rem',
                                            fontWeight: 'bold',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px'
                                        }}>
                                            Instant
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
                </Box>

                {/* Call to Action */}
                <Box sx={{
                    textAlign: 'center',
                    py: 6,
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    mb: 4,
                    maxWidth: '800px',
                    mx: 'auto',
                    width: '100%'
                }}>
                    <Typography variant="h4" sx={{
                        color: 'white',
                        mb: 3,
                        fontWeight: 'bold'
                    }}>
                        Ready to Start Your First Call?
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={() => navigate('/auth')}
                        sx={{
                            background: 'linear-gradient(45deg, #667eea, #764ba2)',
                            px: 6,
                            py: 2,
                            borderRadius: '50px',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            '&:hover': {
                                background: 'linear-gradient(45deg, #764ba2, #667eea)',
                                transform: 'translateY(-3px)',
                                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
                            }
                        }}
                    >
                        Join ConvoCam Now
                    </Button>
                </Box>
            </Container>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                
                @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.1); opacity: 0.8; }
                }
                
                .fadeIn {
                    animation: fadeIn 1s ease-in;
                }
                
                .slideIn {
                    animation: slideIn 1s ease-out;
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes slideIn {
                    from { opacity: 0; transform: translateX(50px); }
                    to { opacity: 1; transform: translateX(0); }
                }
            `}</style>
        </div>
    );
}