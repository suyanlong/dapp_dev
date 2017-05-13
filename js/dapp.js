/**
 * Created by suyanlong on 17-5-13.
 */
var web3;
var isChangeIP;
var IP = "http://192.168.3.109:8540";

var abi = [{"constant":false,"inputs":[{"name":"num","type":"bytes32"},{"name":"name","type":"string"},{"name":"property","type":"string"},{"name":"principle","type":"string"}],"name":"upload_org","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"num","type":"bytes32"}],"name":"get_org","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"org","outputs":[{"name":"num","type":"bytes32"},{"name":"name","type":"string"},{"name":"property","type":"string"},{"name":"principle","type":"string"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"num","type":"bytes32"}],"name":"Upload_org","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"num","type":"bytes32"}],"name":"Get_org","type":"event"}];

$(function () {
    var $subblock = $(".subpage");
    var $head = $subblock.find('h2');
    var $ul = $("#proinfo");
    var $lis = $ul.find("li");
    inter = false;
    $head.click(function (e) {
        e.stopPropagation();
        if (!inter) {
            $ul.show();
        } else {
            $ul.hide();
        }
        inter = !inter;
    });

    $ul.click(function (event) {
        event.stopPropagation();
    });

    $(document).click(function () {
        $ul.hide();
        inter = !inter;
    });

    $lis.hover(function () {
        if (!$(this).hasClass('nochild')) {
            $(this).addClass("prosahover");
            $(this).find(".prosmore").removeClass('hide');
        }
    }, function () {
        if (!$(this).hasClass('nochild')) {
            if ($(this).hasClass("prosahover")) {
                $(this).removeClass("prosahover");
            }
            $(this).find(".prosmore").addClass('hide');
        }
    });
    var Web3 = require('web3'); //自己实现的关键字.其实就是函数.
    web3 = new Web3();
    web3.setProvider(new web3.providers.HttpProvider(IP));

    $('.commitInfo1').click(function () {
        var urlName = $("#urlName")[0].value;
        var url = $("#url")[0].value;
        var firstAddress = $("#firstAddress")[0].value;
        var date = $("#date")[0].value;
        var onNum = $("#onNum")[0].value;
        var ownId = $("#ownId")[0].value;
        sendMsg();
    });

    $('.commitInfo2').click(function () {
        var urlName = $("#OwnId1")[0].value;
        var url = $("#OwnName")[0].value;
        var firstAddress = $("#OwnType")[0].value;
        var date = $("#OwnPerson")[0].value;
        sendMsg(urlName,url,firstAddress,date);

    });

    $('.commitInfo3').click(function () {
        var urlName = $("#nodeName")[0].value;
        var url = $("#nodeType")[0].value;
        var firstAddress = $("#nodeStatus")[0].value;
        var date = $("#nodePub")[0].value;
        var onNum = $("#nodePort")[0].value;
        var ownId = $("#addTime")[0].value;
        // sendMsg(urlName,url,firstAddress);
    });

});

function exchangeWeb3Node() {
    web3.setProvider(new web3.providers.HttpProvider(IP));
    if (web3.isConnected()) {
        alert("conneced......");
    } else {
        alert("no connect......");
    }
}

function sendMsg(id,param) {
    if (isChangeIP) {//改变管理节点

    } else {

    }
    if (web3.isConnected()) {
        alert("conneced......");
    } else {
        alert("no connect......");
    }
    // creation of contract object
    var MyContract = web3.eth.contract(abi);
    // initiate contract for an address
    var myContractInstance = MyContract.at('0x1ffB8accd6d248f36bD2Fa56821C76b42dEF7B5D');
    console.log("--------------");
    console.log(web3.eth.accounts[0]);
    // var resu = web3.personal.unlockAccount(web3.eth.accounts[0], 'user');

    var strId = web3.fromUtf8(id);
    var send_trans = myContractInstance.upload_org.sendTransaction(strId,arguments[1],arguments[2],arguments[3],{"from":"0x004ec07d2329997267ec62b4166639513386f32e"});
    alert(send_trans);

// call constant function
// var str = web3.toHex(123);
// var result = myContractInstance.upload_org.call(str);
// console.log(result); // '0x25434534534'
}

function dClickNode() {


}


function conectNode() {
    web3.setProvider(new web3.providers.HttpProvider("http://192.168.3.109:8540"));
    if (web3.isConnected()) {
        // alert("已经连接");
    } else {
        alert("未连接");
    }

    var version = web3.version.api;
    console.log(version); // "0.2.0"
    // alert(version);
    // creation of contract object
    var MyContract = web3.eth.contract(abi);
    // initiate contract for an address
    var myContractInstance = MyContract.at('0x3E0daEc7B626Bf173216Ad18Eaf2E349C1527Ce2');
    // call constant function
    var result = myContractInstance.get_org.call('123');
    console.log(result);// '0x25434534534'
}