export type Document = {
  summary: string;
  mdn_url: string;
  score: number;
  highlight: { body: string[]; title: string[] };
  popularity: number;
  title: string;
  locale: string;
  slug: string;
};

export type MdnApiResponse = {
  metadata: {
    total: { value: number; relation: string };
    size: number;
    took_ms: number;
    page: number;
  };
  documents: Document[];
  suggestions: any[];
};
