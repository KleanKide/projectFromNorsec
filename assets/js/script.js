cardCenter.classList.add('active');
cardOne.classList.add('active');
cardRight.classList.add('active');
cardLeft.classList.add('active');
cardRightBottom.classList.add('active');
cardLeftBottom.classList.add('active');


function opening(){
    var card1 =  document.getElementById('popup1').style.display = 'block';
    var card2 =  document.getElementById('popup2').style.display = 'block';
    var card3 =  document.getElementById('popup3').style.display = 'block';
    var card4 =  document.getElementById('popup4').style.display = 'block';
    var card5 =  document.getElementById('popup5').style.display = 'block';
};
function clicking (){
    var popup1 = document.getElementById('popup1').style.display = 'none';
    var popup2 = document.getElementById('popup2').style.display = 'none';
    var popup3 = document.getElementById('popup3').style.display = 'none';
    var popup4 = document.getElementById('popup4').style.display = 'none';
    var popup5 = document.getElementById('popup5').style.display = 'none';
}

//quick_message
function viewPopUp(){
    document.getElementById("msg").style.display = "block";
}

function viewPopUp1(){
    document.getElementById("apps").style.display = "block";
}
function viewPopUp2(){
    document.getElementById("apps_2").style.display = "block";
}
function viewPopUp3(){
    document.getElementById("apps_3").style.display = "block";
}
function viewPopUp4(){
    document.getElementById("apps_4").style.display = "block";
}


function closePopUp(){
    document.getElementById("msg").style.display = "none";
    document.getElementById("north-pp").style.display = "none";
    document.getElementById("south-pp").style.display = "none";
    document.getElementById("center-pp").style.display = "none";
    document.getElementById("east-pp").style.display = "none";
    document.getElementById("west-pp").style.display = "none";
}
function closePopUp1(){
    document.getElementById("apps").style.display = "none";
}
function closePopUp2(){
    document.getElementById("apps_2").style.display = "none";
}
function closePopUp3(){
    document.getElementById("apps_3").style.display = "none";
}

function closePopUp4(){
    document.getElementById("apps_4").style.display = "none";
}




function successPopUp(){
    document.getElementById("scs-pp").style.display = "block";
    document.getElementById("scs-pp").style.position = "fixed";
}
function successPopUp2(){
    document.getElementById("scs-pp_2").style.display = "block";
    document.getElementById("scs-pp_2").style.position = "fixed";
}
function successPopUp3(){
    document.getElementById("scs-pp_3").style.display = "block";
    document.getElementById("scs-pp_3").style.position = "fixed";
}
function successPopUp4(){
    document.getElementById("scs-pp_4").style.display = "block";
    document.getElementById("scs-pp_4").style.position = "fixed";
}



function closeSuccessPopUp() {
    document.getElementById("scs-pp").style.display = "none";
    document.getElementById("msg").style.display = "none";
}
function closeSuccessPopUp1() {
    document.getElementById("scs-pp").style.display = "none";
    document.getElementById("apps").style.display = "none";
}
function closeSuccessPopUp2() {
    document.getElementById("scs-pp_2").style.display = "none";
    document.getElementById("apps_2").style.display = "none";
}
function closeSuccessPopUp3() {
    document.getElementById("scs-pp_3").style.display = "none";
    document.getElementById("apps_3").style.display = "none";
}
function closeSuccessPopUp4() {
    document.getElementById("scs-pp_4").style.display = "none";
    document.getElementById("apps_4").style.display = "none";
}


//about_organization
function viewCommittee(){
    document.getElementById("committee-tab").style.backgroundColor = "#DC5555";
    document.getElementById("committee-tab").style.color = "white";

    document.getElementById("honor-tab").style.backgroundColor = "white";
    document.getElementById("honor-tab").style.color = "black";

    document.getElementById("team-tab").style.backgroundColor = "white";
    document.getElementById("team-tab").style.color = "black";
}

function viewHonor(){
    document.getElementById("honor-tab").style.backgroundColor = "#00AFCA";
    document.getElementById("honor-tab").style.color = "white";

    document.getElementById("team-tab").style.backgroundColor = "white";
    document.getElementById("team-tab").style.color = "black";

    document.getElementById("committee-tab").style.backgroundColor = "white";
    document.getElementById("committee-tab").style.color = "black";
}

