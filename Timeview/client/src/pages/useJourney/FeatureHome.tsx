import {
  HeroLayout,
  RoundedHeroWrapper,
  RoundBallPositioningWrapper,
} from '@/components/Shared'
import { Link } from 'react-router-dom'
// const featuredProductsQuery = {
//   queryKey: [''],
//   queryFn: (): Promise<any> =>
//        customFetch('' + '')
// }

export const clientLoader = (queryClient: any) => async () => {
  // const response = await queryClient.ensureQueryData(featuredProductsQuery)
  // const products = response.data.data

  //{ products }
  return null
}

import { JOURNY_LINSK_CONSTANTS } from '@/utils/links'
import { Button } from '@/components/ui/button'
const FeatureHome = () => {
  return (
    <RoundedHeroWrapper>
      <HeroLayout>
        <div className='flex align-items  justify-center items-center gap-4 pt-8'>
          <Button
            size='sm'
            variant='default'
            className='self-end mb-2 rounded-full chasBlue'
          >
            <Link to={JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP2}>Boka Rum</Link>
          </Button>
          <Button
            size='sm'
            variant='default'
            className='self-end mb-2 rounded-full chasBlue'
          >
            {' '}
            <Link to={'../' + JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP1}>
              Redigera Rokade Rum
            </Link>
          </Button>
        </div>
      </HeroLayout>
    </RoundedHeroWrapper>
  )
}
export default FeatureHome
