



// 是否登陆
var flag = false;


// 集成文档请参考 https://docs.starrtc.com/en/docs/web-7.html
var aecRequestBaseURL = "https://www.starrtc.com/aec";				//开启AEC后，才生效，从此url获取各种列表信息
var privateURL = "192.168.8.129";								//服务地址
var webrtcIP = "192.168.8.129";		


//设置日志等级，开启低等级日志会包含高等级日志，如开启DEBUG，则同时开启INFO、WARN、ERROR，默认为开启DEBUG
StarRtc.InitlogLevel(LOG_LEVEL.LOG_LEVEL_DEBUG);
//创建SDK对象
StarRtc.Instance= new StarRtc.StarSDK();

////////////////////////私有云改配置///////////////////////
///////////////////////以下privateURL需替换为私有部署IP////

//StarRtc.Instance.setConfigUseAEC(true);    							//是否开启AEC

StarRtc.Instance.setMsgServerInfo(privateURL, 19903) 					//ip, websocket port  //需要手动从浏览器输入 https://ip:29991 信任证书

StarRtc.Instance.setChatRoomServerInfo(privateURL, 19906) 			//ip, websocket port //需要手动从浏览器输入 https://ip:29993 信任证书

StarRtc.Instance.setSrcServerInfo(privateURL, 19934, 19935, webrtcIP)  			//ip, websocket port, webrtc port, webrtc ip//需要手动从浏览器输入 https://ip:29994 信任证书

StarRtc.Instance.setVdnServerInfo(privateURL, 19940, 19941, webrtcIP) 			//ip, websocket port, webrtc port, webrtc ip //需要手动从浏览器输入 https://ip:29995 信任证书

StarRtc.Instance.setVoipServerInfo(privateURL, 10086, 10087, 10088, webrtcIP) 	//ip, voipServer port, websocket port, webrtc port, webrtc ip //需要手动从浏览器输入 https://ip:29992 信任证书




function starRtcLoginCallBack(data,status) {
	console.log(status)
	switch (status){

		//链接状态
		case "connect success":
		case "connect failed":	
		case "connect closed":
			break;
		//收到登录消息
		case "onLoginMessage":
			if(data.status=="success"){
				vmain.loginSuccess()
				console.log(data)
			}
			console.log("login:"+data.status);
			break;
		
		case "onSingleMessage":
			console.log(data);
			vm.msgShow(data.msg);
			break;
		case "onGetOnlineNumber":
			if(data.status=="success"){
				for (var i=1;i<=data.totalPageNum;i++){
					StarRtc.Instance.getAllUserList(i)
				}
			}
			break;
		case "onGetAllUserList":
			var userList=[];
			if(data.status=="success"){
				userList=userList.concat(data.userIdList);
				console.log(data.userIdList);
			}
			vm.userList=[];
			userList.forEach(function(value,index,array){
				var userid=""
				if(index==userList.length-1){
					userid=value.slice(0,value.length-1);
				}
				else{
					userid=value.slice(0,value.length);
				}
				userid=userid.split("_")[1];
				vm.userList.push(userid);
			});
			vmg.userList=vm.userList;
			vmVoip.userList=vm.userList;
			console.log(vm.userList);
			break;
		case "onCreateGroupFin":
			console.log(data);
			if(data.statusStr=="GEN_SUCCESS"){
				var groupId=data.groupId.split("_")[1];
				console.log(groupId);
				vmg.groups.push(groupId);
				
			}
			break;
		case "onSendGroupMsgFin":
			console.log(data);
			break;
		case "onGroupMessage":
			console.log(data);
			var groupId=data.groupId;
			vmg.showGroupMsg(data.msg)
			break;
		case "onVoipMessage":
			console.log(data.type);
			switch(data.type){
				case "voipCall":
					vmVoip.callerId= data.fromId;
					vmVoip.callerType="视频";
					vmVoip.voipAudio=false;
					vmVoip.voipResponseDlg=true;
					console.log(vmVoip);
					break;
				case "voipAudioCall":
					vmVoip.callerId= data.fromId;
					vmVoip.callerType="音频";
					vmVoip. voipAudio=true;
					vmVoip.voipResponseDlg=true;
					break;
				case "voipHangup":
					vmVoip.voipResponseDlg=false;
					break;
				case "voipRefuse": //拒绝
					vmVoip.voipConnectDlg=false;
					vmVoip.callerId="";
					alert("对方拒绝了通话！");
					break;
			}
		
	}
}

