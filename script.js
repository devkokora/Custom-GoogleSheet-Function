function getPartOfSpeech(word) {
  var url = "https://victorribeiro.com/pos/word.php";

  var payload = {
    msg: word,
  };

  var options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
  };

  var posMap = {
    N: "Noun",
    p: "Plural",
    h: "Noun Phrase",
    V: "Verb (usu participle)",
    t: "Verb (transitive)",
    i: "Verb (intransitive)",
    A: "Adjective",
    v: "Adverb",
    C: "Conjunction",
    P: "Preposition",
    "!": "Interjection",
    r: "Pronoun",
    D: "Definite Article",
    I: "Indefinite Article",
    o: "Nominative",
  };

  try {
    var response = UrlFetchApp.fetch(url, options);
    var data = JSON.parse(response.getContentText());

    var pos = data[0].pos;

    var fullPos = "";
    for (var i = 0; i < pos.length; i++) {
      fullPos += posMap[pos[i]] || "";
      if (i < pos.length - 1) fullPos += ", ";
    }

    return `${fullPos}`;
  } catch (e) {
    return "Error: Unable to retrieve part of speech.";
  }
}
