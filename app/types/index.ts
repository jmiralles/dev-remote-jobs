export type Job = {
  id: string;
  title: string;
  company_name: string;
  company_logo_url: string;
  candidate_required_location: string;
  salary: string;
  url: string;
  tags: Tag[];
  provider: Provider;
  company: Company;
  location: Location;
  publication_date: string;
};

type Tag = {
  name: string;
};

type Provider = {
  name: string;
  url: string;
};

type Company = {
  name: string;
  logo_url: string;
};

type Location = {
  name: string;
};
