/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-unresolved, import/extensions, import/no-extraneous-dependencies */
import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Breadcrumbs, Card, CardContent, Divider, Link, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { ExpandMoreOutlined, HomeRepairServiceOutlined } from '@mui/icons-material';

export default function FooterMenu() {
    const router = useRouter();
    return (
        <Box sx={{ width: '100%', maxWidth: '768px' }} mt={32}>
             <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreOutlined />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How It Works</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Card sx={{ minWidth: 275, opacity: 0.8 }}>
            <CardContent>
                <Typography style={{fontSize: '20px'}}  mb={2} variant='h2'>TikTok Video Download Without Watermark</Typography>
                <Typography style={{fontSize: '13px', opacity: 0.5}} variant='body1'>
                getTikTok.video is a free tool helping you download TikTok videos (Musically) without logo online. Save TikToks with the best quality in an MP4 file format with HD resolution. To find out how to use the TikTok video downloader without watermark, follow the instructions below. It’s simple - you can download TikTok without watermark in three easy steps.
                </Typography>

                <Typography style={{fontSize: '13px', opacity: 0.5}} variant='body2'>

                Its so simple, you can save your videos in three easy steps
                How to download TikTok without watermark?
                
                </Typography>
                <ul>
                    <li>
                    play a video that you want to save to your mobile device, using the TikTok app Copy the link
                   </li>
                   <li>
                   tap Share (the arrow button on top of a chosen video), and then tap Copy link
                Download TikTok
                   </li>
                   <li>
                   go back to getTikTok.video and paste the link in the text field on the page and tap on the Save button
                   </li>
                </ul>

                <Typography style={{fontSize: '13px', opacity: 0.5}} variant='caption'>
                getTikTok.video is the most popular TikTok video downloader which allows you to save non watermarked TikTok videos. No need to install any apps to use our service, all you need is a browser and a valid link to paste in the input field on sss TikTok video downloader website and remove watermark from TikTok.
                </Typography>
            </CardContent>
        </Card>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreOutlined />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Download TikTok video on mobile phone</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Card sx={{ minWidth: 275, opacity: 0.8 }}>
            <CardContent>
          <Typography style={{fontSize: '13px', opacity: 0.5}} variant='caption'>
          If you want to save TikTok videos or remove TikTok watermark on Android phones, you need to launch the TikTok app and find a video you want to save.
When you are on the video page, you will see the Share button on the right side of the screen - it looks like an arrow. Tap on it, and select Copy link
After that, open getTikTok.video and paste the link into the text field at the top of the page. Then hit the Download button to get the link. The file from TikTok (ex Musically) will be saved without logo and in mp4 format and also audio mp3 format.

          </Typography>
          </CardContent>
          </Card>
        </AccordionDetails>
        </Accordion>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreOutlined />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Download TikTok Music (Audio MP3)</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Card sx={{ minWidth: 275, opacity: 0.8 }}>
            <CardContent>
          <Typography style={{fontSize: '13px', opacity: 0.5}} variant='caption'>
          If everything went ok, a Results page will open. Scroll down to see a Download MP3 link at the bottom of the page

Sometimes it maybe an M4A link instead of mp3. Most media players can support M4A now, since it is an integral part of the MP4.

At times you will not be able to see an audio link. This means that mp3 is not available for this specific TT track. Try to find another one with similar music. We are working on this problem and it will be fixed soon.
          </Typography>
          </CardContent>
          </Card>
        </AccordionDetails>
      </Accordion>


         
           <Divider sx={{mt: 4, opacity: 0.5}}>
            </Divider>
            <Box sx={{ width: '100%',  paddingTop: '16px', color: '#ccc' }}>
                <Breadcrumbs sx={{ width: '100%', fontSize: '12px', marginTop: '0px', marginBottom: '12px' }} aria-label="breadcrumb">
                    <Link
                        title="Home"
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        href="/"
                    >
                    <HomeRepairServiceOutlined sx={{ mr: 0.5 }} fontSize="inherit" />
                    Home
                    </Link>
                    <Link
                        title="convert"
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        href="/download-tiktok-mp3"
                    >
                    Convert TikTok Video to Audio MP3
                    </Link>
                    <Link
                        rel={"noopener"}
                        title="Github"
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        target="_blank"
                        href="https://github.com/vah7id/gettiktokvideo"
                    >
                    Github (V.1.1.2)
                    </Link>
                    <a href="https://twitter.com/intent/tweet?screen_name=songkeybpmfinder-app&ref_src=twsrc%5Etfw" style={{color: '#1d9bf0'}} data-show-count="false">Send Feedback</a><script async src="https://platform.twitter.com/widgets.js"></script>
                </Breadcrumbs>
              </Box>
          </Box>
    );
}
