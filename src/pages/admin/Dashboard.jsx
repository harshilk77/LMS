import { Card, CardHeader, CardTitle } from '@/components/ui/card'

const Dashboard = () => {
return (
     <div className='mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
          <Card>
               <CardHeader>
                    <CardTitle>
                         Sales Overview
                    </CardTitle>
               </CardHeader>
          </Card>
     </div>
)
}

export default Dashboard
