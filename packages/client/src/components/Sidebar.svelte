<script lang="ts">
  import { Link } from "svelte-routing";

  import { sidebarOpen } from "./../store/";

  const links = [
    {
      title: "Installations",
      to: "installations",
    },
    {
      title: "Recipes",
      to: "recipes",
    },
    // {
    //   title: "Brouwsels",
    //   to: "brews",
    // },
    // {
    //   title: "Databases",
    //   to: "databases",
    // },
    // {
    //   title: "Analyse",
    //   to: "analysis",
    // },
  ];

  function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
    const isActive = href === '/' ? isCurrent : isPartiallyCurrent || isCurrent;

    const baseClass = 'flex items-center mt-4 py-2 px-6 border-l-4';

    // The object returned here is spread on the anchor element's attributes
    if (isActive) {
      return { class: `${baseClass} bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100` };
    }
    return { class: `${baseClass} border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100` };
  }

  export let appName: string;
</script>

<div class="flex">
  <!-- Backdrop -->
  <div
    on:click={() => ($sidebarOpen = false)}
    class="{$sidebarOpen ? 'block' : 'hidden'} fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden" />
  <!-- End Backdrop -->

  <div
    class="{$sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'} fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
    <div class="flex items-center justify-center mt-8">
      <div class="flex items-center">
        <span class="text-white text-2xl mx-2 font-semibold">{appName}</span>
      </div>
    </div>

    <nav class="mt-10">
      <ul>
        {#each links as link}
          <li>
            <Link
              to="{link.to}"
              getProps={getProps}
              class="flex items-center mt-4 py-2 px-6 border-l-4"
            >
              <svg
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 10C2 5.58172 5.58172 2 10 2V10H18C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
                  fill="currentColor" />
                <path
                  d="M12 2.25195C14.8113 2.97552 17.0245 5.18877 17.748 8.00004H12V2.25195Z"
                  fill="currentColor" />
              </svg>

              <span class="mx-4">{link.title}</span>
            </Link>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</div>
