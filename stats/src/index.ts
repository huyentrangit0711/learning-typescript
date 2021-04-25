import { MatchReader } from './MatchReader'
import { MatchResult } from './MatchResult'
const reader = new MatchReader('football.csv')
reader.read()
let manchesWin = 0
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manchesWin++
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manchesWin++
    }
}
console.log(`Man United winned ${manchesWin} times`)