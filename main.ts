namespace SpriteKind {
    export const portil_piece = SpriteKind.create()
    export const flower = SpriteKind.create()
    export const Pressure_plate = SpriteKind.create()
    export const bullet = SpriteKind.create()
    export const start = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    User.y += -5
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.portil_piece, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    gun = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f f f f f f f . . . 
        . . . . . f f f f f f f f f . . 
        . . . . . f f f f f f f f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.bullet)
    gun.setPosition(User.x, User.y)
    if (missles <= 0) {
        sprites.destroy(gun)
    } else {
        gun.follow(missle)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (User.vy == 0) {
        User.vy = -90
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    if (info.score() >= 75) {
        game.splash("level 2 complete")
        level_number = 3
        info.changeLifeBy(1)
    } else {
        game.splash("not enough points")
        tiles.placeOnRandomTile(User, assets.tile`myTile`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Pressure_plate, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    missle = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    missles += 1
    animation.runImageAnimation(
    missle,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f 8 8 2 . . 
        . f 2 f f f f f f f f 8 4 . 4 5 
        f 2 2 f f f f f f f f 8 2 4 . . 
        . f 2 f f f f f f f f 8 5 4 . 4 
        . . f f f f f f f f f 8 2 5 5 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f 8 5 4 2 2 
        . f 2 f f f f f f f f 8 5 5 . 5 
        f 2 2 f f f f f f f f 8 2 . 4 . 
        . f 2 f f f f f f f f 8 5 . 4 4 
        . . f f f f f f f f f 8 2 2 5 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    missle.setPosition(User.x + 80, User.y - 40)
    missle.follow(User)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    User.y += -10
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (info.score() >= 63) {
        game.splash("level 1 complete")
        level_number = 2
        info.changeLifeBy(1)
    } else {
        game.splash("You need", 63 - info.score())
        tiles.placeOnRandomTile(User, assets.tile`myTile`)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.bullet, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
    info.changeScoreBy(3)
    missles += -1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    if (info.score() >= 85) {
        level_number = 4
        info.changeLifeBy(1)
        game.gameOver(true)
        game.setGameOverEffect(true, effects.confetti)
    } else {
        game.splash("not enough points")
        pause(2000)
        game.gameOver(false)
        game.setGameOverEffect(false, effects.melt)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
    info.changeScoreBy(3)
})
let missle: Sprite = null
let gun: Sprite = null
let trap: Sprite = null
let portal_piece: Sprite = null
let User: Sprite = null
let missles = 0
let level_number = 0
level_number = 1
missles = 0
info.setLife(3)
scene.setBackgroundColor(9)
User = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f . . . . . . . . 
    . . . . . f . f . . . . . . . . 
    . . . . . f f f . . . . . . . . 
    . . . . . . f . . e e e e . . . 
    . . . . f f f f f e . . . . . . 
    . . . . . . f . . e . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . . f . . . f . . . . . . . 
    . . . . f . . . f . . . . . . . 
    . . . . f . . . f . . . . . . . 
    `, SpriteKind.Player)
User.setPosition(46, 61)
controller.moveSprite(User, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(User, assets.tile`myTile`)
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    tiles.setTileAt(value, assets.tile`transparency16`)
}
User.ay = 200
scene.cameraFollowSprite(User)
for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
    portal_piece = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . f 5 5 f f 5 5 f . . . . 
        . . . f 5 5 f 1 1 f 5 5 f . . . 
        . . . f 5 f 1 1 1 1 f 5 f . . . 
        . . . f 5 f 1 1 1 1 f 5 f . . . 
        . . . f 5 f 1 1 1 1 f 5 f . . . 
        . . . f 5 5 f 1 1 f 5 5 f . . . 
        . . . . f 5 5 f f 5 5 f . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        `, SpriteKind.portil_piece)
    animation.runImageAnimation(
    portal_piece,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . f 5 5 f f 5 5 f . . . . 
        . . . f 5 5 f 1 1 f 5 5 f . . . 
        . . . f 5 f 1 1 1 1 f 5 f . . . 
        . . . f 5 f 1 1 1 1 f 5 f . . . 
        . . . f 5 f 1 1 1 1 f 5 f . . . 
        . . . f 5 f 1 1 1 1 f 5 f . . . 
        . . . f 5 5 f 1 1 f 5 5 f . . . 
        . . . . f 5 5 f f 5 5 f . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . f 5 5 f f 5 5 f . . . . 
        . . . . f 5 f 1 1 f 5 f . . . . 
        . . . . f 5 f 1 1 f 5 f . . . . 
        . . . . f 5 f 1 1 f 5 f . . . . 
        . . . . f 5 f 1 1 f 5 f . . . . 
        . . . . f 5 5 f f 5 5 f . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . f 5 f f 5 f . . . . . 
        . . . . . f 5 f f 5 f . . . . . 
        . . . . . f 5 f f 5 f . . . . . 
        . . . . . f 5 f f 5 f . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . f 5 5 f f 5 5 f . . . . 
        . . . . f 5 f 1 1 f 5 f . . . . 
        . . . . f 5 f 1 1 f 5 f . . . . 
        . . . . f 5 f 1 1 f 5 f . . . . 
        . . . . f 5 f 1 1 f 5 f . . . . 
        . . . . f 5 5 f f 5 5 f . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    tiles.placeOnTile(portal_piece, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
    trap = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f d d d d d d d d f . . . 
        `, SpriteKind.Pressure_plate)
    tiles.placeOnTile(trap, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
pauseUntil(() => 2 == level_number)
tiles.setCurrentTilemap(tilemap`level10`)
scene.cameraFollowSprite(User)
tiles.placeOnRandomTile(User, assets.tile`myTile`)
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    tiles.setTileAt(value, assets.tile`transparency16`)
}
User.ay = 200
for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
    portal_piece = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . f 5 5 f f 5 5 f . . . . 
        . . . f 5 5 f 1 1 f 5 5 f . . . 
        . . . f 5 f 1 1 1 1 f 5 f . . . 
        . . . f 5 f 1 1 1 1 f 5 f . . . 
        . . . f 5 f 1 1 1 1 f 5 f . . . 
        . . . f 5 5 f 1 1 f 5 5 f . . . 
        . . . . f 5 5 f f 5 5 f . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        `, SpriteKind.portil_piece)
    animation.runImageAnimation(
    portal_piece,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . f 5 5 f f 5 5 f . . . . 
        . . . f 5 5 f 1 1 f 5 5 f . . . 
        . . . f 5 f 1 1 1 1 f 5 f . . . 
        . . . f 5 f 1 1 1 1 f 5 f . . . 
        . . . f 5 f 1 1 1 1 f 5 f . . . 
        . . . f 5 f 1 1 1 1 f 5 f . . . 
        . . . f 5 5 f 1 1 f 5 5 f . . . 
        . . . . f 5 5 f f 5 5 f . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . f 5 5 f f 5 5 f . . . . 
        . . . . f 5 f 1 1 f 5 f . . . . 
        . . . . f 5 f 1 1 f 5 f . . . . 
        . . . . f 5 f 1 1 f 5 f . . . . 
        . . . . f 5 f 1 1 f 5 f . . . . 
        . . . . f 5 5 f f 5 5 f . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . f 5 f f 5 f . . . . . 
        . . . . . f 5 f f 5 f . . . . . 
        . . . . . f 5 f f 5 f . . . . . 
        . . . . . f 5 f f 5 f . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . f 5 5 f f 5 5 f . . . . 
        . . . . f 5 f 1 1 f 5 f . . . . 
        . . . . f 5 f 1 1 f 5 f . . . . 
        . . . . f 5 f 1 1 f 5 f . . . . 
        . . . . f 5 f 1 1 f 5 f . . . . 
        . . . . f 5 5 f f 5 5 f . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    tiles.placeOnTile(portal_piece, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
    trap = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f d d d d d d d d f . . . 
        `, SpriteKind.Pressure_plate)
    tiles.placeOnTile(trap, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
pauseUntil(() => 3 == level_number)
scene.cameraFollowSprite(User)
tiles.setCurrentTilemap(tilemap`level3`)
tiles.placeOnRandomTile(User, assets.tile`myTile`)
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    tiles.setTileAt(value, assets.tile`transparency16`)
}
User.ay = 200
for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
    portal_piece = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . f 5 5 f f 5 5 f . . . . 
        . . . f 5 5 f 1 1 f 5 5 f . . . 
        . . . f 5 f 1 1 1 1 f 5 f . . . 
        . . . f 5 f 1 1 1 1 f 5 f . . . 
        . . . f 5 f 1 1 1 1 f 5 f . . . 
        . . . f 5 5 f 1 1 f 5 5 f . . . 
        . . . . f 5 5 f f 5 5 f . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        `, SpriteKind.portil_piece)
    animation.runImageAnimation(
    portal_piece,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . f 5 5 f f 5 5 f . . . . 
        . . . f 5 5 f 1 1 f 5 5 f . . . 
        . . . f 5 f 1 1 1 1 f 5 f . . . 
        . . . f 5 f 1 1 1 1 f 5 f . . . 
        . . . f 5 f 1 1 1 1 f 5 f . . . 
        . . . f 5 f 1 1 1 1 f 5 f . . . 
        . . . f 5 5 f 1 1 f 5 5 f . . . 
        . . . . f 5 5 f f 5 5 f . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . f 5 5 f f 5 5 f . . . . 
        . . . . f 5 f 1 1 f 5 f . . . . 
        . . . . f 5 f 1 1 f 5 f . . . . 
        . . . . f 5 f 1 1 f 5 f . . . . 
        . . . . f 5 f 1 1 f 5 f . . . . 
        . . . . f 5 5 f f 5 5 f . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . f 5 f f 5 f . . . . . 
        . . . . . f 5 f f 5 f . . . . . 
        . . . . . f 5 f f 5 f . . . . . 
        . . . . . f 5 f f 5 f . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . f 5 5 f f 5 5 f . . . . 
        . . . . f 5 f 1 1 f 5 f . . . . 
        . . . . f 5 f 1 1 f 5 f . . . . 
        . . . . f 5 f 1 1 f 5 f . . . . 
        . . . . f 5 f 1 1 f 5 f . . . . 
        . . . . f 5 5 f f 5 5 f . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    tiles.placeOnTile(portal_piece, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
    trap = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f d d d d d d d d f . . . 
        `, SpriteKind.Pressure_plate)
    tiles.placeOnTile(trap, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
game.onUpdate(function () {
    User.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f . . . . . . . . 
        . . . . . f . f . . . . . . . . 
        . . . . . f f f . . . . . . . . 
        . . . . . . f . . e e e e . . . 
        . . . . f f f f f e . . . . . . 
        . . . . . . f . . e . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . . f . . . f . . . . . . . 
        . . . . f . . . f . . . . . . . 
        . . . . f . . . f . . . . . . . 
        `)
    if (User.vy < 0) {
        User.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f . . . . . . . . 
            . . . . . f . f . . e e e e . . 
            . . . . . f f f . f e . . . . . 
            . . . . . . f . f . e . . . . . 
            . . . . . f f f . . . . . . . . 
            . . . . f . f . . . . . . . . . 
            . . . f . . f . . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f f . f . . . . . . . 
            . . . . f . . . f . . . . . . . 
            . . . . f . . . . . . . . . . . 
            . . . . f . . . . . . . . . . . 
            `)
    } else if (User.vy > 0) {
        User.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f . . . . . . . . 
            . . . . . f . f . . . . . . . . 
            . . . . . f f f . . e e e e . . 
            . . . f . . f . . f e . . . . . 
            . . . . f . f . f . e . . . . . 
            . . . . . f f f . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . f . . . f . . . f . . . . . 
            . . . f . . f . . f . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
    	
    }
    if (User.vx < 0) {
        User.image.flipX()
    }
})
