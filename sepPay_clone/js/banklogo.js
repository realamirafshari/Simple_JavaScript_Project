{
  /* <img class="bank-logo-input" src="./img/Mellat.svg" alt=""> */
}
const bankData = [
  { bin: "Unknown", bankName: "Unknown" },
  { bin: "903769", bankName: "Unknown" },
  { bin: "601287", bankName: "Unknown" },
  { bin: "450905", bankName: "Unknown" },
  { bin: "991975", bankName: "Mellat" },
  { bin: "207177", bankName: "Export Development" },
  { bin: "189956", bankName: "Tosee Taavon" },
  { bin: "170019", bankName: "Melli Iran" },
  { bin: "606256", bankName: "Mellal" },
  { bin: "606373", bankName: "Mehr Iran" },
  { bin: "603799", bankName: "Melli Iran" },
  { bin: "603769", bankName: "Saderat" },
  { bin: "603770", bankName: "Keshavarzi" },
  { bin: "628023", bankName: "Maskan" },
  { bin: "628157", bankName: "Credit Istitute for Development" },
  { bin: "627884", bankName: "Parsian" },
  { bin: "627961", bankName: "Industry & Mine" },
  { bin: "627381", bankName: "Ansar" },
  { bin: "627353", bankName: "Tejarat" },
  { bin: "627488", bankName: "Kar Afarin" },
  { bin: "627412", bankName: "Eghtesad Novin" },
  { bin: "627648", bankName: "Export Development" },
  { bin: "627760", bankName: "Post" },
  { bin: "622106", bankName: "Parsian" },
  { bin: "621986", bankName: "Saman" },
  { bin: "610433", bankName: "Mellat" },
  { bin: "639607", bankName: "Sarmayeh" },
  { bin: "639599", bankName: "Ghavamin" },
  { bin: "639347", bankName: "Pasargad" },
  { bin: "639346", bankName: "Sina" },
  { bin: "639370", bankName: "Mehr" },
  { bin: "639217", bankName: "Keshavarzi" },
  { bin: "636949", bankName: "Hekmat" },
  { bin: "636214", bankName: "Ayandeh" },
  { bin: "636795", bankName: "IRI Central" },
  { bin: "585983", bankName: "Tejarat" },
  { bin: "585947", bankName: "Middle East" },
  { bin: "589463", bankName: "Refah" },
  { bin: "589210", bankName: "Sepah" },
  { bin: "594321", bankName: "Central" },
  { bin: "593333", bankName: "SEP" },
  { bin: "504172", bankName: "Resalat" },
  { bin: "504706", bankName: "Shahr" },
  { bin: "505801", bankName: "Kowsar" },
  { bin: "505809", bankName: "Middle East" },
  { bin: "505416", bankName: "Tourism" },
  { bin: "505785", bankName: "Iran Zamin" },
  { bin: "502806", bankName: "Shahr" },
  { bin: "502908", bankName: "Tosee Taavon" },
  { bin: "502938", bankName: "Dey" },
  { bin: "502229", bankName: "Pasargad" },
];

function logoBankHandler(binNumber, bankLogo, cartListButton) {
  const findBinNumber = bankData.find((item) => item.bin === `${binNumber}`);
  if (findBinNumber) {
    bankLogo.src = `./img/bankLogo/${findBinNumber.bankName}.svg`;
    cartListButton.classList.add("hide");
    bankLogo.classList.add("show-bank-logo");
  }
  if (!findBinNumber) {
    bankLogo.src = "";
    cartListButton.classList.remove("hide");
  }
}

export { logoBankHandler };
