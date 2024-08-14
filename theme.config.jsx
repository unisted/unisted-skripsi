export default {
  logo: <span>SKRIPSI UNISTED</span>,
  project: {
    link: "https://github.com/unisted/unisted-skripsi",
  },

  useNextSeoProps() {
    return {
      titleTemplate: "%s – UNISTED",
    };
  },
  head: (
    <>
      <meta
        name="msapplication-TitleImage"
        content="https://unisted-skripsi.vercel.app/opengraph-image.png"
      ></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="title" content="Skripsi - UNISTED" />
      <meta
        property="description"
        content="Selamat datang di All About Skripsi UNISTED. Website ini dibuat khusus untuk mendokumentasikan hal-hal terkait skripsi yang akan kita kerjakan. Dokumentasi ini mencakup berbagai aspek penting yang dapat kalian lihat di section navigasi. Tujuan utama dari halaman ini adalah untuk menyediakan informasi yang terstruktur dan komprehensif mengenai proyek skripsi kita."
      />
      <meta property="og:title" content="Skripsi - UNISTED" />
      <meta property="og:site_name" content="UNISTED"></meta>
      <meta property="og:type" content="website"></meta>
      <meta
        property="og:description"
        content="Selamat datang di All About Skripsi UNISTED. Website ini dibuat khusus untuk mendokumentasikan hal-hal terkait skripsi yang akan kita kerjakan. Dokumentasi ini mencakup berbagai aspek penting yang dapat kalian lihat di section navigasi. Tujuan utama dari halaman ini adalah untuk menyediakan informasi yang terstruktur dan komprehensif mengenai proyek skripsi kita."
      />
      <meta property="og:image:width" content="300"></meta>
      <meta property="og:image:height" content="300"></meta>
      <meta
        property="og:url"
        content="https://unisted-skripsi.vercel.app/"
      ></meta>
      <meta
        property="og:image"
        itemProp="image"
        content="https://unisted-skripsi.vercel.app/opengraph-image.png"
      ></meta>
    </>
  ),
};
