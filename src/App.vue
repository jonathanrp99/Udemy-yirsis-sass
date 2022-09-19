<template>
<div class="container">
  <h1>Crypto quoter</h1>
  <Grid>
    <Form @info-currency="obtain" />
    <Data 
    :crypto="info.crypto"
    :currency="info.currency"
    :img="info.img"
    :price="info.price"
    />
  </Grid>
</div>
<ReloadPrompt />
</template>

<style scoped>

</style>>


<script>
  import Form from "./components/Form.vue"
  import Data from "./components/Data.vue"
  import Grid from "./components/Grid.vue"
  import ReloadPrompt from "./components/ReloadPrompt.vue"
  
  export default {
  // if someone is interested in why did i use vue 2 syntax here is beacause i wasnt able to make the names change when you pick a currency
  components: { Form, Data, Grid, ReloadPrompt },
  data: () => ({
    info: {
      crypto: "*",
      currency: "*",
      img: "/media/37746251/btc.png",
      price: 0,
    },
  }),
  methods: {
    async obtain(crypto, currency) {
      const response = await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${ encodeURI(crypto) }&tsyms=${ encodeURI (currency) }`)
      const { RAW } = await response.json()
      const dataCrypto = RAW[crypto]
      const data = dataCrypto[currency]
      console.log(data)

      this.info.crypto = crypto
      this.info.currency = currency
      this.info.img = data.IMAGEURL
      this.info.price = data.PRICE

   }
  }
}
</script>

<style>

</style>