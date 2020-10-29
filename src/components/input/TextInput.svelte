<script lang="ts">
  export let disabled: boolean = false;

  export let label: string;

  export let id: string;

  export let labelClass: string =
    "pt-2 block text-gray-700 text-sm font-bold mb-2";

  export let inputClass: string =
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

  export let value: string;
</script>

<div>
  <label class={labelClass} for={id}> {label} </label>
  <input
    class={inputClass}
    placeholder={label}
    type="text"
    {id}
    {disabled}
    bind:value />
</div>
