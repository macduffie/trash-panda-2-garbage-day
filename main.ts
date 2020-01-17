namespace SpriteKind {
    export const Friend = SpriteKind.create()
}
function resetCharacters () {
    raccoonSetup()
    catSetup()
    catHidingPlace = Math.randomRange(0, hidingPlaces.length - 1)
    raccoonHidingPlace = catHidingPlace
    while (catHidingPlace == raccoonHidingPlace) {
        raccoonHidingPlace = Math.randomRange(0, hidingPlaces.length - 1)
    }
    hidingPlaces[raccoonHidingPlace].place(raccoon)
    hidingPlaces[catHidingPlace].place(cat)
    if (nightMode) {
        raccoon.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 5 5 . . . . . . . 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . 5 5 5 5 . . . . . . . 
. . . . . . . 5 5 5 . . . 5 5 5 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        cat.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . 5 5 5 . . . . . . . 5 5 5 . . . . . . 
. . . . . . 5 5 2 5 . . . 5 2 5 5 . . . . . . . 
. . . . . . . 5 2 5 5 . 5 5 2 5 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    } else {
        raccoon.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        cat.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    }
}
function dayStart () {
    scene.setBackgroundImage(img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d 1 1 1 1 d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d 1 1 1 1 1 1 1 1 1 1 1 d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 d d d d 1 1 1 1 1 d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d 9 9 9 d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 d d d 1 1 1 1 1 1 1 1 1 d d 9 9 9 d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d 9 d d d 1 1 d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 d d 1 1 1 1 1 1 1 1 1 1 1 1 d d 9 d d 1 1 1 d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d 9 d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d 9 d d d 1 1 1 d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 d d d 1 1 1 1 1 1 1 1 1 1 1 1 d d d 1 1 1 1 1 1 d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d 1 1 1 1 1 1 1 1 d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 d d 1 1 1 1 1 1 1 1 1 1 1 1 1 d d 1 1 1 1 1 1 1 1 d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d 1 1 1 1 1 1 1 d d d d 1 1 1 1 1 1 1 1 1 1 1 1 d d d 1 1 1 1 1 1 1 1 1 1 1 d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 d d 1 1 1 1 1 1 1 1 1 d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d 1 1 1 1 1 1 1 1 1 1 1 d d d 1 1 1 1 1 1 1 1 1 1 1 1 d 1 1 1 1 1 1 1 1 1 1 1 1 1 d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 e e e e 9 
9 9 9 d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 d 1 1 1 1 1 1 1 1 1 1 1 d 9 9 9 9 9 9 9 9 9 9 9 9 c c 8 c 8 8 c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d 1 1 1 1 1 1 1 1 1 1 1 d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 e e b e b b e 
9 9 d d 1 1 1 1 1 1 1 d d 1 1 1 1 1 1 1 1 1 1 d 1 1 1 1 1 1 1 1 1 1 1 d 9 9 9 9 9 9 9 9 9 9 c c 8 8 8 c 8 8 8 8 c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d 1 1 1 1 1 1 1 1 1 1 1 1 d d 1 1 1 1 1 1 1 1 1 1 1 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 e e b b b e b b b 
9 d d 1 1 1 1 1 1 1 1 d d d 1 1 1 1 1 1 1 1 d 1 1 1 1 1 1 1 1 1 1 1 1 d 9 9 9 9 9 9 9 9 c c 8 8 8 8 8 c 8 8 8 8 8 8 c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d 1 1 1 1 1 1 1 1 1 1 1 1 d d 1 1 1 1 1 1 1 1 1 1 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 e e b b b b b e b b b 
9 d 1 1 1 1 1 1 1 1 1 1 d d 1 1 1 1 1 1 1 1 d 1 1 1 1 1 1 1 1 1 1 1 1 d 9 9 9 9 9 9 c c 8 8 8 8 8 8 8 c 8 8 8 8 8 8 8 8 c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 e e b b b b b b b e b b b 
9 d d 1 1 1 1 1 1 1 1 1 d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 e e e e e e e e e e e e e e e 
9 d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d 9 9 9 c c 8 8 8 c 8 8 8 8 c 8 8 c 8 8 8 c 8 8 8 8 c 8 8 8 c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 e e b b b e b b b b e b b e b b b 
9 d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d 9 9 c c 8 8 8 8 c 8 8 8 8 c 8 8 8 c 8 8 8 8 c 8 8 8 8 c 8 8 8 8 c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 e e b b b b e b b b b e b b b e b b b 
9 9 d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 1 1 1 1 1 1 d d d 9 c c 8 8 8 8 8 8 c 8 8 8 8 c 8 8 8 c 8 8 8 8 c 8 8 8 8 c 8 8 8 8 8 8 c c 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d 1 1 1 1 d d d 1 1 1 d d d d d 1 1 1 1 1 1 d 1 1 1 1 1 1 1 1 1 1 d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 e e b b b b b b e b b b b e b b b e b b b 
9 9 d d 1 1 1 1 1 1 1 1 1 1 d d d d 1 1 1 1 1 d d 1 1 1 d d d 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d 1 1 1 1 d d d 1 1 1 1 1 1 d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 e e e e e e e e e e e e e e e e e e e e e e e 
9 9 d d d d d 1 1 d d d d d d d d d d d d d d d d d d d d 9 c c 8 8 8 8 c 8 8 8 8 c 8 8 8 8 8 c 8 8 8 c 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 c 8 8 8 8 c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 e e b b b b e b b b b e b b b b b e b b b e b b b 
9 9 9 d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 c c 8 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 c 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 8 c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 e e b b b b b e b b b b b e b b b b e b b b b e b b b 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c 8 8 8 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 c 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 8 8 8 c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 e e b b b b b b b e b b b b b e b b b b e b b b b e b b b 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c 9 9 9 9 9 9 e e b b b b e b b b b b e b b b b b e b b b b b e b b b b e b b b 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c 8 8 8 8 8 c 8 8 8 8 8 8 c 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 c 8 8 8 8 8 8 c 8 8 8 8 8 c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c 9 9 9 e e b b b b b e b b b b b b e b b b b e b b b b b e b b b b b e b b b 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c 8 8 8 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 8 8 8 c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c e e b b b b b b b e b b b b b e b b b b b e b b b b b e b b b b b e b b b 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
c c c 9 9 9 9 9 9 9 9 9 9 9 c c 8 8 8 c 8 8 8 8 8 8 c 8 8 8 8 8 8 c 8 8 8 8 c 8 8 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 8 8 c 8 8 8 8 8 8 c 8 8 8 8 c 8 8 8 8 8 8 c 8 8 8 8 8 8 c 8 8 8 c c 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c e e b b b e b b b b b b e b b b b b b e b b b b e b b b b b b e b b b b b e b b b 
c c c c c 9 9 9 9 9 9 9 9 9 c 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 8 8 c 8 8 8 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 c 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c e b b b b e b b b b b e b b b b b b e b b b b b e b b b b b e b b b b b b e b b b 
c c c c c c 9 9 9 9 9 9 9 9 c 8 8 8 c 8 8 8 8 8 8 c 8 8 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 8 8 c 8 8 8 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 8 8 c 8 8 8 8 8 8 c 8 8 8 c 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c e b b b e b b b b b b e b b b b b b e b b b b b e b b b b b e b b b b b b e b b b 
c c c c c c c c c 9 9 9 9 9 c 8 8 8 c 8 8 8 8 8 c 8 8 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 8 8 c 8 8 8 8 8 8 c 8 8 8 8 8 8 8 c 8 8 8 8 8 8 c 8 8 8 8 8 c 8 8 8 8 8 8 c 8 8 8 8 8 c 8 8 8 c 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c e b b b e b b b b b e b b b b b b e b b b b b e b b b b b b e b b b b b b e b b b 
c c c c c c c c c c c 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
c c c c c c c c c c c c 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
c c c c c c c c c c c c 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
c c c c c c c c c c c c 9 9 d e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 d 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c d e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 
c c c c c c c c c c c c 9 9 d 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e d 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c d 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 
c c c c c c c c c c c c 9 9 d e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 d 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c d e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 
c c c c c c c c c c c c 9 9 d 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e d 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c d 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 
c c c c c c c c c c c c 9 9 d e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 d 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c d e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 
c c c c c c c c c c c c 9 9 d 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e d 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c d 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 
c c c c c c c c c c c c 9 9 d e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 d 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c d e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 
c c c c c c c c c c c c 9 9 d 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e d 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c d 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 
c c c e e e c c c e e e e 9 d e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 d 9 e e c c e e e e c c c e e e e c c c e e e c c e e e e c d e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 
e b e e e e e b e e e e e e d 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e d e e e b e e e e e e b e e e e e e b e e e e e b e e e e e d 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 
e b e e e e e b e e e e e e d e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 d e e e b e e e e e e b e e e e e e b e e e e e b e e e e e d e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 
e b e e e e e b e e e e e e d 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e d e e e b e e e e e e b e e e e e e b e e e e e b e e e e e d 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 
e b e e e e e b e e e e e e d e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 d e e e b e e e e e e b e e e e e e b e e e e e b e e e e e d e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 
e b e e e e e b e e e e e e d 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 c c c c c c c c c c c c c c c c c c c 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e d e e e b e e e e e e b e e e e e e b e e e e e b e e e e e d 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 c c c c c c c c c c c c c 
c c c c c c c c c c c c c c d e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 d c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e c 8 8 8 8 8 8 8 8 8 8 8 8 
e b e e e e e b e e e e e e d 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e d e e e b e e e e e e b e e e e e e b e e e e e b e e e e e d 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 c 8 8 8 8 8 8 8 8 8 8 8 8 
e b e e e e e b e e e e e e d 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d e e e b e e e e e e b e e e e e e b e e e e e b e e e e e d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 c 8 8 8 8 8 8 8 8 8 8 8 8 
e b e e e e e b e e e e e e d 4 e 4 b b b b b b b b 4 c b b b b b b b b b d e 4 e 4 c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c 4 e 4 e 4 b b b b b b b b 4 c b b b b b b b b b d e 4 e d e e e b e e e e e e b e e e e e e b e e e e e b e e e e e d 3 e 3 b b b b b b b b 3 c b b b b b b b b b d e 3 e 3 c 8 8 8 8 8 8 8 8 8 8 8 8 
e b e e e e e b e e e e e e d 4 4 4 b b b b b b b b 4 c b b b b b b b b b d 4 4 4 4 c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c 4 4 4 4 4 b b b b b b b b 4 c b b b b b b b b b d 4 4 4 d e e e b e e e e e e b e e e e e e b e e e e e b e e e e e d 3 3 3 b b b b b b b b 3 c b b b b b b b b b d 3 3 3 3 c 8 8 8 8 8 8 8 8 8 8 8 8 
e b e e e e e b e e e e e e d 4 e 4 b b b b b b b b 4 c b b b b b b b b b d e 4 e 4 c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c 4 e 4 e 4 b b b b b b b b 4 c b b b b b b b b b d e 4 e d e e e b e e e e e e b e e e e e e b e e e e e b e e e e e d 3 e 3 b b b b b b b b 3 c b b b b b b b b b d e 3 e 3 c 8 8 8 8 8 8 8 8 8 8 8 8 
e b e e e e e b e e e e e e d 4 4 4 b b b b b b b b 4 c b b b b b b b b b d 4 4 4 4 c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c 4 4 4 4 4 b b b b b b b b 4 c b b b b b b b b b d 4 4 4 d e e e b e e e e e e b e e e e e e b e e e e e b e e e e e d 3 3 3 b b b b b b b b 3 c b b b b b b b b b d 3 3 3 3 c 8 8 8 8 8 8 8 8 8 8 8 8 
e b e e e e e b e e e e e e d 4 e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d e 4 e 4 c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c 4 e 4 e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d e 4 e d e e e b e e e e e e b e e e e e e b e e e e e b e e e e e d 3 e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d e 3 e 3 c 8 8 8 8 8 8 8 8 8 8 8 8 
e b e e e e e b e e e e e e d 4 4 4 c c c c c c c c 4 c c c c c c c c c c d 4 4 4 4 c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c 4 4 4 4 4 c c c c c c c c 4 c c c c c c c c c c d 4 4 4 d e e e b e e e e e e b e e e e e e b e e e e e b e e e e e d 3 3 3 c c c c c c c c 3 c c c c c c c c c c d 3 3 3 3 c 8 8 8 8 8 8 8 8 8 8 8 8 
e b e e e e e b e e e e e e d 4 e 4 b b b b b b b b 4 c b b b b b b b b b d e 4 e 4 c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c 4 e 4 e 4 b b b b b b b b 4 c b b b b b b b b b d e 4 e d e e e b e e e e e e b e e e e e e b e e e e e b e e e e e d 3 e 3 b b b b b b b b 3 c b b b b b b b b b d e 3 e 3 c 8 8 8 8 8 8 8 8 8 8 8 8 
e b e e e e e b e e e e e e d 4 4 4 b b b b b b b b 4 c b b b b b b b b b d 4 4 4 4 c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c 4 4 4 4 4 b b b b b b b b 4 c b b b b b b b b b d 4 4 4 d e e e b e e e e e e b e e e e e e b e e e e e b e e e e e d 3 3 3 b b b b b b b b 3 c b b b b b b b b b d 3 3 3 3 c 8 8 8 8 8 8 8 8 8 8 8 8 
e b e e e e e b e e e e e e d 4 e 4 b b b b b b b b 4 c b b b b b b b b b d e 4 e 4 c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c 4 e 4 e 4 b b b b b b b b 4 c b b b b b b b b b d e 4 e d e e e b e e e e e e b e e e e e e b e e e e e b e e e e e d 3 e 3 b b b b b b b b 3 c b b b b b b b b b d e 3 e 3 c 8 8 8 8 8 8 8 8 8 8 8 8 
e b e e e e e b e e e e e e d 4 4 4 b b b b b b b b 4 c b b b b b b b b b d 4 4 4 4 c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c 4 4 4 4 4 b b b b b b b b 4 c b b b b b b b b b d 4 4 4 d e e e b e e e e e e b e e e e e e b e e e e e b e e e e e d 3 3 3 b b b b b b b b 3 c b b b b b b b b b d 3 3 3 3 c 8 8 8 8 8 8 8 8 8 8 8 8 
e b e e e e e b e e e e e e d 4 e 4 b b b b b b b b 4 c b b b b b b b b b d e 4 e 4 c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c 4 e 4 e 4 b b b b b b b b 4 c b b b b b b b b b d e 4 e d e e e b e e e e e e b e e e e e e b e e e e e b e e e e e d 3 e 3 b b b b b b b b 3 c b b b b b b b b b d e 3 e 3 c 8 8 8 8 8 8 8 8 8 8 8 8 
e b e e e e e b e e e e e e d 4 4 4 b b b b b b b b 4 c b b b b b b b b b d 4 4 4 4 c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c 4 4 4 4 4 b b b b b b b b 4 c b b b b b b b b b d 4 4 4 d e e e b e e e f f f f f f f e e e b e e e e e b e e e e e d 3 3 3 b b b b b b b b 3 c b b b b b b b b b d 3 3 3 3 c 8 8 8 8 8 8 8 8 8 8 8 8 
e b e f f f f f f f e e e e d 4 e 4 d d d d d d d d d d d d d d d d d d d d e 4 e 4 c 2 2 2 2 2 2 2 2 2 2 2 2 5 5 2 2 2 c 4 e 4 e 4 d d d d d d d d d d d d d d d d d d d d e 4 e d e e e b e e f f f f f f f f f e e b e e e e e b e e e e e d 3 e 3 d d d d d d d d d d d d d d d d d d d d e 3 e 3 c 8 8 8 8 8 8 8 8 8 8 8 8 
e b f f f f f f f f f e 6 6 d 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 c 2 2 2 2 2 2 2 2 2 2 2 2 5 5 2 2 2 c 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d e e 6 b e e 6 f f f f f f f 6 e e b e e e e e b e e 6 e e d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 c 8 8 8 8 8 8 8 8 8 8 8 8 
c c 6 f f f f f f f 6 c 6 6 d 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e d c 6 6 c c c 6 f f f f f f f 6 c c c c 6 6 6 c c c c 6 c c d 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 c 8 8 8 8 8 8 8 8 8 8 8 8 
7 c 6 f f f f f f f 6 c 6 7 d e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 d 7 7 6 7 7 c 6 f f f f f f f 6 c 7 7 6 6 6 6 7 6 6 6 6 7 7 d e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e c 8 8 8 8 8 8 8 8 8 8 8 8 
6 c 6 f f f f f f f 6 c 7 7 d 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e d 7 7 7 7 6 c c 6 6 6 6 6 6 6 c c 7 6 6 6 6 6 6 6 7 7 7 6 6 d 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 c 8 8 8 8 8 8 8 8 8 8 8 8 
6 c c 6 6 6 6 6 6 6 c c 7 7 d e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 d 7 7 6 7 6 c 6 c c c c c c c 6 c 7 7 6 7 6 7 6 7 7 6 7 6 6 d e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e c 8 8 8 8 8 8 8 8 8 8 8 8 
7 c 6 c c c c c c c 6 c 6 7 d 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e d 7 7 6 7 7 7 6 c 6 6 6 6 6 c 6 6 6 6 7 6 6 6 6 6 7 7 7 6 7 d 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 c 8 8 8 8 8 8 8 8 8 8 8 8 
6 7 6 c 6 6 6 6 6 c 6 7 7 6 d e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 d 6 7 6 7 7 7 6 c 6 6 6 6 6 c 6 6 6 7 7 7 6 7 6 7 7 7 6 7 7 d e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e c 8 8 8 8 8 8 8 8 8 8 8 8 
7 7 6 c 6 6 6 6 6 c 6 6 7 7 d 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 c 2 2 2 2 2 2 2 2 2 2 2 c c c c c c c c c c c c c c c 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e d 7 7 7 7 7 6 6 c 6 6 6 6 6 c 6 7 6 7 7 7 6 7 6 7 6 7 6 6 6 d 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 c 8 8 8 8 8 8 8 8 8 8 8 8 
6 7 6 c 6 6 6 6 6 c 6 7 7 6 d e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e c 2 2 2 2 2 2 2 2 2 2 c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 d 7 7 7 7 7 6 6 c 6 6 6 6 6 c 6 7 6 7 6 6 6 6 6 7 6 7 6 7 6 d e 3 e 3 e 3 e 3 e 3 e 3 e 3 e 3 c c c c c c c c c c c c c c c 8 8 8 8 8 8 8 8 8 
7 7 6 c 6 6 6 6 6 c 6 7 7 7 d e e e e e e e e e e e e e e e e e e e e e e e e e e e c 2 2 2 2 2 2 2 2 2 2 c 8 f f f f f f f f f f f f f 8 c e e e e e e e e e e e e e e e e e e e d 7 7 6 7 7 7 6 6 6 c 6 c 6 6 6 6 6 6 6 7 6 7 7 c c c c c c c c c c c c c c c e e e e e e e c a a a a a a a a a a a a a a a c 8 8 8 8 8 8 8 8 
7 7 6 6 6 c 6 c 6 6 6 7 7 6 d e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e c 2 2 2 2 2 2 2 2 2 c 8 8 f f f f f f f f f f f f f 8 8 c e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 d 7 7 7 7 6 6 c 6 6 c 6 c 6 6 c 7 6 7 6 6 6 6 c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 3 e 3 e 3 e c a f f f f f f f f f f f f f a c 8 8 8 8 8 8 8 8 
6 7 c 6 6 c 6 c 6 6 c 7 7 7 d e e e e e e c c c c c c c c c c c c c c c e e e e e e c 2 2 2 2 2 2 2 2 2 c 8 f f f f f f f f f f f f f f f 8 c e e e e e e e e e e e e e e e e e e d 6 7 7 6 7 7 c 6 6 c 6 c 6 6 c 7 6 6 6 6 6 7 c 8 f f f f f f f f f f f f f 8 c e e e e e c a a f f f f f f f f f f f f f a a c 8 8 8 8 8 8 8 
7 7 c 6 6 c 6 c 6 6 c 7 7 7 d e 4 e 4 e c a a a a a a a a a a a a a a a c e 4 e 4 d d d d d d d d d d c 8 8 f f f f f f f f f f f f f f f 8 8 c 4 e 4 e 4 e 4 e 4 e 4 e 4 7 4 e 4 d 7 7 7 7 6 6 7 c c c c c c c 7 6 6 6 7 6 6 c 8 8 f f f f f f f f f f f f f 8 8 c e 3 e 3 c a f f f f f f f f f f f f f f f a c d d d d d d d 
6 7 7 c c c c c c c 7 7 7 6 d d d d d d c a f f f f f f f f f f f f f a c d d d d d d d d d d d d d d c 8 8 f f f f f f f f f f f f f f f 8 8 c d d d d d d d d d d d d 7 d d d d d 6 7 6 7 7 7 7 7 6 6 6 7 7 6 6 7 6 6 6 6 6 c 8 f f f f f f f f f f f f f f f 8 c d d d c a a f f f f f f f f f f f f f f f a a c d d d d d d 
7 6 7 7 6 6 7 6 6 7 6 6 6 e e e e e e c a a f f f f f f f f f f f f f a a c e e e e e e e e e e e e e c 8 8 8 f f f f f f f f f f f f f 8 8 8 c e e e e e e e e e e e e 7 e e e e e e 6 6 7 7 7 6 7 6 7 7 7 7 6 7 6 6 6 6 6 c 8 8 f f f f f f f f f f f f f f f 8 8 c e e c a a f f f f f f f f f f f f f f f a a c e e e e e e 
7 6 6 6 7 7 7 7 7 7 7 7 7 e e e e e e c a f f f f f f f f f f f f f f f a c e e e e e e e e e e e e e c 8 c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 8 c e e e e e e e e e e e e 7 e e e 7 e e 7 7 7 7 6 7 7 7 7 6 6 7 7 6 6 7 6 6 6 c 8 8 f f f f f f f f f f f f f f f 8 8 c e e c a a a f f f f f f f f f f f f f a a a c e e e e e e 
7 6 6 7 7 7 7 7 7 6 7 7 7 e e e e 7 c a a f f f f f f f f f f f f f f f a a c e e e e e e e e e e e e c 8 c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 8 c e e 7 e e e e e e e e e 7 e e e 7 e e 7 6 7 7 7 7 6 6 7 7 7 6 6 7 7 7 6 6 6 c 8 8 8 f f f f f f f f f f f f f 8 8 8 c e e c a c a a a a a a a a a a a a a a a c a c e e e e e e 
7 6 6 7 7 7 7 7 6 6 6 7 7 e e e e 7 c a a f f f f f f f f f f f f f f f a a c e e e e e e e e e e e e c 8 c c c 8 8 8 8 8 8 8 8 8 8 8 c c c 8 c e e 7 e e e 7 e e e e e 7 e e e 7 e e 7 7 6 7 6 7 6 7 7 7 7 7 7 6 6 6 7 6 6 c 8 c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 8 c 7 e c a c a a a a a a a a a a a a a a a c a c e e e e e e 
7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 c a a a f f f f f f f f f f f f f a a a c 7 7 b b b b b b b b b b c 8 8 c c c c c c c c c c c c c c c 8 8 c 7 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 6 7 6 7 6 6 6 7 7 7 7 7 6 6 6 6 7 6 7 7 c 8 c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 8 c 6 7 c a c c c a a a a a a a a a a a c c c a c b b b b b b 
6 6 6 7 7 7 7 7 6 7 6 7 7 6 7 7 6 7 c a c a a a a a a a a a a a a a a a c a c 7 7 b b d d d d d d d d d c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 7 7 7 7 6 7 7 7 7 7 7 7 7 7 6 7 7 7 7 6 6 7 6 6 7 7 7 6 7 7 7 6 7 7 7 7 7 6 6 c 8 c c c 8 8 8 8 8 8 8 8 8 8 8 c c c 8 c 7 6 c a a c c c c c c c c c c c c c c c a a c d d d d d d 
6 6 7 7 6 6 7 7 7 7 7 7 6 7 7 7 7 7 c a c a a a a a a a a a a a a a a a c a c 6 7 d d d d d d d d d d d c 8 8 c 8 8 8 8 8 8 8 8 8 8 8 c 8 8 c 7 7 7 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 6 6 7 7 c 8 8 c c c c c c c c c c c c c c c 8 8 c 7 7 7 c a a a a a a a a a a a a a a a a a c d d d d d d d 
7 6 7 7 7 7 7 7 6 7 7 6 7 6 6 6 7 7 c a c c c a a a a a a a a a a a c c c a c 7 d 7 d d d d d d d d d d c 8 8 c 8 8 c 8 8 8 8 8 c 8 8 c 8 8 c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 6 7 7 6 6 7 7 6 7 7 7 6 7 6 7 6 7 7 6 c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 6 7 7 7 c a a c a a a a a a a a a a a c a a c d d d d d d d 
6 7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 7 7 c a a c c c c c c c c c c c c c c c a a c 7 d d d d d d d d d d d d c 8 8 c 8 8 c 8 8 8 8 8 c 8 8 c 8 8 c 7 7 6 7 6 7 7 7 7 6 7 7 7 6 7 6 7 7 7 6 7 6 7 7 7 7 6 6 7 6 7 7 7 7 7 7 6 7 7 7 c 8 8 c 8 8 8 8 8 8 8 8 8 8 8 c 8 8 c 6 7 7 6 c a a c a a c a a a a a c a a c a a c d d d d d d d 
7 7 7 7 7 7 7 7 7 6 7 7 6 7 7 7 7 7 7 c a a a a a a a a a a a a a a a a a c 6 7 d d d d d d d d d d d d c 8 8 c 8 8 c 8 8 8 8 8 c 8 8 c 8 8 c 7 7 7 7 6 7 7 7 7 7 7 6 7 7 6 6 6 6 7 7 7 7 7 6 7 6 6 7 7 7 6 7 6 7 7 6 7 7 7 7 c 8 8 c 8 8 c 8 8 8 8 8 c 8 8 c 8 8 c 7 6 7 7 c a a c a a c a a a a a c a a c a a c d d d d d d d 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 c a a c a a a a a a a a a a a c a a c 7 6 d d d d d d d d d d d d c 8 8 c 8 8 c 8 8 8 8 8 c 8 8 c 8 8 c 7 7 7 6 7 7 6 6 7 7 7 7 7 7 7 6 7 6 7 7 7 7 6 7 6 7 7 6 6 7 7 7 7 7 6 7 6 6 7 6 c 8 8 c 8 8 c 8 8 8 8 8 c 8 8 c 8 8 c 7 7 7 7 c a a c a a c a a a a a c a a c a a c d d d d d d d 
7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 c a a c a a c a a a a a c a a c a a c 7 7 d d d d d d d d d d d d c 8 8 c 8 8 c 8 8 8 8 8 c 8 8 c 8 8 c 7 7 7 7 7 6 6 7 7 7 6 7 7 7 6 7 7 7 6 7 7 6 7 7 7 7 7 7 7 7 7 6 7 7 7 6 6 7 7 7 c 8 8 c 8 8 c 8 8 8 8 8 c 8 8 c 8 8 c 7 7 6 7 c a a c a a c a a a a a c a a c a a c d d d d d d d 
6 7 7 7 7 7 7 7 6 7 7 7 7 7 6 7 7 6 7 c a a c a a c a a a a a c a a c a a c 7 7 d d d d d d d d d d d d c 8 8 8 c 8 c 8 8 8 8 8 c 8 c 8 8 8 c 7 7 7 6 7 6 7 6 6 7 7 7 6 7 7 7 7 7 7 6 7 7 6 7 7 7 7 6 6 7 7 7 6 7 7 7 7 7 7 7 c 8 8 c 8 8 c 8 8 8 8 8 c 8 8 c 8 8 c 7 7 7 7 c a a c a a c a a a a a c a a c a a c d d d d d d d 
6 6 7 7 7 7 7 6 7 6 7 6 7 7 7 7 7 7 7 c a a c a a c a a a a a c a a c a a c 7 d d d d d d d d d d d d d c 8 8 8 c 8 8 c 8 8 8 c 8 8 c 8 8 8 c 7 7 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 6 7 7 7 6 7 6 7 7 6 7 7 7 7 7 7 c 8 8 c 8 8 c 8 8 8 8 8 c 8 8 c 8 8 c 6 7 7 7 c a a a c a c a a a a a c a c a a a c d d d d d d d 
7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 c a a c a a c a a a a a c a a c a a c 7 d d d b d d d b b d d d d c c 8 8 c 8 8 c 8 8 8 c 8 8 c 8 8 c c 7 7 6 7 7 7 7 6 7 7 7 7 7 7 7 7 6 7 6 7 6 6 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 c 8 8 8 c 8 c 8 8 8 8 8 c 8 c 8 8 8 c 7 7 7 7 c a a a c a a c a a a c a a c a a a c d d d d d d d 
7 7 7 7 7 6 6 7 7 6 7 7 7 6 6 7 7 7 6 c a a c a a c a a a a a c a a c a a c 7 b b b b b b b d d b b b b b c 8 8 c 8 8 c 8 8 8 c 8 8 c 8 8 c 7 7 6 7 7 6 7 7 7 7 6 7 7 7 7 6 7 7 6 7 6 7 7 7 7 7 6 7 6 7 7 7 7 6 7 7 7 7 7 7 6 c 8 8 8 c 8 8 c 8 8 8 c 8 8 c 8 8 8 c 7 7 6 7 c c a a c a a c a a a c a a c a a c c b d d d d d d 
7 7 7 7 7 7 7 6 6 6 7 6 7 7 6 6 7 7 7 c a a a c a c a a a a a c a c a a a c 7 d d d d d d d d d d d d d d c 8 8 c 8 8 c 8 8 8 c 8 8 c 8 8 c 7 6 7 7 7 7 6 7 7 7 6 6 7 6 7 7 7 7 6 6 7 6 7 6 7 7 6 7 7 6 7 7 7 7 7 6 7 6 7 7 7 c c 8 8 c 8 8 c 8 8 8 c 8 8 c 8 8 c c 7 6 7 7 6 c a a c a a c a a a c a a c a a c d b b b b b b b 
7 6 7 7 6 7 6 7 7 6 7 6 6 7 7 7 7 6 7 c a a a c a a c a a a c a a c a a a c 7 d 7 7 d d d d d d d d d d d c 8 8 c 8 8 c 8 8 8 c 8 8 c 8 8 c 7 7 6 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 6 6 7 7 6 7 6 7 7 6 7 7 6 7 6 7 6 7 7 7 7 7 c 8 8 c 8 8 c 8 8 8 c 8 8 c 8 8 c 6 7 7 7 7 7 c a a c a a c a a a c a a c a a c d d d d d d d d 
6 7 7 7 7 7 7 6 7 7 6 7 6 7 7 7 7 7 7 c c a a c a a c a a a c a a c a a c c d 7 7 7 d d d d d d d d d d d c 8 8 8 8 8 c 8 8 8 c 8 8 8 8 8 c 7 7 7 7 7 7 6 7 7 7 7 7 6 7 6 7 7 7 7 6 7 6 7 6 6 7 7 7 7 6 7 7 7 7 7 6 7 7 7 7 6 7 c 8 8 c 8 8 c 8 8 8 c 8 8 c 8 8 c 7 7 6 7 7 7 c a a c a a c a a a c a a c a a c d d d d d d d d 
7 7 7 7 7 7 7 7 7 7 6 7 6 7 6 6 7 7 7 7 c a a c a a c a a a c a a c a a c 7 d 7 7 d d d d d d d d d d d d d c c c c c c c c c c c c c c c 7 7 7 7 7 7 7 6 7 6 7 7 7 7 7 7 6 7 7 7 7 7 7 6 6 7 6 7 6 7 7 7 7 6 7 7 6 7 7 7 7 7 7 c 8 8 c 8 8 c 8 8 8 c 8 8 c 8 8 c 6 7 7 6 7 7 c a a a a a c a a a c a a a a a c d d d d d d d d 
7 6 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 6 7 c a a c a a c a a a c a a c a a c 7 d 7 7 d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 6 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 c 8 8 8 8 8 c 8 8 8 c 8 8 8 8 8 c 7 7 7 7 7 7 7 c c c c c c c c c c c c c c c d d d d d d d d d 
7 6 7 7 7 7 7 7 7 6 7 7 6 7 7 6 6 7 7 6 c a a c a a c a a a c a a c a a c 7 d 7 7 d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 6 7 6 7 7 7 7 7 c c c c c c c c c c c c c c c 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 6 6 d d d d d d d d d d d d 
7 7 7 7 7 7 7 7 6 6 7 6 7 6 7 7 7 7 7 6 c a a a a a c a a a c a a a a a c d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 6 6 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 6 6 7 7 7 7 6 7 6 7 7 7 7 6 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d 
7 6 7 7 7 7 6 7 7 7 7 7 7 6 7 7 7 7 6 7 7 c c c c c c c c c c c c c c c 7 d d d d d d d d d d d d d d d d d d d d 6 7 7 7 7 6 6 7 7 7 7 7 6 7 7 6 7 7 7 6 7 7 7 6 7 7 7 7 7 7 7 7 7 6 6 6 7 7 7 7 6 7 6 7 7 7 6 7 7 7 7 7 7 7 7 6 7 7 7 6 6 7 7 7 6 7 7 7 7 6 7 7 7 7 7 6 7 6 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d 
7 7 7 7 7 7 6 7 7 7 6 6 6 7 7 7 6 7 7 7 7 7 7 7 7 7 7 6 7 6 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 6 7 6 7 7 7 6 6 7 7 7 7 7 7 6 7 6 7 6 7 7 7 7 7 7 6 7 6 6 7 6 7 7 7 7 6 7 6 7 7 6 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 6 7 6 7 6 7 d d d d d d d d d d d d d 
7 6 7 7 6 7 6 7 6 6 6 6 7 7 7 7 6 7 7 7 7 6 7 6 6 6 7 6 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 6 7 7 7 7 6 6 7 7 7 7 7 7 6 7 7 6 7 7 7 7 6 7 6 7 7 7 7 7 6 6 7 7 7 7 6 7 7 6 7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 6 7 d d d d d d d d d d d d d 
7 7 7 7 7 6 6 7 6 7 6 7 6 7 7 7 6 7 7 7 7 6 7 6 7 7 6 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d 7 7 6 7 7 7 7 7 7 7 7 6 6 7 7 7 7 6 7 6 7 6 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 6 7 7 6 6 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d 
7 7 7 7 6 7 6 7 6 7 6 7 6 7 7 7 7 7 6 6 6 7 6 6 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 7 6 7 7 6 7 7 7 7 6 6 7 7 6 7 7 7 7 6 6 7 7 7 6 7 7 7 6 7 6 7 7 7 7 6 7 6 7 7 7 7 7 7 7 7 6 7 7 6 6 6 7 6 7 7 7 7 6 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 6 7 6 6 7 d d d d d d d d d d d d d 
7 7 6 6 6 7 7 6 6 7 7 7 7 7 6 6 7 7 7 6 6 6 6 7 7 6 7 7 6 7 7 6 6 6 7 d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 6 7 6 7 7 7 7 6 7 7 7 7 6 7 7 7 7 6 7 7 7 7 6 7 6 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 6 7 7 6 7 7 6 6 7 7 6 6 7 7 7 7 7 7 7 6 6 6 6 d d d d d d d d d d d d d 
7 6 7 6 6 6 6 6 6 7 7 6 7 6 7 7 7 6 6 7 7 7 7 7 6 7 7 7 7 7 7 6 6 6 7 d d d d d 7 7 d d d d d d d d d d d d d d 7 7 6 7 7 6 6 7 7 7 7 7 7 6 7 7 7 7 7 7 6 7 7 7 7 7 7 7 6 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 6 7 7 7 7 6 7 7 6 7 6 7 7 6 7 7 7 7 7 6 7 7 7 6 6 7 7 7 6 7 7 6 6 7 7 6 7 7 7 6 6 6 7 7 d d d d d d d b b d d b b 
7 6 7 6 6 7 6 6 6 6 7 6 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 6 7 6 7 7 b b b b b b b d b b b b b b b b b b b b b b 7 6 7 7 7 7 7 7 7 6 7 6 6 6 7 7 7 7 7 7 6 6 7 7 6 7 7 7 6 7 6 7 7 7 6 6 7 7 7 7 7 7 6 7 7 6 6 7 6 6 6 7 7 7 6 7 6 7 7 7 7 7 7 7 7 6 6 7 7 7 6 6 6 7 7 7 6 7 7 7 7 7 6 7 6 6 6 7 b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 d d d d d d d d d b b d d b b b d d d d d d d d d d b b d d d d d d d b d 6 7 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 6 7 7 7 d d d d d d d d d d d d d d d d 7 6 7 7 7 6 6 7 7 7 d d d d d d d d d d d d d d 7 7 b b d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b d b d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 7 d b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b d d d d d d d d d d d d d d d d d d 
b b d b b b b b d d d d d d d d d d d d d d d b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b d d d d d d d d d d d d d d d b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
`)
    nightMode = false
    raccoon.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    cat.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    flashlight.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`)
    info.setScore(0)
    info.stopCountdown()
    info.setLife(3)
    pause(500)
    game.splash("It's too light out!", "Go somewhere dark, then press A twice.")
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (raccoon) {
        dayStart()
    }
})
function raccoonSetup () {
    raccoon = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Friend)
    raccoon.z = 0
}
function playerSetup () {
    flashlight = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    controller.moveSprite(flashlight)
    flashlight.z = 3
    flashlight.setFlag(SpriteFlag.StayInScreen, true)
}
// for testing, these will be light sensors in the
// real game
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (raccoon) {
        if (controller.lightLevel() <= 15 || debug) {
            nightStart()
            levelStarted = true
        } else {
            dayStart()
            levelStarted = false
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (nightMode) {
        music.playSound("!2320,500^1440")
otherSprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . 4 4 . . . . . . . . . 4 4 . . . . . . 
. . . . . 4 4 4 . . . . . . . 4 4 4 . . . 4 4 . 
. . . . . 4 b 4 4 . . . . . 4 4 b 4 . . 4 . 4 . 
. . . . . 4 b b 4 4 4 4 4 4 4 b b 4 . . 4 . . . 
. . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 4 . . . 
. . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 4 . . . 
. . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 4 . . 
. . . 4 4 4 1 1 4 4 4 4 4 4 4 1 1 4 4 4 . 4 . . 
. . . 4 4 4 1 1 f 1 4 4 4 1 f 1 1 4 4 4 . 4 . . 
. . . . 4 4 4 1 f 1 4 4 4 1 f 1 4 4 4 . . 4 . . 
. . . . 4 4 4 4 4 1 4 e 4 1 4 4 4 4 4 . 4 4 . . 
. . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 4 . . . 
. . . . . . . 4 4 4 4 4 4 4 4 4 . . . . 4 . . . 
. . . . . . . . . 4 4 4 4 4 . . . . . . 4 . . . 
. . . . . . . . . . 2 2 2 . . . . . . . 4 . . . 
. . . . . . . . . 4 4 4 4 4 . . . . . . 4 . . . 
. . . . . . . . 4 4 4 4 4 4 4 . . . . 4 4 . . . 
. . . . . . . . 4 4 4 4 4 4 4 . . . . 4 . . . . 
. . . . . . . . 4 4 4 4 4 4 4 . . 4 4 4 . . . . 
. . . . . . . . 4 4 4 4 4 4 4 . . 4 4 4 . . . . 
`)
        otherSprite.say("mrrowr")
        sprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(300)
        otherSprite.destroy()
        info.changeScoreBy(5)
        sprite.setImage(img`
. . . . . . . . . . . . 5 . 5 . 5 . 5 . . . . . . . . . . . . . 
. . . . . . . . . . . 5 . . . 5 . . . 5 . . . . . . . . . . . . 
. . . . . . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . . . . . 
. . . . . . . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . . . . . . 
. . . . . . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . . . . . 
. . . . . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . . 
. . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 
. . . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . . 
. . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . . . 
. . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . . 
. . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 
. 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . . 
5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 
. . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 
5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 
. 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 
5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 
. . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 
5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 
. 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 
. . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 
. . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . . 
. . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 
. . . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . . 
. . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . . . 
. . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . . 
. . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . . . . . 
. . . . . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . . . . . . 
. . . . . . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . . . . . . . 
. . . . . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . . . . . . 
. . . . . . . . . . . . 5 . . . 5 . . . 5 . . . . . . . . . . . 
. . . . . . . . . . . . . 5 . 5 . 5 . 5 . . . . . . . . . . . . 
`)
        sprite.setPosition(79, 0)
        raccoon.destroy()
        resetCharacters()
    }
})
function nightStart () {
    scene.setBackgroundImage(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f c f c f c f c f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f c f c f c f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f c f c f c f c f c f c f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f c f c f c f c f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f c f c f c f c f c f c f c f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f c f c f c f c f c f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f c f c f c f c f c f c f c f c f f f f f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f c f c f c f c f c f c f c f f f f f c f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f c f c f c f c f c f c f c f c f c f f f c f c f c f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f c f c f c f c f c f c f c f c f f f c f c f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f c f c f c f c f c f c f c f c f c f c f c f c f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f c f c f c f c f c f c f c f c f c f c f c f c f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f f f f f f f f f f f f f f c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c f 
f f f f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f f f f f f f f f f f f f c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c 
f f f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f f f f f f f f f f c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c 
f f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f f f f f f f f f c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c 
f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f f f f f f c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c 
f f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c 
f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c 
f f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c 
f f f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c 
f f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c 
f f f c f c f c f c f c f c f c f c f c f c f c f c f c f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f c f c f c f c f c f c f c f c f c f c f c f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c 
f f f f c f c f c f c f c f c f c f c f c f c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c 
f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f c f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f c f c f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f c f c f c f c f c f c f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f c f c f c f c f c f c f c f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f c f c f c f c f c f c f c f c f c f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f c f c f c f c f c f c f c f c f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
f c f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f c f c f c f c f c f c f c f c f c f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c f c f c f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f c f c f c f c f c f c f c f c f c f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
f c f c f c f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f c f c f c f c f c f c f c f c f c f c f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c f c f c f c f c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f c f c f c f c f c f c f c f c f c f c f c f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
f c f c f c f c f c f f f f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f f f f c f c f c f c f c f c f c f c f c f c f c f c f c f f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f 
c f c f c f c f c f c f f f f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f f c f c f c f c f c f c f c f c f c f c f c f c f c f c c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c 
f c f c f c f c f c f c f f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f f f f c f c f c f c f c f c f c f c f c f c f c f c f c f f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f 
c f c f c f c f c f c f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f c f c f c f c f c f c f c f c f c f c f c f c f c f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
f c f c f c f c f c f c f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f c f c f c f c f c f c f c f c f c f c f c f c f c f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c f c f c f c f c f c f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f c f c f c f c f c f c f c f c f c f c f c f c f c f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
f c f c f c f c f c f c f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f c f c f c f c f c f c f c f c f c f c f c f c f c f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c f c f c f c f c f c f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f c f c f c f c f c f c f c f c f c f c f c f c f c f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
f c f c f c f c f c f c f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f c f c f c f c f c f c f c f c f c f c f c f c f c f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c f c f c f c f c f c f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f c f c f c f c f c f c f c f c f c f c f c f c f c f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
f c f c f c f c f c f c f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f c f c f c f c f c f c f c f c f c f c f c f c f c f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c f c f f f c f c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f c f f f f f c f f f f f c f c f f f c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
f c f f f f f c f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f c f f f f f f c f f f f f f c f f f f f c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
f c f f f f f c f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f c f f f f f f c f f f f f f c f f f f f c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
f c f f f f f c f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f c f f f f f f c f f f f f f c f f f f f c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
f c f f f f f c f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f c f f f f f f c f f f f f f c f f f f f c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
f c f f f f f c f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f c f f f f f f c f f f f f f c f f f f f c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c 
f c f f f f f c f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f c f f f f f f c f f f f f f c f f f f f c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c 
f c f f f f f c f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f c f f f f f f c f f f f f f c f f f f f c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c 
f c f f f f f c f f f f f f c c c c 5 5 5 5 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 c c c c c b c c c c c c c c c c c c c c c c c b c c c c c 5 5 5 5 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 c c c c c f f f c f f f f f f c f f f f f f c f f f f f c f f f f f c c c c 5 5 5 5 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 c c c c c b c c c c c c c c c c c c 
f c f f f f f c f f f f f f c c c c 5 5 5 5 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 c c c c c b c c c c c c c c c c c c c c c c c b c c c c c 5 5 5 5 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 c c c c c f f f c f f f f f f c f f f f f f c f f f f f c f f f f f c c c c 5 5 5 5 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 c c c c c b c c c c c c c c c c c c 
f c f f f f f c f f f f f f c c c c 5 5 5 5 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 c c c c c b c c c c c c c c c c c c c c c c c b c c c c c 5 5 5 5 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 c c c c c f f f c f f f f f f c f f f f f f c f f f f f c f f f f f c c c c 5 5 5 5 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 c c c c c b c c c c c c c c c c c c 
f c f f f f f c f f f f f f c c c c 5 5 5 5 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 c c c c c b c c c c c c c c c c c c c c c c c b c c c c c 5 5 5 5 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 c c c c c f f f c f f f f f f c f f f f f f c f f f f f c f f f f f c c c c 5 5 5 5 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 c c c c c b c c c c c c c c c c c c 
f c f f f f f c f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f c f f f f f f c f f f f f f c f f f f f c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c 
f c f f f f f c f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f c f f f f f f c f f f f f f c f f f f f c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c 
f c f f f f f c f f f f f f c c c c 5 5 5 5 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 c c c c c b c c c c c c c c c c c c c c c c c b c c c c c 5 5 5 5 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 c c c c c f f f c f f f f f f c f f f f f f c f f f f f c f f f f f c c c c 5 5 5 5 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 c c c c c b c c c c c c c c c c c c 
f c f f f f f c f f f f f f c c c c 5 5 5 5 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 c c c c c b c c c c c c c c c c c c c c c c c b c c c c c 5 5 5 5 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 c c c c c f f f c f f f f f f c f f f f f f c f f f f f c f f f f f c c c c 5 5 5 5 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 c c c c c b c c c c c c c c c c c c 
f c f f f f f c f f f f f f c c c c 5 5 5 5 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 c c c c c b c c c c c c c c c c c c c c c c c b c c c c c 5 5 5 5 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 c c c c c f f f c f f f f f f c f f f f f f c f f f f f c f f f f f c c c c 5 5 5 5 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 c c c c c b c c c c c c c c c c c c 
f c f f f f f c f f f f f f c c c c 5 5 5 5 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 c c c c c b c c c c c c c c c c c c c c c c c b c c c c c 5 5 5 5 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 c c c c c f f f c f f f f f f c f f f f f f c f f f f f c f f f f f c c c c 5 5 5 5 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 c c c c c b c c c c c c c c c c c c 
f c f f f f f c f f f f f f c c c c 5 5 5 5 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 c c c c c b c c c c c c c c c c c c c c c c c b c c c c c 5 5 5 5 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 c c c c c f f f c f f f c c c c c c c f f f c f f f f f c f f f f f c c c c 5 5 5 5 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 c c c c c b c c c c c c c c c c c c 
f c f c c c c c c c f f f f c c c c 5 5 5 5 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 c c c c c b c c c c c c c c c c c c c c c c c b c c c c c 5 5 5 5 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 c c c c c f f f c f f c f f f f f f f c f f c f f f f f c f f f f f c c c c 5 5 5 5 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 c c c c c b c c c c c c c c c c c c 
f c c f f f f f f f c f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f c f c f f f f f f f f f c f c f f f f f c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c 
f c f f f f f f f f f c f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f c f c 6 f f f f f f f 6 c f c f f f f f c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c 
c c 6 f f f f f f f 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 f f f f f f f 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c 
f c 6 f f f f f f f 6 c f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f c 6 f f f f f f f 6 c f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c 
f c 6 f f f f f f f 6 c f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f c c 6 6 6 6 6 6 6 c c f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c 
f c c 6 6 6 6 6 6 6 c c f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f c 6 c c c c c c c 6 c f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c 
f c 6 c c c c c c c 6 c f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f 6 c 6 6 6 6 6 c 6 f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c 
f f 6 c 6 6 6 6 6 c 6 f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f 6 c 6 6 6 6 6 c 6 f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c 
f f 6 c 6 6 6 6 6 c 6 f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f 6 c 6 6 6 6 6 c 6 f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c 
f f 6 c 6 6 6 6 6 c 6 f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c c c c c c c c c c c c c f f f f f f 6 c 6 6 6 6 6 c 6 f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
f f 6 c 6 6 6 6 6 c 6 f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c 8 f f f f f f f f f f f f f 8 c c c c c c c c c c c c c c c c c c c c c f f f f f f 6 6 6 c 6 c 6 6 6 f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a c c c c c c c c c 
f f 6 6 6 c 6 c 6 6 6 f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c 8 8 f f f f f f f f f f f f f 8 8 c c c c c c c c c c c c c c c c c c c c f f f f f f c 6 6 c 6 c 6 6 c f f f f f f f c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c a f f f f f f f f f f f f f a c c c c c c c c c 
f f c 6 6 c 6 c 6 6 c f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c 8 f f f f f f f f f f f f f f f 8 c c c c c c c c c c c c c c c c c c c c f f f f f f c 6 6 c 6 c 6 6 c f f f f f f f c 8 f f f f f f f f f f f f f 8 c c c c c c c a a f f f f f f f f f f f f f a a c c c c c c c c 
f f c 6 6 c 6 c 6 6 c f f f c c c c c c c a a a a a a a a a a a a a a a c c c c c c b 5 5 5 5 5 5 5 5 c 8 8 f f f f f f f f f f f f f f f 8 8 c c c c c c c c c c c c c c c c c c c f f f f f f f c c c c c c c f f f f f f f c 8 8 f f f f f f f f f f f f f 8 8 c c c c c c a f f f f f f f f f f f f f f f a c 5 5 5 5 5 5 5 
f f f c c c c c c c f f f f c c c c c c c a f f f f f f f f f f f f f a c c c c c c c c c c c c c c c c 8 8 f f f f f f f f f f f f f f f 8 8 c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f c 8 f f f f f f f f f f f f f f f 8 c c c c c a a f f f f f f f f f f f f f f f a a c c c c c c c 
f f f f f f f f f f f f f c c c c c c c a a f f f f f f f f f f f f f a a c c c c c c c c c c c c c c c 8 8 8 f f f f f f f f f f f f f 8 8 8 c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f c 8 8 f f f f f f f f f f f f f f f 8 8 c c c c a a f f f f f f f f f f f f f f f a a c c c c c c c 
f f f f f f f f f f f f f c c c c c c c a f f f f f f f f f f f f f f f a c c c c c c c c c c c c c c c 8 c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 8 c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f c 8 8 f f f f f f f f f f f f f f f 8 8 c c c c a a a f f f f f f f f f f f f f a a a c c c c c c c 
f f f f f f f f f f f f f c c c c c c a a f f f f f f f f f f f f f f f a a c c c c c c c c c c c c c c 8 c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 8 c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f c 8 8 8 f f f f f f f f f f f f f 8 8 8 c c c c a c a a a a a a a a a a a a a a a c a c c c c c c c 
f f f f f f f f f f f f f c c c c c c a a f f f f f f f f f f f f f f f a a c c c c c c c c c c c c c c 8 c c c 8 8 8 8 8 8 8 8 8 8 8 c c c 8 c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f c 8 c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 8 c c c c a c a a a a a a a a a a a a a a a c a c c c c c c c 
f f f f f f f f f f f f f f f f f f c a a a f f f f f f f f f f f f f a a a c f f c f c f c f c f c f c 8 8 c c c c c c c c c c c c c c c 8 8 c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c 8 c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 8 c f f c a c c c a a a a a a a a a a a c c c a c f c f c f c 
f f f f f f f f f f f f f f f f f f c a c a a a a a a a a a a a a a a a c a c f f f c a f a f a f a f a c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c 8 c c c 8 8 8 8 8 8 8 8 8 8 8 c c c 8 c f f c a a c c c c c c c c c c c c c c c a a c f a f a f a 
f f f f f f f f f f f f f f f f f f c a c a a a a a a a a a a a a a a a c a c f f f a f a f a f a f a f c 8 8 c 8 8 8 8 8 8 8 8 8 8 8 c 8 8 c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c 8 8 c c c c c c c c c c c c c c c 8 8 c f f f c a a a a a a a a a a a a a a a a a c f a f a f a f 
f f f f f f f f f f f f f f f f f f c a c c c a a a a a a a a a a a c c c a c f f f f a f a f a f a f a c 8 8 c 8 8 c 8 8 8 8 8 c 8 8 c 8 8 c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c f f f f c a a c a a a a a a a a a a a c a a c a f a f a f a 
f f f f f f f f f f f f f f f f f f c a a c c c c c c c c c c c c c c c a a c f a f a f a f a f a f a f c 8 8 c 8 8 c 8 8 8 8 8 c 8 8 c 8 8 c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c 8 8 c 8 8 8 8 8 8 8 8 8 8 8 c 8 8 c f f f f c a a c a a c a a a a a c a a c a a c f a f a f a f 
f f f f f f f f f f f f f f f f f f f c a a a a a a a a a a a a a a a a a c f f f a f a f a f a f a f a c 8 8 c 8 8 c 8 8 8 8 8 c 8 8 c 8 8 c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c 8 8 c 8 8 c 8 8 8 8 8 c 8 8 c 8 8 c f f f f c a a c a a c a a a a a c a a c a a c a f a f a f a 
f f f f f f f f f f f f f f f f f f f c a a c a a a a a a a a a a a c a a c f f a f a f a f a f a f a f c 8 8 c 8 8 c 8 8 8 8 8 c 8 8 c 8 8 c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c 8 8 c 8 8 c 8 8 8 8 8 c 8 8 c 8 8 c f f f f c a a c a a c a a a a a c a a c a a c f a f a f a f 
f f f f f f f f f f f f f f f f f f f c a a c a a c a a a a a c a a c a a c f f f a f a f a f a f a f a c 8 8 c 8 8 c 8 8 8 8 8 c 8 8 c 8 8 c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c 8 8 c 8 8 c 8 8 8 8 8 c 8 8 c 8 8 c f f f f c a a c a a c a a a a a c a a c a a c a f a f a f a 
f f f f f f f f f f f f f f f f f f f c a a c a a c a a a a a c a a c a a c f f a f a f a f a f a f a f c 8 8 8 c 8 c 8 8 8 8 8 c 8 c 8 8 8 c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c 8 8 c 8 8 c 8 8 8 8 8 c 8 8 c 8 8 c f f f f c a a c a a c a a a a a c a a c a a c f a f a f a f 
f f f f f f f f f f f f f f f f f f f c a a c a a c a a a a a c a a c a a c f a f a f a f a f a f a f a c 8 8 8 c 8 8 c 8 8 8 c 8 8 c 8 8 8 c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c 8 8 c 8 8 c 8 8 8 8 8 c 8 8 c 8 8 c f f f f c a a a c a c a a a a a c a c a a a c a f a f a f a 
f f f f f f f f f f f f f f f f f f f c a a c a a c a a a a a c a a c a a c f f a f f f a f f c a f a f c c 8 8 c 8 8 c 8 8 8 c 8 8 c 8 8 c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c 8 8 8 c 8 c 8 8 8 8 8 c 8 c 8 8 8 c f f f f c a a a c a a c a a a c a a c a a a c f a f a f a f 
f f f f f f f f f f f f f f f f f f f c a a c a a c a a a a a c a a c a a c f f c f c f c f f a c f c f c c 8 8 c 8 8 c 8 8 8 c 8 8 c 8 8 c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c 8 8 8 c 8 8 c 8 8 8 c 8 8 c 8 8 8 c f f f f c c a a c a a c a a a c a a c a a c c f f a f a f a 
f f f f f f f f f f f f f f f f f f f c a a a c a c a a a a a c a c a a a c f f a f a f a f a f a f a f a c 8 8 c 8 8 c 8 8 8 c 8 8 c 8 8 c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c 8 8 c 8 8 c 8 8 8 c 8 8 c 8 8 c c f f f f f c a a c a a c a a a c a a c a a c a c f c f c f c 
f f f f f f f f f f f f f f f f f f f c a a a c a a c a a a c a a c a a a c f a f f f a f a f a f a f a f c 8 8 c 8 8 c 8 8 8 c 8 8 c 8 8 c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c 8 8 c 8 8 c 8 8 8 c 8 8 c 8 8 c f f f f f f c a a c a a c a a a c a a c a a c f a f a f a f a 
f f f f f f f f f f f f f f f f f f f c c a a c a a c a a a c a a c a a c c a f f f a f a f a f a f a f a c 8 8 8 8 8 c 8 8 8 c 8 8 8 8 8 c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c 8 8 c 8 8 c 8 8 8 c 8 8 c 8 8 c f f f f f f c a a c a a c a a a c a a c a a c a f a f a f a f 
f f f f f f f f f f f f f f f f f f f f c a a c a a c a a a c a a c a a c f f f f a f a f a f a f a f a f a c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c 8 8 c 8 8 c 8 8 8 c 8 8 c 8 8 c f f f f f f c a a a a a c a a a c a a a a a c f a f a f a f a 
f f f f f f f f f f f f f f f f f f f f c a a c a a c a a a c a a c a a c f a f f f a f a f a f a f a f a f a f a f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c 8 8 8 8 8 c 8 8 8 c 8 8 8 8 8 c f f f f f f f c c c c c c c c c c c c c c c f a f a f a f a f 
f f f f f f f f f f f f f f f f f f f f c a a c a a c a a a c a a c a a c f f f f a f a f a f a f a f a f a f a f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f a f a f a f a f a f a 
f f f f f f f f f f f f f f f f f f f f c a a a a a c a a a c a a a a a c f a f a f a f a f a f a f a f a f a f a f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f a f a f a f a f a f a f 
f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c f a f a f a f a f a f a f a f a f a f a f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f a f a f a f a f a f a f a 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f a f a f a f a f a f a f a f a f a f a f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f a f a f a f a f a f a f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f a f a f a f a f a f a f a f a f a f a f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f a f a f a f a f a f a f a 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f a f a f a f a f a f a f a f a f a f a f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f a f a f a f a f a f a f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f a f a f a f a f a f a f a f a f a f a f a f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f a f a f a f a f a f a f a 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f a f a f a f a f a f a f a f a f a f a f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f a f a f a f a f a f a f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f a f a f a f f f a f a f a f a f a f a f a f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f a f a f a f a c f f a c f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f c f c f c a c f c f c f c f c f c f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f c f c f c f c f c f c f c 
f a f a f a f a f a f a f a f a f a f a f a f f f f f f f a f a f a f a f f c a f f c f f a f a f a f a f a c f f a f a f a f f f f f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f f f f f a f a f a f a f a f a f a f a f f f f f f f f f f f a f a f a f a f a f a f a f f c f f a f a f a f a f a f a f a 
a f a f a f a f a f a f a f a f a f a f a f a f f f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f f f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a c a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f f f f f a f a f a f a f a f a f a f 
f a f a f a f a f a f a f a f a f a f a f a f a c a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a c a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a c f f f f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a c a f a f a f a f a f a f a f a f a 
a f a f a f a f a f a f a f a f a f a f a f a c a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a c a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a c f f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a c a f a f a f a f a f a f a f a f a f 
c f f f c f c f f a f a f a f a f a f a f a f f c a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a c f f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f f c a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f a f f c a f a f a f a f a f a f a f a c f 
f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c 
c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f 
f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c 
c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f 
f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c f c 
`)
    nightMode = true
    raccoon.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 5 5 . . . . . . . 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . 5 5 5 5 . . . . . . . 
. . . . . . . 5 5 5 . . . 5 5 5 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    cat.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . 5 5 5 . . . . . . . 5 5 5 . . . . . . 
. . . . . . 5 5 2 5 . . . 5 2 5 5 . . . . . . . 
. . . . . . . 5 2 5 5 . 5 5 2 5 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    flashlight.setImage(img`
. . . . . . . . . . . . 5 . 5 . 5 . 5 . . . . . . . . . . . . . 
. . . . . . . . . . . 5 . . . 5 . . . 5 . . . . . . . . . . . . 
. . . . . . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . . . . . 
. . . . . . . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . . . . . . 
. . . . . . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . . . . . 
. . . . . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . . 
. . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 
. . . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . . 
. . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . . . 
. . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . . 
. . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 
. 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . . 
5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 
. . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 
5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 
. 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 
5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 
. . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 
5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 
. 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 
. . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 
. . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . . 
. . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 
. . . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . . 
. . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . . . 
. . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . . 
. . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . . . . . 
. . . . . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . . . . . . 
. . . . . . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . . . . . . . 
. . . . . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . . . . . . 
. . . . . . . . . . . . 5 . . . 5 . . . 5 . . . . . . . . . . . 
. . . . . . . . . . . . . 5 . 5 . 5 . 5 . . . . . . . . . . . . 
`)
    info.startCountdown(30)
}
info.onCountdownEnd(function () {
    game.over(true)
})
function catSetup () {
    cat = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    cat.z = 0
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Friend, function (sprite, otherSprite) {
    if (nightMode) {
        music.playSound("!340,400^220")
otherSprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . b b . . . . . . . . . . . . . . . b b . . . 
. . b b b . . . . . . . . . . . . . b b b . . . 
. . b d b b . . . . . . . . . . b b b d b . . . 
. . b d d b b b . b b b b b . b b b d d b . . . 
. . b d d d b b b b b b b b b b b d d d b . . . 
. . b d b b b b b b b b b b b b b b b d b . . . 
. . b b b b b b b b b b b b b b b b b b . . . . 
. . b b f f f d d b b b b b d d f f f b b . . . 
. b b d f f f f f d b b b d f f f f f b b . . . 
. b d d f f 1 1 1 f b b b f 1 1 1 f f d b b . . 
. b d f f f 1 f 1 f b b b f 1 f 1 f f d d b . . 
. b d f f f 1 f f d d d d d f f 1 f f f d b . . 
b b f f f f d d d f f f f f d d d f f f f b b . 
. . . f d d d 1 d d f f f d d 1 d d d f . . . . 
. . . . . b b d 1 1 1 1 1 1 1 d b b . . . . . . 
. . f . . . b b d 1 1 1 1 1 d b b . . . f . . . 
. b f b b b b b b b b b b b b b b b b b f b . . 
. f b b b b b b b b b b b b b b b b b b b f . . 
. . . b b b c b b b b b b b b b c b b b b . . . 
. . . . . c b b b b b b b b b b b c . . . . . . 
. . . . . c c c c c c c c c c c c c . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        otherSprite.say("drat")
        sprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(500)
        otherSprite.destroy()
        info.changeScoreBy(10)
        sprite.setImage(img`
. . . . . . . . . . . . 5 . 5 . 5 . 5 . . . . . . . . . . . . . 
. . . . . . . . . . . 5 . . . 5 . . . 5 . . . . . . . . . . . . 
. . . . . . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . . . . . 
. . . . . . . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . . . . . . 
. . . . . . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . . . . . 
. . . . . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . . 
. . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 
. . . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . . 
. . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . . . 
. . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . . 
. . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 
. 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . . 
5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 
. . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 
5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 
. 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 
5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 
. . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 
5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 
. 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 
. . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 
. . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . . 
. . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 
. . . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . . 
. . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . . . 
. . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . . 
. . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . . . . . 
. . . . . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . . . . . . 
. . . . . . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . 5 . . . . . . . 
. . . . . . . 5 . . . 5 . . . 5 . . . 5 . . . 5 . . . . . . . . 
. . . . . . . . . . . . 5 . . . 5 . . . 5 . . . . . . . . . . . 
. . . . . . . . . . . . . 5 . 5 . 5 . 5 . . . . . . . . . . . . 
`)
        sprite.setPosition(79, 0)
        cat.destroy()
        resetCharacters()
    }
})
function bgm () {
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Quarter))
}
let fishbone: Sprite = null
let fishVY = 0
let fishVX = 0
let can: Sprite = null
let canVY = 0
let canVX = 0
let flashlight: Sprite = null
let cat: Sprite = null
let raccoon: Sprite = null
let raccoonHidingPlace = 0
let catHidingPlace = 0
let debug = false
let levelStarted = false
let nightMode = false
let hidingPlaces: tiles.Tile[] = []
game.splash("Trash Panda 2:", "Garbage Day")
scene.setBackgroundImage(img`
2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 5 5 5 2 5 5 5 2 5 5 5 2 5 5 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 2 2 5 2 2 2 5 2 2 2 5 2 2 2 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 2 2 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 5 5 2 5 5 5 5 5 5 
2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 5 5 5 2 5 5 5 2 5 5 5 2 5 5 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 5 5 2 5 5 5 5 5 5 5 5 5 5 5 5 5 
2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 5 5 5 2 5 5 5 2 5 5 5 2 5 5 5 2 5 5 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 2 2 5 2 2 2 5 2 2 2 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 2 2 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 5 5 2 5 5 5 5 
2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 5 5 5 2 5 5 5 2 5 5 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 5 5 2 5 5 5 5 5 5 5 5 5 5 5 
2 5 5 5 5 5 5 5 5 5 5 5 5 2 5 5 5 2 5 5 5 2 5 5 5 2 5 5 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 2 2 5 2 2 2 5 2 2 2 5 2 2 2 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 2 2 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 5 
2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 5 5 5 2 5 5 5 2 5 5 5 2 5 5 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 2 2 5 2 2 2 5 2 2 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 5 5 5 5 5 5 5 5 
2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 5 5 5 2 5 5 5 2 5 5 5 2 5 5 5 2 5 5 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 2 2 5 2 2 2 5 2 2 2 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 2 2 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 
2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 5 5 5 5 5 5 5 2 5 5 5 2 5 5 b b b 5 5 2 5 2 5 2 5 2 5 2 5 2 b b b 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 2 2 5 2 2 2 5 2 2 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 5 5 5 5 5 5 
2 2 5 5 5 2 5 5 5 2 5 5 5 2 5 5 5 2 5 2 5 2 5 2 b b b 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 b b b b b 2 5 2 5 2 5 2 2 2 5 2 b b b b 2 2 5 2 2 2 5 2 2 2 5 2 2 2 5 2 2 2 2 2 2 2 2 2 2 2 b b 2 2 2 2 2 2 2 2 2 2 2 2 b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 2 2 2 5 2 5 2 5 2 5 2 
2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b f 5 5 5 5 5 5 5 2 5 5 5 2 5 5 5 2 5 5 5 2 5 5 5 2 5 2 5 2 5 5 5 2 5 2 5 b b b b b b 2 5 2 5 2 5 2 5 2 b b b b b 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 b b b 5 2 2 2 5 2 2 2 5 2 b b b 2 2 2 5 2 2 2 2 2 2 2 2 2 2 2 5 2 2 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 
2 5 5 2 5 5 5 2 5 5 5 2 5 5 5 2 5 5 5 2 5 5 5 f f f f f 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 b b d b b b b 2 5 2 5 2 5 b b b b b d b 5 2 2 2 5 2 2 2 5 2 2 2 5 2 2 2 5 2 2 2 5 2 2 2 2 2 b b b b b 2 2 2 2 2 2 b b b d b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 2 2 2 5 2 5 2 5 2 
2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 5 5 5 2 5 5 5 2 5 5 5 2 5 2 5 2 5 b b d d d b b b b b b b b b b d d d b b 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 f f d d b b b b b b b b b b d f f 2 5 2 2 2 5 2 2 2 5 2 2 2 2 2 2 2 5 2 2 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 
2 2 5 5 5 2 5 5 5 2 5 5 5 2 5 2 5 2 5 2 5 2 5 2 b f f f f 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 b d d b b b b b b b b b b b b d d b b 2 2 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f b b b b b b b b b b b f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 2 2 2 
2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f b b b 2 5 5 5 2 5 5 5 2 5 5 5 2 5 5 5 2 5 2 5 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b b b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f 6 6 6 6 6 6 6 6 6 6 6 f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 2 2 5 2 5 2 5 2 5 2 5 
2 5 5 2 5 5 5 2 5 5 5 2 5 5 5 2 5 5 5 2 5 2 5 2 5 f b b b b 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 6 6 f 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f 8 8 8 8 8 8 8 8 8 8 8 f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 2 2 2 2 2 2 2 2 2 5 2 
2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f b b b b b 5 f f f f f 5 5 5 5 5 5 5 5 5 5 2 5 5 5 2 5 6 6 8 8 8 f 8 8 8 8 8 8 8 8 8 8 8 b b d d d d d d b f b d d d d d b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 8 8 5 2 2 2 5 2 5 2 5 2 5 
2 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 f b b b b b b b f b b b 5 2 5 2 5 2 5 2 5 2 5 2 5 6 6 8 8 8 8 8 8 f 8 8 8 8 8 8 8 8 8 8 b b d d f f f f f b f f f f f f d d d b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 8 8 8 2 2 2 2 2 2 2 2 2 2 2 
2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 b b b b b b b b b f f 2 5 5 5 2 5 5 5 2 5 5 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b 8 8 8 8 b d f f 1 1 1 f f f f f f 1 1 1 f f d b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 8 8 f 8 2 2 2 2 2 2 2 5 2 2 2 5 
2 5 5 2 5 5 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 b b b b b b b b b 5 2 5 2 5 2 5 2 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b 8 8 8 b d f f 1 f 1 f f f f d f 1 f 1 1 f f d b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 8 8 f f 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b b b b b b b 5 5 2 5 5 5 2 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b 8 b b f f f 1 f f f d d d d d f f 1 1 f f d b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 8 8 8 f f 2 2 2 2 2 2 2 2 2 2 5 2 2 
2 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 b b b b b b b b b 2 5 2 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 f f f f f f b d f f f f b b d f f f f f b b b f f f d b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 8 8 f f f 8 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b b b b b c b b b b b b b b b b 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 b b b b b b b d f f f f b b d d f f f d b b d f f f d b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 8 8 f f 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 5 5 2 5 2 5 2 5 2 5 2 f f b b b b b b c c c b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 f f f f 8 8 8 8 8 f 8 8 b b b f f f f f 8 8 f d b d 1 1 1 1 1 1 d b d d f 8 8 8 8 8 8 8 8 8 f f f f 8 8 8 8 8 8 8 8 8 8 8 f f f f f 8 8 8 8 8 8 8 8 8 8 8 f f f f f 8 8 8 8 8 8 8 8 8 8 6 6 6 6 8 8 f f 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 5 5 5 5 5 5 5 5 5 5 5 5 f b b b b b b c c c b b b b b b b b b b b 8 8 8 8 8 8 8 f f f f f f f f 8 8 8 f 8 8 b b f f f f f f f b c b b d 1 1 1 1 1 1 d b b d f 8 8 8 8 8 8 8 f f f f f f f f 8 8 8 8 8 8 8 8 f f f f f f f 8 8 8 8 8 8 8 8 f f f f f f f f 8 8 8 8 8 8 8 8 6 6 6 8 8 8 f f 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 5 2 5 2 5 2 5 2 5 2 5 2 b b b b b b c c c c b b b b b b b b b b f f 8 8 8 f f f f f f f f f f f f 8 f 8 f f f b b b b b f f b b c c b b d d d d d b b f f f f f 8 8 8 f f f f f f f f f f f f f 8 8 f f f f f f f f f f f f f 8 8 8 f f f f f f f f f f f f 8 8 8 f 8 6 6 6 8 8 8 f f 8 b b b 8 8 2 2 2 2 2 2 2 2 2 2 b b 2 
2 5 5 5 5 5 5 5 5 5 2 5 5 5 2 5 5 b b b c c c c c b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f b b b f f f f b b b c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 6 6 6 8 8 f f f 8 8 b b b b 8 2 2 2 2 2 2 2 b b b b b 2 
2 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 b b c c c c c c c c c c b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 6 6 8 8 8 f f f 8 8 8 b d d b b b 2 b b b 2 b b b b d b 2 
2 5 5 5 5 5 5 5 5 5 5 5 2 5 5 5 2 6 6 f c c c c c c c c c c c b b b b f f f f f f f f f f f f f f f f f f f f f f f b b b b b b f f f c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 6 6 6 8 8 8 f f 8 8 8 8 8 b b d d b b b b b b b b b d d d b 2 
2 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 6 6 6 6 6 c c c c b b c c c c b b b b f f f f f f f f f f f f f f f f f f f f f f b b b b b b b f f f c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 6 6 6 8 8 f f 8 8 8 8 8 8 b b d b b b b b b b b b b b d b b 2 
2 5 5 5 5 5 2 5 5 5 2 5 5 5 2 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b f f f c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 6 6 8 8 8 f f 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b 2 
2 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f 8 8 8 6 6 6 6 6 6 6 6 f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f f f f f f f f f f f f f f f f f f f f f f f 6 6 6 6 8 8 8 f f 8 8 8 8 8 8 8 8 b b b d d d d b b b d d d d b b 2 2 
2 5 5 5 5 5 5 5 2 5 5 5 2 5 5 5 8 f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 f 8 8 8 8 8 8 8 8 8 8 b d d f f f f f f f f f f f d d b 2 
2 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 8 8 8 f f 8 8 8 8 8 8 8 8 8 b b d f f f f f f f f f f f f f d b 2 
2 5 2 5 5 5 2 5 5 5 2 5 2 5 2 5 2 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f 8 8 8 8 8 8 8 8 8 8 b d f f 1 1 1 f f f d f 1 1 1 f f d b 
2 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f 8 8 8 8 8 8 8 8 8 8 8 b f f 1 1 f f d d d d d f f 1 1 f d b 
2 5 5 5 2 5 5 5 2 5 5 5 2 5 5 5 2 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 b f f f d d d d d d d d d d f f f d b 
2 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f d d d d d d d d d d d d d f 2 2 
2 5 2 5 5 5 2 5 2 5 2 5 2 5 2 5 2 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 d d b d d d f d d d b d d 2 2 2 
2 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b d d d d d b b b b b 2 2 
2 5 5 5 2 5 5 5 2 5 5 5 2 5 2 5 2 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f b b 8 8 c c c c c c c c b b b b 2 2 
2 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b c c c b b b b b 2 
2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b c c c b b b b b 2 
2 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b c c c b b b b b 2 
2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c c c b b b b b 2 
2 2 5 2 5 2 5 2 5 2 5 2 5 2 2 2 5 2 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f 8 8 c c c c c b b b b c b b b b b 2 
2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f b b b b b b b b b b b b b b b b b b 2 
2 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 2 2 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f b b b b b b b b b b b b b b b b b b 2 
2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b 2 
2 2 2 2 5 2 2 2 5 2 2 2 5 2 2 2 8 8 6 f f f f f f f f f f f f f f f f f f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b 2 2 
2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 8 8 8 6 f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 b b b b b b b b b b b b b b f 2 2 
2 2 5 2 5 2 5 2 5 2 5 2 2 2 8 8 8 8 6 f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b 2 
2 5 2 5 2 5 2 5 2 5 2 5 2 5 8 8 8 8 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b f 2 
2 2 2 2 5 2 2 2 5 2 2 2 5 2 8 f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 2 2 2 2 2 2 f f f f 2 
2 5 2 5 2 5 2 5 2 5 2 5 2 5 8 f f f 6 6 6 6 6 6 6 5 5 5 5 5 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f 6 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 2 2 2 2 2 2 b b b b 2 
2 2 5 2 5 2 5 2 2 2 5 2 2 2 8 f f f 6 6 6 6 6 5 5 5 5 5 5 5 5 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 2 2 2 2 2 2 f f f f 2 
2 5 2 5 2 5 2 5 2 5 2 5 2 5 8 f f f 6 6 6 6 6 5 5 5 5 6 6 5 5 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 8 f 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 2 2 2 2 2 2 f f f f f 
2 2 2 2 5 2 2 2 5 2 2 2 2 2 8 f f f 6 6 6 6 6 5 5 6 6 6 6 6 5 5 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 6 8 8 8 8 8 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 b b b b b 
2 5 2 5 2 5 2 5 2 5 2 5 2 5 8 f f f 6 6 6 6 5 5 5 6 6 6 6 6 5 5 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 f f f f 2 
2 2 5 2 2 2 5 2 2 2 5 2 2 2 8 f f f 6 6 6 6 5 5 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 f f f f f 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 f f f f f 2 
2 5 2 5 2 5 2 5 2 5 2 5 2 5 8 f f f 6 6 6 6 5 5 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 6 6 6 5 5 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 f b b b b 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 8 f f f 6 6 6 6 5 5 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 6 6 6 5 5 5 5 5 5 6 6 5 5 5 5 5 6 6 6 6 5 5 5 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 6 6 6 6 5 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 f f f b b 2 
2 5 2 5 2 5 2 5 2 5 2 5 2 5 8 f f f 6 6 6 6 5 5 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 6 6 6 5 5 5 5 5 5 6 6 5 5 5 5 5 5 6 6 6 5 5 5 5 6 6 6 6 6 5 5 5 5 5 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 6 6 6 6 5 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 f f f f f 2 
2 2 5 2 2 2 2 2 2 2 2 2 2 2 8 f f f f 6 6 6 5 5 6 6 6 6 5 5 5 5 5 5 6 6 5 5 6 5 5 6 6 6 5 5 6 6 5 5 5 6 5 5 6 6 5 5 6 6 6 5 5 5 5 5 6 6 6 5 5 5 5 5 5 5 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 6 6 6 6 5 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 6 6 6 6 6 5 5 6 6 6 6 6 6 8 8 f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 b b b 2 2 
2 5 2 5 2 5 2 5 2 5 2 5 2 5 8 f f f f 6 6 6 5 5 6 6 6 6 5 5 5 5 5 5 6 5 5 5 6 5 5 5 6 6 5 5 6 6 5 5 5 6 5 5 6 6 5 5 6 6 6 5 5 5 5 5 6 6 6 5 5 5 6 5 5 5 6 6 6 5 5 5 5 6 6 6 6 6 5 5 5 6 6 6 6 5 5 6 6 6 6 6 5 5 5 6 6 6 6 6 6 5 5 5 6 6 6 5 5 5 6 6 6 6 6 6 8 8 f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 b b 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 8 f f f f 6 6 6 5 5 5 6 6 6 6 6 5 5 6 6 6 5 5 5 5 5 5 5 6 6 5 5 5 5 6 6 6 6 5 5 5 5 5 6 6 6 5 5 5 6 5 5 6 6 6 5 5 6 6 6 6 6 6 6 5 5 5 5 5 6 6 6 6 6 5 5 5 6 6 6 6 5 5 6 6 6 6 6 5 5 5 6 6 6 6 6 6 5 5 5 6 6 5 5 5 5 6 6 6 6 6 6 8 8 f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 
2 5 2 5 2 5 2 5 2 2 2 5 2 2 8 8 8 8 8 6 6 6 5 5 5 5 6 6 6 5 5 5 6 6 6 5 5 6 5 5 5 5 6 6 5 5 5 5 5 5 6 6 5 5 5 5 5 6 6 6 5 5 5 6 5 5 5 6 6 5 5 6 6 6 6 6 6 6 5 5 6 6 6 6 6 6 6 6 5 5 5 6 6 6 6 5 5 6 6 6 6 5 5 5 5 5 6 6 6 6 6 6 5 5 6 6 5 5 5 6 6 6 6 6 6 6 8 8 f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 8 8 8 8 8 6 6 6 6 5 5 5 5 5 5 5 5 5 6 6 6 5 5 6 6 6 5 5 6 6 5 5 6 6 5 5 5 6 5 5 6 6 5 5 6 6 5 5 5 5 5 5 5 6 6 5 5 6 5 5 5 5 6 6 5 5 5 5 5 6 6 6 6 6 5 5 5 6 6 6 6 5 5 6 6 6 6 5 5 5 5 5 5 6 6 6 6 6 5 5 5 5 5 5 6 6 6 6 6 6 6 6 8 8 f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 f f f 2 2 2 2 2 2 2 2 2 2 2 
2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 8 8 8 8 6 6 6 6 6 5 5 5 5 5 5 5 6 6 6 6 6 6 6 6 6 5 5 6 6 5 5 6 6 6 5 5 6 5 5 5 5 5 5 6 5 5 5 5 5 6 5 5 6 6 5 5 5 6 5 5 6 6 6 5 5 5 5 5 6 6 6 6 6 5 5 5 6 6 6 6 5 5 6 6 6 5 5 5 6 6 5 5 5 6 6 6 6 6 5 5 5 5 6 6 6 6 6 6 6 6 6 8 8 f f f f f f f 8 8 8 8 8 8 8 8 8 f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 6 6 5 5 5 6 6 6 5 5 6 6 5 5 5 5 5 5 6 6 6 5 5 6 6 6 6 6 6 6 6 5 5 5 6 6 6 6 5 5 6 6 6 5 5 5 5 5 5 5 5 6 6 6 6 6 5 5 5 6 6 6 6 6 6 6 6 6 6 8 8 f f f f f f f 8 8 8 8 8 8 8 f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 5 2 5 2 2 2 5 2 2 2 5 2 2 2 5 2 8 8 6 f f f f f f f f f f f f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 6 6 6 5 5 5 5 5 5 6 6 6 6 5 5 5 6 6 6 5 5 5 6 6 5 5 5 6 5 5 6 5 5 6 6 6 6 6 6 5 5 6 6 6 6 6 6 6 6 6 6 8 8 f f f f f f f 8 8 8 8 8 f f 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 8 8 6 f f f f f f f f f f f f f f f f f f f f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 6 6 6 6 6 5 5 5 5 5 5 5 5 5 6 6 5 5 5 6 6 6 6 5 5 5 6 6 6 6 6 5 5 6 6 6 6 6 6 6 6 6 6 8 8 f f f f f f f 8 8 8 8 f f 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 5 2 5 2 5 2 5 2 5 2 5 2 5 2 2 2 5 8 6 f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 5 5 5 5 5 5 6 6 6 5 5 6 6 6 6 6 5 5 5 6 6 6 6 6 5 5 6 6 6 6 6 6 6 6 6 6 8 8 f f f f f f f 8 f f f 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 6 6 6 6 6 5 5 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 f f f f 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 5 2 5 2 2 2 5 2 2 2 5 2 2 2 5 2 2 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 f f 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 f f 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 5 2 5 2 5 2 2 2 5 2 2 2 5 2 2 2 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 6 6 6 6 6 6 6 6 8 8 8 8 f f 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f 6 6 8 8 8 8 f 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 5 2 5 2 2 2 2 2 2 2 5 2 2 2 2 2 2 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f 6 6 8 8 f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 5 2 5 2 5 2 5 2 5 2 2 2 2 2 2 2 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 5 2 5 2 2 2 2 2 2 2 2 2 2 2 2 2 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 8 8 8 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 5 9 9 9 9 9 9 9 9 9 9 9 9 9 2 2 9 9 9 9 9 9 9 9 9 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f 9 9 9 9 9 9 9 9 9 9 9 6 6 9 9 9 6 6 6 6 6 6 6 6 6 9 9 9 9 9 9 9 9 6 6 6 9 9 9 9 9 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 9 9 9 a a a a a a a a a a 9 9 9 9 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 9 9 a a a a a a a a a a a a a a a 9 9 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 5 2 5 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 9 a a a a a a a a a a a a a a a a a 9 9 9 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
9 9 9 9 a a a a a a a a a a a 9 9 9 a a a a a a a a 9 9 9 9 9 9 9 9 9 9 9 a 9 9 9 9 9 9 9 9 9 9 a a a a a a a 9 9 9 9 9 a a 9 9 9 9 9 9 9 a 9 9 9 9 9 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 9 a a a a a a a a 9 9 9 a a a a a a a a 9 9 9 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 5 2 5 2 5 
9 9 9 a a a a a a a a a a a a 9 9 9 a a a a a a a a a 9 9 9 9 9 9 9 9 9 a a a 9 9 9 9 9 9 9 9 9 a a a a a a a a 9 9 9 a a a a 9 9 9 9 9 a a a a 9 9 9 f f f f f f f f f f f f f 6 6 6 6 6 6 6 6 6 6 6 9 9 a a a a a a a 9 9 9 9 9 9 9 a a a a a a 9 9 9 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 2 
9 9 9 a a a a a a a a a a a a 9 9 a a a a a a a a a a a a 9 9 9 9 9 9 a a a a 9 9 9 9 9 9 9 9 a a a a a a a a a a 9 9 a a a a 9 9 9 9 9 a a a a 9 9 9 9 6 6 6 6 6 6 f f f f f f f f f f f f f f f f 9 9 9 a a a a a 9 9 9 9 9 9 9 9 9 9 a a a a a a 9 9 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 5 2 5 2 5 2 5 
9 9 9 9 a a a a a a a a a a a 9 9 a a a a a a a a a a a a 9 9 9 9 9 9 a a a a a 9 9 9 9 9 9 a a a a a a a a a a a 9 9 a a a a 9 9 9 9 9 a a a a 9 9 9 9 6 6 6 6 6 6 6 6 6 6 6 6 6 f f f f f f f f f 9 9 a a a a a 9 9 9 9 9 9 9 9 9 9 9 a a a a a a 9 9 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
9 9 9 9 9 9 9 a a a a 9 9 9 9 9 9 a a a a 9 9 9 9 a a a a 9 9 9 9 9 a a a a a a a a 9 9 9 9 a a a a 9 9 9 9 9 9 9 9 9 a a a a 9 9 9 9 9 a a a a 9 9 9 9 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 a a a a a 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a 9 9 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 5 2 5 2 5 2 5 2 5 
9 9 9 9 9 9 9 a a a a 9 9 9 9 9 9 a a a a 9 9 9 9 a a a a 9 9 9 9 9 a a a a a a a a 9 9 9 9 a a a a 9 9 9 9 9 9 9 9 9 a a a a 9 9 9 9 9 a a a a 9 9 9 9 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 a a a a a 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a 9 9 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 5 2 5 2 5 2 
2 2 9 9 9 9 9 a a a a 9 9 9 9 9 9 a a a a 9 9 9 a a a a a 9 9 9 9 a a a a 9 a a a a 9 9 9 9 a a a a a a a a a 9 9 9 9 a a a a a a a a a a a a a 9 9 9 9 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 a a a a a 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a 9 9 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 5 2 5 2 5 2 5 2 5 5 5 
2 2 9 9 9 9 9 a a a a 9 9 9 9 9 9 a a a a a a a a a a a a 9 9 9 9 a a a a 9 9 a a a 9 9 9 9 9 a a a a a a a a a 9 9 9 a a a a a a a a a a a a a 9 9 9 9 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 a a a a a 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a 9 9 6 8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 2 5 2 5 2 5 2 
2 2 2 9 9 9 9 a a a a 9 9 9 9 9 9 a a a a a a a a a a a a 9 9 9 9 a a a a 9 a a a a a 9 9 9 9 9 a a a a a a a a a 9 9 a a a a a a a a a a a a a 9 9 9 9 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 a a a a a 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a 9 9 6 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 5 2 5 2 5 2 5 2 5 5 5 2 5 
2 2 2 9 9 9 9 a a a a 9 9 9 9 9 9 a a a a a a a a a a 9 9 9 9 9 a a a a a a a a a a a a 9 9 9 9 9 9 9 9 a a a a a 9 9 a a a a 9 9 9 9 9 a a a a 9 9 9 9 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 9 a a a 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a 9 9 9 6 8 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 2 5 2 5 2 5 2 5 2 
2 2 2 9 9 9 9 a a a a 9 9 9 9 9 9 a a a a a a a a a a 9 9 9 9 9 a a a a a a a a a a a a 9 9 9 9 9 9 9 9 9 a a a a 9 9 a a a a 9 9 9 9 9 a a a a 9 9 9 9 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a 9 9 9 6 6 8 8 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 5 2 5 2 5 2 5 2 5 5 5 5 5 5 5 
2 2 2 9 9 9 9 a a a a 9 9 9 9 9 9 a a a a 9 9 a a a a a 9 9 9 a a a a a a a a a a a a a 9 9 a a a a 9 9 9 a a a a 9 9 a a a a 9 9 9 9 9 a a a a 9 9 9 9 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a a 9 9 9 6 6 8 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 2 5 2 5 2 5 2 5 2 5 5 
2 2 2 9 9 9 9 a a a a 9 9 9 9 9 9 a a a a 9 9 9 a a a a a 9 9 a a a a 9 9 9 9 9 9 a a a 9 9 a a a a a a a a a a a 9 9 a a a a 9 9 9 9 9 a a a a 9 9 9 9 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a a 9 9 9 9 6 6 8 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 5 2 5 2 5 2 5 2 5 5 5 2 5 5 5 5 5 
2 2 2 9 9 9 9 a a a a 9 9 9 9 9 9 a a a a 9 9 9 9 a a a a 9 9 a a a 9 9 9 9 9 9 9 a a a a 9 a a a a a a a a a a 9 9 9 a a a a 9 9 9 9 9 a a a a 9 9 9 9 2 2 2 9 9 9 9 2 2 2 6 6 6 6 6 6 6 6 6 6 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a 9 9 9 9 9 6 6 8 8 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 2 5 2 5 2 5 2 5 2 5 5 5 5 
2 2 2 2 9 9 9 a a a a 9 9 9 9 9 9 9 a a 9 9 9 9 9 a a a a 9 9 a a a 9 9 9 9 9 9 9 9 a a 9 9 9 a a a a a a a a a 9 9 9 a a a a 9 9 9 9 9 a a a a 9 9 9 9 2 2 9 9 9 9 9 9 9 2 2 2 2 2 2 2 2 2 2 2 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a 9 9 9 9 9 6 6 6 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 5 2 5 2 5 2 5 2 5 5 5 5 5 5 5 5 5 5 5 
2 2 2 2 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 2 9 9 9 9 9 9 9 9 9 2 2 2 2 2 2 2 2 2 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a 9 9 9 9 9 6 6 6 6 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 2 5 2 5 2 5 2 5 2 5 5 5 5 5 5 
2 2 2 2 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 9 9 9 9 9 9 9 9 9 9 9 2 2 2 2 2 2 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a 9 9 9 9 6 6 6 6 6 6 8 2 2 2 2 2 2 2 2 2 2 2 2 2 5 2 5 2 5 2 5 2 5 5 5 5 5 5 5 5 5 5 5 5 5 
2 2 2 2 2 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a 9 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 9 9 9 9 2 2 9 9 9 9 9 a a a a a a a a 9 9 9 9 9 9 9 a a a a a 9 9 9 9 9 9 a a a a 9 9 9 9 9 9 a a a 9 9 9 9 a a a a a a a a a 9 9 9 9 9 9 9 9 9 a a a a a 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a 9 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 9 2 2 2 9 9 9 9 a a a a a a a a a a 9 9 9 9 9 9 a a a a a 9 9 9 9 9 9 a a a a a 9 9 9 9 9 a a a 9 9 9 a a a a a a a a a a a 9 9 9 9 9 9 9 9 a a a a a 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a 9 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 9 a a a a a a a a a a a 9 9 9 9 9 a a a a a 9 9 9 9 9 9 a a a a a a 9 9 9 9 a a a 9 9 9 a a a a a a a a a a a a 9 9 9 9 9 9 9 a a a a a 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a a 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 9 a a a a 9 9 9 a a a a a 9 9 9 a a a a a a a 9 9 9 9 9 a a a a a a a 9 9 9 a a a 9 9 9 a a a a 9 9 9 a a a a a a 9 9 9 9 9 a a a a a a a 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a a 9 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 9 a a a a 9 9 9 9 a a a a 9 9 9 a a a a a a a 9 9 9 9 9 a a a a a a a a 9 9 a a a 9 9 9 a a a a 9 9 9 9 9 a a a a a 9 9 9 9 a a a a a a a 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a 9 9 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 9 a a a a 9 9 9 9 a a a a 9 9 9 a a a a a a a 9 9 9 9 9 a a a a a a a a a 9 a a a 9 9 9 a a a a 9 9 9 9 9 9 a a a a 9 9 9 9 a a a a a a a 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a a 9 9 9 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 9 a a a a 9 9 9 a a a a a 9 9 a a a a 9 9 a a a 9 9 9 9 a a a a a a a a a 9 a a a 9 9 9 a a a a 9 9 9 9 9 9 a a a a 9 9 9 a a a a 9 a a a a 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a a a a 9 9 9 9 9 9 9 9 9 9 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 9 a a a a a a a a a a a 9 9 9 a a a a 9 9 a a a a 9 9 9 a a a a 9 a a a a a a a a 9 9 9 a a a a 9 9 9 9 9 9 a a a a 9 9 9 a a a a 9 9 a a a a 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a a a a a 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 9 a a a a a a a a a a a 9 9 9 a a a a a a a a a a 9 9 9 a a a a 9 9 a a a a a a a 9 9 9 a a a a 9 9 9 9 9 9 a a a a 9 9 9 a a a a a a a a a a 9 9 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a a a a a a a a a a a a a a a a a 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 9 a a a a a a a a a 9 9 9 a a a a a a a a a a a a a 9 9 a a a a 9 9 9 a a a a a a 9 9 9 a a a a 9 9 9 9 9 a a a a a 9 a a a a a a a a a a a a a 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a a a a a a a a a a a a a a a a a a a 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 9 a a a a a a a 9 9 9 9 9 a a a a a a a a a a a a a 9 9 a a a a 9 9 9 a a a a a a 9 9 9 a a a a 9 9 9 9 a a a a a 9 9 a a a a a a a a a a a a a 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a a a a a a a a a a a a a a a a a a a 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 9 a a a a 9 9 9 9 9 9 9 9 a a a a 9 9 9 9 9 a a a a 9 9 a a a a 9 9 9 9 9 a a a a 9 9 9 a a a a a a a a a a a a 9 9 a a a a a 9 9 9 9 9 a a a a 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a a a a a a a a a a a a a a a a a a a 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 9 a a a a 9 9 9 9 9 9 9 9 a a a 9 9 9 9 9 9 9 a a a a 9 a a a a 9 9 9 9 9 a a a a 9 9 9 a a a a a a a a a a a a 9 9 a a a a 9 9 9 9 9 9 9 a a a a 9 9 9 9 9 9 9 9 9 9 9 a a a a a a a a a a a a a a a a a a a a a a a 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 9 9 a a 9 9 9 9 9 9 9 9 9 a a a 9 9 9 9 9 9 9 a a a 9 9 9 a a a 9 9 9 9 9 9 a a a 9 9 9 9 a a a a a a a a a 9 9 9 9 a a a a 9 9 9 9 9 9 9 a a a 9 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a a a a a a a a a a a a a a a a a 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 9 9 a a 9 9 9 9 9 9 9 9 9 a a 9 9 9 9 9 9 9 9 a a a 9 9 9 a a a 9 9 9 9 9 9 9 a a 9 9 9 9 a a a a a a a 9 9 9 9 9 9 9 a a 9 9 9 9 9 9 9 9 a a a 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`)
music.setVolume(16)
bgm()
pause(2000)
game.splash("It's Garbage Day!")
game.showLongText("Stop the raccoons & cats from throwing trash by shining the light on them! Use the D-pad or thumbstick.", DialogLayout.Center)
game.splash("Raccoons = 10 pts.", "Cats = 5 pts.")
game.showLongText("You have 30 seconds to stop as many raccoons and cats as you can from littering!", DialogLayout.Top)
game.showLongText("But you can only play at 'night', so bring your PyGamer or PyBadge somewhere dark.", DialogLayout.Bottom)
scene.setTileMap(img`
. . . . . . . . . . 
. 2 . . . . . . 2 . 
. . . . . . . . . . 
2 . . . . . 2 . . . 
. . . . . . . . . . 
. 2 . 2 . . . 2 . 2 
. . . . . . . . . . 
. . . . . . . . . . 
`)
hidingPlaces = scene.getTilesByType(2)
for (let index = 0; index <= hidingPlaces.length - 1; index++) {
    scene.setTile(2, img`
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
`, false)
}
nightMode = false
playerSetup()
resetCharacters()
levelStarted = false
debug = false
game.onUpdateInterval(2000, function () {
    if (levelStarted) {
        if (raccoon.x < 79) {
            canVX = Math.randomRange(50, 80)
        } else {
            canVX = Math.randomRange(-50, -80)
        }
        if (raccoon.y < 59) {
            canVY = Math.randomRange(-50, -90)
        } else {
            canVY = Math.randomRange(-50, -100)
        }
        music.playTone(2700, music.beat(BeatFraction.Quarter))
        can = sprites.createProjectileFromSprite(img`
. . . . . b b b b b b b . . . . 
. . . . b d d d d d d d b . . . 
. . . b d d d f f d d d d b . . 
. . . b b d d f f d d b b b . . 
. . . b b b b b b b b b 2 2 b . 
. . . b 2 2 2 1 1 1 1 2 2 2 b . 
. . . b 2 2 1 1 1 1 2 2 2 2 b . 
. . . b 2 2 1 1 1 2 2 2 2 2 b . 
. . . b 2 2 1 1 2 2 2 2 2 b b . 
. . . b 2 2 1 1 1 2 2 2 2 b . . 
. . . b 2 2 1 1 1 1 2 2 2 2 b . 
. . . b 2 2 2 1 1 1 2 2 2 2 b . 
. . . b 2 2 2 2 1 1 1 2 2 b b . 
. . . b b 2 2 2 2 1 1 2 2 b . . 
. . . . b b 2 2 2 1 b b b . . . 
. . . . . b b b b b b . . . . . 
`, raccoon, canVX, canVY)
        can.ay = 300
    }
})
game.onUpdateInterval(2500, function () {
    if (levelStarted) {
        if (cat.x < 79) {
            fishVX = Math.randomRange(35, 50)
        } else {
            fishVX = Math.randomRange(-35, -50)
        }
        if (cat.y < 59) {
            fishVY = Math.randomRange(-55, -85)
        } else {
            fishVY = Math.randomRange(-60, -110)
        }
        music.playTone(3800, music.beat(BeatFraction.Quarter))
        fishbone = sprites.createProjectileFromSprite(img`
1 1 1 1 1 1 1 . . . . . . . . . 
1 1 f 1 1 1 . . . . . . . . . . 
1 f f f 1 1 . . . . . . . . . . 
1 1 f 1 1 . . . 1 1 1 . . . . . 
. 1 1 1 1 . 1 1 . . . . . . . . 
1 1 1 . . 1 1 . . . . . . . . . 
1 . . . 1 1 1 . . . . 1 1 . . . 
. . . . 1 . . 1 . 1 1 . . . . . 
. . . 1 . . . . 1 1 . . . . . . 
. . . 1 . . . 1 1 1 . . . . . . 
. . . 1 . . . 1 . . 1 . 1 1 1 . 
. . . . . . 1 . . . . 1 1 . . . 
. . . . . . 1 . . . 1 1 1 . . . 
. . . . . . . . . . 1 . . 1 1 1 
. . . . . . . . . . 1 . . 1 . . 
. . . . . . . . . . . . . 1 . . 
`, cat, fishVX, fishVX)
        fishbone.ay = 250
    }
})
