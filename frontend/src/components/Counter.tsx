import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const count = ref(0);

    return { 
      count 
    };
  },
  render() {
    return (
      <div class="border-2">
        <div class="card">
          <button type="button" onClick={() => this.count++}>count is {this.count}</button>
        </div>
      </div>
    );
  }
});
