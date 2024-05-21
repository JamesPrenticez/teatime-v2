import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginPage',
  setup() {
    return () => (
      <div>
        <h1 className="bold text-green-500">Login</h1>
      </div>
    );
  }
});