import { getUserData } from '@/app/server/actions'
import UserList from '@/views/apps/user/list'
import ComingSoon from '@/views/pages/misc/ComingSoon'

const UserGroups = async () => {
  const data = await getUserData()

  return <UserList userData={data} />
}

export default UserGroups
