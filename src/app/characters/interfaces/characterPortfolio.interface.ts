export interface PortfolioResponse {
  data: ProjectsItem[];
}

export interface ProjectsItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  image_project: FeaturedImage;
  images: ImageGalleryItem; // Cambié FullGallery por array de imágenes
  metadata?: ProjectMetadata; // Agregamos metadata opcional
}

export interface FeaturedImage {
  url: string;
  alt: string;
  width: string;
  height: string;
}

export interface ImageGalleryItem {
  id: string;
  url: string;
  alt: string;
  width: string;
  height: string;
  dimensions: ImageDimensions;
  order?: number; // Para ordenar las imágenes
  type?: 'sketch' | 'process' | 'final' | 'detail'; // Tipo de imagen
  isInTastingMenu?: boolean; // Si aparece en tasting menu
  tastingMenuOrder?: number; // Orden específico en tasting menu
}

export interface ImageDimensions{
  unit: 'px' | 'rem' | 'cm' | 'in';
  dpi?: number; //calidad de impresión.
}

export interface ProjectMetadata {
  client: string;
  year: number;
  tools: string[];
  description: string;
  // Puedes agregar más campos según necesites
  projectType?: 'personal' | 'commercial' | 'commission';
  published?: boolean;
  featured?: boolean;
}
