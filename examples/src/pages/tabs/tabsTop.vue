<template>
    <vm-page>
        <vm-header>
            <vm-navbar>
                <vm-title>Tabs在顶部</vm-title>
            </vm-navbar>
        </vm-header>
        <vm-tabs tabsLayout="icon-top" tabsPlacement="top">
            <router-view></router-view>
            <vm-tab slot="tab" :to="{name:'tabsTop.demoTab1'}" tabBadge="13" tabTitle="User" tabBadgeStyle="danger"
                 tabIcon="person"></vm-tab>
            <vm-tab slot="tab" :to="{name:'tabsTop.demoTab2'}" tabBadge="2" tabTitle="Cars" tabBadgeStyle="dark"
                 tabIcon="car"></vm-tab>
            <vm-tab slot="tab" :to="{name:'tabsTop.demoTab3'}" tabBadge="7" tabTitle="Star" tabIcon="star"
                 :enabled="true"></vm-tab>
        </vm-tabs>
    </vm-page>
</template>
<script type="text/javascript">
  export default{}
</script>
