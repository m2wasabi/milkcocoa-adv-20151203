//=============================================================================
// MilkcocoaClient.js
//=============================================================================

/*:ja
 * @plugindesc Milkcocoaで接続します。
 * @author m2wasabi
 *
 * @param appId
 * @desc Milkcocoaのapp_id
 * @default N\A
 *
 * @param dataPath
 * @desc Milkcocoaのdata_path
 * @default N\A
 *
 * @help このプラグインには、プラグインコマンドはありません。
 *
 */

(function() {

  var parameters = PluginManager.parameters('MilkcocoaClient');
  var appId = parameters['appId'];
  var dataPath = parameters['dataPath'];

  var milkcocoa = new MilkCocoa(appId + '.mlkcca.com');
  var ds = milkcocoa.dataStore(dataPath);
  ds.on('send',function(data){
    if(data.value.message){
      console.log(data.value.message);
      SoundManager.playOk();
      $gameMessage.setFaceImage("People4",1);
      $gameMessage.add(data.value.message);
    }
    if(data.value.switch){
      $gameSwitches.setValue(data.value.switch.id,data.value.switch.value);
    }
  });


})();
