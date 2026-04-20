controller.A.onEvent(ControllerButtonEvent.Released, function () {
    mario.setImage(img`
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . e e e e d e d . . . . . 
        . . . e e d e d d e d . . . . . 
        . . . e e d d d d d d d d . . . 
        . . . e e e d d d e e e . . . . 
        . . . . . d d d d d d . . . . . 
        . . . . e e 2 e e e . . . . . . 
        . . . e e e 2 e e 2 e e . . . . 
        . . e e e 2 2 2 2 2 e e . . . . 
        . . e e e 2 2 2 2 2 2 e . . . . 
        . . d d 2 2 d 2 2 d 2 d . . . . 
        . . . d 2 2 2 2 2 2 2 d . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . 2 2 2 . . 2 2 2 . . . . . 
        . . e e e e . . e e e e . . . . 
        `)
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mario.tileKindAt(TileDirection.Center, assets.tile`myTile7`)) {
        tiles.setWallAt(location, false)
        tiles.setCurrentTilemap(tilemap`level3`)
        tiles.placeOnTile(sprite, tiles.getTileLocation(3, 0))
    } else {
        tiles.setWallAt(location, true)
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mario,
    [img`
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . e e e e d e d . . . . . 
        . . e e d d e d d e d . . . . . 
        . . e e d d d d d d d d d . . . 
        . . e e e d d d d e e e . . . . 
        . . . . d d d d d d d . . . . . 
        . . . e e 2 e e e e . . . . . . 
        . . e e e 2 e e e 2 e e . . . . 
        . e e e 2 2 2 2 2 2 e e . . . . 
        . e e e 2 d 2 2 2 d 2 e . . . . 
        . d d 2 2 2 2 2 2 2 2 d . . . . 
        . . d 2 2 2 2 2 2 2 2 d . . . . 
        . . 2 2 2 2 2 2 2 2 2 . . . . . 
        . . 2 2 2 2 . . 2 2 2 . . . . . 
        . e e e e e . . e e e e . . . . 
        `],
    100,
    false
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mario.isHittingTile(CollisionDirection.Bottom)) {
        mario.vy += -180
        mario.setImage(img`
            . . . . 2 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 2 . . . 
            . . . . e e e e d e d . . . . . 
            . . . e e d e d d e d . . . . . 
            . . . e e d d d d d d d d . . . 
            . . . e e e d d d e e e . d . . 
            . . . . . d d d d d d . d d . . 
            . . . . e e 2 e e e . . e e . . 
            . . . e e e 2 e e 2 e e e e . . 
            . . e e e 2 2 2 2 2 e e e e . . 
            . . e e e 2 2 2 2 2 2 . . . . . 
            . . d d 2 2 d 2 2 d 2 . . . . . 
            . . . d 2 2 2 2 2 2 2 . . e . . 
            . e 2 2 2 . . . . 2 2 2 2 e . . 
            . e 2 2 2 . . . . 2 2 2 2 e . . 
            . e . . . . . . . . . . . . . . 
            `)
    }
})
function placeEnemise (col: number, row: number, vx: number) {
    gommba = sprites.create(img`
        . . . . . . . e e . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . e e e e e e e e e e . . . 
        . . e f f f e e e e f f f e . . 
        . e e e d f f e e f f d e e e . 
        e e e e d f d f f d f d e e e e 
        e e e e d d d e e d d d e e e e 
        . e e e e e e e e e e e e e e . 
        . . e e e e e e e e e e e e . . 
        . . . e e d d d d d d e e . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . f d d d d d d f . . . . 
        . f f f f f d d d d f f f f f . 
        . f f f f f . . . . f f f f f . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(gommba, tiles.getTileLocation(col, row))
    gommba.setBounceOnWall(true)
    gommba.setVelocity(vx, 0)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mario,
    [img`
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . e e e e d e d . . . . . 
        . . e e d d e d d e d . . . . . 
        . . e e d d d d d d d d d . . . 
        . . e e e d d d d e e e . . . . 
        . . . . d d d d d d d . . . . . 
        . . . e e 2 e e e e . . . . . . 
        . . e e e 2 e e e 2 e e . . . . 
        . e e e 2 2 2 2 2 2 e e . . . . 
        . e e e 2 d 2 2 2 d 2 e . . . . 
        . d d 2 2 2 2 2 2 2 2 d . . . . 
        . . d 2 2 2 2 2 2 2 2 d . . . . 
        . . 2 2 2 2 2 2 2 2 2 . . . . . 
        . . 2 2 2 2 . . e e e e . . . . 
        . e e e e e . . . . . . . . . . 
        `,img`
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . e e e e d e d . . . . . 
        . . e e d d e d d e d . . . . . 
        . . e e d d d d d d d d d . . . 
        . . e e e d d d d e e e . . . . 
        . . . . d d d d d d d . . . . . 
        . . . e e 2 e e e e . . . . . . 
        . . e e e 2 e e e 2 e e . . . . 
        . e e e 2 2 2 2 2 2 e e . . . . 
        . e e e 2 d 2 2 2 d 2 e . . . . 
        . d d 2 2 2 2 2 2 2 2 d . . . . 
        . . d 2 2 2 2 2 2 2 2 d . . . . 
        . . 2 2 2 2 2 2 2 2 2 . . . . . 
        . e e e e e . . 2 2 2 . . . . . 
        . . . . . . . . e e e e . . . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    if (sprite.tileKindAt(TileDirection.Top, assets.tile`myTile5`)) {
        tiles.setTileAt(location, assets.tile`myTile8`)
        tiles.setWallAt(location, true)
        coin = sprites.create(img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(coin, location)
        coin.y += -15
        sprites.destroy(coin, effects.rings, 1000)
        info.changeScoreBy(1)
    } else {
        tiles.setWallAt(location, true)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite.vy > 10) {
        sprites.destroy(otherSprite, effects.disintegrate, 500)
    } else {
        info.changeLifeBy(-1)
        info.changeScoreBy(1)
        scene.cameraShake(4, 500)
        pause(1000)
    }
})
let coin: Sprite = null
let gommba: Sprite = null
let mario: Sprite = null
info.setLife(3)
info.setScore(0)
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
mario = sprites.create(img`
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 2 . . . 
    . . . . e e e e d e d . . . . . 
    . . . e e d e d d e d . . . . . 
    . . . e e d d d d d d d d . . . 
    . . . e e e d d d e e e . . . . 
    . . . . . d d d d d d . . . . . 
    . . . . e e 2 e e e . . . . . . 
    . . . e e e 2 e e 2 e e . . . . 
    . . e e e 2 2 2 2 2 e e . . . . 
    . . e e e 2 2 2 2 2 2 e . . . . 
    . . d d 2 2 d 2 2 d 2 d . . . . 
    . . . d 2 2 2 2 2 2 2 d . . . . 
    . . . 2 2 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 . . 2 2 2 . . . . . 
    . . e e e e . . e e e e . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mario, 100, 0)
mario.ay = 300
tiles.placeOnTile(mario, tiles.getTileLocation(1, 13))
scene.cameraFollowSprite(mario)
placeEnemise(8, 13, 30)
placeEnemise(15, 13, 25)
placeEnemise(25, 13, -35)
placeEnemise(45, 13, 30)
game.onUpdateInterval(500, function () {
    if (mario.tileKindAt(TileDirection.Right, sprites.dungeon.doorClosedNorth)) {
        tiles.setCurrentTilemap(tilemap`level1`)
    }
    if (mario.tileKindAt(TileDirection.Center, assets.tile`myTile12`)) {
        game.gameOver(true)
    }
})
