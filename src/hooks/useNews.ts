import { useQuery } from '@tanstack/react-query';
import { getPosts, getPost } from '../lib/api';
import type { NewsPost } from '../types/news';

export interface UseNewsResult {
  data: NewsPost[];
  isLoading: boolean;
  error: Error | null;
}

export function useNewsPosts() {
  return useQuery<NewsPost[]>({
    queryKey: ['news'],
    queryFn: getPosts,
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
}

export function useNewsPost(slug: string) {
  return useQuery<NewsPost | null>({
    queryKey: ['news', slug],
    queryFn: () => getPost(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
}