import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Container,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  // InputAdornment,
  IconButton,
  Button,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
// import Preloader from "../components/Preloader";

function OrderList() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/orders");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((order) =>
    order.item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <TextField
          placeholder="Search Orders"
          value={searchTerm}
          onChange={handleSearch}
        />
        <Button onClick={fetchData}>
          <RefreshIcon />
        </Button>
      </Box>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          {filteredData.length === 0 ? (
            <div>
              <p>You haven't ordered anything yet.</p>
              <Link to="/shop">Order Now</Link>
            </div>
          ) : (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Order ID</TableCell>
                    <TableCell>Item</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredData.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>{order.id}</TableCell>
                      <TableCell>{order.item}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </>
      )}
    </Container>
  );
}

function OrderTracking() {
  const [isLoading, setIsLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [orderData, setOrderData] = useState(null);

  const handleTrackOrder = () => {
    setIsLoading(true);
    // Simulate a fetch call to backend to get order status
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
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
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
          style={{ marginTop: 16 }}
        >
          Track Order
        </Button>
        {isLoading && <CircularProgress />}
        {orderData && !isLoading && (
          <div style={{ marginTop: 16 }}>
            <h3>Order ID: {orderData.id}</h3>
            <p>Status: {orderData.status}</p>
            <p>Expected Delivery: {orderData.expectedDelivery}</p>
          </div>
        )}
        {!orderData && !isLoading && (
          <p>Please enter an Order ID to track your order.</p>
        )}
      </Box>
    </Container>
  );
}

export { OrderList, OrderTracking };