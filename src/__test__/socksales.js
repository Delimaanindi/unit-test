import React from 'react'

export default function sockMerchant(n, ar) {
    let socks = {};
    let npairs = 0;
    for (let element of ar) {
         socks[element] = socks[element] + 1 || 1;
         if (socks[element] % 2 === 0) {
         npairs += 1;
    }
  }
return npairs;
}

