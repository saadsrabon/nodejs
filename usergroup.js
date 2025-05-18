const orders = [
  { orderId: 101, customer: 'Saad', status: 'pending' },
  { orderId: 102, customer: 'Arafat', status: 'shipped' },
  { orderId: 103, customer: 'Srishti', status: 'pending' },
  { orderId: 104, customer: 'Nadia', status: 'cancelled' },
  { orderId: 105, customer: 'Saad', status: 'shipped' },
];

// amar ki ki dhoroner status ache seita ami ber kore niboc

const orderStatus = orders.map((order) => order.status); // on
const uniqueOrderStatus = [...new Set(orderStatus)];
// console.log(uniqueOrderStatus); // ['pending', 'shipped', 'cancelled']
const allOrders={}
uniqueOrderStatus.forEach((status) => {  //on
    const filteredOrders = orders.filter((order) => order.status === status); //on 
        allOrders[status] = filteredOrders;
    });
   // on2

    // console.log(allOrders);


    // /reduce  

    const categoryWiseOrders = orders.reduce((acc, order) => {
        const { status } = order;
        if (!acc[status]) {
            acc[status] = []; // {pending:[]}
        }
        acc[status].push(order);
        return acc;

    }, {});

    console.log(categoryWiseOrders);

    const a =[1,2,3,4,5,6,7,8,9]

    const sumss = a.reduce(function(total, currentValue, currentIndex, arr){
        console.log(`Current index: ${currentIndex}`);
        console.log(`Current value: ${currentValue}`);
        console.log(`Total: ${total}`);
        console.log(`Array: ${arr}`);
         sum = Number(total) + Number(currentValue);
        // return total + currentValue;
        return sum;
    }, 0)

    console.log(sumss);