function score(games: string[]) :number | string {

    console.log(games)
    console.log(games.length, typeof games)
    // @ts-ignore
    if( !games || games.length < 1 || typeof games != 'object' ){
        return 'invalid input'};

        // 

        //  map over the games array and work out the total score for the team

    let totalPoints = 0;
    games.map(game => {
       let splitGame = game.split(':')
               if( splitGame[0] > splitGame[1]) { totalPoints = totalPoints + 3};
       if ( splitGame[0] === splitGame[1]) { totalPoints = totalPoints + 1};

    })

      return totalPoints
    // return 0

}

export {score}