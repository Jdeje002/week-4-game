
        //game start
        $(document).ready(function () {

            var chosenHero
            var chosenEnemy
            var isHeroChosen
            var isEnemyChosen
            var isHeroAlive
            var isEnemyAlive
            var wins = 0
            var charArr = [
                {
                    name: "Boba Fett",
                    hp: 30,
                    Strength: 9,
                    image: "./assets/img/chibi_boba_fett_by_brittanysdesigns-d2wn7a7.png",
                },

                {
                    name: "Darth Maul",
                    hp: 20,
                    Strength: 11,
                    image: "./assets/img/chibi_darth_maul_by_kam_fox-d8o3ctn.png",
                },

                {
                    name: "Kylo Ren",
                    hp: 25,
                    Strength: 16,
                    image: "./assets/img/chibi_kylo_ren_by_tana_jo-d9r8tv2.png",
                },
                {
                    name: "Yoda",
                    hp: 15,
                    Strength: 20,
                    image: "./assets/img/starwars_PNG59.png",
                },
            ]

            function initGame() {
                isHeroChosen = false
                isEnemyChosen = false
                //generate char
                for (var i = 0; i < charArr.length; i++) {
                    var num = Math.floor(12 / charArr.length)
                    var charThing = $("<div class= 'myChar col-md-" + num + "' value= '" + i + "'><img src= '" + charArr[i].image + "' style= 'width:150px; height:150px;'/></div>")
                    $("#characters").append(charThing)
                }
                //do 30^ for practice 
                // for (var i = 0; i > charArr.length; i ++){
                // var num = Math.floor(12/charArr.length)
                // var charThing = $("<div class= ' col-md-"+nun+"'><img src='" +charArr[i].image+"' style= ' width:150px; height:150;'/><div>")
                // $("characthers").append(charThing)
                //}

            }
            // with dynamic element you need to have document then selector  
            $(document).on("click", ".myChar", function () {

                if (isHeroChosen === false) {
                    //chose hero 
                    chosenHero = charArr[$(this).attr("value")]
                    console.log(chosenHero)
                    $(this).addClass("fader")
                    isHeroChosen = true
                    myHeroThing = $("<div id='" + chosenHero.name + "'><img src='" + chosenHero.image + "'' style= 'width:225px; height:225px;'/><p>" + chosenHero.name + "</p><h6>HP</h6><p id= heroHP>" + chosenHero.hp + "+</p><div>")
                    $("#myHero").html(myHeroThing)



                    //move hero in to canves 
                }
                else if (isEnemyChosen === false && chosenHero.name != charArr[$(this).attr("value")].name) {
                    chosenEnemy = charArr[$(this).attr("value")]
                    console.log(chosenEnemy)
                    $(this).addClass("fader")
                    isEnemyChosen = true
                    myEnemyThing = $("<div id='" + chosenEnemy.name + "'><img src='" + chosenEnemy.image + "'' style= 'width:225px; height:225px;'/><p>" + chosenEnemy.name + "</p><h6>HP</h6><p id= enemyHP>" + chosenEnemy.hp + "+</p><div>")
                    $("#myEnemy").html(myEnemyThing)

                    //move  enemy into canves 
                }
            })
            function play() {
                var audio = document.getElementById("audio");

            }

            // attacking 
            $("#attackBTN").on("click", function () {
                var heroAtt = Math.floor(Math.random() * chosenHero.Strength)
                var enemyAtt = Math.floor(Math.random() * chosenEnemy.Strength)
                audio.play();
                chosenEnemy.hp -= heroAtt
                $("#enemyHP").text(chosenEnemy.hp)
                $("#fightClub").append("<p>" + chosenHero.name + " attacked" + chosenEnemy.name + " for" + heroAtt + " points </p>")
                chosenHero.hp -= enemyAtt
                $("#heroHP").text(chosenHero.hp)
                $("#fightClub").append("<p>" + chosenEnemy.name + " attacked" + chosenHero.name + " for" + enemyAtt + " points </p>")



                if (chosenHero.hp <= 0) {
                    $("#fightClub").html(chosenEnemy.name + " defeated you")
                    $("#attackBTN").attr("disabled", true)
                    wins++
                } else if (chosenEnemy.hp <= 0) {
                    $("#fightClub").html(chosenHero.name + " has defeated " + chosenEnemy.name)
                    $("#attackBTN").attr("disabled", true)
                }

            })





            //2:38:40


            //character ,


            initGame()
        }
        )


