// This file was automatically generated from ui-templates.soy.
// Please don't edit this file by hand.

if (typeof fitnesse == 'undefined') { var fitnesse = {}; }
if (typeof fitnesse.variables == 'undefined') { fitnesse.variables = {}; }


fitnesse.variables.main = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var vList3 = opt_data.variables;
  var vListLen3 = vList3.length;
  for (var vIndex3 = 0; vIndex3 < vListLen3; vIndex3++) {
    var vData3 = vList3[vIndex3];
    output.append('<div class="fv-variable">', soy.$$escapeHtml(vData3), '</div>');
    var dList7 = opt_data.data[vData3];
    var dListLen7 = dList7.length;
    for (var dIndex7 = 0; dIndex7 < dListLen7; dIndex7++) {
      var dData7 = dList7[dIndex7];
      output.append('<div class="fv-variable-value-box"><div class="fv-variable-value">', soy.$$escapeHtml(dData7.value), '</div><span class="fv-variable-url"><a href="', soy.$$escapeHtml(dData7.url), '" target="_blank">', soy.$$escapeHtml(dData7.url), '</a></span></div>');
    }
  }
  if (!opt_sb) return output.toString();
};
