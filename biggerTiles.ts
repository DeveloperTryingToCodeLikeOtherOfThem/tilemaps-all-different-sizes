namespace biggerTiles {
     /**
     * Creates a tilemap with 64x64 tiles that can be connected to other tilemaps through the overworld.
     */
    //% blockId=tileUtil_createSmallMap
    //% block="64x64 tilemap $tilemap"
    //% tilemap.fieldEditor="tilemap"
    //% tilemap.fieldOptions.decompileArgumentAsString="true"
    //% tilemap.fieldOptions.filter="tile"
    //% tilemap.fieldOptions.taggedTemplate="tilemap"
    //% tilemap.fieldOptions.tileWidth=64
    //% tilemap.fieldOptions.initWidth=20
    //% tilemap.fieldOptions.initHeight=15
    //% group="Tilemaps" weight=99 blockGap=8
    //% duplicateShadowOnDrag
    //% blockAliasFor="biggerTiles.setBiggerMap"
    export function createBiggerMap(tilemap: tiles.TileMapData): tiles.TileMapData {
        return tilemap
    }

 /**
     * Creates a tilemap with 64x64 tiles that can be connected to other tilemaps through the overworld.
     */
    //% blockId=tileUtil_createSmallMap
    //% block="64x64 tilemap $tilemap"
    //% tilemap.fieldEditor="tilemap"
    //% tilemap.fieldOptions.decompileArgumentAsString="true"
    //% tilemap.fieldOptions.filter="tile"
    //% tilemap.fieldOptions.taggedTemplate="tilemap"
    //% tilemap.fieldOptions.tileWidth=64
    //% tilemap.fieldOptions.initWidth=20
    //% tilemap.fieldOptions.initHeight=15
    //% group="Tilemaps" weight=100 blockGap=8
    //% duplicateShadowOnDrag
    export function setBiggerMap(tilemap: tiles.TileMapData){
    tiles.setTilemap(createBiggerMap(tilemap))
    }

}