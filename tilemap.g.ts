// Code généré automatiquement. Ne pas modifier.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`320010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000303000000000000000000000000000000000000000000000000000000000000000000000000030300000000000000000000000000000000000000000000000000000000000000000000000006060600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000606050000000000000000000000000000000000000000030202030000000000000000000000000000000000000000000000000005000000000000000002020202030000000000000000000000000000000302020000000000030000000000000000000000000500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000202030202030200000000000000000000000000000000000202020200000005000000000000000002020202020202030000000000000000000000000202020203030302020302030000000000000000000500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101000000000000000000000000000007020202020202000000000000000000000000000000000000000000000001010101010101010001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
................22................................
...2222.................22........................
..................................................
.............22.22.2.................2222.........
...2222222.............2222...22.2................
...........................................2222...
............222222.......................22222222.
22222222222222222222222222222222222222222222222222
22222222222222222222222222222222222222222222222222
`, [myTiles.transparency16,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile4,myTiles.tile13,myTiles.tile14,myTiles.tile9], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010000000000000000000000000001010100000303000000000000000000010101000000000000000000000000000101010000000000000000000000000004010102020202020003000002020202020101000000000000000000000000000001010000000000000000000000000000010101000000000002020200000000010101010300000000000000000000030101010100000000000000000000000001010101000000020202020202000000010101010100000300000000030000010101010101010000000000000000010101010101010101010101010101010101010101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . 2 2 
2 . . . . . . . . . . . . . 2 2 
2 . . . . . . . . . . . . . 2 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 . . . . 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 . . . . . 2 2 2 . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . 2 2 2 2 2 2 . . . 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 2 . . . . . . . . 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile5,myTiles.tile6,myTiles.tile7,sprites.dungeon.doorClosedNorth], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile8":
            case "tile10":return tile10;
            case "myTile9":
            case "tile11":return tile11;
            case "myTile10":
            case "tile12":return tile12;
            case "myTile11":
            case "tile13":return tile13;
            case "myTile12":
            case "tile14":return tile14;
        }
        return null;
    })

}
// Code généré automatiquement. Ne pas modifier.
