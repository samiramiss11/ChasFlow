import { fetchConsultants,deleteConsultant } from '@/services/api'
import { useLoaderData, Form, redirect } from 'react-router-dom'
import { JOURNY_LINSK_CONSTANTS } from '@/utils/links'
// export const clientAction = () =>
//   async function action({ params }: any) {
export const clientAction = async ({ params }: any) => {
      console.log(params)
    try {
  
    await deleteConsultant({id:params.id})
  } catch {
return redirect(`/${JOURNY_LINSK_CONSTANTS.ADMIN_STEP0}/${JOURNY_LINSK_CONSTANTS.ADMIN_STEP4}`)  }

return redirect(`/admin-page/utbildare`)
}