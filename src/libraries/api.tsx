import axios from 'axios'

import { Card } from 'libraries'

import { config } from '../../config'

const getApiUrl = (resource: string, id: number) => {
    return config.resources[resource].api.replace('{id}', id.toString())
}

/** will load a random cards from API for the requested resource */
export const loadCard = async (resource: string, callback: (card: Card) => void) => {
    let card: Card
    const apiClient = axios.create({
        baseURL: config.swapiBase,
        responseType: 'json',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const maxId = config.resources[resource].maxId
    let alreadyTried: number[] = []
    let triedId: number
    /**
     * note:
     * there's no way to get a list of existing identifier for a resource
     * getting all the resource entries from the listing API:
     * - is long >> can have timeout
     * - is big >> big network usage for nothing
     * - do not contain all the entries, as it is paginated
     * due to this, i've opted, for this test, for:
     * - generate a random identifier
     * - try to get the related resource entry
     * - if this identifier doesn't exist, try another one
     */
    while (!card) {
        try {
            triedId = Math.floor(Math.random() * maxId) + 1
            if (!alreadyTried.includes(triedId)) {
                alreadyTried.push(triedId)
                const response = await apiClient.get(getApiUrl(resource, triedId))
                if (200 === response.status) {
                    const data: Card = response.data
                    card = {}
                    for (let field of config.resources[resource].display) {
                        card[field] = data[field]
                    }
                }
            }
        } catch (err) {
            // do not stop on 404
            // this is just meaning the random identifier doesn't exist
            // and if so, we will try another identifier
        }
    }
    callback(card)
}