export interface Gif {
  title: string;
  images: {
    original: {
      url: string;
    };
    downsized_small: {
      url: string;
    };
  };
}

export interface GifApiResponse {
  data: Gif[];
  pagination: {
    total_count: number;
  };
}
