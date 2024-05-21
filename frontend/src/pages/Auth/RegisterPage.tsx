import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RegisterPage',
  setup() {
    return () => (
      <div>
        <h1 className="bold text-green-500">Register</h1>
      </div>
    );
  }
});