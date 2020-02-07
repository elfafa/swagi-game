import { Round, Rule, Rules, Card } from 'libraries'

export const getWinners = (round: Round, rules: Rules): string[] => {
    let winners: string[] = []
    for (let field in rules) {
        if (1 === winners.length) {
            // there's a single winner, no need to look
            // for the other rule fields
            break
        }
        winners = getWinnersForRule(round, field, rules[field], winners)
    }
    return winners
}

const getWinnersForRule = (round: Round, field: string, rule: Rule, currents: string[]): string[] => {
    let winners: string[] = [] 
    let bestValue: number
    for (let player in round) {
        // there is a deuce on the previous rule field
        // we only try to find the winner between the ones
        // from the previous winners rule
        if (currents.length && !currents.includes(player)) {
            break
        }
        const card: Card = round[player].card as Card
        if (!bestValue) {
            bestValue = +card[field]
            winners.push(player)
        } else if (bestValue === +card[field]) {
            winners.push(player)
        } else if (('bigger' === rule) && bestValue < +card[field]) {
            bestValue = +card[field]
            winners = [player]
        } else if (('smaller' === rule) && bestValue > +card[field]) {
            bestValue = +card[field]
            winners = [player]
        }
    }
    return winners
}
