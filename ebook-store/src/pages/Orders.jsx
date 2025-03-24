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
  Button,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchIcon from "@mui/icons-material/Search";
import "./order.css"; // Add styles

const OrderList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:8080/customer/orders",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredOrders = orders.filter((order) =>
    order.item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="order-list-container">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <TextField
          placeholder="Search Orders"
          value={searchTerm}
          onChange={handleSearch}
          InputProps={{
            startAdornment: <SearchIcon />,
          }}
          className="search-bar"
        />
        <Button
          variant="contained"
          onClick={fetchData}
          startIcon={<RefreshIcon />}
        >
          Refresh
        </Button>
      </Box>

      {isLoading ? (
        <CircularProgress />
      ) : filteredOrders.length === 0 ? (
        <Paper className="no-orders">
          <Typography variant="h6">
            You haven't ordered anything yet.
          </Typography>
          <Link to="/cartpage" className="order-now-link">
            Order Now
          </Link>
        </Paper>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell>Item</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.item}</TableCell>
                  <TableCell>{order.quantity}</TableCell>
                  <TableCell>₹{order.price}</TableCell>
                  <TableCell>{order.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default OrderList;
