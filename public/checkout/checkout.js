import "../common/sandbox-header.js"

const payEl = document.getElementById("pay")
payEl.style.display = ""

payEl.addEventListener("click", async () => {
  requestPayment()
})

async function requestPayment() {
  const request = new PaymentRequest(
    [
      {
        supportedMethods: "https://google.com/pay",
        data: {
          environment: "TEST",
          apiVersion: 2,
          apiVersionMinor: 0,
          merchantInfo: {
            merchantName: "Example Merchant",
          },
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: [
                  "AMEX",
                  "DISCOVER",
                  "INTERAC",
                  "JCB",
                  "MASTERCARD",
                  "VISA",
                ],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                // Check with your payment gateway on the parameters to pass.
                // @see {@link https://developers.google.com/pay/api/web/reference/request-objects#gateway}
                parameters: {
                  gateway: "example",
                  gatewayMerchantId: "exampleGatewayMerchantId",
                },
              },
            },
          ],
        },
      },
      {
        supportedMethods: "https://apple.com/apple-pay",
        data: {
          version: 3,
          merchantIdentifier: "merchant.com.example",
          merchantCapabilities: [
            "supports3DS",
            "supportsCredit",
            "supportsDebit",
          ],
          supportedNetworks: ["amex", "discover", "masterCard", "visa"],
          countryCode: "US",
        },
      },
    ],
    {
      id: "order-123",
      displayItems: [
        {
          label: "Example item",
          amount: { currency: "USD", value: "1.00" },
        },
      ],
      total: {
        label: "Total",
        amount: { currency: "USD", value: "1.00" },
      },
    },
    {
      requestPayerName: true,
      requestPayerEmail: true,
      requestPayerPhone: true,
    },
  )

  if (!(await request.canMakePayment())) {
    alert("No supported payment methods.")
    return
  }

  await request
    .show()
    .then((response) => response.complete("fail"))
    .catch((error) => alert(error))
}
