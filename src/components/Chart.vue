
<script>
import { Line,mixins } from 'vue-chartjs'
const { reactiveProp }=mixins;

console.log(Line);
export default {
  mixins:[Line,reactiveProp],
  mounted(){
    this.renderChart(this.chartData,this.options)
  },
  props:['options']
}
</script>
