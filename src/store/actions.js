export async function getTimesheet({ state }, { date, client }) {
    state.timesheet = (
        await this.$axios.$get(`/api/months`, {
            params: { date, client }
        })
    )[0]

    return state.timesheet
}

export async function saveTimesheet({ state }, { date, client } = {}) {
    // const timesheet = state.timesheet.timesheet.map(day => ({
    //     ...day,
    //     text: JSON.stringify(day.text)
    // }))
    return this.$axios.$put(
        `/api/months/${state.timesheet.id}`,
        state.timesheet
    )
    // return this.$axios.$put(`/api/months/${state.timesheet.id}`, {
    //     ...state.timesheet,
    //     timesheet
    // })
}

export async function getHistoricalTimesheets({ state }) {
    state.history = await this.$axios.$get(`/api/months`)

    return state.history
}
