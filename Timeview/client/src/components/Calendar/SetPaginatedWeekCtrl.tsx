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
import { useState } from 'react'
import { cn } from '@/lib/utils'
const SetPaginatedWeekCtrl = () => {
  const { search, pathname } = useLocation()
  //const numOfPages = 20 / usually from backend page offset pagination
  const numOfWeeksDisplayed = 20
  const numOfWeeks = 52
  const pages = Array.from({ length: numOfWeeks }, (_, index) => index + 1)
  //const page = 1 , page offset pagination usually give this.
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pageOffset, setPageOffset] = useState<number>(0)
  console.log(currentPage)
  if (numOfWeeks < 2) return null

  // Slice only the portion of weeks to display
  const displayedWeeks = pages.slice(
    pageOffset,
    pageOffset + numOfWeeksDisplayed
  )

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
        className='text-white'
      >
        <PaginationButtonLink
          isActive={isActive}
          onClick={() => setCurrentPage(pageNumber)}
        >
          V. {pageNumber}
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

  const handlePrev = () => {
    if (pageOffset > 0) {
      setPageOffset((prev) => prev - numOfWeeksDisplayed)
      setCurrentPage(pageOffset) // Set to the first week of the new batch
    }
  }

  const handleNext = () => {
    if (pageOffset + numOfWeeksDisplayed < numOfWeeks) {
      setPageOffset((prev) => prev + numOfWeeksDisplayed)
      setCurrentPage(pageOffset + numOfWeeksDisplayed + 1) // Set to the first week of the new batch
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
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-gray-100'
            )}
            aria-label='Previous Page'
          >
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
            disabled={currentPage === numOfWeeks}
            className={cn(
              'flex items-center gap-1 px-3 py-2  rounded text-white',
              currentPage === 41
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-gray-100'
            )}
            aria-label='Next Page'
          >
            <span></span>
            <ChevronRight className='h-4 w-4' />
          </button>
        </PaginationContent>
      </Pagination>
    </>
  )
}

export default SetPaginatedWeekCtrl
