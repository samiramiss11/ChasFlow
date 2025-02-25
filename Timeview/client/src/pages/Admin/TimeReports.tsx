import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const clientAction = () => async () => {}
import { ReduxStore } from '@/lib/store'

export const clientLoader = (store: ReduxStore) => async () => {
  store.getState().userState.user
  return null
}

const TimeReports = () => {
  const orders = [
    {
      id: 1,
      attributes: {
        datum: '2025-02-20T08:30:00Z',
        tid: '08:30 - 10:00',
        Programkod: 'CS101',
        Rum: 'Room A1',
      },
    },
    {
      id: 2,
      attributes: {
        datum: '2025-02-21T10:15:00Z',
        tid: '10:15 - 11:45',
        Programkod: 'MATH202',
        Rum: 'Room B2',
      },
    },
    {
      id: 3,
      attributes: {
        datum: '2025-02-22T13:00:00Z',
        tid: '13:00 - 14:30',
        Programkod: 'PHYS303',
        Rum: 'Room C3',
      },
    },
  ]
  return (
    <div className='m-4 bg-white'>
      <div className='mt-16'>
        <h4 className='mb-4 capitalize'>total orders : o</h4>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Address</TableHead>
              <TableHead className='w-[100px]'>Products</TableHead>
              <TableHead className='w-[100px]'>Cost</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => {
              const { datum, tid, Programkod, Rum } = order.attributes
              return (
                <TableRow
                  key={order.id}
                  className='even:bg-gray-100'
                >
                  <TableCell>{new Date(datum).toDateString()}</TableCell>
                  <TableCell>{tid}</TableCell>
                  <TableCell className='text-center'>{Programkod}</TableCell>
                  <TableCell>{Rum}</TableCell>
                  <TableCell>{}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default TimeReports
