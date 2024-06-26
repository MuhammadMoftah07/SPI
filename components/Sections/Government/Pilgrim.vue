<template>
  <div class="grid">
    <ThemeLowerIdea>
      <div class="grid">
        <h5
          class="text-sm font-semibold"
          v-t="'government_pilgrim_idea_title'"
        ></h5>
        <h5 class="text-xs font-medium" v-t="'government_pilgrim_idea_p'"></h5>
      </div>
    </ThemeLowerIdea>

    <div class="grid w-full gap-5 my-8 xl:grid-cols-3">
      <aside v-for="n in 3" :key="n">
        <h5
          class="relative py-3 text-sm font-medium text-center text-white capitalize rounded-t-xl bg-theme-indigo"
        >
          {{ $t(`government_pilgrim_title${n}`) }}
        </h5>
        <img
          src="https://placehold.co/1800x100?text=Image"
          class="object-cover w-full h-36"
          alt=""
        />
        <div
          class="p-3 text-sm font-medium min-h-[230px] border-b-8 border-theme-celestial-blue"
        >
          {{ $t(`government_pilgrim_p${n}`) }}
        </div>
      </aside>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
