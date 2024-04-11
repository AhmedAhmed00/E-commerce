export function trimTitle(title = "Good Item") {
    title = title.split(" ").splice(0, 2).join(" ")
    return title
}
export function formatPrice(price) {
    price = new Intl.NumberFormat('ar-EG', {
        style: "currency",
        currency: "EGP",
    }).format(price)
    return price

}