
export interface IAnimeInfo {
  id:                       number;
  title:                    string;
  main_picture:             Picture;
  start_date:               string;
  synopsis:                 string;
  mean:                     number;
  media_type:               string;
  genres:                   Genre[];
  num_episodes:             number;
  rating:                   string;
}

export interface IAnimeInfoFull {
  id:                       number;
  title:                    string;
  main_picture:             Picture;
  alternative_titles:       AlternativeTitles;
  start_date:               string;
  end_date:                 string;
  synopsis:                 string;
  mean:                     number;
  rank:                     number;
  popularity:               number;
  num_list_users:           number;
  num_scoring_users:        number;
  nsfw:                     string;
  created_at:               string;
  updated_at:               string;
  media_type:               string;
  status:                   string;
  genres:                   Genre[];
  my_list_status:           MyListStatus;
  num_episodes:             number;
  start_season:             StartSeason;
  broadcast:                Broadcast;
  source:                   string;
  average_episode_duration: number;
  rating:                   string;
  pictures:                 Picture[];
  background:               string;
  related_anime:            RelatedAnime[];
  related_manga:            any[];
  recommendations:          Recommendation[];
  studios:                  Genre[];
  statistics:               Statistics;
}

export interface AlternativeTitles {
  synonyms: string[];
  en:       string;
  ja:       string;
}

export interface Broadcast {
  day_of_the_week: string;
  start_time:      string;
}

export interface Genre {
  id:   number;
  name: string;
}

export interface Picture {
  medium: string;
  large:  string;
}

export interface MyListStatus {
  status:               string;
  score:                number;
  num_episodes_watched: number;
  is_rewatching:        boolean;
  updated_at:           string;
}

export interface Recommendation {
  node:                Node;
  num_recommendations: number;
}

export interface Node {
  id:           number;
  title:        string;
  main_picture: Picture;
}

export interface RelatedAnime {
  node:                    Node;
  relation_type:           string;
  relation_type_formatted: string;
}

export interface StartSeason {
  year:   number;
  season: string;
}

export interface Statistics {
  status:         Status;
  num_list_users: number;
}

export interface Status {
  watching:      string;
  completed:     string;
  on_hold:       string;
  dropped:       string;
  plan_to_watch: string;
}
