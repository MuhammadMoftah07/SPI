<template>
  <section>
    <ThemeTitle :title="'GII'" class="mb-6" />

    <div class="grid grid-cols-2 gap-7">
      <SectionsIndicesWorldHeatmap
        class="col-span-2 rounded-lg shadow-inner shadow-slate-200"
      />
      <SectionsIndicesPillarView
        class="rounded-lg shadow-inner shadow-slate-200"
      />
      <SectionsIndicesIndicatorView
        class="rounded-lg shadow-inner shadow-slate-200"
      />
      <SectionsIndicesCorrelationHeatmap
        class="col-span-2 rounded-lg shadow-inner shadow-slate-200"
      />
      <SectionsIndicesParetoView
        class="col-span-2 rounded-lg shadow-inner shadow-slate-200"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
  const countryData = {
    US: 100,
    CA: 120,
    UK: 400,
  };
</script>
