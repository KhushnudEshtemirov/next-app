"use client";

import {
  useChangeLocale,
  useCurrentLocale,
  useI18n,
  useScopedI18n,
} from "@/locales/client";

export default function Home() {
  const t = useI18n();
  const scopedT = useScopedI18n("hello");
  const changeLocale = useChangeLocale({ preserveSearchParams: true });
  const locale = useCurrentLocale();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{t("hello")}</p>
      <p>{t("hello.world")}</p>
      <p>{scopedT("world")}</p>
      <h2>{t("welcome", { name: <span>Khushnud</span> })}</h2>
      <p>Current locale: {locale}</p>
      <button
        className="border border-gray-500"
        onClick={() => changeLocale("uz")}
      >
        O'zbek
      </button>
      <button
        className="border border-gray-500"
        onClick={() => changeLocale("en")}
      >
        English
      </button>
      <button
        onClick={() => {
          throw new Error("It's a nextjs error.");
        }}
      >
        Click
      </button>
    </main>
  );
}
