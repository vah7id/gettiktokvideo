import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import SearchInput from '../components/SearchInput'
import { gtag, install } from 'ga-gtag';
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import FooterMenu from '../components/Footer';

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    install('G-FC7M0Z3Y0R'); 
  })
  return (
    <div lang="en" className={styles.container}>
      <Head> 
      <title>getTikTok.video . Download TikTok Video without watermark mp4/mp3 online</title>
        <meta charset="utf-8" />
        <meta name="description" content="Download TikTok videos fast and free with or without a watermark in mp4 video and mp3 audio downloader online" />
        <meta name="author" content="gettiktok.video" />
        <link rel="icon" href="/logottorg.pg" />
        <link rel="alternate" href="http://gettiktok.video" hrefLang="en"/>
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no" name="viewport" />
        <meta name="keywords" content="getTikTokVideo,TikTok download,TikTok MP3 downloader,TikTok audio download,TikTok MP4 download,TikTok video downloader,Download TikTok videos,how to download tiktok videos" />
          <meta name="googlebot" content="index, follow" />
          <meta name="robots" content="index, follow" />
          <link rel="apple-touch-icon-precomposed" href="/favicon5.ico" />
          <link rel="shortcut icon" href="/favicon5.ico" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="TikTok Downloader - Download and Save TikTok Videos Without Watermark & MP3 Songs.| getTikTok.video" />
          <meta name="twitter:description" content="TikTok Downloader - Download and Save TikTok Videos Without Watermark & MP3 Songs.| getTikTok.video" />
          <meta name="twitter:image:src" content="/logott2.png" />
        {/*<meta property="fb:admins" content="100002861414139">
          <meta property="fb:app_id" content="503426229739677">*/}
          <meta property="og:url" content="https://gettiktok.video" />
          <meta property="og:type" content="article" />
          <link rel="canonical" href="https://gettiktok.video/" />
          <meta property="og:title" content="TikTok Downloader - Download and Save TikTok Videos Without Watermark & MP3 Songs.| getTikTok.video" />
          <meta property="og:image" content="/logott2.ico"/>
          <meta property="og:description" content="getTikTok.video is the TikTok video converter and downloader, With getTikTok.video you can download TikTok videos without watermark in MP4 HD quality and download TikTok MP3 audios in best quality."/>
          <meta property="og:site_name" content="gettiktok.video" />
          <meta itemProp="name" content="TikTok Downloader - Download and Save TikTok Videos Without Watermark & MP3 Songs.| getTikTok.video" />
          <meta itemProp="description" content="TikTok Downloader - Download and Save TikTok Videos Without Watermark & MP3 Songs.| getTikTok.video" />
          <meta itemProp="image" content="./logott2.png" />
          <link rel="icon" sizes="192x192" href="./logott2.png" />
          <link rel="icon" sizes="512x512" href="./logott2.png"></link>
      </Head>
      <main lang="en" className={styles.main}>
        <Header />
        <SearchInput />
        <FooterMenu />
      </main>
    </div>
  )
}