function viewTeam(){
    document.getElementById("team-tab").style.backgroundColor = "black";
    document.getElementById("team-tab").style.color = "white";

    document.getElementById("honor-tab").style.backgroundColor = "white";
    document.getElementById("honor-tab").style.color = "black";

    document.getElementById("committee-tab").style.backgroundColor = "white";
    document.getElementById("committee-tab").style.color = "black";
}

function openCommittee1left(){
    document.getElementById("committee1-left").style.display = "block";
    document.getElementById("committee2-left").style.display = "none";
    document.getElementById("committee3-left").style.display = "none";
    document.getElementById("committee4-left").style.display = "none";
    document.getElementById("committee5-left").style.display = "none";
    document.getElementById("committee6-left").style.display = "none";
	document.getElementById("committee7-left").style.display = "none";
    document.getElementById("committee1").style.opacity = "100%";
    document.getElementById("committee2").style.opacity = "20%";
    document.getElementById("committee3").style.opacity = "20%";
    document.getElementById("committee4").style.opacity = "20%";
    document.getElementById("committee5").style.opacity = "20%";
    document.getElementById("committee6").style.opacity = "20%";
	document.getElementById("committee7").style.opacity = "20%";


}

function openCommittee2left(){
    document.getElementById("committee1-left").style.display = "none";
    document.getElementById("committee2-left").style.display = "block";
    document.getElementById("committee3-left").style.display = "none";
    document.getElementById("committee4-left").style.display = "none";
    document.getElementById("committee5-left").style.display = "none";
    document.getElementById("committee6-left").style.display = "none";
	document.getElementById("committee7-left").style.display = "none";
    document.getElementById("committee2").style.opacity = "100%";
    document.getElementById("committee1").style.opacity = "20%";
    document.getElementById("committee3").style.opacity = "20%";
    document.getElementById("committee4").style.opacity = "20%";
    document.getElementById("committee5").style.opacity = "20%";
    document.getElementById("committee6").style.opacity = "20%";
	document.getElementById("committee7").style.opacity = "20%";
}

function openCommittee3left(){
    document.getElementById("committee1-left").style.display = "none";
    document.getElementById("committee2-left").style.display = "none";
    document.getElementById("committee3-left").style.display = "block";
    document.getElementById("committee4-left").style.display = "none";
    document.getElementById("committee5-left").style.display = "none";
    document.getElementById("committee6-left").style.display = "none";
	document.getElementById("committee7-left").style.display = "none";
    document.getElementById("committee3").style.opacity = "100%";
    document.getElementById("committee1").style.opacity = "20%";
    document.getElementById("committee2").style.opacity = "20%";
    document.getElementById("committee4").style.opacity = "20%";
    document.getElementById("committee5").style.opacity = "20%";
    document.getElementById("committee6").style.opacity = "20%";
	document.getElementById("committee7").style.opacity = "20%";
}

function openCommittee4left(){
    document.getElementById("committee1-left").style.display = "none";
    document.getElementById("committee2-left").style.display = "none";
    document.getElementById("committee3-left").style.display = "none";
    document.getElementById("committee4-left").style.display = "block";
    document.getElementById("committee5-left").style.display = "none";
    document.getElementById("committee6-left").style.display = "none";
	document.getElementById("committee7-left").style.display = "none";
    document.getElementById("committee4").style.opacity = "100%";
    document.getElementById("committee1").style.opacity = "20%";
    document.getElementById("committee2").style.opacity = "20%";
    document.getElementById("committee3").style.opacity = "20%";
    document.getElementById("committee5").style.opacity = "20%";
    document.getElementById("committee6").style.opacity = "20%";
	document.getElementById("committee7").style.opacity = "20%";
}

function openCommittee5left(){
    document.getElementById("committee1-left").style.display = "none";
    document.getElementById("committee2-left").style.display = "none";
    document.getElementById("committee3-left").style.display = "none";
    document.getElementById("committee4-left").style.display = "none";
    document.getElementById("committee5-left").style.display = "block";
    document.getElementById("committee6-left").style.display = "none";
	document.getElementById("committee7-left").style.display = "none";
    document.getElementById("committee5").style.opacity = "100%";
    document.getElementById("committee1").style.opacity = "20%";
    document.getElementById("committee2").style.opacity = "20%";
    document.getElementById("committee3").style.opacity = "20%";
    document.getElementById("committee4").style.opacity = "20%";
    document.getElementById("committee6").style.opacity = "20%";
	document.getElementById("committee7").style.opacity = "20%";
}

