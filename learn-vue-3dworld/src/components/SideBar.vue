<template>
  <div class="bg-light border-right" id="sidebar-wrapper">
    <div class="sidebar-heading">
      <font-awesome-icon :icon="['fa', 'sitemap']" class="mr-2" />Computer Graphics
    </div>
    <div class="list-group list-group-flush">
      <router-link
        :class="['list-group-item list-group-item-action',{'active': $route.fullPath === '/'}]"
        :to="{ name: 'home' }" >測試</router-link>

      <router-link
        class="list-group-item list-group-item-action"
        active-class="active"
        :to="{ name: 'demo' }" >練習</router-link>

      <router-link
        class="list-group-item list-group-item-action"
        active-class="active"
        :to="{ name: 'others' }" >其他</router-link>

      <router-link
        class="list-group-item list-group-item-action"
        active-class="active"
        :to="{ name: 'project' }" >專案</router-link>
    </div>
  </div>
</template>