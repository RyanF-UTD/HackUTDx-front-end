const routes = [
  {
    path: "/auth",
    component: () => import("pages/Auth.vue"),
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/Example", component: () => import("pages/ExamplePage.vue") },
      { path: "/Index", component: () => import("pages/SharesIndex.vue") },
      {
        path: "/profile/:userid",
        component: () => import("pages/UserPortfolio.vue"),
        children: [
          // UserHome will be rendered inside User's <router-view>
          // when /user/:id is matched
          {
            path: "settings",
            component: () => import("pages/UserSettings.vue"),
          },

          // ...other sub routes
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
