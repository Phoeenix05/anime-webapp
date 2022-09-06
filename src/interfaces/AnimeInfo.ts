
export interface IAnimeInfo {
  id:            string;
  type:          string;
  links:         DatumLinks;
  attributes:    Attributes;
  relationships: { [key: string]: Relationship };
}

interface Attributes {
  createdAt:           string;
  updatedAt:           string;
  slug:                string;
  synopsis:            string;
  coverImageTopOffset: number;
  titles:              Titles;
  canonicalTitle:      string;
  abbreviatedTitles:   string[];
  averageRating:       string;
  ratingFrequencies:   { [key: string]: string };
  userCount:           number;
  favoritesCount:      number;
  startDate:           string;
  endDate:             string;
  popularityRank:      number;
  ratingRank:          number;
  ageRating:           string;
  ageRatingGuide:      string;
  subtype:             string;
  status:              string;
  tba:                 string;
  posterImage:         PosterImage;
  coverImage:          CoverImage;
  episodeCount:        number;
  episodeLength:       number;
  youtubeVideoId:      string;
  showType:            string;
  nsfw:                boolean;
}

interface CoverImage {
  tiny:     string;
  small:    string;
  large:    string;
  original: string;
  meta:     CoverImageMeta;
}

interface CoverImageMeta {
  dimensions: Dimensions;
}

interface Dimensions {
  tiny:    Large;
  small:   Large;
  large:   Large;
  medium?: Large;
}

interface Large {
  width:  null;
  height: null;
}

interface PosterImage {
  tiny:     string;
  small:    string;
  medium:   string;
  large:    string;
  original: string;
  meta:     CoverImageMeta;
}

interface Titles {
  en:    string;
  en_jp: string;
  ja_jp: string;
}

interface DatumLinks {
  self: string;
}

interface Relationship {
  links: RelationshipLinks;
}

interface RelationshipLinks {
  self:    string;
  related: string;
}

interface IAnimeInfoLinks {
  first: string;
  prev:  string;
  next:  string;
  last:  string;
}

interface IAnimeInfoMeta {
  count: number;
}
