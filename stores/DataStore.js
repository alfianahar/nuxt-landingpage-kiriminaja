export const useDataStore = defineStore('DataStore', {
    state: () => ({
        ekspedisi: {},
        team: {},
        banner: {},
        client: {},
    }),
    getters: {},
    actions: {
        async getTeamDetail() {
            const response = await fetch('/api/team')
            const result = await response.json()
            this.team = result
            // console.log(this.team)
        },
        async getBannerDetail() {
            const response = await fetch('/api/banner')
            const result = await response.json()
            this.banner = result
            // console.log(this.team)
        }
    },
})
