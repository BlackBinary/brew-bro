<script lang="ts">
import App from "../../App.svelte";

  type HeaderType = {
    title: string;
    key: string;
    component: Function;
  };

  type RowType = {
    data: string;
  };

  export let tableHeaders: Array<HeaderType>;
  export let tableData: Array<RowType>;
</script>

<table class="min-w-full leading-normal">
  <thead>
    <tr>
      {#each tableHeaders as header}
        <th
          class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
          {header.title}
        </th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each tableData as data}
      <tr>
        {#each tableHeaders as header}
          <svelte:component
            this={header.component}
            {...data[header.key]}
          />
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
