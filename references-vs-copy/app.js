// start with strings, numbers and booleans

    // let age = 100
    // let age2 = age
    // console.log(age, age2)
    // age = 200
    // console.log(age, age2)

    // Let's say we have an array
    // const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // // and we want to make a copy of it.
    // const team = players
    // console.log(players, team)

    // // You might think we can just do something like this:
    // team[3] = 'Lux'
    
    // // however what happens when we update that array?
    // console.log(players, team)

    // // now here is the problem!

    // // oh no - we have edited the original array too!

    // // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // // So, how do we fix this? We take a copy instead!

    // // one way
    // const team2 = players.slice()
    // console.log(team2)
    // // or create a new array and concat the old one in

    // const team3 = [].concat(players)
    // console.log(team3)
    // // or use the new ES6 Spread

    // const team4 = [...players]
    // team4[3] = 'heee hawww'
    // console.log(team4)
    // // now when we update it, the original one isn't changed

    // const team5 = Array.from(players)
    // console.log(team5)
    // team5[1] = 'nugget'
    // console.log(team5)

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // and think we make a copy:
    const captain = person
    captain.age = 99
    // console.log(person, captain)
    // how do we take a copy instead?
    const cap2 = Object.assign({}, person, { number: 99 })
    // console.log(cap2)
    cap2.age = 55
    // console.log(cap2, person, captain)
    // We will hopefully soon see the object ...spread
    const cap3 = {...person}
    console.log(cap3)
    cap3.name = "cool"
    console.log(cap3, person)
    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
