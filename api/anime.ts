import axios from 'axios';

const BASE_URL = 'https://api.jikan.moe/v4';

export interface Anime {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
      large_image_url: string;
    }
  };
  synopsis: string;
  score: number;
  year: number;
  status: string;
}

export interface AnimeResponse {
  data: Anime[];
  pagination: {
    has_next_page: boolean;
    current_page: number;
    items: {
      count: number;
      total: number;
    }
  }
}

export const searchAnime = async (query: string): Promise<AnimeResponse> => {
  try {
    const response = await axios.get(`${BASE_URL}/anime`, {
      params: {
        q: query,
        sfw: true
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching anime:', error);
    throw error;
  }
};

export const getAnimeDetails = async (id: number): Promise<Anime> => {
  try {
    const response = await axios.get(`${BASE_URL}/anime/${id}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching anime details:', error);
    throw error;
  }
};
