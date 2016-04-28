angular.module('app')
  .run(function(RecipeService) {
    var recipes = [
      {
        id: "0",
        name: "Eggplant Po Boy",
        changeSummary: "Changed breading to panko.",
        latestVersion: "1.2",
        imageUrl: "assets/eggplant_poboy.jpg",
        lastUpdated: 'Jan 1st, 1971',
        description: "Man braid fixie farm-to-table pug wayfarers scenester before they sold out ramps tilde, man bun YOLO slow-carb squid shoreditch put a bird on it. Tote bag venmo lo-fi kombucha synth semiotics. Photo booth thundercats hella squid church-key semiotics. Scenester dreamcatcher cornhole, whatever affogato roof party 3 wolf moon kinfolk shabby chic meh twee photo booth irony keffiyeh. Literally chia jean shorts, viral kinfolk pickled bicycle rights flexitarian twee marfa neutra cray.",
        ingredients: [{
            name: "eggplant",
            amount: 2,
            units: "slices",
        }, {
            name: "quinoa",
            amount: 1,
            units: "cups",
        }, {
            name: "mixed greens",
            amount: 0.5,
            units: "cup",
        }, {
            name: "mayo",
            amount: 2,
            units: "tbsp",
        }, {
            name: "secret sauce",
            amount: 0.5,
            units: "tbsp",
        }],
        instructions: "1. Slice Eggplant \n2. Dip eggplant in egg and then dip in panko breadcrumbs \n3. Fry in oil about 5 minutes until golden brown \n4. Put in hoagie roll.",
      },
      {
        id: "1",
        name: "Eggplant Tacos",
        changeSummary: "Used fresher tortillas.",
        latestVersion: "2.5",
        imageUrl: "assets/eggplant_taco.jpg",
        lastUpdated: 'Jan 1st, 1971',
        description: "Man braid fixie farm-to-table pug wayfarers scenester before they sold out ramps tilde, man bun YOLO slow-carb squid shoreditch put a bird on it. Tote bag venmo lo-fi kombucha synth semiotics. Photo booth thundercats hella squid church-key semiotics. Scenester dreamcatcher cornhole, whatever affogato roof party 3 wolf moon kinfolk shabby chic meh twee photo booth irony keffiyeh. Literally chia jean shorts, viral kinfolk pickled bicycle rights flexitarian twee marfa neutra cray.",
        ingredients: [{
            name: "eggplant",
            amount: 2,
            units: "slices",
        }, {
            name: "quinoa",
            amount: 1,
            units: "cups",
        }, {
            name: "mixed greens",
            amount: 0.5,
            units: "cup",
        }, {
            name: "mayo",
            amount: 2,
            units: "tbsp",
        }, {
            name: "secret sauce",
            amount: 0.5,
            units: "tbsp",
        }],
        instructions: "1. Slice the Eggplant \n2. Marinate Eggplant in secret sauce **30 minutes!** \n3. Cook Quinoa \n4. Toss Eggplant, mixed greens, and quinoa",
      },
      {
        id: "2",
        name: "Eggplant Quinoa Bowl",
        changeSummary: "Doubled the amount of secret sauce.",
        latestVersion: "2.3",
        imageUrl: "assets/eggplant_quinoa_bowl.jpg",
        lastUpdated: 'Jan 1st, 1971',
        description: "Man braid fixie farm-to-table pug wayfarers scenester before they sold out ramps tilde, man bun YOLO slow-carb squid shoreditch put a bird on it. Tote bag venmo lo-fi kombucha synth semiotics. Photo booth thundercats hella squid church-key semiotics. Scenester dreamcatcher cornhole, whatever affogato roof party 3 wolf moon kinfolk shabby chic meh twee photo booth irony keffiyeh. Literally chia jean shorts, viral kinfolk pickled bicycle rights flexitarian twee marfa neutra cray.",
        ingredients: [{
            name: "eggplant",
            amount: 2,
            units: "slices",
        }, {
            name: "quinoa",
            amount: 1,
            units: "cups",
        }, {
            name: "mixed greens",
            amount: 0.5,
            units: "cup",
        }, {
            name: "mayo",
            amount: 2,
            units: "tbsp",
        }, {
            name: "secret sauce",
            amount: 0.5,
            units: "tbsp",
        }],
        instructions: "1. Slice the Eggplant \n2. Marinate Eggplant in secret sauce **30 minutes!** \n3. Cook Quinoa \n4. Toss Eggplant, mixed greens, and quinoa",

      },
      {
        id: "3",
        name: "Eggplant Burrito",
        changeSummary: "Whole wheat tortillas, locally made.",
        latestVersion: "4.5",
        imageUrl: "assets/eggplant_burrito.jpg",
        lastUpdated: 'Jan 1st, 1971',
        description: "Man braid fixie farm-to-table pug wayfarers scenester before they sold out ramps tilde, man bun YOLO slow-carb squid shoreditch put a bird on it. Tote bag venmo lo-fi kombucha synth semiotics. Photo booth thundercats hella squid church-key semiotics. Scenester dreamcatcher cornhole, whatever affogato roof party 3 wolf moon kinfolk shabby chic meh twee photo booth irony keffiyeh. Literally chia jean shorts, viral kinfolk pickled bicycle rights flexitarian twee marfa neutra cray.",
        ingredients: [{
            name: "eggplant",
            amount: 2,
            units: "slices",
        }, {
            name: "quinoa",
            amount: 1,
            units: "cups",
        }, {
            name: "mixed greens",
            amount: 0.5,
            units: "cup",
        }, {
            name: "mayo",
            amount: 2,
            units: "tbsp",
        }, {
            name: "secret sauce",
            amount: 0.5,
            units: "tbsp",
        }],
        instructions: "1. Slice the Eggplant \n2. Marinate Eggplant in secret sauce **30 minutes!** \n3. Cook Quinoa \n4. Toss Eggplant, mixed greens, and quinoa",

      },
      {
        id: "4",
        name: "Eggplant Fritters",
        changeSummary: "Now using a beer batter.",
        latestVersion: "3.2",
        imageUrl: "assets/eggplant_fritter.jpg",
        lastUpdated: 'Jan 1st, 1971',
        description: "Man braid fixie farm-to-table pug wayfarers scenester before they sold out ramps tilde, man bun YOLO slow-carb squid shoreditch put a bird on it. Tote bag venmo lo-fi kombucha synth semiotics. Photo booth thundercats hella squid church-key semiotics. Scenester dreamcatcher cornhole, whatever affogato roof party 3 wolf moon kinfolk shabby chic meh twee photo booth irony keffiyeh. Literally chia jean shorts, viral kinfolk pickled bicycle rights flexitarian twee marfa neutra cray.",
        ingredients: [{
            name: "eggplant",
            amount: 2,
            units: "slices",
        }, {
            name: "quinoa",
            amount: 1,
            units: "cups",
        }, {
            name: "mixed greens",
            amount: 0.5,
            units: "cup",
        }, {
            name: "mayo",
            amount: 2,
            units: "tbsp",
        }, {
            name: "secret sauce",
            amount: 0.5,
            units: "tbsp",
        }],
        instructions: "1. Slice the Eggplant \n2. Marinate Eggplant in secret sauce **30 minutes!** \n3. Cook Quinoa \n4. Toss Eggplant, mixed greens, and quinoa",

      },
    ];

    if (RecipeService.getAll().length === 0) {
      recipes.forEach(function(r) {
        RecipeService.add(r);
      });
    }

  });