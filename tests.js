/*
create a maxWealth var
create a wealth var
loop trough the 1st array [i] and [j]
wealth += accounts[i][j]
if wealth > max wealth replace it
return maxWealth
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0
    
    for(let i = 0; i < accounts.length; i ++){
        let wealth = 0
        for(let j = 0; j < accounts[i].length; j ++){
            wealth += accounts[i][j]
            if( wealth > maxWealth) maxWealth = wealth
        }
    }
    return maxWealth
}

 console.log(maximumWealth([[1,2,3],[3,2,1]]))
