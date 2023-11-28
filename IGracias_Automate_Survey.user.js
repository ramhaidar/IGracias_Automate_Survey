// ==UserScript==
// @name         IGracias Automate Survey
// @namespace    http://tampermonkey.net/
// @version      0.0.7
// @updateURL    https://github.com/ramhaidar/IGracias_Automate_Survey/raw/main/IGracias_Automate_Survey.user.js
// @downloadURL  https://github.com/ramhaidar/IGracias_Automate_Survey/raw/main/IGracias_Automate_Survey.user.js
// @description  Auto Survey Script!
// @author       NakHalal
// @match        https://igracias.telkomuniversity.ac.id/survey/*
// @grant        none
// @run-at       document-idle
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js
// ==/UserScript==

(function () {
    'use strict'

    const responses = ['Puas', 'Ya', 'Setuju']; //Sangat puas | Puas | Cukup | Tidak puas | Sangat tidak puas

    responses.forEach(response => {
        $(`.answerlist1:contains(${response})`).each(function () {
            $(this).parent().find('.answerlist2').children().click();
        });
    });

    $('textarea').val('‎ '); // Empty Text on TextArea Form

    const srcToSelect = "../images/btn_save2.png"; // Save Button

    // Auto Click Save or Update or Submit Button
    $(document).ready(function () {
        $(document).find('input[value="simpan"]').each(function () {
            const elements = document.querySelectorAll(`input[type="image"][src="${srcToSelect}"]`);
            elements.forEach(element => {
                element.click();
            });
        });
    });
})();
