import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationButtonLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import {
  constructUrl,
  constructPrevOrNextUrl,
} from '@/utils/helpfull/Pagination'
import { useLocation } from 'react-router'
/**
 * consider implementation link or button
 * @returns
 */
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import { useState,useRef } from 'react'
import { cn } from '@/lib/utils'
import { useAppSelector } from '@/lib/hooks'
const SetPaginatedWeekCtrl = () => {
  const { search, pathname } = useLocation()
  //const numOfPages = 20 / usually from backend page offset pagination
  const numOfWeeksDisplayed = 10
  const numOfWeeks = 52
  const pages = Array.from({ length: numOfWeeks }, (_, index) => index + 1)

  const { day, week } = useAppSelector((state: RootState) => state.bookingState)
  const weekTest = 52
  //const page = 1 , page offset pagination usually give this.
  const [currentPage, setCurrentPage] = useState<number>(week)
  const relativepageOffset = Math.max(
  0, // ensure the offset doesn't go below 0
  week - Math.floor(numOfWeeksDisplayed) // calculate offset to center the week
);
  const [pageOffset, setPageOffset] = useState<number>(relativepageOffset)
   const pageInputRef = useRef<HTMLInputElement | null>(null);

  if (numOfWeeks < 2) return null

  // Slice only the portion of weeks to display

  const displayedWeeks = pages.slice(
    pageOffset,
    pageOffset + numOfWeeksDisplayed
  )

  const handleClick = ( ()=> {
    const targetElement = document.getElementById('section');
    if (targetElement) {
        const yOffset = 0 // Adjust based on your fixed header height
        const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });
  
  const renderPagination = displayedWeeks.map((pageNumber) => {
    const isActive = pageNumber === currentPage
    // const url = constructUrl({ pageNumber, search, pathname })

    // // Slice only the portion of weeks to display
    // const displayedWeeks = pages.slice(
    //   pageOffset,
    //   pageOffset + numOfWeeksDisplayed
    // )
    // const nextBatchOfWeeks = pageNumber + pageOffset
    // if (numOfWeeksDisplayed)
    return (
      <PaginationItem
        key={pageNumber}
        className='text-white'>
        <PaginationButtonLink
          size={'sm'}
          isActive={isActive}
          onClick={() => {
            setCurrentPage(pageNumber)
            handleClick()
          }} //className="inline-block min-w-[5ch] text-center"
        >
          V. {pageNumber < 10? `_${pageNumber}` : pageNumber}
        </PaginationButtonLink>
      </PaginationItem>
    )
  })
  // const { prevUrl, nextUrl } = constructPrevOrNextUrl({
  //   currentPage: page,
  //   pageCount: numOfPages,
  //   search,
  //   pathname,
  // })
  // console.log(prevUrl, nextUrl)

  // Ensure at least 10 pages are displayed
  const maxOffset = numOfWeeks - numOfWeeksDisplayed

  const handleNext = () => {
    if (pageOffset + numOfWeeksDisplayed < numOfWeeks) {
      setPageOffset((prevOffset) => {
        const newOffset = Math.min(prevOffset + numOfWeeksDisplayed, maxOffset)
        setCurrentPage(newOffset + 1) // Set current page to first item in new range
        return newOffset;
        
      })
      
    }
  }
  // console.log(pageOffset, 'page-offset')
  const handlePrev = () => {
    if (pageOffset > 0) {
      setPageOffset((prevOffset) => {
        const newOffset = Math.max(prevOffset - numOfWeeksDisplayed, 0)
        setCurrentPage(newOffset + 1) // Update current page to first item in range
        return newOffset;
      })
    }
  }
  
  return (
    <>
      <input
        type='hidden'
        name='formType'
        value='week'
      />
      <input
        type='hidden'
        name='week'
        value={currentPage}
      />
      <Pagination className='mt-16'>
        <PaginationContent className='bg-black rounded-full'>
          <button
            type='button'
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={cn(
              'flex items-center gap-1 px-3 py-2 rounded text-white',
              currentPage === 1
                ? 'pointer-events-none opacity-50'
                : ''
            )}
            aria-label='Previous Page'>
            <ChevronLeft className='h-4 w-4' />
            <span></span>
          </button>

          {/* <PaginationItem>
          <PaginationPrevious href={prevUrl} />
        </PaginationItem> */}
          {renderPagination}
          {/* <PaginationItem>
          <PaginationNext href={nextUrl} />
        </PaginationItem> */}
          <button
            type='button'
            onClick={handleNext}
            disabled={pageOffset >= maxOffset}
            className={cn(
              'flex items-center gap-1 px-3 py-2  rounded text-white',
              currentPage >= 43
                ? 'opacity-50 cursor-not-allowed'
                : ''
            )}
            aria-label='Next Page'>
            <span></span>
            <ChevronRight className='h-4 w-4' />
          </button>
        </PaginationContent>
      </Pagination>
    </>
  )
}

export default SetPaginatedWeekCtrl


import { useEffect } from 'react'
import { RootState } from '@/lib/store';

// const getCurrentWeek = (): number => {
//   const today = new Date();
//   const startOfYear = new Date(today.getFullYear(), 0, 1); // January 1st
//   const pastDays = Math.floor((today.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24));
//   return Math.ceil((pastDays + startOfYear.getDay() + 1) / 7);
// };
// const SetPaginatedWeekCtrl = () => {

//     const [currentPage, setCurrentPage] = useState<number>(() => getCurrentWeek());
//   const [pageOffset, setPageOffset] = useState<number>(currentPage % 10)

//   const startWeek = (currentPage - 1)  + 1;
// const displayedWeeks = Array.from({ length: numOfWeeksDisplayed }, (_, i) => startWeek + i);
//   // const displayedWeeks = pages.slice(
//   //   pageOffset,
//   //   pageOffset + numOfWeeksDisplayed