import { useState, useCallback, memo } from 'react'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import VerifiedIcon from '@mui/icons-material/Verified'

import SpotlightTabs from './SpotlightTabs'
import { SPOTLIGHT_VIDEOS, type SpotlightVideo } from './data'

interface VideoCardProps {
  video: SpotlightVideo
}

const VideoCard = memo(function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="relative aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300">
      <div className={`absolute inset-0 bg-gradient-to-b ${video.gradient} opacity-90 transition-opacity duration-300 group-hover:opacity-100`} />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
      
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white drop-shadow-md">
        <div className="flex items-center gap-1 bg-black/20 backdrop-blur-md rounded-full px-2 py-0.5">
          <PlayArrowOutlinedIcon sx={{ fontSize: 16 }} />
          <span className="text-[12px] font-semibold">{video.views}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-black/20 backdrop-blur-md rounded px-1.5 py-0.5 text-[11px] font-bold">
            {video.duration}
          </div>
          <button className="text-white hover:text-white/80 transition-colors">
            <MoreVertIcon sx={{ fontSize: 20 }} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-2">
        <h3 className="text-white text-[15px] font-extrabold leading-tight drop-shadow-md pr-6">
          {video.title}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0 pr-2">
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0">
              <span className="text-[10px] font-extrabold text-[#1f1633]">{video.authorInitial}</span>
            </div>
            <div className="flex items-center gap-1 min-w-0">
              <span className="text-white text-[12px] font-medium drop-shadow-md truncate">
                {video.author}
              </span>
              {video.verified && <VerifiedIcon sx={{ fontSize: 14 }} className="text-[#3B82F6] drop-shadow-md shrink-0" />}
            </div>
          </div>
          <button className="text-white hover:scale-110 active:scale-95 transition-transform drop-shadow-md shrink-0">
            <FavoriteBorderIcon sx={{ fontSize: 22 }} />
          </button>
        </div>
      </div>
    </div>
  )
})

export default function Spotlight() {
  const [activeFilter, setActiveFilter] = useState('forYou')

  const handleFilterChange = useCallback((key: string) => {
    setActiveFilter(key)
  }, [])

  return (
    <div className="flex-1 w-full h-full overflow-y-auto scroll-smooth bg-white [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md">
        <SpotlightTabs active={activeFilter} onChange={handleFilterChange} />
      </div>
      <div className="p-4 pt-2">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {SPOTLIGHT_VIDEOS.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  )
}
