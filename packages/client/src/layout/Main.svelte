<script lang="ts">
  import Sidebar from "./../components/Sidebar.svelte";
  import Header from "./../components/Header.svelte";

  export let appName: string;
</script>

<div class="flex h-screen bg-gray-200 font-roboto">
  <Sidebar {appName} />

  <div class="flex-1 flex flex-col overflow-hidden">
    <Header />

    <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
      <div class="container mx-auto px-6 py-8">
        <slot />
      </div>
    </main>
  </div>
</div>
