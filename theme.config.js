export default {
  github: 'https://github.com/isaacedwinreborn/skuyapp',
  docsRepositoryBase: 'https://github.com/xinfrank/Skuy-API-Docs',
  titleSuffix: ' – Skuy',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Skuy</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        API Docs
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Skuy API Documentation" />
      <meta name="og:description" content="Skuy API Documentation" />
      <meta name="og:title" content="Skuy API Docs" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>Skuy Pre-Release</>,
}
