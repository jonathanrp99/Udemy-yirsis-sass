<template>
    <div>
      <form @submit.prevent="$emit('infoCurrency', crypto, currency)">
        <div>
          <label>
            National currency: 
          </label>
          <select v-model="currency" required>
            <option value="" disabled selected>
              Select a currency
            </option>
            <option>EUR</option>
            <option>USD</option>
            <option>MXN</option>
          </select>
        </div>
        <div>
          <label>
            Crypto currency: 
          </label>
          <select v-model="crypto" required>
            <option value="" disabled selected>
              Select a currency
            </option>
            <option>BTC</option>
            <option>ETH</option>
            <option>LTC</option>
          </select>
        </div>
        <div>
          <button type="submit" style="margin-top: 4em;">
            Quotate
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
import { ref } from "@vue/reactivity";

    const currency = ref("")
    const crypto = ref("")

  </script>
  
  <style>
  
  </style>