//登录函数
function starRtcLogin(agentId, userId, callBack) {
	//获取SDK版本
	StarRtc.Instance.version();
	//SDK登录函数
	StarRtc.Instance.login(agentId, userId, callBack);
}


function streamInfo() {
	console.log(this);
	console.log("指向 streamInfo 调用者")
	this.videoId = "";
	this.streamObj = null;
	this.switchFlag = false;
}

function starSendMsg(id){
	console.log(id);
	currentID=id;
	$("#calleeID").html(currentID)
};

function bindTabs(flag) {
	if (flag) {	
		$("#msgButton").bind("click", showMsgTab);	
		$("#msgGroupButton").bind("click",vmain.showMsgGroupTab);
		$("#chatButton").bind("click",vmain.showChatTab);
		$("#voipButton").bind("click",vmain.showVoipTab);
		
	}
	else {
		$("#msgButton").unbind("click");
		$("#msgGroupButton").unbind("click");
		$("#chatButton").unbind("click");
		$("#showChatTab").unbind("click");
	}
}

//点击返回触发的函数
var currFunc = {
	"exit": undefined
};
function showMsgTab(){
	activeTab = "msg";
	$(".tab").hide();
	$("#msgTab").slideDown(2000, enterMsgFunc);
	$("#getUserList").bind("click",getUserList)
}
function trimStr(str){
	console.log(str);
	return str.replace(/(^\s*)|(\s*$)/g,"");
};

function getUserList(){
	StarRtc.Instance.getOnlineNumber()
};
function enterMsgFunc(){
	currFunc.exit=exitMsgFunc;
}



$().ready(function () {
	
});

var vmain=new Vue({
	el:"#mainTab",
	data:{
		//agentId，保留，当前未使用，默认为""
		agentid:"",
		 //userId 
		userid:"",
		//currentID
		currentID:"请先登陆",
		// 显示图片
		userImage:false,
	},
	methods:{
		backToMain:function(){
			this.showMainTab();
			if (currFunc.exit != undefined) {
				currFunc.exit();
			}
				
		},


		showMainTab:function(){
			activeTab = "main";
			$(".tab[id!=mainTab]").hide();
			$("#mainTab").slideDown(2000);
		},

		login:function(){
			if(this.userid==undefined) return;
			this.userid = trimStr(this.userid);
			if(this.userid!=""){
				console.log("SDK Version"+ StarRtc.Instance.version());
				starRtcLogin(this.agentid,this.userid,starRtcLoginCallBack);
			}
			else{
				alert("输入不合法");
			}	
		},
		starlogout:function(){
			StarRtc.Instance.logout();
			bindTabs(false);
			this.userImage=false;
			this.userid="";
			this.currentID="请先登录";
		},
		loginSuccess:function(){
			this.userImage=true;
			this.currentID=this.userid;
			bindTabs(true);
		},
		showMsgGroupTab:function(){
			console.log("gorup click");
			activeTab = "groupMsg";
			$(".tab").hide();
			$("#groupMsgTab").slideDown(2000, enterMsgFunc);
			vmg.getUserList=getUserList;
		},
		showChatTab:function(){
			console.log("chat click");
			activeTab= "chatRoom";
			$(".tab").hide();
			$("#chatRoom").slideDown(2000,this.enterChatFunc);
		},
		showVideoMeetingTab:function(){
			console.log("showVideoMeetingTab click");
			activeTab="videoMeetingTab";
			$(".tab").hide();
			$("#videoMeetingTab").slideDown(2000,this.enterMeetingFunc);
			
		},
		enterMeetingFunc:function(){


		},
		showVoipTab:function(){
			console.log("voip click");
			activeTab="voipTab";
			$(".tab").hide();
			$("#voipTab").slideDown(2000,function(){
				//currFunc.exit=vmVoip.exitVoipFunc;
			});
		

		},
		msgGroup:function(){
			console.log("1231231312");
		},

		enterChatFunc:function(){

		}
	} 
});

