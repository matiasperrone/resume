import workInfo from "@/data/work.json";
import { stripMDTags } from "@/helpers/string";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://resume.matiasperrone.com";
export const OG_LOCALES = { en: "en_US", es: "es_ES" };

export const generateStaticParams = async () => {
  return [{ lang: "en" }, { lang: "es" }];
};

export const generateMetadata = async ({ params }) => {
  const { lang } = await params;
  const work = workInfo[lang] ?? workInfo.en;
  const description = stripMDTags(work.summary[0]);

  return {
    title: `${work.name} - ${work.title}`,
    description,
    keywords: work.keywords || "",
    alternates: {
      canonical: SITE_URL + (lang === "en" ? "" : `/${lang}`),
      languages: {
        en: SITE_URL,
        es: SITE_URL + "/es",
      },
    },
    icons: {
      icon: [
        { url: "/favicon_64.ico", sizes: "64x64", type: "image/x-icon" },
        { url: "/favicon_128.ico", sizes: "128x128", type: "image/x-icon" },
      ],
      shortcut: "/favicon_64.ico",
    },
    openGraph: {
      title: work.ogtitle,
      description: work.title,
      url: `${SITE_URL}/${lang}`,
      siteName: work.name,
      images: [
        {
          url: `${SITE_URL}/images/matias_470x470.webp`,
          width: 1200,
          height: 1200,
          alt: work.ogtitle,
        },
      ],
      locale: OG_LOCALES[lang] ?? OG_LOCALES.en,
      type: "website",
    },
  };
};
