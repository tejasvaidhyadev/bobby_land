// dummy data

export const data = [
    {
      id: 0,
      images: "images/asset1.gif",
      type: "Good Morning Video Collection",
      title: "Good Morning Day 33",
      details: { info: "Artist: BizzleMcGizzle", fontSize: 18 },
      directLink: {
        link:
          "https://opensea.io/assets/matic/0x3d398ae7930575afa7462cde942559de16525ed6/33",
        fontSize: 10,
      },
      address: "0x06012c8cf97bead5deae237070f9587f8e7a266d/229795",
    },

    {
      id: 1,
      images: "images/cryptoKittiesPuddingDaintytot.png",
      type: "CryptoKitties",
      title: "Pudding Daintytot",
      details: { info: "#1320779 / Gen 19 / Slow Cooldown  (16h)", fontSize: 15 },
      directLink: {
        link: "https://www.cryptokitties.co/kitty/1320779",
        fontSize: 11,
      },
      address: "0x06012c8cf97bead5deae237070f9587f8e7a266d/1320779",
    },
    {
      id: 2,
      images: "images/knownOriginPussyBird.png",
      type: "Known Origin",
      title: "Pussy Bird",
      details: { info: "Artist: Kozachok", fontSize: 18 },
      directLink: {
        link: "https://knownorigin.io/token/165777",
        fontSize: 12,
      },
      address: "matic/0x3d398ae7930575afa7462cde942559de16525ed6/33",
    },
    {
      id: 3,
      images: "images/axieInfinity265.png",
      type: "Axie Infinity",
      title: "Axie #265",
      details: {
        info: "Aquatic / Breed count: 0 of 7 / Level: 1 / Battles ready: 3 of 3",
        fontSize: 11,
      },
      directLink: {
        link: "https://axieinfinity.com/axie/265",
        fontSize: 11,
      },
      address: "0xf5b0a3efb8e8e4c201e2a935f110eaaf3ffecb8d/265",
    },
    {
      id: 4,
      images: "images/chainGuardiansCaptainDevezAttazer3.png",
      type: "ChainGuardians",
      title: "Captain Devex Attazer #3",
      details: {
        info: "Legendary / Rank: Captain / Catch: 3 of 1000 / Level: 0001 ",
        fontSize: 12,
      },
      directLink: {
        link: "https://chainguardians.io/4",
        fontSize: 12,
      },
      address: "0x3cd41ec039c1f2dd1f76144bb3722e7b503f50ab/4",
    },
    {
      id: 5,
      images: "images/myCryptoHeroesGeorgeWashington.png",
      type: "MyCryptoHeroes",
      title: "George Washington",
      details: {
        info: "Legendary / #50040004",
        fontSize: 18,
      },
      directLink: {
        link: "https://www.mycryptoheroes.net/heroes/50040004",
        fontSize: 11,
      },
      address: "0x273f7f8e6489682df756151f5525576e322d51a3/50040004",
    },
  ]
  

  // // video player
// const largeVideoClip = new VideoClip(
//   "https://player.vimeo.com/external/676293821.m3u8?s=f8d6b28206c296cac92972c89d9712d4be06df68"
// )
// const largeVideoTexture = new VideoTexture(largeVideoClip)

// const largeVideoClip2 = new VideoClip("https://player.vimeo.com/external/676041195.m3u8?s=d4bce29eb85e590419257a72dca82d81b6c4d803")
// const largeVideoTexture2 = new VideoTexture(largeVideoClip2)

// // #3

// const largeMaterial2 = new Material()
// largeMaterial2.albedoTexture = largeVideoTexture2
// largeMaterial2.roughness = 1.0
// largeMaterial2.specularIntensity = 0
// largeMaterial2.metallic = 0
// largeMaterial2.emissiveTexture = largeVideoTexture2
// largeMaterial2.emissiveColor = Color3.White()
// largeMaterial2.emissiveIntensity = 0.6
// largeMaterial2.albedoColor = new Color3(0.5, 0, 0.5)


// const large_screen = new Entity() 
// large_screen.addComponent(new PlaneShape())
// large_screen.addComponent(
//   new Transform({
//     position: new Vector3(10, 2, 10),
//     scale: new Vector3(4, 2, 1)

//   })
// )
// large_screen.getComponent(Transform).rotate(Vector3.Up(), 270)


// large_screen.addComponent(largeMaterial)
// // large_screen.addComponent(
// //   new OnPointerDown(() => {
// //     largeVideoTexture.playing = !largeVideoTexture.playing
// //   })
// // )
// large_screen.addComponent(largeMaterial2)

// engine.addEntity(large_screen)

// // #5
// largeVideoTexture.play()
// largeVideoTexture.pause()
// largeVideoTexture.loop = false 


// largeVideoTexture2.play()
// largeVideoTexture2.pause()
// largeVideoTexture2.loop = false 

// // buttons on for video playing 

// const play1_button_Patreon = new Entity()
// play1_button_Patreon.addComponent(new GLTFShape("models/Glowing_Stone_04.glb"))

// play1_button_Patreon.addComponent(
//   new Transform({
//     position: new Vector3(9, 0.5, 9),
//     scale: new Vector3(1, 1, 1)

//   })
// )

// //button_Patreon.addComponent(transform_button_Patreon)
// play1_button_Patreon.addComponent(
  
//   new OnPointerDown(
//     (e) => {
//       if (e.buttonId == 0) {
//         largeVideoTexture.playing = !largeVideoTexture.playing
//       } 
//     },
//     { button: ActionButton.ANY ,
//       showFeedback: true,
//       hoverText: "open",
//     }

//   )
// )
// engine.addEntity(play1_button_Patreon)

// // buttons-2 on for video playing 

// //button_Patreon.addComponent(transform_button_Patreon)
// const play2_button_Patreon = new Entity()
// play2_button_Patreon.addComponent(new GLTFShape("models/Glowing_Stone_04.glb"))
// play2_button_Patreon.addComponent(
//   new Transform({
//     position: new Vector3(9, 0.5, 10),
//     scale: new Vector3(1, 1, 1)

//   })
// )

// play2_button_Patreon.addComponent(
  
//   new OnPointerDown(
//     (e) => {
//       if (e.buttonId == 0) {
//         largeVideoTexture2.playing = !largeVideoTexture2.playing
//       } 
//     },
//     { button: ActionButton.ANY ,
//       showFeedback: true,
//       hoverText: "open",
//     }

//   )
// )
// engine.addEntity(play2_button_Patreon)