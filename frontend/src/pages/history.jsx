import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { withAuth } from '../utils/withAuth'
import { useNavigate } from 'react-router-dom';
import { 
    Container, 
    Typography, 
    Button, 
    Box, 
    Card, 
    CardContent,
    Grid,
    Chip
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HistoryIcon from '@mui/icons-material/History';
import '../App.css';

function History() {
    const { user } = useAuth();
    const [meetings, setMeetings] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Demo data for history
        setMeetings([
            {
                meetingCode: 'DEMO123',
                date: new Date().toISOString(),
                duration: '45 minutes',
                participants: 3,
                status: 'completed'
            },
            {
                meetingCode: 'TEST456',
                date: new Date(Date.now() - 86400000).toISOString(),
                duration: '1 hour 20 minutes',
                participants: 5,
                status: 'completed'
            },
            {
                meetingCode: 'MEET789',
                date: new Date(Date.now() - 172800000).toISOString(),
                duration: '30 minutes',
                participants: 2,
                status: 'completed'
            }
        ]);
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'completed':
                return 'success';
            case 'ongoing':
                return 'warning';
            case 'cancelled':
                return 'error';
            default:
                return 'default';
        }
    };

    return (
        <div style={{ 
            minHeight: '100vh', 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
                    radial-gradient(circle at 25% 25%, rgba(120, 119, 198, 0.2) 0%, transparent 50%),
                    radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 50% 50%, rgba(120, 119, 198, 0.15) 0%, transparent 50%)
                `,
                zIndex: 1
            }} />
            
            {/* Floating geometric shapes */}
            <div style={{
                position: 'absolute',
                top: '15%',
                right: '15%',
                width: '80px',
                height: '80px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                animation: 'float 6s ease-in-out infinite',
                zIndex: 2
            }} />
            <div style={{
                position: 'absolute',
                top: '70%',
                left: '10%',
                width: '50px',
                height: '50px',
                background: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '15px',
                animation: 'float 8s ease-in-out infinite reverse',
                zIndex: 2
            }} />
            <div style={{
                position: 'absolute',
                bottom: '30%',
                right: '10%',
                width: '70px',
                height: '70px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                transform: 'rotate(45deg)',
                animation: 'float 7s ease-in-out infinite',
                zIndex: 2
            }} />

            <Container maxWidth="lg" sx={{ 
                position: 'relative', 
                zIndex: 3,
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
            }}>
                {/* Header */}
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    py: 3,
                    mb: 4,
                    width: '100%'
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <HistoryIcon sx={{ fontSize: 40, color: 'white', mr: 1 }} />
                        <Typography variant="h4" sx={{ 
                            color: 'white',
                            fontWeight: 'bold',
                            background: 'linear-gradient(45deg, #fff, #f0f0f0)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            ConvoCam History
                        </Typography>
                    </Box>
                    <Button
                        variant="outlined"
                        startIcon={<ArrowBackIcon />}
                        onClick={() => navigate('/home')}
                        sx={{
                            borderColor: 'white',
                            color: 'white',
                            '&:hover': {
                                borderColor: 'white',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)'
                            }
                        }}
                    >
                        Back to Home
                    </Button>
                </Box>

                {/* Welcome Section */}
                <Box sx={{ 
                    textAlign: 'center', 
                    mb: 6,
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    padding: '3rem',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    maxWidth: '800px',
                    mx: 'auto',
                    width: '100%'
                }}>
                    <Typography variant="h3" sx={{
                        color: 'white',
                        mb: 2,
                        fontWeight: 'bold',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                        fontSize: { xs: '2rem', md: '2.5rem' }
                    }}>
                        Your Meeting History
                    </Typography>
                    <Typography variant="h6" sx={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        mb: 4,
                        fontSize: { xs: '1rem', md: '1.2rem' }
                    }}>
                        Track all your past video calls and meetings in one place.
                    </Typography>
                </Box>

                {/* Meetings Grid */}
                <Box sx={{ 
                    flex: 1,
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    mb: 6
                }}>
                    <Grid container spacing={3} sx={{ 
                        maxWidth: '1000px',
                        mx: 'auto',
                        width: '100%'
                    }}>
                        {meetings.map((meeting, index) => (
                            <Grid item xs={12} md={6} lg={4} key={index}>
                                <Card sx={{
                                    background: 'rgba(255, 255, 255, 0.95)',
                                    backdropFilter: 'blur(10px)',
                                    borderRadius: '20px',
                                    height: '100%',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
                                    }
                                }}>
                                    <CardContent sx={{ p: 3 }}>
                                        <Box sx={{ 
                                            display: 'flex', 
                                            justifyContent: 'space-between', 
                                            alignItems: 'flex-start',
                                            mb: 2
                                        }}>
                                            <Typography variant="h6" sx={{ 
                                                fontWeight: 'bold',
                                                color: '#667eea'
                                            }}>
                                                {meeting.meetingCode}
                                            </Typography>
                                            <Chip 
                                                label={meeting.status} 
                                                color={getStatusColor(meeting.status)}
                                                size="small"
                                                sx={{ textTransform: 'capitalize' }}
                                            />
                                        </Box>
                                        
                                        <Box sx={{ mb: 2 }}>
                                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                                📅 {formatDate(meeting.date)}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                                ⏱️ {meeting.duration}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                👥 {meeting.participants} participants
                                            </Typography>
                                        </Box>
                                        
                                        <Button
                                            variant="outlined"
                                            fullWidth
                                            onClick={() => navigate(`/${meeting.meetingCode}`)}
                                            sx={{
                                                borderColor: '#667eea',
                                                color: '#667eea',
                                                '&:hover': {
                                                    borderColor: '#667eea',
                                                    backgroundColor: 'rgba(102, 126, 234, 0.1)'
                                                }
                                            }}
                                        >
                                            Join Again
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Empty State */}
                {meetings.length === 0 && (
                    <Box sx={{ 
                        textAlign: 'center',
                        py: 8,
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '20px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        maxWidth: '600px',
                        mx: 'auto',
                        width: '100%'
                    }}>
                        <HistoryIcon sx={{ 
                            fontSize: 80, 
                            color: 'rgba(255, 255, 255, 0.5)',
                            mb: 3
                        }} />
                        <Typography variant="h5" sx={{
                            color: 'white',
                            mb: 2,
                            fontWeight: 'bold'
                        }}>
                            No Meetings Yet
                        </Typography>
                        <Typography variant="body1" sx={{
                            color: 'rgba(255, 255, 255, 0.8)',
                            mb: 4
                        }}>
                            Start your first video call to see it appear here.
                        </Typography>
                        <Button
                            variant="contained"
                            onClick={() => navigate('/home')}
                            sx={{
                                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                                px: 4,
                                py: 1.5,
                                borderRadius: '50px',
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                '&:hover': {
                                    background: 'linear-gradient(45deg, #764ba2, #667eea)',
                                    transform: 'translateY(-2px)'
                                }
                            }}
                        >
                            Create Meeting
                        </Button>
                    </Box>
                )}
            </Container>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
            `}</style>
        </div>
    );
}

export default withAuth(History);