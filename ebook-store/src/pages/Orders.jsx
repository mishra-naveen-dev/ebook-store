import React from "react";
import "./order.css"; // Import styles

const OrdersPage = () => {
  // Static order data (Replace with API data when needed)
  const orders = [
    {
      order_id: 1,
      user_name: "Narayan Patel",
      total_price: 1500.99,
      status: "completed",
      created_at: "2025-03-23",
      items: [
        {
          order_item_id: 101,
          book_name: "The Great Gatsby",
          quantity: 2,
          price: 499.99,
        },
        {
          order_item_id: 102,
          book_name: "Atomic Habits",
          quantity: 1,
          price: 499.99,
        },
      ],
    },
    {
      order_id: 2,
      user_name: "Rahul Sharma",
      total_price: 799.99,
      status: "pending",
      created_at: "2025-03-22",
      items: [
        {
          order_item_id: 103,
          book_name: "The Alchemist",
          quantity: 1,
          price: 799.99,
        },
      ],
    },
  ];

  return (
    <div className="orders-container mt-2">
      <h1>My Orders</h1>

      {orders.length === 0 ? (
        <p className="no-orders">No orders found.</p>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order.order_id} className="order-card">
              <h2>Order #{order.order_id}</h2>
              <p>
                <strong>Customer:</strong> {order.user_name}
              </p>
              <p>
                <strong>Total Price:</strong> ₹{order.total_price.toFixed(2)}
              </p>
              <p className={`status ${order.status}`}>
                {order.status.toUpperCase()}
              </p>
              <p>
                <strong>Ordered On:</strong> {order.created_at}
              </p>

              <div className="order-items">
                <h3>Items:</h3>
                <ul>
                  {order.items.map((item) => (
                    <li key={item.order_item_id}>
                      {item.book_name} (x{item.quantity}) - ₹
                      {item.price.toFixed(2)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
