<template>
    <vm-page>
        <vm-header>
            <vm-navbar>
                <vm-title>只有ICON</vm-title>
            </vm-navbar>
        </vm-header>
        <vm-tabs tabsLayout="title-hide" tabsPlacement="bottom">
            <router-view></router-view>
            <vm-tab slot="tab" :to="{name:'iconOnly.demoTab1'}" tabBadge="13" tabTitle="User" tabBadgeStyle="danger"
                 tabIcon="person"></vm-tab>
            <vm-tab slot="tab" :to="{name:'iconOnly.demoTab2'}" tabBadge="2" tabTitle="Cars" tabBadgeStyle="dark"
                 tabIcon="car"></vm-tab>
            <vm-tab slot="tab" :to="{name:'iconOnly.demoTab3'}" tabBadge="7" tabTitle="Star" tabIcon="star"
                 :enabled="true"></vm-tab>
        </vm-tabs>
    </vm-page>
</template>
<style scoped lang="scss"></style>
<script type="text/javascript">
  export default{
    name: 'name'
  }
</script>
