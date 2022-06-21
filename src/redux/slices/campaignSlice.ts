import { createSlice } from '@reduxjs/toolkit'

export const CAMPAIGN = {
    GOOGLE: "Google drive",
    HUBSPOT: "hubspot",
    PIPE: "Pipedrive",
    SEARCH: "search",
}


const campaignSlice = createSlice({
    name: 'campaign',
    initialState: { value: CAMPAIGN.GOOGLE },
    reducers: {
        toggleGoogle(state) {
            state.value = CAMPAIGN.GOOGLE
        },
        toggleHubspot(state) {
            state.value = CAMPAIGN.HUBSPOT
        },
        togglePipe(state) {
            state.value = CAMPAIGN.PIPE
        },
        toggleSearch(state) {
            state.value = CAMPAIGN.SEARCH
        },
    }
})

export const { toggleGoogle, toggleHubspot, togglePipe, toggleSearch } = campaignSlice.actions
export default campaignSlice.reducer