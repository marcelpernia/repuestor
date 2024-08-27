'use client'
import { useState, useEffect } from  'react'
import { useShallow } from 'zustand/react/shallow'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ShoppingCart, PackageOpen, Trash2 } from "lucide-react"
import { useProductStore } from "@/lib/store";

export default function Cart () {
	const cart = useProductStore(state => state.cart)
	const products = useProductStore(useShallow(state => state.products))
	const removeProduct = useProductStore(state => state.removeProduct)
	const updateProductQty = useProductStore(state => state.updateProductQty)
	const updateCart = useProductStore(state => state.updateCart)

	const handleRemove = id => {
		removeProduct(id)
	}

	const handleChange = (e, id) => {
		const value = parseInt(e.target.value)
		updateProductQty(id, value)
	}

	const handleClose = () => {
		updateCart(false)
	}

 return (
		<Sheet open={cart} onOpenChange={handleClose}>
			<SheetTrigger>
				<ShoppingCart className="text-brand-700" />
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Carrito de compras</SheetTitle>

					{products.length === 0 ? (
						<>
							<div className="flex flex-col gap-4 items-center text-center p-4 border border-slate-100 rounded">
								<PackageOpen
									className="text-slate-300"
									size={60}
								/>
								<h3 className="text-balance">
								<SheetDescription>Su carrito esta vacío.</SheetDescription>
								</h3>
							</div>
						</>
					) : (
						<div className="space-y-2">
							{products.map((product) => (
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
											onChange={(e) => handleChange(e, product.id)} 
                      defaultValue={product.quantity}
                      className="bg-white border border-gray-300 rounded-md h-8 flex-none text-sm active:text-red-100">
												{[...Array(product.stock)].map(
													(_, i) => (
														<option
                              value={i + 1}
															key={i + 1}
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
                        <Trash2 onClick={() => handleRemove(product.id)} size={24} className="text-red-600 cursor-pointer"/>
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