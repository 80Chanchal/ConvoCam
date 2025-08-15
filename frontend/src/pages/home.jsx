import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { withAuth } from '../utils/withAuth';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    Typography,
    Button,
    TextField,
    Box,
    Card,
    CardContent,
    Grid,
    IconButton,
    Snackbar,
    Alert,
    Paper
} from '@mui/material';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import GroupIcon from '@mui/icons-material/Group';
import SecurityIcon from '@mui/icons-material/Security';
import HighQualityIcon from '@mui/icons-material/HighQuality';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';
import '../App.css';

function Home() {
    const { user, logout } = useAuth();
    const [meetingCode, setMeetingCode] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [meetingLink, setMeetingLink] = useState('');
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
    const navigate = useNavigate();

    const generateMeetingCode = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < 6; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    };

    const createMeeting = () => {
        const code = generateMeetingCode();
        const link = `${window.location.origin}/${code}`;
        setMeetingLink(link);
        setShowModal(true);
    };

    const copyMeetingLink = async () => {
        try {
            await navigator.clipboard.writeText(meetingLink);
            setSnackbar({ open: true, message: 'Meeting link copied to clipboard!', severity: 'success' });
        } catch (err) {
            setSnackbar({ open: true, message: 'Failed to copy link', severity: 'error' });
        }
    };

    const handleJoinVideoCall = () => {
        if (meetingCode.trim()) {
            let code = meetingCode.trim();
            
            // Handle full URLs - extract meeting code from URL
            if (code.includes('http')) {
                // Extract meeting code from full URL
                try {
                    const url = new URL(code);
                    const pathParts = url.pathname.split('/').filter(part => part.length > 0);
                    code = pathParts[pathParts.length - 1]; // Get the last part as meeting code
                } catch (error) {
                    console.error('Invalid URL format:', error);
                    setSnackbar({ 
                        open: true, 
                        message: 'Invalid meeting link format', 
                        severity: 'error' 
                    });
                    return;
                }
            } else if (code.includes('/')) {
                // Handle relative URLs or paths
                const urlParts = code.split('/').filter(part => part.length > 0);
                code = urlParts[urlParts.length - 1]; // Get the last part as meeting code
            }
            
            // Convert to uppercase and remove any extra spaces
            code = code.toUpperCase().trim();
            
            // Validate meeting code format (6 characters, alphanumeric)
            if (!/^[A-Z0-9]{6}$/.test(code)) {
                setSnackbar({ 
                    open: true, 
                    message: 'Invalid meeting code format. Please enter a 6-character code.', 
                    severity: 'error' 
                });
                return;
            }
            
            console.log("Joining meeting with code:", code);
            
            // Create the meeting URL
            const meetingUrl = `${window.location.origin}/${code}`;
            
            // Open the meeting in a new tab/window
            window.open(meetingUrl, '_blank');
            
            // Clear the input after joining
            setMeetingCode('');
            
        } else {
            setSnackbar({ 
                open: true, 
                message: 'Please enter a meeting code', 
                severity: 'warning' 
            });
        }
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Added to center the content horizontally
            justifyContent: 'center' // Added to center the content vertically
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
                width: '100%',
                p: 2 // Added padding for better mobile spacing
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
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                            variant="outlined"
                            startIcon={<HistoryIcon />}
                            onClick={() => navigate('/history')}
                            sx={{
                                borderColor: 'white',
                                color: 'white',
                                '&:hover': {
                                    borderColor: 'white',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                                }
                            }}
                        >
                            History
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<LogoutIcon />}
                            onClick={handleLogout}
                            sx={{
                                borderColor: 'white',
                                color: 'white',
                                '&:hover': {
                                    borderColor: 'white',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                                }
                            }}
                        >
                            Logout
                        </Button>
                    </Box>
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
                        Welcome back, {user?.name || 'User'}! 👋
                    </Typography>
                    <Typography variant="h6" sx={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        mb: 4,
                        fontSize: { xs: '1rem', md: '1.2rem' }
                    }}>
                        Ready to connect with your team? Create a new meeting or join an existing one.
                    </Typography>
                </Box>

                {/* Main Actions */}
                <Box sx={{
                    mb: 6,
                    width: '100%'
                }}>
                    <Grid container spacing={4} sx={{
                        maxWidth: '1000px',
                        mx: 'auto',
                        width: '100%',
                        justifyContent: 'center' // Added to center grid items
                    }}>
                        <Grid item xs={12} md={6}>
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
                                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                                    <Box sx={{
                                        width: '100px',
                                        height: '100px',
                                        background: 'linear-gradient(45deg, #667eea, #764ba2)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mx: 'auto',
                                        mb: 3
                                    }}>
                                        <VideoCallIcon sx={{ fontSize: 50, color: 'white' }} />
                                    </Box>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                                        Create New Meeting
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                                        Start a new video call and invite others to join. Generate a unique meeting code instantly.
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        onClick={createMeeting}
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
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={6}>
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
                                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                                    <Box sx={{
                                        width: '100px',
                                        height: '100px',
                                        background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mx: 'auto',
                                        mb: 3
                                    }}>
                                        <GroupIcon sx={{ fontSize: 50, color: 'white' }} />
                                    </Box>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                                        Join Meeting
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                                        Enter a meeting code to join an existing video call session.
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        label="Meeting Code or Link"
                                        value={meetingCode}
                                        onChange={(e) => setMeetingCode(e.target.value)}
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter' && meetingCode.trim()) {
                                                handleJoinVideoCall();
                                            }
                                        }}
                                        sx={{ mb: 3 }}
                                        placeholder="Enter meeting code or paste full meeting link"
                                        helperText="You can enter just the code (e.g., ABC123) or paste the full meeting link"
                                    />
                                    <Button
                                        variant="contained"
                                        size="large"
                                        onClick={handleJoinVideoCall}
                                        disabled={!meetingCode.trim()}
                                        sx={{
                                            background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
                                            px: 4,
                                            py: 1.5,
                                            borderRadius: '50px',
                                            fontSize: '1.1rem',
                                            fontWeight: 'bold',
                                            '&:hover': {
                                                background: 'linear-gradient(45deg, #ee5a24, #ff6b6b)',
                                                transform: 'translateY(-2px)'
                                            }
                                        }}
                                    >
                                        Join Meeting
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>

                {/* Features Grid */}
                <Box sx={{
                    textAlign: 'center',
                    mb: 6,
                    width: '100%'
                }}>
                    <Grid container spacing={3} sx={{
                        maxWidth: '1000px',
                        mx: 'auto',
                        justifyContent: 'center' // Added to center grid items
                    }}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper sx={{
                                background: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '15px',
                                p: 3,
                                textAlign: 'center',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                transition: 'transform 0.3s ease',
                                height: '100%',
                                '&:hover': {
                                    transform: 'translateY(-5px)'
                                }
                            }}>
                                <HighQualityIcon sx={{ fontSize: 40, color: 'white', mb: 2 }} />
                                <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
                                    HD Quality
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    Crystal clear video and audio
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper sx={{
                                background: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '15px',
                                p: 3,
                                textAlign: 'center',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                transition: 'transform 0.3s ease',
                                height: '100%',
                                '&:hover': {
                                    transform: 'translateY(-5px)'
                                }
                            }}>
                                <SecurityIcon sx={{ fontSize: 40, color: 'white', mb: 2 }} />
                                <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
                                    Secure
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    End-to-end encryption
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper sx={{
                                background: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '15px',
                                p: 3,
                                textAlign: 'center',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                transition: 'transform 0.3s ease',
                                height: '100%',
                                '&:hover': {
                                    transform: 'translateY(-5px)'
                                }
                            }}>
                                <GroupIcon sx={{ fontSize: 40, color: 'white', mb: 2 }} />
                                <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
                                    Group Calls
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    Multiple participants
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper sx={{
                                background: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '15px',
                                p: 3,
                                textAlign: 'center',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                transition: 'transform 0.3s ease',
                                height: '100%',
                                '&:hover': {
                                    transform: 'translateY(-5px)'
                                }
                            }}>
                                <VideoCallIcon sx={{ fontSize: 40, color: 'white', mb: 2 }} />
                                <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
                                    Instant
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    No downloads required
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            {/* Meeting Link Modal */}
            {showModal && (
                <Box sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.7)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000
                }}>
                    <Card sx={{
                        maxWidth: 500,
                        width: '90%',
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '20px',
                        p: 4
                    }}>
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
                                Meeting Created Successfully! 🎉
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                                Share this link with others to invite them to your meeting:
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                mb: 3,
                                p: 2,
                                background: '#f5f5f5',
                                borderRadius: '10px',
                                border: '1px solid #e0e0e0'
                            }}>
                                <Typography variant="body2" sx={{ flex: 1, wordBreak: 'break-all' }}>
                                    {meetingLink}
                                </Typography>
                                <IconButton onClick={copyMeetingLink} size="small">
                                    <ContentCopyIcon />
                                </IconButton>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                                <Button
                                    variant="contained"
                                    onClick={() => navigate(meetingLink)}
                                    sx={{
                                        background: 'linear-gradient(45deg, #667eea, #764ba2)',
                                        '&:hover': {
                                            background: 'linear-gradient(45deg, #764ba2, #667eea)'
                                        }
                                    }}
                                >
                                    Join Meeting
                                </Button>
                                <Button
                                    variant="outlined"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            )}

            {/* Snackbar */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={3000}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
            >
                <Alert severity={snackbar.severity} sx={{ width: '100%' }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
            `}</style>
        </div>
    );
}

export default withAuth(Home);