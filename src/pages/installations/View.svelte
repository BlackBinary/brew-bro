<script lang="ts">
  import TextInput from "../../components/input/TextInput.svelte";
  import NumberInput from "../../components/input/NumberInput.svelte";

  let installation = {
    name: "Brew monk magnus",
    mashtun: {
      volume: 45.0,
      water: 32.0,
      height: 69.0,
      weight: 15.0,
      material: "RVS",
    },
    filtertun: {
      volume: 45.0,
      height: 69.0,
      dead: 0.5,
      efficiency: 75,
    },
    kettle: {
      volume: 45.0,
      height: 69.0,
      brewVolume: 43.0,
      evaporationRate: 6.5,
      brewTime: 90,
      waterAddition: 10,
      hopFactor: 100,
    },
    cooling: {
      loss: 0.5,
    },
  };

  let materials = ["RVS", "Plastic", "Copper", "Aluminum"];

  function saveInstallation() {
    console.log(installation);
  }

  export let params = {};
</script>

<div>
  <h3 class="text-gray-700 text-3xl font-semibold">
    {installation.name || 'Installation name'}
  </h3>

  <div class="mt-8 p-6 bg-white rounded-md shadow-md">
    <form on:submit|preventDefault={saveInstallation}>
      <!-- General settings -->
      <h2 class="text-lg text-gray-700 font-semibold capitalize">General</h2>

      <div class="grid grid-cols-1 gap-6 mt-2">
        <TextInput id="name" label="Name" bind:value={installation.name} />
      </div>

      <!-- Installation properties -->
      <h2 class="pt-6 text-lg text-gray-700 font-semibold capitalize">
        Properties
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
        <div class="p-6 bg-white rounded-md shadow-md">
          <!-- Mashtun properties -->
          <h2 class="pb-2 text-lg text-gray-700 font-semibold capitalize">
            Mashtun
          </h2>
          <NumberInput
            id="mashtun-volume"
            label="Volume (L)"
            bind:value={installation.mashtun.volume} />
          <NumberInput
            id="mashtun-height"
            label="Height (cm)"
            bind:value={installation.mashtun.height} />
          <NumberInput
            id="mashtun-weight"
            label="Weight (kg)"
            bind:value={installation.mashtun.weight} />
          <NumberInput
            id="mashtun-water"
            label="Water (L)"
            bind:value={installation.mashtun.water} />
          <label
            for="mashtun-material"
            class="pt-2 block text-gray-700 text-sm font-bold mb-2">Material</label>
          <select
            id="mashtun-material"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            bind:value={installation.mashtun.material}>
            {#each materials as material}
              <option value={material}>{material}</option>
            {/each}
          </select>
        </div>
        <div class="p-6 bg-white rounded-md shadow-md">
          <!-- Filtertun properties -->
          <h2 class="pb-2 text-lg text-gray-700 font-semibold capitalize">
            Filtertun
          </h2>
          <NumberInput
            id="filtertun-volume"
            label="Volume (L)"
            bind:value={installation.filtertun.volume} />
          <NumberInput
            id="filtertun-height"
            label="Height (cm)"
            bind:value={installation.filtertun.height} />
          <NumberInput
            id="filtertun-weight"
            label="Dead space (L)"
            bind:value={installation.filtertun.dead} />
          <NumberInput
            id="filtertun-water"
            label="Efficiency (%)"
            bind:value={installation.filtertun.efficiency} />
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
        <div class="p-6 bg-white rounded-md shadow-md">
          <!-- Mashtun properties -->
          <h2 class="pb-2 text-lg text-gray-700 font-semibold capitalize">
            Brewkettle
          </h2>
          <NumberInput
            id="kettle-volume"
            label="Volume (L)"
            bind:value={installation.kettle.volume} />
          <NumberInput
            id="kettle-height"
            label="Height (cm)"
            bind:value={installation.kettle.height} />
          <NumberInput
            id="kettle-brewvolume"
            label="Brew Volume (L)"
            bind:value={installation.kettle.brewVolume} />
          <div class="grid grid-cols-2 gap-6">
            <NumberInput
              id="kettle-evaporationrate"
              label="Evaporation rate (%/hour)"
              bind:value={installation.kettle.evaporationRate} />
            <NumberInput
              disabled
              id="kettle-evaporationrate-calculated"
              label="Evaporation rate (L/hour)"
              value={(installation.kettle.evaporationRate / 100) * installation.kettle.brewVolume} />
          </div>
          <NumberInput
            id="kettle-brewtime"
            label="Brew time (min)"
            bind:value={installation.kettle.brewTime} />
          <div class="grid grid-cols-2 gap-6">
            <NumberInput
              id="kettle-wateraddition"
              label="Water addition (%)"
              bind:value={installation.kettle.waterAddition} />
            <NumberInput
              disabled
              id="kettle-wateraddition-calculated"
              label="Water addition (L)"
              value={(installation.kettle.waterAddition / 100) * installation.kettle.brewVolume} />
          </div>
          <NumberInput
            id="kettle-hopfactor"
            label="Hop factor (%)"
            bind:value={installation.kettle.hopFactor} />
          <NumberInput
            id="kettle-endvolume"
            label="End volume (L)"
            value={installation.kettle.brewVolume - (((installation.kettle.evaporationRate / 100) * installation.kettle.brewVolume) / 60) * installation.kettle.brewTime} />
        </div>
        <div class="p-6 bg-white rounded-md shadow-md">
          <!-- Installation properties -->
          <h2 class="pb-2 text-lg text-gray-700 font-semibold capitalize">
            Cooling
          </h2>
          <NumberInput
            id="cooling-loss"
            label="Cooling loss (L)"
            bind:value={installation.cooling.loss} />
        </div>
      </div>

      <div class="flex justify-end mt-2">
        <button
          class="px-4 py-2 bg-gray-800 text-gray-200 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
          Save
        </button>
      </div>
    </form>
  </div>
</div>
