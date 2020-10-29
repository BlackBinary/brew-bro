<script lang="ts">
  type HeaderType = {
    title: string;
    key: string;
  };

  export let tableHeaders: Array<HeaderType>;
  export let tableData: Array<any>;
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
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p class="text-gray-900 whitespace-no-wrap">{data[header.key]}</p>
          </td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
