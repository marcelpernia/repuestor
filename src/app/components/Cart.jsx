import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ShoppingCart, PackageOpen, Trash2 } from "lucide-react"

export default function Cart () {

  const CART = [
    {
      id: 1,
      title: 'Timer 3 cables',
      image: 'https://res.cloudinary.com/ddhtcxk7g/image/upload/b_white/bo_40px_solid_white/c_pad,w_640,h_640,g_center/f_webp/q_auto/v1716384570/Timer_3_cables_7652683205?_a=BAVFB+DW0',
      price: 100,
      quantity: 1,
      stock: 10,
    },
    {
      id: 2,
      title: 'timer 6 cables',
      image: 'https://res.cloudinary.com/ddhtcxk7g/image/upload/b_white/bo_40px_solid_white/c_pad,w_640,h_640,g_center/f_webp/q_auto/v1716386636/Timer_6_cables_ceca7f905b?_a=BAVFB+DW0',
      price: 200,
      quantity: 2,
      stock: 5,
    },
    {
      id: 3,
      title: 'Transmisión 10 dientes PG',
      image: 'https://res.cloudinary.com/ddhtcxk7g/image/upload/b_white/bo_40px_solid_white/c_pad,w_640,h_640,g_center/f_webp/q_auto/v1716392115/Transmision_10_dientes_PG_420a187cfe?_a=BAVFB+DW0',
      price: 300,
      quantity: 1,
      stock: 3,
    },
  ]

 return (
		<Sheet>
			<SheetTrigger>
				<ShoppingCart className="text-brand-700" />
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Carrito de compras</SheetTitle>

					{CART.length === 0 ? (
						<SheetDescription>
							<div className="flex flex-col gap-4 items-center text-center p-4 border border-slate-100 rounded">
								<PackageOpen
									className="text-slate-300"
									size={60}
								/>
								<h3 className="text-balance">
									Su carrito esta vacío.
								</h3>
							</div>
						</SheetDescription>
					) : (
						<div className="space-y-2">
							{CART.map((product) => (
								<div
									key={product.id}
									className="flex gap-4 items-center p-2 border border-slate-100 rounded"
								>
									<img
										src={product.image}
										alt={product.title}
										className="w-16 h-16 object-cover rounded flex-none"
									/>
									<div className="space-y-2 w-full">
										<h3 className="text-balance font-bold">
											{product.title}
										</h3>
										<p className="text-slate-700 font-semibold text-sm">
											Precio: ${product.price}
										</p>
										<div className="flex flex-row items-center justify-between">
											<select 
                      defaultValue={product.quantity}
                      className="bg-white border border-gray-300 rounded-md h-8 flex-none text-sm active:text-red-100">
												{[...Array(product.stock)].map(
													(_, i) => (
														<option
                              value={i + 1}
															key={i}
														>
															{i + 1}{" "}
															{i === 0
																? "unidad"
																: "unidades"}
														</option>
													)
												)}
											</select>

                      <div>
                        <Trash2 size={24} className="text-red-600 cursor-pointer"/>
                      </div>
										</div>
									</div>
								</div>
							))}
						</div>
					)}
				</SheetHeader>
			</SheetContent>
		</Sheet>
 );
}