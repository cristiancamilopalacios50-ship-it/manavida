export async function calculateShippingPrice(
  productId: number,
  presentationValue: string,
  quantity: number,
  destinationCode: string
) {
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const today = new Date();

const day = String(today.getDate()).padStart(2, "0");

const month = String(today.getMonth() + 1).padStart(2, "0");

const year = today.getFullYear();

const formattedDate = `${day}-${month}-${year}`;

  // 1. Obtener peso calculado
  const weightResponse = await fetch(
    `${API_URL}/api/products/calculate-shipping`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        productId,
        presentationValue,
        quantity,
      }),
    }
  );

  const weightData = await weightResponse.json();

  const totalWeight = weightData.totalWeight;

  // 2. Cotizar en Inter Rapidísimo
  const interResponse = await fetch(
    `https://www3.interrapidisimo.com/ApiServInter/api/Cotizador/ResultadoListaCotizar/76622000/${destinationCode}/${totalWeight}/0/${totalWeight}/${formattedDate}`
  );

  const shippingData = await interResponse.json();

  return shippingData;
}