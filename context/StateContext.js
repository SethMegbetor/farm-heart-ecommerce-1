import React, { createContext, useContext, useState, useEffect } from "react";

import { toast } from "react-hot-toast";

const Constext = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState();
};
