import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { constructUrl, constructPrevOrNextUrl } from '@/utils/Pagination'
import { useLocation } from 'react-router'
/**
 * consider implementation link or button
 * @returns 
 */
const SetPaginatedWeekCtrl = () => {
   const { search, pathname } = useLocation()
   const numOfPages = 20
  const pages = Array.from({ length: numOfPages }, (_, index) => index + 1)
const page = 1
  if (numOfPages < 2) return null

  const renderPagination = pages.map((pageNumber) => {
    const isActive = pageNumber === page
    const url = constructUrl({ pageNumber, search, pathname })

    return (
      <PaginationItem key={pageNumber}>
        <PaginationLink href={url} isActive={isActive}>
          {pageNumber}
        </PaginationLink>
      </PaginationItem>
    )
  })
  const { prevUrl, nextUrl } = constructPrevOrNextUrl({
    currentPage: page,
    pageCount: numOfPages,
    search,
    pathname,
  })
  console.log(prevUrl, nextUrl)
  return (
    <Pagination className='mt-16'>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={prevUrl} />
        </PaginationItem>
        {renderPagination}
        <PaginationItem>
          <PaginationNext href={nextUrl} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default SetPaginatedWeekCtrl