function openCommittee6left(){
    document.getElementById("committee1-left").style.display = "none";
    document.getElementById("committee2-left").style.display = "none";
    document.getElementById("committee3-left").style.display = "none";
    document.getElementById("committee4-left").style.display = "none";
    document.getElementById("committee5-left").style.display = "none";
    document.getElementById("committee6-left").style.display = "block";
	document.getElementById("committee7-left").style.display = "none";
    document.getElementById("committee6").style.opacity = "100%";
    document.getElementById("committee1").style.opacity = "20%";
    document.getElementById("committee2").style.opacity = "20%";
    document.getElementById("committee3").style.opacity = "20%";
    document.getElementById("committee4").style.opacity = "20%";
    document.getElementById("committee5").style.opacity = "20%";
	document.getElementById("committee7").style.opacity = "20%";
}

function openCommittee7left(){
    document.getElementById("committee1-left").style.display = "none";
    document.getElementById("committee2-left").style.display = "none";
    document.getElementById("committee3-left").style.display = "none";
    document.getElementById("committee4-left").style.display = "none";
    document.getElementById("committee5-left").style.display = "none";
    document.getElementById("committee6-left").style.display = "none";
	document.getElementById("committee7-left").style.display = "block";
    document.getElementById("committee1").style.opacity = "20%";
    document.getElementById("committee2").style.opacity = "20%";
    document.getElementById("committee3").style.opacity = "20%";
    document.getElementById("committee4").style.opacity = "20%";
    document.getElementById("committee5").style.opacity = "20%";
    document.getElementById("committee6").style.opacity = "20%";
	document.getElementById("committee7").style.opacity = "100%";
}

function openHonor1left(){
    document.getElementById("honor1-left").style.display = "block";
    document.getElementById("honor2-left").style.display = "none";
    document.getElementById("honor3-left").style.display = "none";
    document.getElementById("honor4-left").style.display = "none";
    document.getElementById("honor1").style.opacity = "100%";
    document.getElementById("honor2").style.opacity = "20%";
    document.getElementById("honor3").style.opacity = "20%";
    document.getElementById("honor4").style.opacity = "20%";
}

function openHonor2left(){
    document.getElementById("honor1-left").style.display = "none";
    document.getElementById("honor2-left").style.display = "block";
    document.getElementById("honor3-left").style.display = "none";
    document.getElementById("honor4-left").style.display = "none";
    document.getElementById("honor2").style.opacity = "100%";
    document.getElementById("honor1").style.opacity = "20%";
    document.getElementById("honor3").style.opacity = "20%";
    document.getElementById("honor4").style.opacity = "20%";
}

function openHonor3left(){
    document.getElementById("honor1-left").style.display = "none";
    document.getElementById("honor2-left").style.display = "none";
    document.getElementById("honor3-left").style.display = "block";
    document.getElementById("honor4-left").style.display = "none";
    document.getElementById("honor3").style.opacity = "100%";
    document.getElementById("honor1").style.opacity = "20%";
    document.getElementById("honor2").style.opacity = "20%";
    document.getElementById("honor4").style.opacity = "20%";
}

function openHonor4left(){
    document.getElementById("honor1-left").style.display = "none";
    document.getElementById("honor2-left").style.display = "none";
    document.getElementById("honor3-left").style.display = "none";
    document.getElementById("honor4-left").style.display = "block";
    document.getElementById("honor4").style.opacity = "100%";
    document.getElementById("honor1").style.opacity = "20%";
    document.getElementById("honor2").style.opacity = "20%";
    document.getElementById("honor3").style.opacity = "20%";
}
//map popup
function viewNorthPopUp(){
    document.getElementById("north-pp").style.display = "block";
}

function viewSouthPopUp(){
    document.getElementById("south-pp").style.display = "block";
}

function viewCenterPopUp(){
    document.getElementById("center-pp").style.display = "block";
}

function viewEastPopUp(){
    document.getElementById("east-pp").style.display = "block";
}

