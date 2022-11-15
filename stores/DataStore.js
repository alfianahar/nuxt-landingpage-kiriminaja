export const useDataStore = defineStore('DataStore', {
    state: () => ({
        ekspedisi: {},
        team: {},
        client: {},
    }),
    getters: {},
    actions: {
        async getTeamDetail() {
            const response = await fetch('/api/team')
            const result = await response.json()
            this.team = result
            // console.log(this.team)
        }
    },
})
