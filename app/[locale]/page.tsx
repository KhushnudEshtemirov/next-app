import { getI18n } from "@/locales/server";

export default async function Page() {
  const t = await getI18n();

  return (
    <>
      <h2>Home Page</h2>
      <p>{t("hello")}</p>
    </>
  );
}