var vm = new Vue({
	el: '#msgTab',
	data: {
		testUSer: "",
		userList:[],
		msgContext:"",
		msgDlg:[]
	},
	methods:{
		userClick:function(user){
			this.testUSer=user;
			console.log(this.testUSer);
		},
		msgSend:function(){
			console.log(this.msgContext);
			StarRtc.Instance.sendSingleMsg( this.testUSer,"_digest",this.msgContext, typeof(this.msgContext));
			this.msgDlg.push("这是自己说的"+":"+this.testUSer+":"+this.msgContext)
		},
		msgShow: function(msg){
			console.log("msg show called")
			var contentData=msg.contentData;
			var fromId =msg.fromId;
			var msgIndex= msg.msgIndex;
			var targetId=msg.targetId;
			var time =msg.time;
			this.msgDlg.push(msg.fromId+":"+msg.contentData);
		}
	}
});


var vmVoip =new Vue({
	el:"#voipTab",
	data:{
		userList:[],
		targetUserId:"",
		calleeId:"1231",
		// 仅音频标志位
		voipAudio:false,
		currRoom:null,
		//呼叫者
		callerId:"123123",
		callerType:"123123123",
		// 呼叫确定窗口
		voipCallDlg :false,
		//呼叫链接窗口
		voipConnectDlg :false,

		voipResponseDlg: false,
	},
	methods:{
		backToMain:function(){
			vmain.showMainTab();
			this.exitVoipFunc();
		},
		getUserList:function(){
			StarRtc.Instance.getOnlineNumber();
		},
		voipCalling:function(){
			var targetUid = this.targetUserId.trim();
			if (targetUid == null || targetUid == undefined || targetUid == "") {
				alert("对方ID不能为空");
				return;
			}
			this.calleeId=targetUid;
			this.voipCallDlg=true;
		},
		voipSetStream:function(videoObj, streamObj){
			videoObj.srcObject = streamObj;
			videoObj.play();

		},
		//开始voip呼叫
		callingVOIP:function(){
			var targetUid =this.targetUserId.trim();
			if (targetUid == null || targetUid == undefined || targetUid == "") {
				alert("对方ID不能为空");
				return;
			}
			this.calleeId=targetUid;
			this.voipCallDlg=false;
			console.log("voipAudio"+ this.voipAudio)
			//获取voipSDK
			this.currRoom = StarRtc.Instance.getVoipRoomSDK("call", this.voipCallBack, { "roomInfo": { "targetId": targetUid, "audioOnly": this.voipAudio } });
			//链接
			this.currRoom.sigConnect();
			this.voipConnectDlg=true;
		},
		//同意对方呼叫
		voipAcceptCall:function(){
			if (currFunc.exit != undefined) {
				currFunc.exit();
			}
			vmain.showVoipTab();
			this.currRoom = StarRtc.Instance.getVoipRoomSDK("response",this.voipCallBack, { "roomInfo": { "targetId": this.callerId, "audioOnly": this.voipAudio } });
			//链接
			this.currRoom.sigConnect();
			this.voipResponseDlg=false;
		},
		//拒绝对方呼叫
		voipRefuseCall:function(){
			StarRtc.Instance.sendVoipRefuseMsg(this.callerId);
			this.voipResponseDlg=false;
		},
		// 挂断、结束
		voipHangup:function(){
			if (this.currRoom != null) {
				this.currRoom.leaveRoom();
				this.currRoom.sigDisconnect();
				this.currRoom = null;
			}
		},
		exitVoipFunc:function(){
			this.voipHangup();
		},
		stopVoip:function(){
			this.currRoom = null;
			this.voipResponseDlg=false;
			this.voipConnectDlg=false;
			this.voipCallDlg=false;
			this.callerId="";
			this.targetUserId="";
			$("#voipBigVideo")[0].srcObject = null;
			$("#voipBigVideo")[0].load();
			$("#voipSmallVideo")[0].srcObject = null;
			$("#voipSmallVideo")[0].load();
		},
		// 取消
		voipCancleCall:function(){
			this.exitVoipFunc();
			this.voipConnectDlg=false;
		},
		// voip 回调函数
		voipCallBack:function(data, status, oper){
			console.log(status);
			console.log(data);
			var thisRoom = data.obj;
			switch(status){
				case "connect success":
					thisRoom.createStream();
					//连接成功
					break;
				case "connect failed":
				case "connect closed":
					this.stopVoip();
					//连接失败
				break;
				case "onWebrtcMessage":
					//视频接口消息
					switch(data.type){
						case "streamCreated"://本地视频流创建，data.status == "success"为成功
							if(data.status=="success"){
								console.log(data);
								this.voipSetStream($("#voipSmallVideo")[0], data.streamObj);
								//加入房间
								thisRoom.joinRoom();
								
							}
							else{
								this.voipConnectDlg=false;
								alert("获取摄像头视频失败！请检查摄像头设备是否接入！error:" + data.error);
							}
							break;
						case "voipStreamReady"://远端视频流准备，data.status == "success"为成功 //可以使用data.streamObj对象
							if (data.userData.roomInfo.audioOnly) {
								console.log("audioOnly");
								this.voipSetStream($("#voipBigAudio")[0], data.streamObj);
							}
							else {
								console.log("bigvideo")
								this.voipSetStream($("#voipBigVideo")[0], data.streamObj);
							}
							break;
							
					}
					break;
				case "onVoipMessage":
					console.log(data);
					switch(data.type)
					{
						case "voipRefuse"://对方拒绝了通话
						this.voipConnectDlg=false;
						this.callerId="";
						alert("对方拒绝了通话！");
						break;
						case "voipHangup":
						//对方挂断了通话
						alert("对方挂断了通话！");
						thisRoom.sigDisconnect();
						break;
						case "voipConnect":
						//voip接通
						this.voipConnectDlg=false;
						break;
						case "voipBusy":
						//对方正忙
						break;
						case "voipSingleMsg":
						//收到voip消息
						break;
					}
					break;	
			
				
			}
		}

		
	}
});

