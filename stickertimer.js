var stickStr = prompt('String:') + ' ';
var currFrm = 0;
if (typeof stickTmr == 'number') {
    clearInterval(stickTmr);
}
stickTmr = setInterval("ttApi({api:'sticker.place',placements:stickLtrs[stickStr[currFrm]]});currFrm++;if(currFrm==stickStr.length){currFrm=0;}", 2000);