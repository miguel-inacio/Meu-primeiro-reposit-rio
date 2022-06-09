const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

//Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".



const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliverer = order.order.delivery.deliveryPerson;
  const receiver = order.name;
  const phoneNumber = order.phoneNumber;
  const addressStreet = order.address.street;
  const addressNumber = order.address.number;
  const addressApartment = order.address.apartment;

  return `Olá ${deliverer}, entrega para: ${receiver}, Telefone: ${phoneNumber}, no endereço: ${addressStreet}, Nº ${addressNumber}, apartamento ${addressApartment}.`;
}

console.log(customerInfo(order));

//"Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  let newReceiver =  order.name;
  newReceiver = 'Luiz Silva';
  let totalPayment = order.payment.total
  totalPayment = 'R$ 50,00';
  const pizzas = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type;

  return `Olá ${newReceiver}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é ${totalPayment}`;

}

console.log(orderModifier(order));