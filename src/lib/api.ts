import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET,
    useCdn: true,
    apiVersion: '2023-07-30',
})

export async function fetchGlobal() {
    const global = await client.fetch('*[_type == "globalSettings"]')

    return global;
}
