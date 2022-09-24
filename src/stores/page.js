/**
 *
 * 🍍 pinia 🍍
 *      state management
 *
 */
import { defineStore } from "pinia";

export const usePageStore = defineStore({
  id: "page",
  state: () => ({
    title: "welcome",
    appTitle: "shot counter",
    pageTitle: "la bar",
    postsTitle: "boooya",
  }),
  actions: {},
  getter: {},
});
