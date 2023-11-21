import express from "express";
const app = express();

app.get("/api/products", (req, res) => {
    const products = [
    {
      name: 'JavaScript',
      year: 1995,
      creator: 'Brendan Eich',
      key_0: 0.507024153803552
    },
    {
      name: 'Python',
      year: 1991,
      creator: 'Guido van Rossum',
      key_1: 0.5190039812642746
    },
    {
      name: 'Java',
      year: 1995,
      creator: 'James Gosling',
      key_2: 0.1702020384900227
    },
    {
      name: 'C++',
      year: 1983,
      creator: 'Bjarne Stroustrup',
      key_3: 0.1383630689901525
    },
    {
      name: 'Ruby',
      year: 1995,
      creator: 'Yukihiro Matsumoto',
      key_4: 0.3592822938234659
    },
    {
      name: 'Swift',
      year: 2014,
      creator: 'Apple Inc.',
      key_5: 0.22381356444710843
    },
    {
      name: 'PHP',
      year: 1995,
      creator: 'Rasmus Lerdorf',
      key_6: 0.4578341355201825
    },
    {
      name: 'Go',
      year: 2009,
      creator: 'Google Inc.',
      key_7: 0.24279027541502107
    },
    {
      name: 'Rust',
      year: 2010,
      creator: 'Graydon Hoare',
      key_8: 0.8010923294484105
    },
    {
      name: 'Kotlin',
      year: 2011,
      creator: 'JetBrains',
      key_9: 0.6940306735203077
    },
    {
      name: 'C#',
      year: 2000,
      creator: 'Microsoft',
      key_10: 0.4778078826752643
    },
    {
      name: 'Perl',
      year: 1987,
      creator: 'Larry Wall',
      key_11: 0.41396649275645925
    },
    {
      name: 'Haskell',
      year: 1990,
      creator: 'Haskell Curry',
      key_12: 0.11973524701689509
    },
    {
      name: 'Scala',
      year: 2003,
      creator: 'Martin Odersky',
      key_13: 0.0842742187915646
    },
    {
      name: 'TypeScript',
      year: 2012,
      creator: 'Microsoft',
      key_14: 0.048681143326329
    },
    {
      name: 'Dart',
      year: 2011,
      creator: 'Google Inc.',
      key_15: 0.06385779834147454
    },
    {
      name: 'Lua',
      year: 1993,
      creator: 'Roberto Ierusalimschy',
      key_16: 0.7437551777258113
    },
    {
      name: 'Elixir',
      year: 2011,
      creator: 'José Valim',
      key_17: 0.08999022525596745
    },
    {
      name: 'COBOL',
      year: 1959,
      creator: 'Grace Hopper',
      key_18: 0.762523462231544
    },
    {
      name: 'Ada',
      year: 1980,
      creator: 'U.S. Department of Defense',
      key_19: 0.41384085910288304
    },
    {
      name: 'Fortran',
      year: 1957,
      creator: 'IBM',
      key_20: 0.9541883908680149
    },
    {
      name: 'R',
      year: 1993,
      creator: 'Ross Ihaka and Robert Gentleman',
      key_21: 0.4492673793423092
    },
    {
      name: 'Prolog',
      year: 1972,
      creator: 'Alain Colmerauer and Philippe Roussel',
      key_22: 0.6497997199760064
    },
    {
      name: 'D',
      year: 2001,
      creator: 'Walter Bright',
      key_23: 0.456064180286577
    },
    {
      name: 'COOL',
      year: 1996,
      creator: 'Alex Aiken',
      key_24: 0.43795307097753566
    }
    ]
    if (req.query.search) {
        filteredproducts = products.filter((product) => product.name.includes(req.query.search))
        res.send(filteredproducts);
        return;

    }
    
    setTimeout(() => {
        res.send(products)
    },3000)
})

const port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log(`server is running on ${port}`);
})
