    const sleep = (time) => {
    return new Promise( resolve => setTimeout(resolve, time));
};

check = true;
const save = {};
const response = async (room, msg, sender, isGroupChat, replier) { => {
switch(msg){
	
	
    case '네임':    
    replier.reply("은 코알라!🐨");
    break;
    
    case '모주야':    
    if(sender == "bjy0212(닉넴421)"){
    replier.reply("우리의 스승님, "+sender+" !!!🤓");
    }else if(sender == "하순모주"){
    replier.reply("네, "+sender+" 주인님. 절 부르셨나요?🤗");
    }else{
    replier.reply("반가워요, "+sender+" 님!☺️");
    }
    break;
  
    case '회원가입':
    if(save[sender]){
      replier.reply(sender+" 님은 이미 회원가입을 하셨습니다.");
    }
    if(!save[sender]){
      save[sender] = {"bell" : 100, "health" : 10, "a": 1, "b": 1, "무기": 0};
      replier.reply("회원가입 완료");
    }
    break;
 
    case '정보':
    if(!save[sender]){
      replier.reply(sender+" 님, 회원가입을 먼저 해주세요.");
    }
    if(save[sender]){
    replier.reply(sender+" 님의 정보입니다\n\n❤ 체력: "+save[sender]["health"]+"\n🔔 벨: "+save[sender]["bell"]+"\n\n🗡무기: "+save[sender]["무기"]);
    }
    break;
    
    case '강화':
    if(!save[sender]){
     replier.reply(sender+" 님, 회원가입을 먼저 해주세요.");
    }
    
  if(save[sender]){
    if(check){
    if(save[sender]["bell"] < 50 ){
      replier.reply("벨이 부족합니다");
      return;
    }
    if(save[sender]["bell"] >= 50 ){
    save[sender]["bell"] = save[sender]["bell"] - 50;
    replier.reply("[   🔔    - 50   ]");
	  replier.reply(sender+" 님이 강화를 시도하는 중 입니다\n\n[   소요시간:  3초   ]");
      check = false;
      replier.reply("...");
	  await sleep(3000);
      check = true;
    
    let c = Math.floor(Math.random() * 100);
    if(c <= 65){
      save[sender]["a"] = save[sender]["a"] + save[sender]["b"];
    let d = save[sender]["a"] - save[sender]["b"];
        replier.reply(sender+" 님의 요술봉이\n✨강화에 성공하였습니다!\n\n[   🧨  "+d+"    + "+save[sender]["b"]+"   ]");
    }
    
      else if(c <= 73){
      save[sender]["a"] = save[sender]["a"] + 3*save[sender]["b"];
    let d = save[sender]["a"] - 3*save[sender]["b"];
        replier.reply("[크리티컬]\n"+sender+" 님의 요술봉이\n ✨강화에 성공하였습니다!\n\n[   🧨  "+d+"    + "+3*save[sender]["b"]+"   ]");
    }
    
    else if(c <= 77){
        save[sender]["a"] = Math.floor(save[sender]["a"]/2); 
        replier.reply(sender+" 님의 요술봉이\n💫저주에 걸렸습니다...\n\n[   🧨    "+save[sender]["a"]+"   ]");
    }

    else{
        save[sender]["a"] = save[sender]["a"] - 2*save[sender]["b"];
    let d = save[sender]["a"] + 2*save[sender]["b"];
          replier.reply(sender+" 님의 요술봉이\n😢강화에 실패하였습니다..\n\n[   🧨  "+d+"    - "+2*save[sender]["b"]+"   ]");
    }
    
    if(save[sender]["a"] <= 0){
      replier.reply("...\n"+sender+" 님의 요술봉이 펑-💥하고 터졌습니다.\n\n[   🧨     1   ]"); 
      save[sender]["b"] = 1;
      save[sender]["a"] = 1;
     }
   }
   }
   }
   break;

  case '슬라임':
    if(!save[sender]){
     replier.reply(sender+" 님, 회원가입을 먼저 해주세요.");
    }
    
    if(save[sender]){
    let c = Math.floor(Math.random() * 100);
    if(c <= 80){
    save[sender]["bell"] = save[sender]["bell"] + 10;
    let d = save[sender]["bell"]-10
      replier.reply("슬라임을 "+sender+" 님의 요술봉으로 콕콕 찔러보았습니다.\n\n[   🔔 "+d+"    + 10   ]");
    }else{
    save[sender]["bell"] = save[sender]["bell"] + 20;
    let d = save[sender]["bell"]-20
      replier.reply("[크리티컬]\n슬라임을 "+sender+" 님의 요술봉으로 푹푹 찔러버렸습니다.\n\n[   🔔 "+d+"    + 20   ]");
    }
  break;
}
}
};