function viewWestPopUp(){
    document.getElementById("west-pp").style.display = "block";
}
//business
function viewOil(){
    document.getElementById("oil-card").style.display = "block";
    document.getElementById("mining-card").style.display = "none";
    document.getElementById("finance-card").style.display = "none";
    document.getElementById("infra-card").style.display = "none";
    document.getElementById("tech-card").style.display = "none";
    document.getElementById("agri-card").style.display = "none";
    document.getElementById("oil-white").style.display = "block";
    document.getElementById("mining-white").style.display = "none";
    document.getElementById("finance-white").style.display = "none";
    document.getElementById("infra-white").style.display = "none";
    document.getElementById("tech-white").style.display = "none";
    document.getElementById("agri-white").style.display = "none";
    document.getElementById("oil").style.display = "none";
    document.getElementById("mining").style.display = "block";
    document.getElementById("finance").style.display = "block";
    document.getElementById("infra").style.display = "block";
    document.getElementById("tech").style.display = "block";
    document.getElementById("agri").style.display = "block";
};

function viewMining(){
    document.getElementById("oil-card").style.display = "none";
    document.getElementById("mining-card").style.display = "block";
    document.getElementById("finance-card").style.display = "none";
    document.getElementById("infra-card").style.display = "none";
    document.getElementById("tech-card").style.display = "none";
    document.getElementById("agri-card").style.display = "none";
    document.getElementById("oil-white").style.display = "none";
    document.getElementById("mining-white").style.display = "block";
    document.getElementById("finance-white").style.display = "none";
    document.getElementById("infra-white").style.display = "none";
    document.getElementById("tech-white").style.display = "none";
    document.getElementById("agri-white").style.display = "none";
    document.getElementById("oil").style.display = "block";
    document.getElementById("mining").style.display = "none";
    document.getElementById("finance").style.display = "block";
    document.getElementById("infra").style.display = "block";
    document.getElementById("tech").style.display = "block";
    document.getElementById("agri").style.display = "block";


};

function viewFinance(){
    document.getElementById("oil-card").style.display = "none";
    document.getElementById("mining-card").style.display = "none";
    document.getElementById("finance-card").style.display = "block";
    document.getElementById("infra-card").style.display = "none";
    document.getElementById("tech-card").style.display = "none";
    document.getElementById("agri-card").style.display = "none";
    document.getElementById("oil-white").style.display = "none";
    document.getElementById("mining-white").style.display = "none";
    document.getElementById("finance-white").style.display = "block";
    document.getElementById("infra-white").style.display = "none";
    document.getElementById("tech-white").style.display = "none";
    document.getElementById("agri-white").style.display = "none";
    document.getElementById("oil").style.display = "block";
    document.getElementById("mining").style.display = "block";
    document.getElementById("finance").style.display = "none";
    document.getElementById("infra").style.display = "block";
    document.getElementById("tech").style.display = "block";
    document.getElementById("agri").style.display = "block";
};

function viewInfra(){
    document.getElementById("oil-card").style.display = "none";
    document.getElementById("mining-card").style.display = "none";
    document.getElementById("finance-card").style.display = "none";
    document.getElementById("infra-card").style.display = "block";
    document.getElementById("tech-card").style.display = "none";
    document.getElementById("agri-card").style.display = "none";
    document.getElementById("oil-white").style.display = "none";
    document.getElementById("mining-white").style.display = "none";
    document.getElementById("finance-white").style.display = "none";
    document.getElementById("infra-white").style.display = "block";
    document.getElementById("tech-white").style.display = "none";
    document.getElementById("agri-white").style.display = "none";
    document.getElementById("oil").style.display = "block";
    document.getElementById("mining").style.display = "block";
    document.getElementById("finance").style.display = "block";
    document.getElementById("infra").style.display = "none";
    document.getElementById("tech").style.display = "block";
    document.getElementById("agri").style.display = "block";
};

function viewTech(){
    document.getElementById("oil-card").style.display = "none";
    document.getElementById("mining-card").style.display = "none";
    document.getElementById("finance-card").style.display = "none";
    document.getElementById("infra-card").style.display = "none";
    document.getElementById("tech-card").style.display = "block";
    document.getElementById("agri-card").style.display = "none";
    document.getElementById("oil-white").style.display = "none";
    document.getElementById("mining-white").style.display = "none";
    document.getElementById("finance-white").style.display = "none";
    document.getElementById("infra-white").style.display = "none";
    document.getElementById("tech-white").style.display = "block";
    document.getElementById("agri-white").style.display = "none";
    document.getElementById("oil").style.display = "block";
    document.getElementById("mining").style.display = "block";
    document.getElementById("finance").style.display = "block";
    document.getElementById("infra").style.display = "block";
    document.getElementById("tech").style.display = "none";
    document.getElementById("agri").style.display = "block";
};

