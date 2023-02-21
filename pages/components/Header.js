/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-unresolved, import/extensions, import/no-extraneous-dependencies */
import React from 'react';
import { Link, Typography } from '@mui/material';
import logo2 from '../../public/logott2.png'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();
    return (
      <>
          <Image style={{ cursor: 'pointer'}} alt="logo" onClick={() => router.push('/')} src={logo2} />

        <Link href="/" passHref>
          <h1 className={styles.title}>
              TIKTOK DOWNLOADER
          </h1>
        </Link>
        <Typography variant="h2" style={{ maxWidth: '600px', fontSize: '0.85rem', lineHeight: '20px', opacity: '0.4', textAlign: 'center', margin: '16px 0 40px 0' }}>
            Just paste your Tiktok URL down there to download the video (mp4) without the watermark and the music in audio mp3 (Vocal) seperately! Its FREE ENJOY:)
        </Typography>
      </>
    );
}
