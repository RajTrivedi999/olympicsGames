let score={};

function OpeningCeremony(score, Race100M){
    score={red:0,blue:0,green:0,yellow:0};

    setTimeout(()=>{
        console.log("Let the games begin");
        console.log("Initial Score: " , score);
        Race100M(score,LongJump)
    },1000);
}

function Race100M(score,LongJump){
    setTimeout(()=>{
        console.log("Race started!!");
        console.log("Score before 100M Race" , score);
        let newScore=[];
        let arr=[];
        
        temp= Math.floor(Math.random()*6 + 10);
        newScore[0]=temp
        arr[0]=temp
        for(var i=1;i<4;i++){
            let found=false;
            temp= Math.floor(Math.random()*6 + 10);
            for(var j=0;j<arr.length;j++){
                if(arr[j]==temp){
                    i--;
                    found=true;
                    break;
                }
            }
            if(found==false){
                newScore[i]=temp
                arr[i]=temp
            }
        }
        let obj={
            red: newScore[0],
            blue: newScore[1],
            green: newScore[2],
            yellow: newScore[3]
        };
        let sortedobj=Object.keys(obj).sort((a,b)=> obj[a]-obj[b]);

        console.log("Winner of 100M Race is: " + sortedobj[0]);
        console.log("Runner-up of 100M rase is: " + sortedobj[1]);
        
        score[sortedobj[0]]+=50
        score[sortedobj[1]]+=25

        console.log("Score after 100M Race" , score);

        LongJump(score,HighJump)
        
    },3000)
}

function LongJump(score,HighJump){
    setTimeout(()=>{
        console.log("Longjump started!!")
        console.log("Score before LongJump" , score);
        let color=["red","blue","green","yellow"][Math.floor(Math.random() * 4)];
        score[color]+=150
        console.log("Winner of LongJump is: ",color);
        console.log("Score after LongJump" , score);
        HighJump(score,AwardCeremony)
    },2000)
}

function HighJump(score,AwardCeremony) {
    console.log("Highjump started!!")
    console.log("Score before HingJump" , score);
    let person = prompt("What colour secured the highest jump:");
    
    if(person=="red"){
        score[person]+=100
        console.log("Winner of HighJump is: ",person);
    }else if(person=="blue"){
        score[person]+=100
        console.log("Winner of HighJump is: ",person);
    }else if(person=="green"){
        score[person]+=100
        console.log("Winner of HighJump is: ",person);
    }else if(person=="yellow"){
        score[person]+=100
        console.log("Winner of HighJump is: ",person);
    }else{
        console.log("Event was cancelled");
    }

    console.log("Score after HingJump" , score);
    AwardCeremony(score)
}

function AwardCeremony(score){
    console.log("AwardCeremony started!!")
    let sortedobj=Object.keys(score).sort((a,b)=> score[b]-score[a]);
    console.log(`${sortedobj[0]} came first with ${score[sortedobj[0]]} points.
${sortedobj[1]} came first with ${score[sortedobj[1]]} points.
${sortedobj[2]} came first with ${score[sortedobj[2]]} points.
${sortedobj[3]} came first with ${score[sortedobj[3]]} points.`)
}

OpeningCeremony(score,Race100M);