var vmChat =new Vue({
	el:"#chatRoom",
	data:{
		//starUser
		StarUserInfo:{
			agentId:"sabc123",
			userId:"sabc456",
			starUid:"sabc789",
			starToken:"sabc",

		},
		//userdata
		roomInfo:{
			id:"123",
			name:"454",
			creator:"6666"
		},
		CHATROOM_LIST_TYPE:{
			//列表类型：聊天室
			CHATROOM_LIST_TYPE_CHATROOM: i++,
			//列表类型：直播
			CHATROOM_LIST_TYPE_LIVE: i++,
			//列表类型：直播推流
			CHATROOM_LIST_TYPE_LIVE_PUSH: i++,
			//列表类型：会议
			CHATROOM_LIST_TYPE_MEETING: i++,
			//列表类型：会议推流
			CHATROOM_LIST_TYPE_MEETING_PUSH: i++,
			//列表类型：小班课
			CHATROOM_LIST_TYPE_CLASS: i++,
			//列表类型：小班课推流
			CHATROOM_LIST_TYPE_CLASS_PUSH: i++,
			//列表类型：音频直播
			CHATROOM_LIST_TYPE_AUDIO_LIVE: i++,
			//列表类型：音频直播推流
			CHATROOM_LIST_TYPE_AUDIO_LIVE_PUSH: i++,
			//列表类型：超级对讲
			CHATROOM_LIST_TYPE_SUPER_ROOM: i++,
			//列表类型：超级对讲推流
			CHATROOM_LIST_TYPE_SUPER_ROOM_PUSH: i++
		}
		
	},
	methods:{
		saveUserInfo:function(){
			console.log(this.StarUserInfo)
		},
		saveChatInfo:function(){
			console.log(this.roomInfo)
		},
		createRoom:function(){
			console.log("createRoom click")
			console.log(StarRtc.Instance)
			// StarChatroom= StarRtc.StarChatSDK("new",this.chatInnerCallback,this.roomInfo,
			// 	CHATROOM_LIST_TYPE.CHATROOM_LIST_TYPE_CHATROOM,this.StarUserInfo,StarRtc.Instance.StarConfig
			// )
			var StarChatroom =StarRtc.Instance.getChatRoomSDK();
			console.log(StarChatroom)
			StarChatroom.sigConnect();
			//StarRtc.StarChatSDK = function (_oper, _userCallback, _userData, _liveType, _starUser, _starConfig)
		},
		chatInnerCallback:function (data, status) {
			console.log(status);
			switch (status){
				case "connect success":
					//连接成功
					break;
				case "connect failed":
				case "connect closed":	
					//连接失败
					break;
				case "onChatRoomMessage":
				{
					//收到聊天室消息
					switch(data.type)
					{
						case "createChatRoom":
						//创建聊天室
						//data.status == "success"为成功，data.chatroomId为聊天室Id
						break;
						case "deleteChatRoom":
						//删除聊天室
						//data.status == "success"为成功
						break;
						case "joinChatRoom":
						//加入聊天室
						//data.status == "success"为成功
						break;
						case "recvChatPrivateMsg":
						//收到聊天室私聊消息
						case "recvChatMsg":
					
						break;
						case "chatroomUserKicked":
						//收到被踢出聊天室消息
						break;
						case "getRoomOnlineNum":
						//收到获取聊天室人数消息，data.onlineNum：在线人数
						break;							
						case "serverErr":
						//收到服务器错误消息
						//data.msg为具体错误原因
						break;
						
					}
				}
				break;
				
			}
		}
		
	}
});

