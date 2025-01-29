import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronRight } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  embedUrl: string;
}

const videos: Video[] = [
  {
    id: '1',
    title: 'UST Academy Overview',
    thumbnail: 'https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/673bd75015ee065bf0b64cad.png',
    embedUrl: 'https://www.canva.com/design/DAGdgpOjhHg/kyK7Oh-UPg2gqjEoGujd0g/watch?embed'
  },
  {
    id: '2',
    title: 'Tournament Recap',
    thumbnail: 'https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/67981276b67a21abdb08487c.png',
    embedUrl: 'https://www.canva.com/design/DAGdh_Oc-2E/iS9zHnh1qIq0v6b3-qXY3w/watch?embed'
  }
];

export default function VideoPlaylist() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const [key, setKey] = useState(0); // Add a key to force iframe refresh

  const handleVideoChange = (video: Video) => {
    setActiveVideo(video);
    setKey(prev => prev + 1); // Increment key to force iframe refresh
  };

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="grid md:grid-cols-3 h-[400px]">
        {/* Main Video Player */}
        <div className="md:col-span-2 relative bg-black">
          <iframe
            key={key} // Add key to force refresh when video changes
            src={activeVideo.embedUrl}
            className="absolute inset-0 w-full h-full"
            allowFullScreen
            allow="autoplay"
            title={activeVideo.title}
          />
        </div>

        {/* Playlist */}
        <div className="bg-gray-900 p-4">
          <h3 className="text-white font-semibold mb-4">Video Playlist</h3>
          <div className="space-y-2 overflow-y-auto h-[calc(100%-2rem)]">
            {videos.map((video) => (
              <motion.button
                key={video.id}
                onClick={() => handleVideoChange(video)}
                className={`w-full flex items-center p-2 rounded-lg transition-colors ${
                  activeVideo.id === video.id
                    ? 'bg-[#8ED204] text-black'
                    : 'hover:bg-gray-800 text-white'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative w-20 h-12 flex-shrink-0 mr-3">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover rounded"
                  />
                  {activeVideo.id !== video.id && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded">
                      <Play className="h-4 w-4" />
                    </div>
                  )}
                </div>
                <span className="flex-1 text-left text-sm line-clamp-2">
                  {video.title}
                </span>
                {activeVideo.id === video.id && (
                  <ChevronRight className="h-4 w-4 flex-shrink-0 ml-2" />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