function viewAgri(){
    document.getElementById("oil-card").style.display = "none";
    document.getElementById("mining-card").style.display = "none";
    document.getElementById("finance-card").style.display = "none";
    document.getElementById("infra-card").style.display = "none";
    document.getElementById("tech-card").style.display = "none";
    document.getElementById("agri-card").style.display = "block";
    document.getElementById("oil-white").style.display = "none";
    document.getElementById("mining-white").style.display = "none";
    document.getElementById("finance-white").style.display = "none";
    document.getElementById("infra-white").style.display = "none";
    document.getElementById("tech-white").style.display = "none";
    document.getElementById("agri-white").style.display = "block";
    document.getElementById("oil").style.display = "block";
    document.getElementById("mining").style.display = "block";
    document.getElementById("finance").style.display = "block";
    document.getElementById("infra").style.display = "block";
    document.getElementById("tech").style.display = "block";
    document.getElementById("agri").style.display = "none";
};

function closeOil(){
    document.getElementById("oil-card").style.display = "none";
    document.getElementById("mining-card").style.display = "none";
    document.getElementById("finance-card").style.display = "none";
    document.getElementById("infra-card").style.display = "none";
    document.getElementById("tech-card").style.display = "none";
    document.getElementById("agri-card").style.display = "none";
    document.getElementById("oil-white").style.display = "none";
    document.getElementById("mining-white").style.display = "none";
    document.getElementById("finance-white").style.display = "none";
    document.getElementById("infra-white").style.display = "none";
    document.getElementById("tech-white").style.display = "none";
    document.getElementById("agri-white").style.display = "none";
    document.getElementById("oil").style.display = "block";
    document.getElementById("mining").style.display = "block";
    document.getElementById("finance").style.display = "block";
    document.getElementById("infra").style.display = "block";
    document.getElementById("tech").style.display = "block";
    document.getElementById("agri").style.display = "block";
};

function closeMining(){
    document.getElementById("oil-card").style.display = "none";
    document.getElementById("mining-card").style.display = "none";
    document.getElementById("finance-card").style.display = "none";
    document.getElementById("infra-card").style.display = "none";
    document.getElementById("tech-card").style.display = "none";
    document.getElementById("agri-card").style.display = "none";
    document.getElementById("oil-white").style.display = "none";
    document.getElementById("mining-white").style.display = "none";
    document.getElementById("finance-white").style.display = "none";
    document.getElementById("infra-white").style.display = "none";
    document.getElementById("tech-white").style.display = "none";
    document.getElementById("agri-white").style.display = "none";
    document.getElementById("oil").style.display = "block";
    document.getElementById("mining").style.display = "block";
    document.getElementById("finance").style.display = "block";
    document.getElementById("infra").style.display = "block";
    document.getElementById("tech").style.display = "block";
    document.getElementById("agri").style.display = "block";
};

function closeFinance(){
    document.getElementById("oil-card").style.display = "none";
    document.getElementById("mining-card").style.display = "none";
    document.getElementById("finance-card").style.display = "none";
    document.getElementById("infra-card").style.display = "none";
    document.getElementById("tech-card").style.display = "none";
    document.getElementById("agri-card").style.display = "none";
    document.getElementById("oil-white").style.display = "none";
    document.getElementById("mining-white").style.display = "none";
    document.getElementById("finance-white").style.display = "none";
    document.getElementById("infra-white").style.display = "none";
    document.getElementById("tech-white").style.display = "none";
    document.getElementById("agri-white").style.display = "none";
    document.getElementById("oil").style.display = "block";
    document.getElementById("mining").style.display = "block";
    document.getElementById("finance").style.display = "block";
    document.getElementById("infra").style.display = "block";
    document.getElementById("tech").style.display = "block";
    document.getElementById("agri").style.display = "block";
};

