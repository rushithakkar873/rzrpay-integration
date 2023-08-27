import './App.css'

function App() {
  const paymentHandler = async (e) => {
    e.preventDefault();
    const data = {
      "id": "order_MDxcR0y36Z1UHf",
      "entity": "order",
      "amount": 50000,
      "amount_paid": 0,
      "amount_due": 50000,
      "currency": "INR",
      "receipt": "rcptid_11",
      "offer_id": null,
      "status": "created",
      "attempts": 0,
      "notes": [],
      "created_at": 1689333863
    }

    // const options = {
    //   "key": "rzp_test_KaNot4PptHSZnQ", // Enter the Key ID generated from the Dashboard
    //   "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    //   "currency": "INR",
    //   "name": "Acme Corp", //your business name
    //   "description": "Test Transaction",
    //   "image": "https://example.com/your_logo",
    //   "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    //   "handler": function (response) {
    //     alert(response.razorpay_payment_id);
    //     alert(response.razorpay_order_id);
    //     alert(response.razorpay_signature);
    //   },
    //   "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
    //     "name": "Gaurav Kumar", //your customer's name
    //     "email": "gaurav.kumar@example.com",
    //     "contact": "9000090000"  //Provide the customer's phone number for better conversion rates 
    //   },
    //   "notes": {
    //     "address": "Razorpay Corporate Office"
    //   },
    //   "theme": {
    //     "color": "#3399cc"
    //   }
    // };
      const options = {
        "key": "rzp_test_KaNot4PptHSZnQ", // Enter the Key ID generated from the Dashboard
        "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Acme Corp", //your business name
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url": "http://localhost:5173/",
        "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
          "name": "Gaurav Kumar", //your customer's name
          "email": "gaurav.kumar@example.com",
          "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
        },
        "notes": {
          "address": "Razorpay Corporate Office"
        },
        "theme": {
          "color": "#3399cc"
        }
      };
      const rzp1 = new Razorpay(options);
      rzp1.open();
    };

    return (
      <>
        <button onClick={(e) => paymentHandler(e)}>Pay Now</button>
      </>
    )
  }

  export default App;