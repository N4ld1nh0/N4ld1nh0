gdjs.FIMCode = {};
gdjs.FIMCode.localVariables = [];
gdjs.FIMCode.GDcorpoUrnaObjects1= [];
gdjs.FIMCode.GDcorpoUrnaObjects2= [];
gdjs.FIMCode.GDpainelUrnaObjects1= [];
gdjs.FIMCode.GDpainelUrnaObjects2= [];
gdjs.FIMCode.GDbotao0Objects1= [];
gdjs.FIMCode.GDbotao0Objects2= [];
gdjs.FIMCode.GDbotao1Objects1= [];
gdjs.FIMCode.GDbotao1Objects2= [];
gdjs.FIMCode.GDbotao2Objects1= [];
gdjs.FIMCode.GDbotao2Objects2= [];
gdjs.FIMCode.GDbotao3Objects1= [];
gdjs.FIMCode.GDbotao3Objects2= [];
gdjs.FIMCode.GDbotao4Objects1= [];
gdjs.FIMCode.GDbotao4Objects2= [];
gdjs.FIMCode.GDbotao5Objects1= [];
gdjs.FIMCode.GDbotao5Objects2= [];
gdjs.FIMCode.GDbotao6Objects1= [];
gdjs.FIMCode.GDbotao6Objects2= [];
gdjs.FIMCode.GDbotao7Objects1= [];
gdjs.FIMCode.GDbotao7Objects2= [];
gdjs.FIMCode.GDbotao8Objects1= [];
gdjs.FIMCode.GDbotao8Objects2= [];
gdjs.FIMCode.GDbotao9Objects1= [];
gdjs.FIMCode.GDbotao9Objects2= [];
gdjs.FIMCode.GDbotaoBrancoObjects1= [];
gdjs.FIMCode.GDbotaoBrancoObjects2= [];
gdjs.FIMCode.GDbotaoCorrigeObjects1= [];
gdjs.FIMCode.GDbotaoCorrigeObjects2= [];
gdjs.FIMCode.GDBotaoConfirmaObjects1= [];
gdjs.FIMCode.GDBotaoConfirmaObjects2= [];
gdjs.FIMCode.GDnumCandObjects1= [];
gdjs.FIMCode.GDnumCandObjects2= [];
gdjs.FIMCode.GDcargoCandObjects1= [];
gdjs.FIMCode.GDcargoCandObjects2= [];
gdjs.FIMCode.GDUnnamedObjects1= [];
gdjs.FIMCode.GDUnnamedObjects2= [];
gdjs.FIMCode.GDnomeCandObjects1= [];
gdjs.FIMCode.GDnomeCandObjects2= [];
gdjs.FIMCode.GDpartCandObjects1= [];
gdjs.FIMCode.GDpartCandObjects2= [];
gdjs.FIMCode.GDNewTextObjects1= [];
gdjs.FIMCode.GDNewTextObjects2= [];
gdjs.FIMCode.GDNewText2Objects1= [];
gdjs.FIMCode.GDNewText2Objects2= [];
gdjs.FIMCode.GDNewSpriteObjects1= [];
gdjs.FIMCode.GDNewSpriteObjects2= [];
gdjs.FIMCode.GDFotoObjects1= [];
gdjs.FIMCode.GDFotoObjects2= [];
gdjs.FIMCode.GDNewText3Objects1= [];
gdjs.FIMCode.GDNewText3Objects2= [];
gdjs.FIMCode.GDNewText4Objects1= [];
gdjs.FIMCode.GDNewText4Objects2= [];
gdjs.FIMCode.GDConfirmeSeuVotoTextoObjects1= [];
gdjs.FIMCode.GDConfirmeSeuVotoTextoObjects2= [];
gdjs.FIMCode.GDFoto2Objects1= [];
gdjs.FIMCode.GDFoto2Objects2= [];
gdjs.FIMCode.GDNewText5Objects1= [];
gdjs.FIMCode.GDNewText5Objects2= [];
gdjs.FIMCode.GDTextoViceObjects1= [];
gdjs.FIMCode.GDTextoViceObjects2= [];
gdjs.FIMCode.GDnumerotextoObjects1= [];
gdjs.FIMCode.GDnumerotextoObjects2= [];
gdjs.FIMCode.GDNewText6Objects1= [];
gdjs.FIMCode.GDNewText6Objects2= [];


gdjs.FIMCode.mapOfGDgdjs_9546FIMCode_9546GDBotaoConfirmaObjects1Objects = Hashtable.newFrom({"BotaoConfirma": gdjs.FIMCode.GDBotaoConfirmaObjects1});
gdjs.FIMCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BotaoConfirma"), gdjs.FIMCode.GDBotaoConfirmaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.FIMCode.mapOfGDgdjs_9546FIMCode_9546GDBotaoConfirmaObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Voto Vereador", false);
}}

}


};gdjs.FIMCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "fim.mp3", false, 100, 1);
}}

}


