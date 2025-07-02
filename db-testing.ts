import { db, cartTable } from './db'
import { eq } from "drizzle-orm"

async function fetchCart() {
    const result = await db
        .update(cartTable)
        .set({quantity: 50})
        .where(eq(cartTable.id,"5"))
        .run()

    return result
}

// 👇 Βάλε await γιατί είναι async
fetchCart().then(response => {
    if (!response) {
        throw new Error("Mple")
    }
}).catch(err => {
    console.error("Σφάλμα:", err)
})
