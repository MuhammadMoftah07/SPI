<template>
  <div>
    <ThemeSingleTab class="my-6" :title="$t('main')" />

    <section class="max-w-5xl mx-auto charts-container">
      <figure
        class="grid text-5xl p-7 rounded-xl bg-slate-50 place-content-center"
      >
        <IconsFinancialMap
          @germanyClicked="$emit('germanyClicked')"
          @usaClicked="$emit('usaClicked')"
          @chinaClicked="$emit('chinaClicked')"
        />
      </figure>

      <ThemeLowerIdea class="my-7" :text="$t('financial_analysis_idea')" />
    </section>
  </div>
</template>
