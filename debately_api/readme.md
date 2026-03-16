# Debately - AIs debate other AIs

__Debately Introduction__:

Debately uses multiple LLMs debate each other on a inputed topic and a inputed polarization score (a score between 0 - 10, 10 is civil war level polarization)

__Debately Options__: 

1. Free Debately API: the free version needs no API key but its only for opening statements 

2. Pro Debately API: the pro version needs a API key and each AI take turns to debate each other statements.

__Pricing__: 

1. Free Debately API is free

2. Pro Debately API needs you to buy a key for a onetime payment of $1.99 

3. [Buy A Debately Pro API Key](https://buy.stripe.com/28EcN4fzI0Im4dd0eV3ZK03)


__Config Options__: 
        this is the config options you need for the API
        
        const config = {
            topic: "some topic to debate", #required
            polarization_score: 10, #required
            models: { //you can keep any combo, 1 models, 2 models, 3 models, 5 models, heck you can even pick 0 models tho nothing will happen.
                openai: {
                    politcial_leaning: "some political leaning 1",
                }, 
                claude: {
                    politcial_leaning: "some political leaning 2",
                }, 
                deepseek: {
                    politcial_leaning: "some political leaning 3",
                }, 
                minstral: {
                    politcial_leaning: "some political leaning 4",
                }, 
                gemini: {
                    politcial_leaning: "some political leaning 5",
                }

            }
        }


__How To Use__:

install it first

    npm install debately

the free version is free but its only just the opening statements no full debate between the models.

    const free_debately = await generateOpeningStatements(config)
    console.log(free_debately) 

the pro version allows you to have a debate with all the models you selected from the config options. needs a pro API kek, buy here: https://buy.stripe.com/28EcN4fzI0Im4dd0eV3ZK03

    const pro_debately = await generateDebateScene("Your-Pro-API-Key", config)
    console.log(pro_debately) 



__If you have a issue__:

1. [Debately Github Repo Issue Page](https://github.com/jamcha123/debately/issues)

2. [jameschambers732@gmail.com](jameschambers732@gmail.com)
