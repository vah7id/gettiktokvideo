import * as React from 'react';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {TextField, Button, Typography, Card, CardMedia, CardContent, BottomNavigation, BottomNavigationAction, Stack, IconButton, Skeleton, LinearProgress, Backdrop, CircularProgress, Grid, Divider, Breadcrumbs, Link, Chip, CardActions, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Autocomplete, Badge, FormControl, FormLabel, FormControlLabel, Switch, FormGroup} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';
import { VideoFileOutlined, MicRounded, HomeIcon } from '@mui/icons-material';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function SearchInput() {
    const [url, setURL] = React.useState('');
    const [hideTheCover, setHideTheCover] = React.useState(false);
    const [isFetching, setIsFetching] = React.useState(false);
    const [openSnackbar, setSnackbarOpen] = React.useState(false);
    const [notification, setNotification] = React.useState({ type: null, message: ""});
    const [downloadedData, setDownloadedData] = React.useState(null);
    const router = useRouter();


    React.useEffect(() => {
        setIsFetching(false);
        if(window.innerWidth < 600) {
            setHideTheCover(true)
          } else {
            setHideTheCover(false)
          }
    }, [router.query, router.asPath, router.query.query, downloadedData])
    
    const showNotification = (type, message) => {
        setSnackbarOpen(true);
        setNotification({
            type: type,
            message
        })
    };
  
    const handleSnackbarClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setSnackbarOpen(false);
    };

    React.useEffect(() => {
        function handleResize() {
          if(window.innerWidth < 600) {
            setHideTheCover(true)
          } else {
            setHideTheCover(false)
          }
        }
        window.addEventListener('resize', handleResize)
    })

    const handleDownload = (link) => {
        const anchorAudio = document.createElement("a");
        anchorAudio.target = "_blank";
        anchorAudio.rel = "noopener";
        anchorAudio.href = link;
        anchorAudio.download = true;
        anchorAudio.click();
        //window.open(link, "_blank");
    }

    const handleChange = (query) => {
        if(!query && (!url || url === "") ) {
            showNotification('error', 'Oops!! Please type your song title first :)')
            setIsFetching(false);
            return;
        }

        const title = query || url; 
        setURL(title);
        
        if(title === "") {
            setIsFetching(false);
            showNotification('error', 'Oops!! Please type your song title first :)')
            return;
        }

        setIsFetching(true);
        setDownloadedData(null);

        fetch('/api/search?videoUrl='+title).then(resp => resp.json()).then(resp => {
            setIsFetching(false);
            if(resp && resp.nowm) {
                setDownloadedData(resp);
            } else {
                setDownloadedData(null);
                showNotification('error', 'Oops we could not fetch the tiktok URL! It might be the wrong URL structure :)')
            }
        });
    }
    
    const handlePaste = (event) => {
        handleChange(event.clipboardData.getData('text/plain'));
    }

    return (
        <Box sx={{maxWidth: '768px', width: '100%'}}>
             <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={10}>
                        <TextField 
                            value={url} 
                            onChange={(event) => setURL(event.target.value)} 
                            id="filled-basic" 
                            onPaste={handlePaste}
                            style={{width: '100%'}}
                            label="Paste the TIKTOK URL here to download without watermark..." 
                            variant="filled" 
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Button 
                            onClick={() => handleChange(url)} 
                            size='large'  
                            sx={{ width: '90%', minWidth: '42px !important', padding: '15px'}} 
                            variant='contained'
                            >
                                <SearchIcon sx={{fontSize: '1.5rem !important'}} />
                        </Button>
                    </Grid>
                </Grid>
                
                
                <Box sx={{ width: '100%', mt: '10px', opacity: '0.3', fontSize: '14px' }}>
                    <Typography variant="subtitle">
                     https://www.tiktok.com/@bad1g13/video/1100101010010101
                    </Typography>
                </Box>
                {(isFetching) && <Box sx={{ width: '100%', mt: '15px' }}>
                    <LinearProgress />
                </Box>}

            </Box>

            {downloadedData !== null &&  <Box sx={{maxWidth: '768px', width: '100%'}} mt={4}>
                <Card sx={{ display: 'flex' }}>
                    {!hideTheCover && <CardMedia
                        component="img"
                        image={downloadedData.cover} 
                        alt={downloadedData.title}
                    />}
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                {downloadedData.title}
                            </Typography>
                            <Typography variant="subtitle2" mt={2} color="text.secondary" component="div">
                                Created at: {new Date(downloadedData.create_time).toDateString()}
                            </Typography>
                            <Typography variant="caption" color="text.secondary" component="div">
                                Video Size: {(downloadedData.size / (1024*1024)).toFixed(2)} MB
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'block', pl: 1, pb: 1 }}>
                            <Button onClick={() => handleDownload(downloadedData.nowm)} size="small" sx={{mb: 2, ml: 1, minWidth: '300px'}}startIcon={<VideoFileOutlined />} variant={"contained"}>Download Video Without Watermark</Button>
                            <Button color={'info'} onClick={() => handleDownload(downloadedData.music)} size="small" sx={{mb: 2, ml: 1,minWidth: '300px'}} startIcon={<MicRounded />} variant={"outlined"}>Download Music Only (Audio MP3)</Button>
                            <Button color={'info'} onClick={() => handleDownload(downloadedData.wm)} size="small" sx={{mb: 2, ml: 1, minWidth: '300px'}} startIcon={<VideoFileOutlined />} variant={"outlined"}>Download Video With Watermark</Button>
                        </Box>
                    </Box>
                    </Card>
                </Box>
            }
            
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={openSnackbar} autoHideDuration={5000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity={notification.type || 'error'} sx={{ width: '100%' }}>
                    {notification.message || ''}
                </Alert>
            </Snackbar>
            
            {isFetching && <Backdrop
                sx={{ color: '#fff', textAlign: 'center', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isFetching}
                >
                <CircularProgress color="inherit" />
            </Backdrop>}
 
        </Box>
    )
  }
