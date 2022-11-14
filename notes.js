/** @format */

let notes = [
    "Finish CIT Programming Homework and upload to GitHub.",
    "Finish up Graphic Design Sport Posters for school.",
    "Finish WordPress assignment.",
    "Finish registering for classes and  internships.",
    "Watch Adobe Max sessions on Graphic Design.",
    "Make animation videos for class.",
    "Record videos for show starter.",
    "Learn new Photoshop and Illustrator features.",
  ];
  
// pulse animation......
$("#id_createpara1").click(function () {
  $(".noteSpace")
    .fadeTo(1000, 0.8)
    .fadeTo(1000, 0.5)
    .fadeTo(1000, 0.3)
    .fadeTo(1000, 0.8)
    .fadeTo(1000, 1, allSet);
});

  const seasonalParaStyles = {
    Regular:"border: 3px dashed black",
    Important: "border: 5px dashed red",
  };
  
  const randomParagraph = () => {
    let randomPara = Math.floor(Math.random() * notes.length);
    let newPara = notes[randomPara];
    $("#id_freeform").val(newPara);
  };
  
  function createNote() {

    let matchedNotes = $("#noteSpace p");
    let noteNumber = parseInt($("#id_noteNumberToCreate").val());
  
    let noteContent = $("#id_freeform").val();
    let para = $(`<p class = "noteBorder">${noteContent}</p>`);
    
 
    let lastPara = matchedNotes.eq(noteNumber - 1);
  
    if (matchedNotes.length == 0 || noteNumber > matchedNotes.length)
  
      para.appendTo($("#noteSpace"));
    else {
     
      lastPara.before(para);
    }
  }
  
  const wrapper = () => {
    
    let seasonSelected = $("#id_seasonsflyer").val();
    let wrapStyling = "<div style ='" + seasonalStyles[seasonSelected] + "'/>";
  
    $("#noteSpace p").wrapAll(`${wrapStyling}`);
  };

  const highlightNote = () => {
  
    let paraNum = $("#id_seasonizeparagraph").val();
    paraNum = parseInt(paraNum);
    let seasonSelected = $("#id_seasonizeparaseasons").val();
    let paraStylingProperty = seasonalParaStyles[seasonSelected].split(":")[0];
    let paraStylingAttribute = seasonalParaStyles[seasonSelected].split(":")[1];
    let para = $("p:nth-child(" + paraNum + ")");
    para.css(paraStylingProperty, paraStylingAttribute);
  };

  const getRidOfAll = () => {
    $("#noteSpace").empty();
  };
  
  let detachedAd;
  const temporarilyRemove = () => {
    let paraNum = $("#id_paraNumberToDetach").val();
    paraNum = parseInt(paraNum) - 1;
    let para = $("#noteSpace p:eq(" + paraNum + ")");
    detachedAd = para.detach();
  };

  // APPEND
  const restorePara = () => {
    $("#noteSpace").append(detachedAd);
  };
// REMOVE
  const removeAd = () => {
    let paraNum = $("#id_paraNumberToRemove").val();
    paraNum = parseInt(paraNum) - 1;
    let para = $("#noteSpace p:eq(" + paraNum + ")");
    para.remove();
  };
  // APPEND
  const fillAll = () => {
    notes.forEach(function (ad) {
      $("#noteSpace").append($(`<p class="noteBorder">${ad}</p>`));
    });
  };