{


gdjs.FIMCode.eventsList0(runtimeScene);
}


};

gdjs.FIMCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FIMCode.GDcorpoUrnaObjects1.length = 0;
gdjs.FIMCode.GDcorpoUrnaObjects2.length = 0;
gdjs.FIMCode.GDpainelUrnaObjects1.length = 0;
gdjs.FIMCode.GDpainelUrnaObjects2.length = 0;
gdjs.FIMCode.GDbotao0Objects1.length = 0;
gdjs.FIMCode.GDbotao0Objects2.length = 0;
gdjs.FIMCode.GDbotao1Objects1.length = 0;
gdjs.FIMCode.GDbotao1Objects2.length = 0;
gdjs.FIMCode.GDbotao2Objects1.length = 0;
gdjs.FIMCode.GDbotao2Objects2.length = 0;
gdjs.FIMCode.GDbotao3Objects1.length = 0;
gdjs.FIMCode.GDbotao3Objects2.length = 0;
gdjs.FIMCode.GDbotao4Objects1.length = 0;
gdjs.FIMCode.GDbotao4Objects2.length = 0;
gdjs.FIMCode.GDbotao5Objects1.length = 0;
gdjs.FIMCode.GDbotao5Objects2.length = 0;
gdjs.FIMCode.GDbotao6Objects1.length = 0;
gdjs.FIMCode.GDbotao6Objects2.length = 0;
gdjs.FIMCode.GDbotao7Objects1.length = 0;
gdjs.FIMCode.GDbotao7Objects2.length = 0;
gdjs.FIMCode.GDbotao8Objects1.length = 0;
gdjs.FIMCode.GDbotao8Objects2.length = 0;
gdjs.FIMCode.GDbotao9Objects1.length = 0;
gdjs.FIMCode.GDbotao9Objects2.length = 0;
gdjs.FIMCode.GDbotaoBrancoObjects1.length = 0;
gdjs.FIMCode.GDbotaoBrancoObjects2.length = 0;
gdjs.FIMCode.GDbotaoCorrigeObjects1.length = 0;
gdjs.FIMCode.GDbotaoCorrigeObjects2.length = 0;
gdjs.FIMCode.GDBotaoConfirmaObjects1.length = 0;
gdjs.FIMCode.GDBotaoConfirmaObjects2.length = 0;
gdjs.FIMCode.GDnumCandObjects1.length = 0;
gdjs.FIMCode.GDnumCandObjects2.length = 0;
gdjs.FIMCode.GDcargoCandObjects1.length = 0;
gdjs.FIMCode.GDcargoCandObjects2.length = 0;
gdjs.FIMCode.GDUnnamedObjects1.length = 0;
gdjs.FIMCode.GDUnnamedObjects2.length = 0;
gdjs.FIMCode.GDnomeCandObjects1.length = 0;
gdjs.FIMCode.GDnomeCandObjects2.length = 0;
gdjs.FIMCode.GDpartCandObjects1.length = 0;
gdjs.FIMCode.GDpartCandObjects2.length = 0;
gdjs.FIMCode.GDNewTextObjects1.length = 0;
gdjs.FIMCode.GDNewTextObjects2.length = 0;
gdjs.FIMCode.GDNewText2Objects1.length = 0;
gdjs.FIMCode.GDNewText2Objects2.length = 0;
gdjs.FIMCode.GDNewSpriteObjects1.length = 0;
gdjs.FIMCode.GDNewSpriteObjects2.length = 0;
gdjs.FIMCode.GDFotoObjects1.length = 0;
gdjs.FIMCode.GDFotoObjects2.length = 0;
gdjs.FIMCode.GDNewText3Objects1.length = 0;
gdjs.FIMCode.GDNewText3Objects2.length = 0;
gdjs.FIMCode.GDNewText4Objects1.length = 0;
gdjs.FIMCode.GDNewText4Objects2.length = 0;
gdjs.FIMCode.GDConfirmeSeuVotoTextoObjects1.length = 0;
gdjs.FIMCode.GDConfirmeSeuVotoTextoObjects2.length = 0;
gdjs.FIMCode.GDFoto2Objects1.length = 0;
gdjs.FIMCode.GDFoto2Objects2.length = 0;
gdjs.FIMCode.GDNewText5Objects1.length = 0;
gdjs.FIMCode.GDNewText5Objects2.length = 0;
gdjs.FIMCode.GDTextoViceObjects1.length = 0;
gdjs.FIMCode.GDTextoViceObjects2.length = 0;
gdjs.FIMCode.GDnumerotextoObjects1.length = 0;
gdjs.FIMCode.GDnumerotextoObjects2.length = 0;
gdjs.FIMCode.GDNewText6Objects1.length = 0;
gdjs.FIMCode.GDNewText6Objects2.length = 0;

