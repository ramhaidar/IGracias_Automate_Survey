// ==UserScript==
// @name         IGracias Automate Survey
// @namespace    http://tampermonkey.net/
// @version      0.0.6
// @updateURL    https://github.com/ramhaidar/IGracias_Automate_Survey/raw/main/IGracias_Automate_Survey.user.js
// @downloadURL  https://github.com/ramhaidar/IGracias_Automate_Survey/raw/main/IGracias_Automate_Survey.user.js
// @description  Auto Survey Script!
// @author       NakHalal
// @match        https://igracias.telkomuniversity.ac.id/survey/*
// @grant        none
// @run-at       document-idle
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js
// ==/UserScript==

// Auto Fill Radio Button
;(function () {
    'use strict'

    var kepuasan = 'Puas' //Sangat puas | Puas | Cukup | Tidak puas | Sangat tidak puas
    var yes_or_no = 'Ya' // Ya | Tidak
    var persetujuan = 'Setuju'

    $(
        '.answerlist1:contains(' +
        kepuasan +
        '), .answerlist1:contains(' +
        yes_or_no +
        '), .answerlist1:contains(' +
        persetujuan +
        ')'
    ).each(function () {
        $(this)
            .parent()
            .each(function () {
            $(this).find('.answerlist2').children().click()
        })
    })
})()

// Empty Text on TextArea Form
$('textarea').val('‎ ')

/*
<input class="floatL3" name="button" type="image" value="simpan" src="../images/btn_save2.png" alt="Submit button"> // Save
<input class="floatL3" name="button" type="image" value="simpan" src="../images/btn2.png" alt="Submit button"> // Update
<input class="floatL4" name="button" type="image" value="simpan" src="../images/btn_submit.gif" alt="Submit button"> // Submit
*/

const srcToSelect = "../images/btn_save2.png"; // Save Button

// Auto Click Save or Update or Submit Button
$(document).ready(function () {
    var doc = $(document).find('input')
    doc.each(function () {
        if ($(this).val() == 'simpan') {
            const elements = document.querySelectorAll(`input[type="image"][src="${srcToSelect}"]`);
            elements.forEach(element => {
                element.click();
            });
        }
    })
})
