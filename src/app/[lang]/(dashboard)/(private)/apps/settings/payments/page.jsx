import { getInvoiceData } from '@/app/server/actions'
import InvoiceList from '@/views/apps/invoice/list'
import ComingSoon from '@/views/pages/misc/ComingSoon'

const Payments = async () => {
  const data = await getInvoiceData()

  return <ComingSoon invoiceData={data} />
}

export default Payments