gdjs.FIMCode.eventsList1(runtimeScene);
gdjs.FIMCode.GDcorpoUrnaObjects1.length = 0;
gdjs.FIMCode.GDcorpoUrnaObjects2.length = 0;
gdjs.FIMCode.GDpainelUrnaObjects1.length = 0;
gdjs.FIMCode.GDpainelUrnaObjects2.length = 0;
gdjs.FIMCode.GDbotao0Objects1.length = 0;
gdjs.FIMCode.GDbotao0Objects2.length = 0;
gdjs.FIMCode.GDbotao1Objects1.length = 0;
gdjs.FIMCode.GDbotao1Objects2.length = 0;
gdjs.FIMCode.GDbotao2Objects1.length = 0;
gdjs.FIMCode.GDbotao2Objects2.length = 0;
gdjs.FIMCode.GDbotao3Objects1.length = 0;
gdjs.FIMCode.GDbotao3Objects2.length = 0;
gdjs.FIMCode.GDbotao4Objects1.length = 0;
gdjs.FIMCode.GDbotao4Objects2.length = 0;
gdjs.FIMCode.GDbotao5Objects1.length = 0;
gdjs.FIMCode.GDbotao5Objects2.length = 0;
gdjs.FIMCode.GDbotao6Objects1.length = 0;
gdjs.FIMCode.GDbotao6Objects2.length = 0;
gdjs.FIMCode.GDbotao7Objects1.length = 0;
gdjs.FIMCode.GDbotao7Objects2.length = 0;
gdjs.FIMCode.GDbotao8Objects1.length = 0;
gdjs.FIMCode.GDbotao8Objects2.length = 0;
gdjs.FIMCode.GDbotao9Objects1.length = 0;
gdjs.FIMCode.GDbotao9Objects2.length = 0;
gdjs.FIMCode.GDbotaoBrancoObjects1.length = 0;
gdjs.FIMCode.GDbotaoBrancoObjects2.length = 0;
gdjs.FIMCode.GDbotaoCorrigeObjects1.length = 0;
gdjs.FIMCode.GDbotaoCorrigeObjects2.length = 0;
gdjs.FIMCode.GDBotaoConfirmaObjects1.length = 0;
gdjs.FIMCode.GDBotaoConfirmaObjects2.length = 0;
gdjs.FIMCode.GDnumCandObjects1.length = 0;
gdjs.FIMCode.GDnumCandObjects2.length = 0;
gdjs.FIMCode.GDcargoCandObjects1.length = 0;
gdjs.FIMCode.GDcargoCandObjects2.length = 0;
gdjs.FIMCode.GDUnnamedObjects1.length = 0;
gdjs.FIMCode.GDUnnamedObjects2.length = 0;
gdjs.FIMCode.GDnomeCandObjects1.length = 0;
gdjs.FIMCode.GDnomeCandObjects2.length = 0;
gdjs.FIMCode.GDpartCandObjects1.length = 0;
gdjs.FIMCode.GDpartCandObjects2.length = 0;
gdjs.FIMCode.GDNewTextObjects1.length = 0;
gdjs.FIMCode.GDNewTextObjects2.length = 0;
gdjs.FIMCode.GDNewText2Objects1.length = 0;
gdjs.FIMCode.GDNewText2Objects2.length = 0;
gdjs.FIMCode.GDNewSpriteObjects1.length = 0;
gdjs.FIMCode.GDNewSpriteObjects2.length = 0;
gdjs.FIMCode.GDFotoObjects1.length = 0;
gdjs.FIMCode.GDFotoObjects2.length = 0;
gdjs.FIMCode.GDNewText3Objects1.length = 0;
gdjs.FIMCode.GDNewText3Objects2.length = 0;
gdjs.FIMCode.GDNewText4Objects1.length = 0;
gdjs.FIMCode.GDNewText4Objects2.length = 0;
gdjs.FIMCode.GDConfirmeSeuVotoTextoObjects1.length = 0;
gdjs.FIMCode.GDConfirmeSeuVotoTextoObjects2.length = 0;
gdjs.FIMCode.GDFoto2Objects1.length = 0;
gdjs.FIMCode.GDFoto2Objects2.length = 0;
gdjs.FIMCode.GDNewText5Objects1.length = 0;
gdjs.FIMCode.GDNewText5Objects2.length = 0;
gdjs.FIMCode.GDTextoViceObjects1.length = 0;
gdjs.FIMCode.GDTextoViceObjects2.length = 0;
gdjs.FIMCode.GDnumerotextoObjects1.length = 0;
gdjs.FIMCode.GDnumerotextoObjects2.length = 0;
gdjs.FIMCode.GDNewText6Objects1.length = 0;
gdjs.FIMCode.GDNewText6Objects2.length = 0;


return;

}

gdjs['FIMCode'] = gdjs.FIMCode;
