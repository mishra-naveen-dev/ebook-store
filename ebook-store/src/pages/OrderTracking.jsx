import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  CircularProgress,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import "./order.css"; // Add styles

const OrderTracking = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [orderData, setOrderData] = useState(null);

  const handleTrackOrder = () => {
    if (!orderId.trim()) return;

    setIsLoading(true);
    setTimeout(() => {
      const mockOrderData = {
        id: orderId,
        status: "Shipped",
        expectedDelivery: "2024-07-10",
      };
      setOrderData(mockOrderData);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Container className="order-tracking-container">
      <Paper className="tracking-box">
        <Typography variant="h5" gutterBottom>
          Track Your Order
        </Typography>
        <TextField
          label="Enter Order ID"
          variant="outlined"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          fullWidth
        />
        <Button
          variant="contained"
          onClick={handleTrackOrder}
          disabled={isLoading}
          className="track-button"
        >
          Track Order
        </Button>

        {isLoading && <CircularProgress className="loading-spinner" />}

        {orderData && !isLoading && (
          <Paper className="order-details">
            <Typography variant="h6">Order ID: {orderData.id}</Typography>
            <Typography>Status: {orderData.status}</Typography>
            <Typography>
              Expected Delivery: {orderData.expectedDelivery}
            </Typography>
          </Paper>
        )}

        {!orderData && !isLoading && (
          <Typography variant="body2" className="info-text">
            Please enter an Order ID to track your order.
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default OrderTracking;
