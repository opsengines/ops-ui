import { getPermissionsData } from '@/app/server/actions'
import Permissions from '@/views/apps/permissions'
import ComingSoon from '@/views/pages/misc/ComingSoon'

const Roles = async () => {
  const data = await getPermissionsData()

  return <Permissions permissionsData={data} />
}

export default Roles
