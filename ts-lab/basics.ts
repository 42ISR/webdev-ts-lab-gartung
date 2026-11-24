type OrderStatus = "new" | "cooking" | "delivering" | "done" | "cancelled"

function statusLabel(status: OrderStatus): string {
  switch (status) {
    case "new":
      return "новый"
    case "cooking":
      return "готовится"
    case "delivering":
      return "вв доставке"
    case "done":
      return "завершён"
    case "cancelled":
      return "отменён"
  }
}
console.log(statusLabel("new"))
console.log(statusLabel("cooking"))
console.log(statusLabel("delivering"))
console.log(statusLabel("done"))
console.log(statusLabel("cancelled"))

function orderTotal(price: number, quantity: number, deliveryFee: number = 0): number {
  return price * quantity + deliveryFee
}
console.log(orderTotal(250,2,150))
console.log(orderTotal(250,2))

function isFinalStatus(status: OrderStatus): boolean {
  return status === "done" || status === "cancelled"
}

console.log(isFinalStatus("done"))
console.log(isFinalStatus("new"))
