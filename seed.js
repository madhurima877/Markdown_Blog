const mongoose = require("mongoose");
const Article = require("./models/Article")

mongoose.connect("mongodb://127.0.0.1:27017/markdown")
.then(()=> console.log("db connected sucessfully".blue))
.catch((err)=> console.log(err));


const articles = [

    {
        name: 'Kashmir: The Roads Ahead',
        desc: "This chapter was first presented to a MCISS-South Asia seminar in 1992, and revised as a note prepared for the Center for the Study of Foreign Affairs of the Foreign Service Institute, U.S. Department of State. Both were based upon research conducted during the course of a joint U.S.-Russian study of Kashmir and Afghanistan in Nepal, India and Pakistan in March-April, 1992. See Stephen P. Cohen, Sergei Kamenev, Vladimir Moskalenko and Leo Rose, Afghanistan and Kashmir (New York: The Asia Society, and Moscow: The Russian Oriental Institute, 1993). I have made some minor additions in view of a year in residence with the Ford Foundation, New Delhi, 1992-93."
    },
    {
        name: 'tue',
       
        desc: "Since late 1989 the Kashmir problem has become intimately linked to the larger question of war and peace in South Asia. A virtual insurrection among Kashmiri Muslims in the Valley, and in Srinagar, the largest city in the former princely state of Jammu and Kashmir-created a serious crisis between New Delhi and Islamabad. From that date onward the United States, echoing the Pakistani argument that the only point of conflict between India and Pakistan was Kashmir, has regarded the disputed state as one of the few places in the world where large-scale war could break out soon. American officials and experts have built a scenario that leads,"
    },
    {
        name: 'wed',
        desc: "Thultimately, to the horror of nuclear weapons falling on Indian and Pakistani cities. According to this scenario a local crisis in Kashmir could trigger off a military response by either India or Pakistan; then, the other side will overreact, leading to a direct clash between regular Indian and Pakistani forces; after that, the war could escalate to an exchange of nuclear weapons, since both states are thought now to be nuclear-capable-even if they do not have deployed nuclear forces.2 In a refinement of the scenario, it has been argued that even the suspicion of escalation might lead to a nuclear strike, presumably by the weaker or more vulnerable of the two countries (in this case, Pakistan) since it would not want to risk having its small nuclear forces destroyed in an Indian pre-emptive attack."
    },
    {
        name: 'thru',
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc."
    },
    {
        name: 'fri',
        desc: "This scenario has led to a great deal of diplomatic activity, much of it by American officials, and very recently (September, 1994) by the Secretary-General of the United Nations. There have been three strands to to this diplomacy. First, the Kashmiri problem has been addressed directly by several American officials. In a series of speeches and informal addresses, the traditional American position on Kashmir was subtly altered, so that the US now openly declares all of Kashmir to be disputed territory (in the past the US had never publicly challenged the legitimacy of the accession of Kashmir to India, only its wisdom). Second, both India and Pakistan were urged to engage in additional “confidence building measures”—CBMs—that might prevent, or slow down the escalation process described above; third, both incentives and sanctions have been wielded, in an attempt to get the two countries to talk directly about their nuclear weapons programs.3"
    },
    {
        name: 'sat',
        desc: "This scenario has led to a great deal of diplomatic activity, much of it by American officials, and very recently (September, 1994) by the Secretary-General of the United Nations. There have been three strands to to this diplomacy. First, the Kashmiri problem has been addressed directly by several American officials. In a series of speeches and informal addresses, the traditional American position on Kashmir was subtly altered, so that the US now openly declares all of Kashmir to be disputed territory (in the past the US had never publicly challenged the legitimacy of the accession of Kashmir to India, only its wisdom). Second, both India and Pakistan were urged to engage in additional “confidence building measures”—CBMs—that might prevent, or slow down the escalation process described above; third, both incentives and sanctions have been wielded, in an attempt to get the two countries to talk directly about their nuclear weapons programs.3"
    },
    {
        name: 'sun',
        desc: "This scenario has led to a great deal of diplomatic activity, much of it by American officials, and very recently (September, 1994) by the Secretary-General of the United Nations. There have been three strands to to this diplomacy. First, the Kashmiri problem has been addressed directly by several American officials. In a series of speeches and informal addresses, the traditional American position on Kashmir was subtly altered, so that the US now openly declares all of Kashmir to be disputed territory (in the past the US had never publicly challenged the legitimacy of the accession of Kashmir to India, only its wisdom). Second, both India and Pakistan were urged to engage in additional “confidence building measures”—CBMs—that might prevent, or slow down the escalation process described above; third, both incentives and sanctions have been wielded, in an attempt to get the two countries to talk directly about their nuclear weapons programs.3"
    },

]

 async function seedArticles(){


     await Article.deleteMany({})
     await Article.insertMany(articles);

    console.log("articles have been seeded sucessfully")

}

seedArticles()