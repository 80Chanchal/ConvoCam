import React, { useState, useEffect, useRef } from 'react';
import { 
    Box, 
    TextField, 
    IconButton, 
    Typography, 
    Paper, 
    Avatar,
    Divider,
    Chip,
    Badge,
    Tooltip,
    Fade,
    Slide,
    Zoom,
    Grow
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CloseIcon from '@mui/icons-material/Close';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import '../styles/chatComponent.module.css';

const ChatComponent = ({ isOpen, onClose, meetingCode, participants = [] }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const messagesEndRef = useRef(null);
    const messagesContainerRef = useRef(null);
    const fileInputRef = useRef(null);

    // Enhanced demo messages with more variety
    useEffect(() => {
        setMessages([
            {
                id: 1,
                sender: 'John Doe',
                message: 'Hello everyone! 👋 How is the meeting going?',
                timestamp: new Date(Date.now() - 300000),
                type: 'text',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
                status: 'sent'
            },
            {
                id: 2,
                sender: 'Jane Smith',
                message: 'Hi John! Everything is going great. The presentation looks amazing! 🎉',
                timestamp: new Date(Date.now() - 240000),
                type: 'text',
                avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
                status: 'read'
            },
            {
                id: 3,
                sender: 'You',
                message: 'Thanks everyone! I\'m glad you like it. Should we move to the Q&A session?',
                timestamp: new Date(Date.now() - 180000),
                type: 'text',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
                isOwn: true,
                status: 'sent'
            },
            {
                id: 4,
                sender: 'Mike Johnson',
                message: '📊 presentation-data.pdf',
                timestamp: new Date(Date.now() - 120000),
                type: 'file',
                fileName: 'presentation-data.pdf',
                fileSize: 2048576,
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
                status: 'sent'
            },
            {
                id: 5,
                sender: 'Sarah Wilson',
                message: 'Perfect! I have some questions about the implementation. Can we discuss it? 🤔',
                timestamp: new Date(Date.now() - 60000),
                type: 'text',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
                status: 'sent'
            }
        ]);
    }, []);

    const scrollToBottom = () => {
        setTimeout(() => {
            if (messagesContainerRef.current) {
                messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
            } else if (messagesEndRef.current) {
                messagesEndRef.current.scrollIntoView({ 
                    behavior: "smooth",
                    block: "end",
                    inline: "nearest"
                });
            }
        }, 150);
    };

    useEffect(() => {
        console.log('Messages updated:', messages);
        // Only scroll to bottom if there are messages
        if (messages.length > 0) {
        scrollToBottom();
        }
    }, [messages]);

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            console.log('Sending message:', newMessage);
            const message = {
                id: Date.now(),
                sender: 'You',
                message: newMessage,
                timestamp: new Date(),
                type: 'text',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
                isOwn: true,
                status: 'sending'
            };
            
            // Clear input first
            setNewMessage('');
            
            // Add message to state
            setMessages(prev => {
                const newMessages = [...prev, message];
                console.log('Updated messages:', newMessages);
                return newMessages;
            });
            
            // Force scroll to bottom after message is added
            setTimeout(() => {
                scrollToBottom();
            }, 50);
            
            // Simulate message status update
            setTimeout(() => {
                setMessages(prev => 
                    prev.map(msg => 
                        msg.id === message.id ? { ...msg, status: 'sent' } : msg
                    )
                );
            }, 1000);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const message = {
                id: Date.now(),
                sender: 'You',
                message: `📎 ${file.name}`,
                timestamp: new Date(),
                type: 'file',
                fileName: file.name,
                fileSize: file.size,
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
                isOwn: true,
                status: 'sent'
            };
            setMessages(prev => [...prev, message]);
        }
    };

    const handleVoiceMessage = () => {
        setIsRecording(!isRecording);
        // Add voice recording logic here
    };

    const formatTime = (timestamp) => {
        return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'sending':
                return '⏳';
            case 'sent':
                return '✓';
            case 'read':
                return '✓✓';
            default:
                return '';
        }
    };

    if (!isOpen) return null;

    return (
        <Slide direction="left" in={isOpen} mountOnEnter unmountOnExit>
            <Box sx={{
                position: 'fixed',
                right: '20px',
                top: '20px',
                width: '400px',
                height: '650px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
                backdropFilter: 'blur(25px)',
                borderRadius: '25px',
                boxShadow: '0 25px 80px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                zIndex: 1000,
                animation: 'slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative'
            }}>
                {/* Floating particles background */}
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    overflow: 'hidden',
                    pointerEvents: 'none',
                    zIndex: 0
                }}>
                    {[...Array(8)].map((_, i) => (
                        <Box key={i} sx={{
                            position: 'absolute',
                            width: Math.random() * 4 + 2,
                            height: Math.random() * 4 + 2,
                            background: `rgba(102, 126, 234, ${Math.random() * 0.3 + 0.1})`,
                            borderRadius: '50%',
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 2}s`
                        }} />
                    ))}
                </Box>

                {/* Enhanced Chat Header */}
                <Box sx={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                    color: 'white',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 1
                }}>
                    {/* Animated background elements */}
                    <Box sx={{
                        position: 'absolute',
                        top: -20,
                        right: -20,
                        width: '80px',
                        height: '80px',
                        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
                        borderRadius: '50%',
                        animation: 'pulse 3s ease-in-out infinite'
                    }} />
                    <Box sx={{
                        position: 'absolute',
                        bottom: -15,
                        left: -15,
                        width: '60px',
                        height: '60px',
                        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
                        borderRadius: '50%',
                        animation: 'pulse 4s ease-in-out infinite reverse'
                    }} />
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', zIndex: 2 }}>
                        <Box sx={{
                            background: 'rgba(255, 255, 255, 0.25)',
                            borderRadius: '50%',
                            padding: '10px',
                            mr: 2,
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            animation: 'glow 2s ease-in-out infinite alternate'
                        }}>
                            <ChatIcon sx={{ fontSize: 22 }} />
                        </Box>
                        <Box>
                            <Typography variant="h6" sx={{ 
                                fontWeight: 'bold', 
                                fontSize: '1.2rem',
                                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                            }}>
                        Meeting Chat
                    </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Box sx={{
                                    width: '8px',
                                    height: '8px',
                                    background: '#4CAF50',
                                    borderRadius: '50%',
                                    animation: 'blink 2s infinite'
                                }} />
                                <Typography variant="caption" sx={{ opacity: 0.9, fontWeight: 500 }}>
                                    {participants.length} participants online
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, zIndex: 2 }}>
                    <Chip 
                        label={meetingCode} 
                        size="small" 
                        sx={{ 
                                background: 'rgba(255, 255, 255, 0.25)', 
                            color: 'white',
                                fontSize: '0.75rem',
                                fontWeight: 'bold',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                '&:hover': {
                                    background: 'rgba(255, 255, 255, 0.35)',
                                    transform: 'scale(1.05)'
                                },
                                transition: 'all 0.2s ease'
                            }} 
                        />
                        <IconButton 
                            onClick={onClose} 
                            sx={{ 
                                color: 'white',
                                background: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                                '&:hover': {
                                    background: 'rgba(255, 255, 255, 0.2)',
                                    transform: 'scale(1.1)'
                                },
                                transition: 'all 0.2s ease'
                            }}
                        >
                        <CloseIcon />
                    </IconButton>
                </Box>
            </Box>

            {/* Messages Area */}
                <Box 
                    ref={messagesContainerRef}
                    sx={{
                        flex: 1,
                        padding: '20px',
                        overflowY: 'auto',
                        background: 'linear-gradient(180deg, rgba(248, 249, 250, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%)',
                        backdropFilter: 'blur(10px)',
                        position: 'relative',
                        zIndex: 2,
                        minHeight: '300px',
                        display: 'flex',
                        flexDirection: 'column',
                        '&::-webkit-scrollbar': {
                            width: '8px'
                        },
                        '&::-webkit-scrollbar-track': {
                            background: 'rgba(0, 0, 0, 0.05)',
                            borderRadius: '4px'
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: 'linear-gradient(180deg, rgba(102, 126, 234, 0.4) 0%, rgba(118, 75, 162, 0.4) 100%)',
                            borderRadius: '4px',
                            '&:hover': {
                                background: 'linear-gradient(180deg, rgba(102, 126, 234, 0.6) 0%, rgba(118, 75, 162, 0.6) 100%)'
                            }
                        }
                    }}
                >
                    {/* Debug: Message count */}
                    <Box sx={{ 
                        position: 'absolute', 
                        top: '5px', 
                        right: '10px', 
                        background: 'rgba(0,0,0,0.7)', 
                        color: 'white', 
                        padding: '2px 6px', 
                        borderRadius: '10px', 
                        fontSize: '10px',
                        zIndex: 10
                    }}>
                        Messages: {messages.length}
                    </Box>
                    
                    {/* Messages Container */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1,
                        paddingTop: '30px', // Space for debug counter
                        justifyContent: messages.length === 0 ? 'center' : 'flex-start'
                    }}>
                        {messages.length === 0 && (
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '100%',
                                color: '#666',
                                fontSize: '14px',
                                marginTop: '50px'
                            }}>
                                No messages yet. Start the conversation!
                            </Box>
                        )}
                        
                        {messages.map((msg, index) => (
                            <Grow in={true} timeout={300 + index * 100} key={msg.id}>
                                <Box sx={{
                                    display: 'flex',
                                    marginBottom: '16px',
                                    justifyContent: msg.isOwn ? 'flex-end' : 'flex-start',
                                    width: '100%'
                                }}>
                        {!msg.isOwn && (
                            <Avatar 
                                src={msg.avatar} 
                                        sx={{ 
                                            width: 36, 
                                            height: 36, 
                                            mr: 1,
                                            border: '2px solid rgba(102, 126, 234, 0.2)'
                                        }}
                            >
                                {msg.sender.charAt(0)}
                            </Avatar>
                        )}
                        
                                <Box sx={{
                                    maxWidth: '70%',
                                    position: 'relative'
                                }}>
                            {!msg.isOwn && (
                                        <Typography variant="caption" sx={{
                                            color: '#667eea',
                                            fontWeight: 'bold',
                                            fontSize: '0.75rem',
                                            mb: 0.5,
                                            display: 'block'
                                        }}>
                                    {msg.sender}
                                </Typography>
                            )}
                            
                                    <Box sx={{
                                        background: msg.isOwn 
                                            ? 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
                                            : 'rgba(255, 255, 255, 0.98)',
                                        color: msg.isOwn ? 'white' : '#333',
                                        padding: '14px 18px',
                                        borderRadius: msg.isOwn ? '20px 20px 6px 20px' : '20px 20px 20px 6px',
                                        boxShadow: msg.isOwn 
                                            ? '0 8px 25px rgba(102, 126, 234, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.3)'
                                            : '0 4px 15px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.95)',
                                        border: msg.isOwn ? 'none' : '1px solid rgba(255, 255, 255, 0.95)',
                                        backdropFilter: 'blur(10px)',
                                        position: 'relative',
                                        transform: 'translateY(0)',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        marginBottom: '8px',
                                        wordWrap: 'break-word',
                                        maxWidth: '100%',
                                        '&:hover': {
                                            transform: 'translateY(-2px)',
                                            boxShadow: msg.isOwn 
                                                ? '0 12px 35px rgba(102, 126, 234, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.4)'
                                                : '0 8px 25px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 1)'
                                        },
                                        '&::before': msg.isOwn ? {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: 0,
                                            right: -10,
                                            width: 0,
                                            height: 0,
                                            border: '10px solid transparent',
                                            borderTopColor: '#f093fb',
                                            borderBottom: 0,
                                            borderRight: 0
                                        } : {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: 0,
                                            left: -10,
                                            width: 0,
                                            height: 0,
                                            border: '10px solid transparent',
                                            borderTopColor: 'rgba(255, 255, 255, 0.9)',
                                            borderBottom: 0,
                                            borderLeft: 0
                                        }
                                    }}>
                            {msg.type === 'file' ? (
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 1
                                            }}>
                                                <Box sx={{
                                                    background: 'rgba(102, 126, 234, 0.1)',
                                                    borderRadius: '8px',
                                                    padding: '8px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>
                                                    📎
                                                </Box>
                                                <Box>
                                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                                        {msg.fileName}
                                    </Typography>
                                                    <Typography variant="caption" sx={{ opacity: 0.7 }}>
                                        {formatFileSize(msg.fileSize)}
                                    </Typography>
                                                </Box>
                                </Box>
                            ) : (
                                            <Typography variant="body2" sx={{ lineHeight: 1.4 }}>
                                    {msg.message}
                                </Typography>
                            )}
                            
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            mt: 1,
                                            gap: 1
                                        }}>
                                            <Typography variant="caption" sx={{ 
                                                opacity: 0.7,
                                                fontSize: '0.7rem'
                                            }}>
                                {formatTime(msg.timestamp)}
                            </Typography>
                                            {msg.isOwn && (
                                                <Typography variant="caption" sx={{ 
                                                    opacity: 0.7,
                                                    fontSize: '0.7rem'
                                                }}>
                                                    {getStatusIcon(msg.status)}
                                                </Typography>
                                            )}
                                        </Box>
                                    </Box>
                        </Box>
                    </Box>
                        </Grow>
                ))}
                
                {isTyping && (
                        <Fade in={isTyping}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                padding: '8px 12px',
                                background: 'rgba(102, 126, 234, 0.1)',
                                borderRadius: '12px',
                                width: 'fit-content'
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    gap: '2px'
                                }}>
                                    {[0, 1, 2].map((i) => (
                                        <Box key={i} sx={{
                                            width: '6px',
                                            height: '6px',
                                            background: '#667eea',
                                            borderRadius: '50%',
                                            animation: `typing 1.4s infinite ease-in-out`,
                                            animationDelay: `${i * 0.2}s`
                                        }} />
                                    ))}
                                </Box>
                                <Typography variant="caption" sx={{ color: '#667eea' }}>
                                Someone is typing...
                            </Typography>
                        </Box>
                        </Fade>
                    )}
                    
                    <div ref={messagesEndRef} style={{ height: '1px' }} />
                    
                    {/* Visual indicator for new messages */}
                    {messages.length > 0 && (
                        <Box sx={{
                            position: 'absolute',
                            bottom: '10px',
                            right: '10px',
                            background: 'rgba(102, 126, 234, 0.9)',
                            color: 'white',
                            padding: '4px 8px',
                            borderRadius: '12px',
                            fontSize: '10px',
                            zIndex: 5,
                            animation: 'pulse 2s infinite'
                        }}>
                            {messages.length} message{messages.length !== 1 ? 's' : ''}
                    </Box>
                )}
            </Box>
                </Box>
                
                {/* Enhanced Message Input */}
                <Box sx={{
                    padding: '20px',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.95) 100%)',
                    backdropFilter: 'blur(15px)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.3)',
                    position: 'relative',
                    zIndex: 1
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        gap: 1
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            flex: 1
                        }}>
                <TextField
                    multiline
                    maxRows={4}
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type a message..."
                    variant="outlined"
                    size="small"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                                        borderRadius: '25px',
                                        background: 'rgba(255, 255, 255, 0.8)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.5)',
                                        '&:hover': {
                                            background: 'rgba(255, 255, 255, 0.9)',
                                            border: '1px solid rgba(102, 126, 234, 0.3)',
                                            transform: 'translateY(-1px)',
                                            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.1)'
                                        },
                                        '&.Mui-focused': {
                                            background: 'rgba(255, 255, 255, 0.95)',
                                            border: '2px solid rgba(102, 126, 234, 0.4)',
                                            boxShadow: '0 0 0 4px rgba(102, 126, 234, 0.1), 0 8px 25px rgba(102, 126, 234, 0.15)',
                                            transform: 'translateY(-2px)'
                                        },
                                        '& fieldset': {
                                            border: 'none'
                                        },
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                    },
                                    '& .MuiInputBase-input': {
                                        padding: '12px 16px',
                                        fontSize: '0.95rem'
                                    }
                                }}
                            />
                            
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                mt: 1
                            }}>
                                <Tooltip title="Attach file">
                                    <IconButton 
                                        size="small" 
                                        onClick={() => fileInputRef.current.click()}
                                        sx={{ 
                                            color: '#667eea',
                                            background: 'rgba(102, 126, 234, 0.05)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(102, 126, 234, 0.1)',
                                            '&:hover': { 
                                                background: 'rgba(102, 126, 234, 0.15)',
                                                transform: 'scale(1.1)',
                                                boxShadow: '0 4px 12px rgba(102, 126, 234, 0.2)'
                                            },
                                            transition: 'all 0.2s ease'
                                        }}
                                    >
                                        <AttachFileIcon fontSize="small" />
                                    </IconButton>
                                </Tooltip>
                                
                                <Tooltip title="Voice message">
                                    <IconButton 
                                        size="small"
                                        onClick={handleVoiceMessage}
                                        sx={{ 
                                            color: isRecording ? '#ff4444' : '#667eea',
                                            background: isRecording 
                                                ? 'rgba(255, 68, 68, 0.1)' 
                                                : 'rgba(102, 126, 234, 0.05)',
                                            backdropFilter: 'blur(10px)',
                                            border: `1px solid ${isRecording ? 'rgba(255, 68, 68, 0.2)' : 'rgba(102, 126, 234, 0.1)'}`,
                                            '&:hover': { 
                                                background: isRecording 
                                                    ? 'rgba(255, 68, 68, 0.2)' 
                                                    : 'rgba(102, 126, 234, 0.15)',
                                                transform: 'scale(1.1)',
                                                boxShadow: `0 4px 12px ${isRecording ? 'rgba(255, 68, 68, 0.3)' : 'rgba(102, 126, 234, 0.2)'}`
                                            },
                                            transition: 'all 0.2s ease',
                                            animation: isRecording ? 'pulse 1s infinite' : 'none'
                                        }}
                                    >
                                        {isRecording ? <MicOffIcon fontSize="small" /> : <MicIcon fontSize="small" />}
                                    </IconButton>
                                </Tooltip>
                                
                                <Tooltip title="Add emoji">
                                    <IconButton 
                                        size="small"
                                        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                                        sx={{ 
                                            color: '#667eea',
                                            background: 'rgba(102, 126, 234, 0.05)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(102, 126, 234, 0.1)',
                                            '&:hover': { 
                                                background: 'rgba(102, 126, 234, 0.15)',
                                                transform: 'scale(1.1)',
                                                boxShadow: '0 4px 12px rgba(102, 126, 234, 0.2)'
                                            },
                                            transition: 'all 0.2s ease'
                                        }}
                                    >
                                        <EmojiEmotionsIcon fontSize="small" />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Box>
                
                <Tooltip title="Send message">
                    <IconButton 
                        onClick={handleSendMessage}
                        disabled={!newMessage.trim()}
                        sx={{ 
                                    background: newMessage.trim() 
                                        ? 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
                                        : 'rgba(224, 224, 224, 0.5)',
                                    color: 'white',
                                    width: 44,
                                    height: 44,
                                    backdropFilter: 'blur(10px)',
                                    border: newMessage.trim() 
                                        ? '1px solid rgba(255, 255, 255, 0.3)'
                                        : '1px solid rgba(0, 0, 0, 0.1)',
                            '&:hover': {
                                        background: newMessage.trim() 
                                            ? 'linear-gradient(135deg, #764ba2 0%, #667eea 50%, #f093fb 100%)'
                                            : 'rgba(224, 224, 224, 0.7)',
                                        transform: newMessage.trim() ? 'scale(1.1) rotate(5deg)' : 'scale(1.05)',
                                        boxShadow: newMessage.trim() 
                                            ? '0 8px 25px rgba(102, 126, 234, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.4)'
                                            : '0 4px 12px rgba(0, 0, 0, 0.1)'
                                    },
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    animation: newMessage.trim() ? 'glow 2s ease-in-out infinite alternate' : 'none'
                                }}
                            >
                                <SendIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
                    </Box>
            </Box>

            {/* Hidden file input */}
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileUpload}
                multiple
            />

                <style jsx>{`
                    @keyframes slideIn {
                        from {
                            transform: translateX(100%) scale(0.9);
                            opacity: 0;
                        }
                        to {
                            transform: translateX(0) scale(1);
                            opacity: 1;
                        }
                    }
                    
                    @keyframes pulse {
                        0%, 100% {
                            transform: scale(1);
                            opacity: 0.3;
                        }
                        50% {
                            transform: scale(1.1);
                            opacity: 0.6;
                        }
                    }
                    
                    @keyframes typing {
                        0%, 60%, 100% {
                            transform: translateY(0);
                        }
                        30% {
                            transform: translateY(-10px);
                        }
                    }
                    
                    @keyframes float {
                        0%, 100% {
                            transform: translateY(0px) rotate(0deg);
                        }
                        50% {
                            transform: translateY(-20px) rotate(180deg);
                        }
                    }
                    
                    @keyframes glow {
                        from {
                            box-shadow: 0 0 5px rgba(102, 126, 234, 0.5);
                        }
                        to {
                            box-shadow: 0 0 20px rgba(102, 126, 234, 0.8), 0 0 30px rgba(102, 126, 234, 0.4);
                        }
                    }
                    
                    @keyframes blink {
                        0%, 50% {
                            opacity: 1;
                        }
                        51%, 100% {
                            opacity: 0.3;
                        }
                    }
                    
                    @keyframes shimmer {
                        0% {
                            background-position: -200% 0;
                        }
                        100% {
                            background-position: 200% 0;
                        }
                    }
                `}</style>
        </Box>
        </Slide>
    );
};

export default ChatComponent;
