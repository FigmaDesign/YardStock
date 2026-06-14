import { useState, useCallback, memo } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { COURSES, type Course } from './data'
import LearnTabs from './LearnTabs'

const ITEMS_PER_PAGE = 10

interface CourseCardProps {
  course: Course
  index: number
}

const CourseCard = memo(function CourseCard({ course, index }: CourseCardProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuAction = (e: React.MouseEvent, action: string) => {
    e.stopPropagation()
    setIsMenuOpen(false)
    console.log(`${action} clicked for course:`, course.id)
  }

  const animationDelay = `${(index % ITEMS_PER_PAGE) * 0.05}s`

  return (
    <div 
      className="relative mb-3 mx-2 ys-fade-in-up"
      style={{ animationDelay }}
    >
      <div 
        className={`relative flex gap-3.5 p-3 border border-[#E5E7EB] rounded-xl bg-white shadow-sm transition-shadow ${
          isMenuOpen ? 'z-50 shadow-md' : 'z-10'
        }`}
      >
        <div className="absolute top-2.5 right-2 z-60">
          <button 
            onClick={toggleMenu}
            className={`text-(--color-text-secondary) hover:text-(--color-text-primary) transition-all p-1 rounded-full focus:outline-none ${
              isMenuOpen ? 'bg-gray-100 text-(--color-text-primary)' : 'hover:bg-gray-50'
            }`}
            aria-label="More options"
          >
            <MoreVertIcon sx={{ fontSize: 18 }} />
          </button>

          {isMenuOpen && (
            <>
              <div 
                className="fixed inset-0 z-999" 
                onClick={(e) => {
                  e.stopPropagation()
                  setIsMenuOpen(false)
                }} 
              />
              
              <div className="absolute top-full right-0 mt-1 w-36 bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-[#E5E7EB] py-1.5 z-999 animate-in fade-in zoom-in-95 duration-150 origin-top-right">
                <button 
                  onClick={(e) => handleMenuAction(e, 'share')}
                  className="w-full text-left px-3.5 py-2 text-[12px] font-medium text-(--color-text-primary) hover:bg-gray-50 transition-colors"
                >
                  Share Course
                </button>
                <button 
                  onClick={(e) => handleMenuAction(e, 'reset')}
                  className="w-full text-left px-3.5 py-2 text-[12px] font-medium text-(--color-text-primary) hover:bg-gray-50 transition-colors"
                >
                  Reset Progress
                </button>
              </div>
            </>
          )}
        </div>

        <div className="relative w-28 h-24 sm:w-32 sm:h-28 rounded-lg overflow-hidden shrink-0 shadow-sm pointer-events-none">
          <img 
            src={course.image} 
            alt={course.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-1.5 left-1.5 backdrop-blur-md bg-white  text-black text-[9px] font-semibold px-1.5 py-0.5 rounded flex items-center tracking-wide">
            {course.lessons} Lessons
          </div>
        </div>

        <div className="flex flex-col flex-1 min-w-0">
          <div className="pr-8 pt-0.5">
            <h3 className="text-[13px] sm:text-[14px] font-medium text-(--color-text-primary) leading-snug line-clamp-2">
              {course.title}
            </h3>
          </div>

          <div className="mt-auto pt-3 flex items-end justify-between w-full gap-3 min-w-0">
            <div className="flex flex-col gap-1.5 w-full max-w-32.5">
              <span className="text-[10px] font-medium text-(--color-text-secondary) leading-none">
                {course.progress}% Complete
              </span>
              <div className="w-full h-1.5 bg-[#E5E7EB] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-(--color-brand-magenta) rounded-full transition-all duration-700 ease-out" 
                  style={{ width: `${course.progress}%` }} 
                />
              </div>
            </div>

            <button 
              aria-label="View course" 
              className="flex items-center justify-center p-1.5 rounded-full bg-purple-50 text-purple-700 transition-all duration-200 hover:bg-purple-100 hover:shadow-sm active:scale-90 shrink-0"
            >
              <ChevronRightIcon sx={{ fontSize: 18 }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
})

export default function Learn() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)

  const filteredCourses = activeFilter === 'all'
    ? COURSES
    : COURSES.filter(c => c.category === activeFilter)

  const displayedCourses = filteredCourses.slice(0, visibleCount)
  const hasMore = visibleCount < filteredCourses.length

  const handleFilterChange = useCallback((key: string) => {
    setActiveFilter(key)
    setVisibleCount(ITEMS_PER_PAGE)
  }, [])

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + ITEMS_PER_PAGE)
  }

  return (
    <div 
      className="flex-1 w-full h-full overflow-x-hidden overflow-y-auto bg-white [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      <div className="sticky top-0 z-30 bg-white ">
        <LearnTabs active={activeFilter} onChange={handleFilterChange} />
      </div>
      
      <div className="w-full pt-1 pb-8">
        {displayedCourses.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-10 text-center text-(--color-text-secondary)">
            <p className="text-[14px]">No courses available in this category.</p>
          </div>
        ) : (
          displayedCourses.map((course, index) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              index={index} 
            />
          ))
        )}

        {hasMore && (
          <div className="flex justify-center mt-8 mb-6 mx-2">
    
            <button 
              onClick={handleLoadMore}
              className="px-8 py-3 text-white text-[13px] font-bold tracking-wide rounded-lg bg-linear-to-r from-purple-500 via-purple-600 to-indigo-600 bg-size-[200%_auto] hover:bg-position-[right_center] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(147,51,234,0.35)] active:scale-95 active:translate-y-0 focus:outline-none"
            >
              Load More 
            </button>
          </div>
        )}
      </div>
    </div>
  )
}