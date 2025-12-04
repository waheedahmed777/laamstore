'use client';

import { CartProvider } from './state/CartContext';

export default function ClientWrapper({ children }) {
  return <CartProvider>{children}</CartProvider>;
}
