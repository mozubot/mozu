function response( room, msg, sender, isGroupChat, replier, imageDB ) {
    try{

        if( msg == "모주" ) replier.reply("모주모주!");

    } catch(e) {
        Api.replyRoom("모주봇", e);
        Api.off("모주");
    }
}
