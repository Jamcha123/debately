@debately/api 

Contact Info: jameschambers732@gmail.com

Debately api allows you to choose different LLM models to debate the among your selected LLMs.

How Debately Works:
    
    First allows each LLM to give opening statements on there views on the topic 

    Second then it debates all the opening statements from each LLM.

Just give they all a political leaning (default: neutral), topic, polarization_score (0 is calm, 10 is civil war polarization).


free version debately (opening statements, just the first stage): 

    const just_opening_statements = await generateOpeningStatements({
        topic: "Some Politics", //enter any topic from taxes, inflation, favorite food, inequality, migration or other
        polarization_score: 10, //0 to 10, 10 is the heated and 0 the most calm
        models: { //you can pick one, two or all of them 
            openai: {
                politcial_leaning: "some political leaning 1", //enter any political leaning
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
    })


Buy Your Pro Version API Key Here: https://buy.stripe.com/28EcN4fzI0Im4dd0eV3ZK03

pro version of debately (the full debating app with both steps, cost: $1.99):

    const full_debate = await generateDebateScene("<your-apikey>", {
        topic: "should we nationalize the banks?", 
        polarization_score: "10",
        models: {
            openai: {
                politcial_leaning: "greedy banker"
            },
            claude: {
                politcial_leaning: "revolutionary communist"
            },
            deepseek: {
                politcial_leaning: "a politician that got a summer home from a bank ceo"
            }
        }
    })

hope you enjoy this package and happy debating