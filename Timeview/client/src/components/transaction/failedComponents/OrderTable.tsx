const OrderTable = ({ allbooking }: any) => {}

export default OrderTable

{
  /* <div className='p-4 space-y-4'>
                {batchData.map((entry, index) => (
                  <div
                    key={index}
                    className='p-4 border rounded-lg shadow'
                  >
                    <h3 className='text-lg font-semibold'>
                      Week {entry.week}, Day {entry.day}
                    </h3>
                    <ul className='mt-2 space-y-2'>
                      {Object.entries(entry.rooms).map(
                        ([room, details]: [string, any]) => {
                          const { selectedInterval } = details
                          const startTime = selectedInterval[0] // First time
                          const endTime =
                            selectedInterval[selectedInterval.length - 1] // Last time
                          return (
                            <li
                              key={room}
                              className='pl-4 border-l-2 border-blue-500'
                            >
                              <strong>{room}</strong>: {startTime} - {endTime}
                            </li>
                          )
                        }
                      )}
                    </ul>
                  </div>
                ))}
              </div> */
}
{
  /* <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className='w-[100px]'>Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className='text-right'>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className='font-medium'>INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className='text-right'>$250.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table> */
}

//  const batchData = [
//    {
//      day: '1',
//      week: '15',
//      rooms: {
//        room3: {
//          selectedInterval: [
//            '9.00-9.55',
//            '11.00-11.55',
//            '12.00-12.55',
//            '13.00-13.55',
//          ],
//        },
//        room4: {
//          selectedInterval: [
//            '9.00-9.55',
//            '10.00-10.55',
//            '11.00-11.55',
//            '12.00-12.55',
//          ],
//        },
//        room1: {
//          selectedInterval: [
//            '16.00-16.55',
//            '17.00-17.55',
//            '18.00-18.55',
//            '19.00-20.00',
//          ],
//        },
//      },
//    },
//    {
//      day: '1',
//      week: '17',
//      rooms: {
//        room4: {
//          selectedInterval: [
//            '9.00-9.55',
//            '10.00-10.55',
//            '11.00-11.55',
//            '12.00-12.55',
//            '16.00-16.55',
//            '18.00-18.55',
//          ],
//        },
//      },
//    },
//  ]
