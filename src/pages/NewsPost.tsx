import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { format } from 'date-fns';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNewsPost } from '../hooks/useNews';
import LoadingSpinner from '../components/LoadingSpinner';

export default function NewsPost() {
  const { slug = '' } = useParams();
  const { data: post, isLoading, error } = useNewsPost(slug);

  if (isLoading) return <LoadingSpinner />;
  if (error || !post) return <div>Error loading news post</div>;

  return (
    <>
      <Helmet>
        <title>{post.title} - UST Soccer Academy News</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <Link 
          to="/news"
          className="inline-flex items-center text-[#8ED204] hover:text-[#8ED204]/80 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to News
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center text-gray-600">
              {post.date && (
                <>
                  <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
                  <span className="mx-2">•</span>
                </>
              )}
              <span>{post.author}</span>
            </div>
          </div>

          <div className="prose max-w-none">
            {post.content.split('\n\n').map((paragraph: string, index: number) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </>
  );
}