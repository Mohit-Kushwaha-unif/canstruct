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
