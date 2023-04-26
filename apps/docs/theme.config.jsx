const config = {
  logo: <span>Open AI Tester Documentation</span>,

  head: () => {
    return (
      <>
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={
            'Open AI Tester / Chat Mode / Completion Mode / Create Image'
          }
        />
        <meta
          name="keyword"
          content={'Open AI / Chat Mode / Completion Mode / Create Image'}
        />
        <meta
          name="og:description"
          content={
            'Open AI Tester / Chat Mode / Completion Mode / Create Image'
          }
        />
        <meta name="og:title" content={'Open AI Tester'} />
      </>
    );
  },
  project: {
    link: 'https://github.com/glory4god/openai-tester',
  },
  nextThemes: {
    defaultTheme: 'dark',
    storageKey: 'theme',
  },
};

export default config;
