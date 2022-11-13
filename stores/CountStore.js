export const useCountStore = defineStore('CountStore', {
    state: () => ({
        count: 0
    }),
    getters: {
        dibagi: (state) => (pembagi) => state.count / pembagi
    },
    actions: {},
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCountStore, import.meta.hot));
}
