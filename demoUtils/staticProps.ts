import { load } from "js-yaml";

export type DocMeta = {
  title?: string;
  meta?: Record<string, string>;
  structuredData?: Record<string, unknown>; // https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data
};

export type StaticProps = {
  pages: string[];
  doc: {
    meta: DocMeta;
    content: string;
    title: string;
  };
};

export const extractDetailsFromDocContent = (docContent: string) => {
  const META_START = "```YAML\n";
  const META_END = "\n```\n";
  const TITLE_END = "\n---\n";

  let meta: DocMeta = { title: "", meta: {} };
  let content = docContent.trim();
  let title = "";

  if (content.startsWith(META_START)) {
    // meta detected
    const endOfMeta = content.indexOf(META_END);
    const metaStr = content.substring(META_START.length, endOfMeta);
    meta = load(metaStr);

    content = content.substring(endOfMeta + META_END.length);

    //seperate title and content
    const titleEndIndex = content.indexOf(TITLE_END);
    title = content.substring(0, titleEndIndex).replace("#", "").trim();
    content = content.substring(titleEndIndex + TITLE_END.length);
  }

  return { meta, title, content };
};
