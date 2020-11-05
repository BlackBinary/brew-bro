<script type="ts">
  import { Link } from "svelte-routing";
  export let text = '';
  export let to = '';
</script>

<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
  <p class="text-gray-900 whitespace-no-wrap">
    <Link {to}>
      {text}
    </Link>
  </p>
</td>