import { OrderDetail } from "@/app/ui/cart/OrderDetail";
import { Payment } from "@/app/ui/cart/Payment";

export default function Cart() {
  return (
    <div className="flex flex-col px-3 md:grid md:grid-cols-2 md:grid-rows-2 gap-2">
      <OrderDetail />
      <Payment />
    </div>
  );
}
