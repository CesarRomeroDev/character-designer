import { Asset } from "./asset.interface";

export interface Project {
  id: string;
  title: string;
  slug: string;
  description?: string;
  assets: Asset[];
}
