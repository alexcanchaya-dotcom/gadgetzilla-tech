const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

export function TrackingScripts() {
  return (
    <>
      {adsenseClient ? (
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
          crossOrigin="anonymous"
        />
      ) : null}
      {gaId ? (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `,
            }}
          />
        </>
      ) : null}
    </>
  );
}
