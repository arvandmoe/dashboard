import { createSlice } from '@reduxjs/toolkit'

export const CAMPAIGN = {
    GOOGLE: "Google drive",
    HUBSPOT: "hubspot",
    PIPE: "Pipedrive"
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
    }
})

export const { toggleGoogle, toggleHubspot, togglePipe } = campaignSlice.actions
export default campaignSlice.reducer