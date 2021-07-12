let cards=[
    {
        image:"https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/14/1522871998-aif13.jpg?resize=480:*",
        value:1,
        status:"closed"
    },
    {
        image:"https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/14/1522871998-aif13.jpg?resize=480:*",
        value:1,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/7c/70/3f/7c703ff95934b0094c5be9994f1998c5.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/7c/70/3f/7c703ff95934b0094c5be9994f1998c5.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/474x/97/bf/27/97bf27becd0df4ff387b882572925416.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/474x/97/bf/27/97bf27becd0df4ff387b882572925416.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://starbaseatlanta.com/wp-content/uploads/smab71976.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://starbaseatlanta.com/wp-content/uploads/smab71976.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/236x/86/5e/20/865e2026dcfc658d3a853012dac12099.jpg",
        value:5,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/236x/86/5e/20/865e2026dcfc658d3a853012dac12099.jpg",
        value:5,
        status:"closed"
    },
        
]

let temp;
for(let i=cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));

    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}

let cardsCopy=cards;


function displayCards(data){
    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
        
           <div class="card" style="background-image:url('${card.image}')">
                <div class=" overlay ${card.status}" onclick="openCard(${index})"></div>
           </div>
        
        `;
    });

    document.getElementById('cards').innerHTML=cardsString;
}

displayCards(cards);

let cardCount=1;
let val1=null,val2=null;
let score=0;

function openCard(index){
   console.log(cards);
    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerHTML=score;

            val1=null;
            val2=null;
            cardCount=1;
        }
        else {
            alert("Game Over");
            location.reload();
        }
    }

    displayCards(cards);
}