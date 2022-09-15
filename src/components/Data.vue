<template>
  <div class="info">
    <h2>Info...</h2>
    <h3>
     <span class="crypto">{{crypto}}</span> 
       -
    <span class="currency">{{currency}}</span>
    </h3>
    <img :src="`https://www.cryptocompare.com/media/37746238/eth.png`">
    <p>
      Price: <strong>{{price}}</strong>
    </p>
  </div>
</template>

<script setup>
  const props = defineProps({
    crypto: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  })
</script>