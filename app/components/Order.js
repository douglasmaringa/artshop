
import { useUser } from '@clerk/nextjs';
import { getOrdersByEmail } from '@/sanity/sanity-utils';
import { currentUser } from '@clerk/nextjs';

export default async function Order() {
  const user = await currentUser();
 
  if (!user) return <div>Not logged in</div>;

  const fetchedOrders = await getOrdersByEmail(user?.emailAddresses[0]?.emailAddress);

  return (
    <div className='max-w-3xl mx-auto mt-20'>
      <h1 className="text-3xl text-center font-semibold text-[#5B20B6] mb-6">Your Orders Page</h1>

      <table className="w-full border-collapse">
        <thead>
          <tr className="text-[#5B20B6] border-b border-gray-200">
            <th className="py-2 px-4">Product</th>
            <th className="py-2 px-4">Quantity</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Payment Status</th>
            <th className="py-2 px-4">Delivery Status</th>
          </tr>
        </thead>
        <tbody>
          {fetchedOrders.map((order) => (
            <tr key={order._id} className="hover:bg-gray-50 text-center border-b border-gray-300 text-[#5B20B6]">
              <td className="py-2 px-4 flex items-center">
                {order.name}
                
              </td>
              <td className="py-2 px-4">{order.qty}</td>
              <td className="py-2 px-4">${order.price}</td>
              <td className="py-2 px-4">
                {
                  order.paid ? (
                    <span className="text-green-500">Paid</span>
                  ) : (
                    <span className="text-red-500">Unpaid</span>
                  )
                }
                </td>
                <td className="py-2 px-4">
                {
                  order.delivered ? (
                    <span className="text-green-500">Delivered</span>
                  ) : (
                    <span className="text-red-500">In transit</span>
                  )
                }
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


