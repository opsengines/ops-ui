import { getPermissionsData, getUserData } from '@/app/server/actions'
import Permissions from '@/views/apps/permissions'
import ComingSoon from '@/views/pages/misc/ComingSoon'

const Roles = async () => {
  const data = await getPermissionsData()
  const rolesData = await getUserData()

  return <Permissions permissionsData={data} rolesData={rolesData} />
}

export default Roles
