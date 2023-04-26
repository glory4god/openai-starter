import { FC } from 'react';
import NextHead from 'next/head';

const Head: FC = () => {
  return (
    <>
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:title" content="Open AI API Starter" />
        <meta property="locale" content="ko_KR" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://openai-gpt-project.vercel.app/"
        />
        <meta property="og:site_name" content="Exam Bomb" />
        <meta property="og:iamge" content="" />
        <meta property="og:description" content="Open AI API Starter" />
        <link type="image/x-icon" rel="icon" href="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />

        <meta property="title" content="Open AI API Starter" />
        <meta name="author" content="Yu Hayoung" />
        <meta name="description" content="Open AI API Starter" />
        <title>Open AI API Starter</title>
      </NextHead>
    </>
  );
};

export default Head;
