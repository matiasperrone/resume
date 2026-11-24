import workInfo from "@/data/work.json";
import { stripMDTags } from "@/helpers/string";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://resume.matiasperrone.com";
export const SITE_URL_EN = process.env.NEXT_PUBLIC_SITE_URL_EN || SITE_URL;
export const SITE_URL_ES =
  process.env.NEXT_PUBLIC_SITE_URL_ES || SITE_URL + "/es";
export const OG_LOCALES = { en: "en_US", es: "es_ES" };

export const generateStaticParams = async () => {
  return [{ lang: "en" }, { lang: "es" }];
};

export const generateMetadata = async ({
  params,
  title,
  ogtitle,
  canonical,
  languages = {
    en: SITE_URL_EN,
    es: SITE_URL_ES,
  },
}) => {
  const { lang } = await params;
  const work = workInfo[lang] ?? workInfo.en;
  const description = stripMDTags(work.summary[0]);
  const CURRENT_SITE_URL = lang === "es" ? SITE_URL_ES : SITE_URL_EN;

  return {
    title: `${work.name} - ${title ?? work.title}`,
    description,
    keywords: work.keywords || "",
    alternates: {
      canonical: canonical ?? CURRENT_SITE_URL,
      languages,
    },
    icons: {
      icon: [
        { url: "/favicon_64.ico", sizes: "64x64", type: "image/x-icon" },
        { url: "/favicon_128.ico", sizes: "128x128", type: "image/x-icon" },
      ],
      shortcut: "/favicon_64.ico",
    },
    openGraph: {
      title: ogtitle ?? work.ogtitle,
      description: description ?? work.title,
      url: canonical ?? CURRENT_SITE_URL,
      siteName: work.name,
      images: [
        {
          url: `${CURRENT_SITE_URL}/images/matias_470x470.webp`,
          width: 1200,
          height: 1200,
          alt: ogtitle ?? work.ogtitle,
        },
      ],
      locale: OG_LOCALES[lang] ?? OG_LOCALES.en,
      type: "website",
    },
  };
};
