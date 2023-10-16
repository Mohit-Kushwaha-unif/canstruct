

document.addEventListener("DOMContentLoaded", function () {
    const openUniqueModalButton = document.getElementById("openUniqueModal");
    const uniqueModal = document.getElementById("uniqueModal");
    const uniqueCloseButton = document.getElementsByClassName("unique-close")[0];
    const uniqueDataForm = document.getElementById("uniqueDataForm");

    openUniqueModalButton.addEventListener("click", () => {
        uniqueModal.style.display = "block";
    });

    uniqueCloseButton.addEventListener("click", () => {
        uniqueModal.style.display = "none";
    });

    uniqueDataForm.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("im cpreses");
    
        const email = document.getElementById("uniqueEmail").value;
        const number = document.getElementById("uniqueNumber").value;
    
        console.log("Before initializing Firebase");
        // Initialize Firebase
        const firebaseConfig = {
            apiKey: "AIzaSyA-nToRSJsoR0oJt28ScieqWnvlkmYpyfA",
            authDomain: "canstruct-739a4.firebaseapp.com",
            databaseURL: "https://canstruct-739a4.firebaseio.com",
            projectId: "canstruct-739a4",
            storageBucket: "canstruct-739a4.appspot.com",
            messagingSenderId: "237440303012",
            appId: "1:237440303012:web:14192d19987b3b570dcb31",
            measurementId: "G-V53QMMT3F9"
        };
        firebase.initializeApp(firebaseConfig);
        var db = firebase.database()
            .ref('userData');
    
        console.log("Before saving data to Firestore");
    
        const myCollection = db.collection('userData');
        console.log("after accessing collection");
        
        // Save data to Firebase
        myCollection.add({
            email: email,
            number: number
        })
        .then(() => {
            console.log("Data saved successfully!");
            uniqueModal.style.display = "none";
            console.log("End of .then() block");
        })
        .catch((error) => {
            console.error("Error saving data: ", error);
            alert("An error occurred while saving the data. Please try again.");
            console.log("End of .catch() block");
        });
    
        console.log("end of submit event");
    });
    
    





    // Your existing calculation function
    function calculate() {
        var build_up = document.getElementById("area").value;
        var balcony = document.getElementById("areaOfBalconyAndUtility").value;
        var noOfCarParking = $("#noOfCarParking :selected").text();
        if (build_up == "" || balcony == "") {
            $(".wrong_input").removeClass("hidden");
            return;
        }
        $(".wrong_input").addClass("hidden");

        findCost(build_up, balcony, noOfCarParking);
    }

    function findCost(build_up, balcony, noOfCarParking) {
        document.getElementById("car_parking1").innerHTML = parseInt(noOfCarParking);
        document.getElementById("balcony_cost1").innerHTML = balcony;
        document.getElementById("car_parking2").innerHTML = parseInt(noOfCarParking);
        document.getElementById("balcony_cost2").innerHTML = balcony;
        document.getElementById("car_parking3").innerHTML = parseInt(noOfCarParking);
        document.getElementById("balcony_cost3").innerHTML = balcony;
        document.getElementById("car_parking4").innerHTML = parseInt(noOfCarParking);
        document.getElementById("balcony_cost4").innerHTML = balcony;
        document.getElementById("car_parking5").innerHTML = parseInt(noOfCarParking);
        document.getElementById("balcony_cost5").innerHTML = balcony;
        document.getElementById("car_parking6").innerHTML = parseInt(noOfCarParking);
        document.getElementById("balcony_cost6").innerHTML = balcony;

        build_up = parseInt(build_up);
        balcony = parseInt(balcony);
        noOfCarParking = parseInt(noOfCarParking);
        build_up = build_up - balcony - noOfCarParking * 130;
        document.getElementById("build_up1").innerHTML = build_up;
        document.getElementById("build_up2").innerHTML = build_up;

        document.getElementById("build_up3").innerHTML = build_up;
        document.getElementById("build_up4").innerHTML = build_up;
        document.getElementById("build_up5").innerHTML = build_up;
        document.getElementById("build_up6").innerHTML = build_up;

        $(".cost_estimator").removeClass("hidden");

        budgetPackage(build_up, balcony, noOfCarParking);
        basicPackage(build_up, balcony, noOfCarParking);
        classicPackage(build_up, balcony, noOfCarParking);
        premiumPackage(build_up, balcony, noOfCarParking);
        royalPackage(build_up, balcony, noOfCarParking);
        imperiaPackage(build_up, balcony, noOfCarParking);
    }

    function converter(val) {
        var temp = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
        }).format(val);
        return temp;
    }

    function budgetPackage(build_up, balcony, noOfCarParking) {
        build_up = build_up * 1900;
        balcony = balcony * 921;
        noOfCarParking = noOfCarParking * 130 * 921;
        var Total = build_up + balcony + noOfCarParking;

        document.getElementById("Budget_Build_up").innerHTML = converter(
            build_up
        ).slice(0, -3);
        document.getElementById("Budget_Car").innerHTML = converter(
            noOfCarParking
        ).slice(0, -3);
        document.getElementById("Budget_Balcony").innerHTML = converter(
            balcony
        ).slice(0, -3);
        document.getElementById("Budget_total").innerHTML = converter(Total).slice(
            0,
            -3
        );
        if (Total < 0 || build_up < 0) {
            $(".wrong_input").removeClass("hidden");
            $(".cost_estimator").addClass("hidden");
        }
    }

    function basicPackage(build_up, balcony, noOfCarParking) {
        build_up = build_up * 2000;
        balcony = balcony * 990;
        noOfCarParking = noOfCarParking * 130 * 990;
        var Total = build_up + balcony + noOfCarParking;

        document.getElementById("Basic_Build_up").innerHTML = converter(
            build_up
        ).slice(0, -3);
        document.getElementById("Basic_Car").innerHTML = converter(
            noOfCarParking
        ).slice(0, -3);
        document.getElementById("Basic_Balcony").innerHTML = converter(balcony).slice(
            0,
            -3
        );
        document.getElementById("Basic_total").innerHTML = converter(Total).slice(
            0,
            -3
        );
        if (Total < 0 || build_up < 0) {
            $(".wrong_input").removeClass("hidden");
            $(".cost_estimator").addClass("hidden");
        }
    }

    function classicPackage(build_up, balcony, noOfCarParking) {
        build_up = build_up * 2120;
        balcony = balcony * 1059;
        noOfCarParking = noOfCarParking * 130 * 1059;
        var Total = build_up + balcony + noOfCarParking;

        document.getElementById("Classic_Build_up").innerHTML = converter(
            build_up
        ).slice(0, -3);
        document.getElementById("Classic_Car").innerHTML = converter(
            noOfCarParking
        ).slice(0, -3);
        document.getElementById("Classic_Balcony").innerHTML = converter(
            balcony
        ).slice(0, -3);
        document.getElementById("Classic_total").innerHTML = converter(Total).slice(
            0,
            -3
        );
        if (Total < 0 || build_up < 0) {
            $(".wrong_input").removeClass("hidden");
            $(".cost_estimator").addClass("hidden");
        }
    }

    function premiumPackage(build_up, balcony, noOfCarParking) {
        build_up = build_up * 2220;
        balcony = balcony * 1119;
        noOfCarParking = noOfCarParking * 130 * 1119;
        var Total = build_up + balcony + noOfCarParking;

        document.getElementById("Premium_Build_up").innerHTML = converter(
            build_up
        ).slice(0, -3);
        document.getElementById("Premium_Car").innerHTML = converter(
            noOfCarParking
        ).slice(0, -3);
        document.getElementById("Premium_Balcony").innerHTML = converter(
            balcony
        ).slice(0, -3);
        document.getElementById("Premium_total").innerHTML = converter(Total).slice(
            0,
            -3
        );
        if (Total < 0 || build_up < 0) {
            $(".wrong_input").removeClass("hidden");
            $(".cost_estimator").addClass("hidden");
        }
    }

    function royalPackage(build_up, balcony, noOfCarParking) {
        build_up = build_up * 2350;
        balcony = balcony * 1194;
        noOfCarParking = noOfCarParking * 130 * 1194;
        var Total = build_up + balcony + noOfCarParking;

        document.getElementById("Royal_Build_up").innerHTML = converter(
            build_up
        ).slice(0, -3);
        document.getElementById("Royal_Car").innerHTML = converter(
            noOfCarParking
        ).slice(0, -3);
        document.getElementById("Royal_Balcony").innerHTML = converter(balcony).slice(
            0,
            -3
        );
        document.getElementById("Royal_total").innerHTML = converter(Total).slice(
            0,
            -3
        );
        if (Total < 0 || build_up < 0) {
            $(".wrong_input").removeClass("hidden");
            $(".cost_estimator").addClass("hidden");
        }
    }

    function imperiaPackage(build_up, balcony, noOfCarParking) {
        build_up = build_up * 2500;
        balcony = balcony * 1290;
        noOfCarParking = noOfCarParking * 130 * 1290;
        var Total = build_up + balcony + noOfCarParking;

        document.getElementById("Imperia_Build_up").innerHTML = converter(
            build_up
        ).slice(0, -3);
        document.getElementById("Imperia_Car").innerHTML = converter(
            noOfCarParking
        ).slice(0, -3);
        document.getElementById("Imperia_Balcony").innerHTML = converter(
            balcony
        ).slice(0, -3);
        document.getElementById("Imperia_total").innerHTML = converter(Total).slice(
            0,
            -3
        );
        if (Total < 0 || build_up < 0) {
            $(".wrong_input").removeClass("hidden");
            $(".cost_estimator").addClass("hidden");
        }
    }

    function comparePackage() {
        var compare1 = document.getElementById("compare-one").options.selectedIndex;
        $("#compare-two option").prop("disabled", false);
        document.getElementById("compare-two").options[compare1].disabled = true;
        var compare2 = document.getElementById("compare-two").options.selectedIndex;
        $("#compare-one option").prop("disabled", false);
        document.getElementById("compare-one").options[compare2].disabled = true;
        document.getElementById("form__label1").innerHTML = document.getElementById(
            "compare-one"
        ).options[compare1].value;
        document.getElementById("form__label2").innerHTML = document.getElementById(
            "compare-two"
        ).options[compare2].value;

        $(".budgetD").addClass("hidden");
        $(".basicD").addClass("hidden");
        $(".classicD").addClass("hidden");
        $(".PremiumD").addClass("hidden");
        $(".RoyalD").addClass("hidden");
        $(".ImperiaD").addClass("hidden");

        if (compare1 == 0) {
            $(".package-container-1 .budgetD").removeClass("hidden");
        } else if (compare1 == 1) {
            $(".package-container-1 .basicD").removeClass("hidden");
        } else if (compare1 == 2) {
            $(".package-container-1 .classicD").removeClass("hidden");
        } else if (compare1 == 3) {
            $(".package-container-1 .PremiumD").removeClass("hidden");
        } else if (compare1 == 4) {
            $(".package-container-1 .RoyalD").removeClass("hidden");
        } else if (compare1 == 5) {
            $(".package-container-1 .ImperiaD").removeClass("hidden");
        }

        if (compare2 == 0) {
            $(".package-container-2 .budgetD").removeClass("hidden");
        } else if (compare2 == 1) {
            $(".package-container-2 .basicD").removeClass("hidden");
        } else if (compare2 == 2) {
            $(".package-container-2 .classicD").removeClass("hidden");
        } else if (compare2 == 3) {
            $(".package-container-2 .PremiumD").removeClass("hidden");
        } else if (compare2 == 4) {
            $(".package-container-2 .RoyalD").removeClass("hidden");
        } else if (compare2 == 5) {
            $(".package-container-2 .ImperiaD").removeClass("hidden");
        }
    }



});

// const openUniqueModalButton = document.getElementById("openUniqueModal");
// const uniqueModal = document.getElementById("uniqueModal");
// const uniqueCloseButton = document.getElementsByClassName("unique-close")[0];
// const uniqueDataForm = document.getElementById("uniqueDataForm");

