export interface NotionFile {
  name: string;
  type: 'file';
  file: {
    url: string;
    expiry_time: string;
  };
}

export interface NotionRichText {
  type: 'text';
  text: {
    content: string;
    link: null | string;
  };
  plain_text: string;
}

export interface NotionProperty {
  입학년도: {
    type: 'number';
    number: number;
  };
  이메일?: {
    type: 'rich_text';
    rich_text: NotionRichText[];
  };
  회사?: {
    type: 'rich_text';
    rich_text: NotionRichText[];
  };
  연구분야: {
    type: 'rich_text';
    rich_text: NotionRichText[];
  };
  사진: {
    type: 'files';
    files: NotionFile[];
  };
  이름: {
    type: 'title';
    title: NotionRichText[];
  };
}

export interface NotionPage {
  object: 'page';
  id: string;
  properties: NotionProperty;
}

export interface NotionResponse {
  object: 'list';
  results: NotionPage[];
}

export interface MasterStudent {
  name: string;
  email: string;
  researchField: string;
  photo: string;
  year: number;
}

export interface GraduateStudent {
  name: string;
  company: string;
  researchField: string;
  photo: string;
  year: number;
}

export interface Project {
  id: string;
  title: string;
  image: string;
  backgroundColor: string;
  company: string;
  startDate: string;
}

export interface News {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string | null;
  link: string;
  tags: string[];
}
