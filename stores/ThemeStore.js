export const useTheme = defineStore('ThemeStore', {
    state: () => ({
        darkMode: false,
        // theme: "mytheme",
    }),
    getters: {},
    actions: {
        changeTheme() {
            this.darkMode = !this.darkMode
            // if (this.darkMode) return this.theme = "dark";
            // return this.theme = "mytheme";
            console.log(this.darkMode)
        }
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCountStore, import.meta.hot));
}
