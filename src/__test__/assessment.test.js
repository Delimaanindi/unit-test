import React from "react";
import sockMerchant from "./socksales";

test('shall give the correct number of pair of socks', () => {
    expect(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3);
  });