function closeInfra(){
    document.getElementById("oil-card").style.display = "none";
    document.getElementById("mining-card").style.display = "none";
    document.getElementById("finance-card").style.display = "none";
    document.getElementById("infra-card").style.display = "none";
    document.getElementById("tech-card").style.display = "none";
    document.getElementById("agri-card").style.display = "none";
    document.getElementById("oil-white").style.display = "none";
    document.getElementById("mining-white").style.display = "none";
    document.getElementById("finance-white").style.display = "none";
    document.getElementById("infra-white").style.display = "none";
    document.getElementById("tech-white").style.display = "none";
    document.getElementById("agri-white").style.display = "none";
    document.getElementById("oil").style.display = "block";
    document.getElementById("mining").style.display = "block";
    document.getElementById("finance").style.display = "block";
    document.getElementById("infra").style.display = "block";
    document.getElementById("tech").style.display = "block";
    document.getElementById("agri").style.display = "block";
};

function closeTech(){
    document.getElementById("oil-card").style.display = "none";
    document.getElementById("mining-card").style.display = "none";
    document.getElementById("finance-card").style.display = "none";
    document.getElementById("infra-card").style.display = "none";
    document.getElementById("tech-card").style.display = "none";
    document.getElementById("agri-card").style.display = "none";
    document.getElementById("oil-white").style.display = "none";
    document.getElementById("mining-white").style.display = "none";
    document.getElementById("finance-white").style.display = "none";
    document.getElementById("infra-white").style.display = "none";
    document.getElementById("tech-white").style.display = "none";
    document.getElementById("agri-white").style.display = "none";
    document.getElementById("oil").style.display = "block";
    document.getElementById("mining").style.display = "block";
    document.getElementById("finance").style.display = "block";
    document.getElementById("infra").style.display = "block";
    document.getElementById("tech").style.display = "block";
    document.getElementById("agri").style.display = "block";
};

function closeAgri(){
    document.getElementById("oil-card").style.display = "none";
    document.getElementById("mining-card").style.display = "none";
    document.getElementById("finance-card").style.display = "none";
    document.getElementById("infra-card").style.display = "none";
    document.getElementById("tech-card").style.display = "none";
    document.getElementById("agri-card").style.display = "none";
    document.getElementById("oil-white").style.display = "none";
    document.getElementById("mining-white").style.display = "none";
    document.getElementById("finance-white").style.display = "none";
    document.getElementById("infra-white").style.display = "none";
    document.getElementById("tech-white").style.display = "none";
    document.getElementById("agri-white").style.display = "none";
    document.getElementById("oil").style.display = "block";
    document.getElementById("mining").style.display = "block";
    document.getElementById("finance").style.display = "block";
    document.getElementById("infra").style.display = "block";
    document.getElementById("tech").style.display = "block";
    document.getElementById("agri").style.display = "block";
};

function func1() {
    let startDate = document.querySelector('#datevar').value;
    let endDate = document.querySelector('#datevar2').value;
    let currentDate = document.querySelector(".date-news");
    console.log(currentDate);
    let currentDate2 = document.getElementById("dateOctober2").innerHTML;
    startDate = new Date(Date.parse(startDate)).toLocaleDateString();
    endDate = Date.parse(endDate);
    let cl;


}

let num;
num =1;


function addNews() {
    let newdiv = document.createElement("div");
    newdiv.innerHTML = "<div class=\"tab-content container\" id=\"myTabContent\">\n" +
        "      <div class=\"news-list tab-pane fade show active\"  id=\"list1\" role=\"tabpanel\" aria-labelledby=\"list-tab1\">\n " +
        "       <div class=\"news-row row\" onclick=\"location.href='news.html'\" id=\"news1\">\n " +
        "         <div class=\"news-left col-md-2\">\n" +
        "            <img class=\"news-icon2\" src=\"assets/images/news.png\" width=\"60%\">\n " +
        "         </div>\n" +
        "          <div class=\"news-text col-md-10\">\n   " +
        "         <div class=\"news-release\">\n " +
        "             <hr class=\"blue-line\">\n" +
        "              <h7>PRESS RELEASE</h7>\n " +
        "           </div>\n    " +
        "        <h5 id=\"span_1\"><?php echo $_POST['heading']; ?></h5>\n  " +
        "          <p id=\"dateOctober\" class=\"date-news\">10/15/2022</p>\n " +
        "         </div>\n   " +
        "     </div>\n";
    document.getElementById("parentId").appendChild(newdiv);
    // let span1 = document.getElementById("span_1");
    // span1.innerText = document.getElementById('input_1').value;
}