var vmMeet =new Vue({
	el:"#videoMeetingTab",
	data:{
		listTypes:[CHATROOM_LIST_TYPE.CHATROOM_LIST_TYPE_MEETING, CHATROOM_LIST_TYPE.CHATROOM_LIST_TYPE_MEETING_PUSH],
		creatDialog:true,
		roomName:"",
		currRoom:null,
		isPublic:false,
		isShare:false,
		SelfVideoCtrl:false,
		videoMeetingIds:[],
		streamInfos:[],
		meetingRoomInfo:null,
		videoEnable:true,
		audioEnable:true,

	},
	methods:{
		//退回主选单
		backToMain:function(){
			vmain.showMainTab();
			this.leaveRoom();
		},
		//初始化
		resetStreamInfos:function() {
			this.streamInfos = [];
			for (var i = 0; i < 7; ++i) {
				var stream = new streamInfo();
				this.streamInfos.push(stream);
			}
		},
			
		setStreamInfo: function(upId, videoId, stream) {
			if (this.streamInfos[upId]) {
				this.streamInfos[upId].videoId = videoId;
				this.streamInfos[upId].streamObj = stream;
			}
		},
		//控制本地视频
		videoCtrl:function(){
			if (this.currRoom) {
				this.videoEnable = !this.videoEnable;
				if (this.videoEnable) {
					this.currRoom.publishStream({ "video": true });
				}
				else {
					this.currRoom.publishStream({ "video": false });
				}
		
			}
		},
		//控制本地音频
		audioCtrl:function(){
			if (this.currRoom) {
				this.audioEnable = !this.audioEnable;
				if (this.audioEnable) {	
					this.currRoom.publishStream({ "audio": true });
				}
				else {
					this.currRoom.publishStream({ "audio": false });
				}
			}
		},
		
		//添加新的视频对象
		videoMeetingAddNewVideo:function(newVideoId, stream, clickCallback) {
			var parentObj = $("#videoMeetingVideoZone");
			var wrapperObj = $("<div></div>");
			var videoObj = $("<video id=\"" + newVideoId + "\" style=\"width:100%;height:100%\"></video>");

			videoObj.bind("click", clickCallback);

			wrapperObj.append(videoObj);

			this.addNewVideo(parentObj, wrapperObj);

			videoObj[0].srcObject = stream;
			videoObj[0].play();
		},

		addNewVideo: function(parentObj, videoObject) {
			var childrenObjs = parentObj.children();
			console.log(childrenObjs);
		
			switch (childrenObjs.length) {
				case 0:
					videoObject.css({ "width": "100%", "height": "100%", "float": "left" });
					break;
				case 1:
					childrenObjs.css({ "width": "50%", "height": "100%", "float": "left" });
					videoObject.css({ "width": "50%", "height": "100%", "float": "left" });
					break;
				case 2:
					childrenObjs.css({ "width": "33.33%", "height": "100%", "float": "left" });
					videoObject.css({ "width": "33.33%", "height": "100%", "float": "left" });
					break;
				case 3:
					childrenObjs.css({ "width": "50%", "height": "50%", "float": "left" });
					videoObject.css({ "width": "50%", "height": "50%", "float": "left" });
					break;
				case 4:
					childrenObjs.css({ "width": "33.33%", "height": "100%", "float": "left" });
					videoObject.css({ "width": "33.33%", "height": "100%", "float": "left" });
					break;
				case 5:
					childrenObjs.css({ "width": "33.33%", "height": "50%", "float": "left" });
					videoObject.css({ "width": "33.33%", "height": "50%", "float": "left" });
					break;
				case 6:
					childrenObjs.css({ "width": "33.33%", "height": "100%", "float": "left" });
					videoObject.css({ "width": "33.33%", "height": "100%", "float": "left" });
					break;
			}
			parentObj.append(videoObject);
		},
		
		//exitMeetFunc :
		// 退出当前房间
		leaveRoom:function(){
			console.log("退出当前房间");
			console.log(this);
			if (this.currRoom != null) {
				//离开房间
				this.currRoom.leaveRoom();
				//断开连接
				this.currRoom.sigDisconnect();
				this.currRoom = null;
			}
		},
		createRoom:function(){
			this.creatDialog=true;
			if (this.roomName == "") {
				alert("会议室名称不能为空！");
				return;
			}
			this.leaveRoom();
			var type = this.isPublic ? 1 : 0;
			meetingShareScreen = this.isShare;
			//获取视频会议SDK
			this.currRoom = StarRtc.Instance.getVideoMeetingRoomSDK("new", this.videoMeetingCallBack, {
				"roomInfo": {
					"creator": vmain.currentID,
					"id": "",
					"name":  this.roomName,
					"Type": type
				}
			});
			//链接
			this.currRoom.sigConnect();
			
		},
		videoMeetingSetStream:function(streamObj){
			var selfVideo = $("#videoMeetingSelfVideo")[0];
			selfVideo.srcObject=streamObj;
			selfVideo.play();
			this.SelfVideoCtrl=true;

		},
		deleteRoom:function(){
			if (this.currRoom != null) {
				console.log("删除当前会议室");
				this.currRoom.deleteCurrRoom();
			}
		},
		loadVideoMeetingList:function(_callback){
			StarRtc.Instance.queryRoom(this.listTypes, function (status, listData) {	
				vmMeet.videoMeetingIds = listData;	
				if (_callback != undefined) {
					_callback();
				}
			});
		},
		openVideoMeeting:function(roomInfo){
			
			console.log("打开会议室");
			console.log(roomInfo);
			this.roomName=roomInfo.name;
			if(this.meetingRoomInfo==roomInfo){
				console.log("会议室相同 返回") ;
				return;
			}
			this.meetingRoomInfo=roomInfo;
			this.leaveRoom();
			this.currRoom=StarRtc.Instance.getVideoMeetingRoomSDK("open",this.videoMeetingCallBack,{"roomInfo":roomInfo})
			console.log(this.currRoom);
			this.currRoom.sigConnect()

		},
		getMeetingList:function(event){
			this.loadVideoMeetingList();
		},
		// 视频流断开，后续操作
		stopVideoMeeting:function(){
			//流信息，用于切换大小图
			this.resetStreamInfos(this.streamInfos);
			this.meetingRoomInfo = undefined;
			this.SelfVideoCtrl=false;
			$("#videoMeetingVideoZone").children().each(function (ids, ele) {
				console.log(ids,ele);
				var video = $(ele).children("video").first();
				if (video.attr("id") != "videoMeetingSelfVideo") {
					console.log(video);
					$(ele).remove();
				}
				else {
					console.log(video);
					video[0].srcObject = null;
					video[0].load();
				}
			});
		},
		videoMeetingCallBack:function(data, status, oper){
			var thisRoom = data.obj;
			console.log(status);
			switch(status){
				case "connect success":
				//连接成功
					if(oper=="open"){
						//创建视频流，会触发onWebrtcMessage中的streamCreated回调
						thisRoom.createStream();
					}
					if(oper=="new"){
						//创建新房间，会触发onWebrtcMessage中的createChannel回调
						thisRoom.createNew();
					}
					break;
				case "connect failed":
				case "connect closed":
				//连接失败
					this.stopVideoMeeting();
					break;
				case "onChatRoomMessage":
				//收到聊天室类别消息
					switch(data.type){
						case"jionChatRoom":
							if(data.status=="success"){}
							else{
								alert(data.failedStatus);
							}
							break;
						case"recvChatPrivateMsg":
							break;
						case "recvChatMsg":
							break;
						case "chatroomUserKicked":
							thisRoom.leaveRoom();
							alert("你已经被提出房间");
							break;
						case"serverErr":
							alert("服务器错误："+ data.msg)
							break;
						case "deleteChatRoom":
							if(data.status=="success"){
								console.log(data);
								StarRtc.Instance.delRoom(CHATROOM_LIST_TYPE.CHATROOM_LIST_TYPE_MEETING.toString(), 
								data.userData.roomInfo, function (status) {
									console.log("保存" + status);
								});
							}
							break;
					}
				break;
				case "onWebrtcMessage":
					console.log(data);
					switch(data.type){
						case "streamCreated":
							console.log("创建流 streamCreated::" +oper);
							//本地视频流创建，data.status == "success"为成功
							if(data.status=="success"){
								this.videoMeetingSetStream(data.streamObj);
								if(oper=="new"||oper=="open") thisRoom.joinRoom();
							}
							else{
								 alert("获取摄像头视频失败！请检查摄像头设备是否接入！error:"+data.error);
							}
							break;
						case "srcApplyUpload":
								//申请上传状态，data.status == "success"为成功
						break;
						case "addUploader":
							//视频会议添加成员
							console.log("视频会议添加新成员");
							console.log(data);	
							var newVideoId = "webrtc_video_" + data.upUserId;
							this.setStreamInfo(data.upId, newVideoId, data.streamInfo.streamObj);
							this.videoMeetingAddNewVideo(newVideoId, data.streamInfo.streamObj, function (evt) {
								streamConfigChange(thisRoom, data.upId);
							});
							break;
						case "removeUploader":
							//视频会议移除成员
							console.log("移除视频会议成员");

						break;
						case "delChannel":
							//删除视频会议，data.status == "success"为成功
							console.log(data);
							console.log("删除通道, delChannel");
							if(data.status="success"){
								StarRtc.Instance.delRoom(CHATROOM_LIST_TYPE.CHATROOM_LIST_TYPE_MEETING.toString(), data.userData.roomInfo, function (status) {
									console.log("保存" + status);
								});
							}
						break;
						case "createChannel":
							console.log("创建通道, createChannel")
							//创建视频会议，data.status == "success"为成功
							if(data.status=="success"){
								if(StarRtc.Instance.starConfig.configUseAEC){
									//开启AEC
								}
								else{
									StarRtc.Instance.reportRoom(CHATROOM_LIST_TYPE.CHATROOM_LIST_TYPE_MEETING.toString(),
									data.userData.roomInfo,function(){
										console.log("保存"+status)
									})
								}

							}
							else{
								alert("创建失败"+data.msg);
							}
							break;
						case "streamData":
								//收到实时数据
						break;
						case "streamConfig":
								//设置大小图回调
						break;
						case "serverErr":
								//服务器错误
						break;		
					}
				break;

			}

		},

	}
});

var vmg = new Vue({
	el:"#groupMsgTab",
	data:{
		userList:[],
		groupID:"",
		groupList:[],
		userID:"",
		msgDlg:[],
		msgContext:"",
		groups:[],
		
	},
	methods:{
		getUserList:function(){
			StarRtc.Instance.getOnlineNumber()
		},
		createGroup:function(){
			StarRtc.Instance.createGroup(this.groupList, "sabc");
		},
		adduser:function(){
			this.groupList.push(this.userID)
		},
		delGroup:function(){
			StarRtc.Instance.delGroup  (this.groupID);
		},
		msgSend:function(){
			StarRtc.Instance.sendGroupMsg (this.groupID,"asda",this.msgContext);
		},
		showGroupMsg:function(msg){
			var obj =JSON.parse(msg);
			console.log(obj);
			this.msgDlg.push("groupId:"+obj.targetId+"; formID:"+obj.fromId+"; msg:"+obj.contentData);
		}
	}
})



