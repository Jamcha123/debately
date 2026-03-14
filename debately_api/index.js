import axios from "axios"

function checkActive(model){
    if(model == undefined){
        return false
    }else{
        return true
    }
}

export async function generateOpeningStatements(config = {"topic": "", "polarization_score": "", "models": {"openai": {"politcial_leaning": "neutral"}, "gemini": {"politcial_leaning": "neutral"}, "deepseek": {"politcial_leaning": "neutral"}, "minstral": {"politcial_leaning": "neutral"}, "claude": {"politcial_leaning": "neutral"}}}){
    let topic = config.topic
    let polarization_score = config.polarization_score
    let [active1, active2, active3, active4, active5] = [this.checkActive(config["models"]["openai"]), this.checkActive(config["models"]["deepseek"]), this.checkActive(config["models"]["gemini"]), this.checkActive(config["models"]["minstral"]), this.checkActive(config["models"]["claude"])]
    const llm_name = []
    const obj = {}
    if(active1 === true){
        const side1 = config.models.openai.politcial_leaning
        llm_name.push("openai")
        obj["openai"] = side1
    }
    if(active2 === true){
        const side2 = config["models"]["deepseek"]["politcial_leaning"]
        llm_name.push("deepseek")
        obj["deepseek"] = side2
    }
    if(active3 === true){
        const side3 = config["models"]["gemini"]["politcial_leaning"]
        llm_name.push("gemini")
        obj["gemini"] = side3
    }
    if(active4 === true){
        const side4 = config["models"]["minstral"]["politcial_leaning"]
        llm_name.push("minstral")
        obj["minstral"] = side4
    }
    if(active5 === true){
        const side5 = config["models"]["claude"]["politcial_leaning"]
        
        llm_name.push("claude")
        obj["claude"] = side5
    }
    const webby = (await axios.post("https://opening-statements-qrp7kv22mq-uc.a.run.app", {"topic": topic, "side": obj, "polarization_score": polarization_score}))["data"]["statements"]
    
    let ans = ""
    for(let i = 0; i != webby.length; i++){
        ans += webby[i] + "\n\n"
    }
    return {"statements": ans, "models": llm_name, "political_sides": obj}
}
export async function generateDebateScene(apikey, config = {"topic": "", "polarization_score": "", "models": {"openai": {"politcial_leaning": "neutral"}, "gemini": {"politcial_leaning": "neutral"}, "deepseek": {"politcial_leaning": "neutral"}, "minstral": {"politcial_leaning": "neutral"}, "claude": {"politcial_leaning": "neutral"}}}){
    const checker = (await axios.post("https://checkkey-qrp7kv22mq-uc.a.run.app/", {"key": apikey}))["data"]
    if(checker == apikey + " is the wrong api key"){
        throw new Error(apikey + " is the wrong api key\nYou can buy an api key here: https://buy.stripe.com/28EcN4fzI0Im4dd0eV3ZK03 ")
    }
    let opening_debate = (await this.generateOpeningStatements(config))
    let ans = opening_debate["statements"] + "\n"
    console.log(ans)
    let index = 0
    for(let i = 0; i != opening_debate["models"].length; i++){
        if(index >= opening_debate[1].length){
            index = 0; 
        }
        const middle = (await axios.post("https://middle-statements-qrp7kv22mq-uc.a.run.app", {"statements": ans, "name": opening_debate[1][index], "side": opening_debate[2], "polarization_score": config.polarization_score}))["data"]
        
        console.log(middle)
        ans += middle + "\n\n"
        index += 1
    }
    return ans
    
}


const target2 = await generateDebateScene("<your-key>", {
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
