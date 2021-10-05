<template>
  <div class="calculator">
    <Display :value="displayValue"></Display>
    <Button label="AC" triple @onClick="clearMemory"></Button>
    <Button label="/" operation @onClick="setOperation"></Button>
    <Button label="7" @onClick="addDigit"></Button>
    <Button label="8" @onClick="addDigit"></Button>
    <Button label="9" @onClick="addDigit"></Button>
    <Button label="*" operation @onClick="setOperation"></Button>
    <Button label="4" @onClick="addDigit"></Button>
    <Button label="5" @onClick="addDigit"></Button>
    <Button label="6" @onClick="addDigit"></Button>
    <Button label="-" operation @onClick="setOperation"></Button>
    <Button label="1" @onClick="addDigit"></Button>
    <Button label="2" @onClick="addDigit"></Button>
    <Button label="3" @onClick="addDigit"></Button>
    <Button label="+" operation @onClick="setOperation"> </Button>
    <Button label="0" double @onClick="addDigit"></Button>
    <Button label="." @onClick="addDigit"></Button>
    <Button label="=" operation @onClick="setOperation"></Button>
  </div>
</template>

<script>
import Display from "../components/Display";
import Button from "../components/Button";
export default {
  data() {
    return {
      displayValue: "0",
      clearDisplay: false,
      operations: null,
      values: [0, 0],
      current: 0,
    };
  },

  components: { Display, Button },
  methods: {
    clearMemory() {
      Object.assign(this.$data, this.$options.data());
    },
    setOperation(operation) {
        if(this.current === 0){
            this.operation = operation
            this.current = 1
            this.clearDisplay = true
        }else{
            const equals = operation === '='
            const currentOperation = this.operation
            try{
                this.values[0] = eval(
                 `${this.values[0]} ${currentOperation} ${this.values[1]}`
                )
            }catch(e){
                this.$emit('onError', e)
            }
            this.values[1] = 0
            this.displayValue = this.values[0]
            this.operation = equals ? null : operation
            this.current = equals ? 0 : 1
            this.clearDisplay = !equals
        }
    },
    addDigit(n) {
      if (n === "." && this.displayValue.includes(".")) {
        return;
      }
      const clearDisplay = this.displayValue === "0" || this.clearDisplay;
      const currentValue = clearDisplay ? "" : this.displayValue;
      const displayValue = currentValue + n;
      
      this.displayValue = displayValue;
      this.clearDisplay = false;

      if (n !== ".") {
        const i = this.current;
        const newValue = parseFloat(displayValue);
        this.values[i] = newValue;
      }
    },
  },
};
</script>

<style>
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>