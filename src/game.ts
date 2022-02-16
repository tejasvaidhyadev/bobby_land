import utils from "../node_modules/decentraland-ecs-utils/index"
import { NFT } from "nft"
import { data } from "data"
import { InfoPanel } from "infoPanel"
import { Delay } from "../node_modules/decentraland-ecs-utils/timer/component/delay"


const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)


const final = new Entity('final')
engine.addEntity(final)
final.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(0, 0, 16),
  rotation: new Quaternion(1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.8699772357940674, 1, 0.8904260396957397)
})
final.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("6f029ac9-bc91-49f8-834d-55c5c4e78008/final.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
final.addComponentOrReplace(gltfShape2)


// UI Elements
const canvas = new UICanvas()
const infoPanel = new InfoPanel(canvas)

// NFTs
// const makersPlaceNFT = new NFT(
//   new NFTShape("images/mainPanel.png"),
//   new Transform({
//     position: new Vector3(6, 2.5, 7),
//     scale: new Vector3(4, 4, 4),
//   }),
//   new Color3(0.0, 1.0, 1.5),
//   data[0].id,
//   infoPanel
// )


// const axieInfinityNFT = new NFT(
//   new NFTShape("ethereum://" + data[3].address),
//   new Transform({
//     position: new Vector3(6, 2.5, 7),
//     scale: new Vector3(4,4,4),
//   }),
//   new Color3(1.5, 0.8, 0.8),
//   data[3].id,
//   infoPanel
// )
// axieInfinityNFT.getComponent(Transform).scale.setAll(0)





// const nfts: NFT[] = [makersPlaceNFT]
// for (let j = 0; j< nfts.length; j++)
// {
//   nfts[j].getComponent(Transform).rotate(Vector3.Up(), 270)
// }
// const swapNFTEntity = new Entity()

// // NOTE: Using the scale instead of the visibility to turn the NFT on / off 
// // as there are issues with the colliders getting in the way of each other
// // when the user tries to click on an NFT to get more information...
// swapNFTEntity.addComponent(
//   new utils.Interval(8000, () => {
//     for (let i = 0; i < nfts.length; i++) {
//       if (nfts[i].getComponent(Transform).scale.x == 0) {
//         nfts[i]
//         .getComponent(Transform)
//         .scale.set(
//           nfts[i].originalScale.x,
//           nfts[i].originalScale.y,
//           nfts[i].originalScale.z
//         )
        
//       } else {
//         nfts[i].getComponent(Transform).scale.setAll(0)
//       }
//     }
//   })
// )
// engine.addEntity(swapNFTEntity)

// video player
const myVideoClip = new VideoClip(
  "https://player.vimeo.com/external/676293821.m3u8?s=f8d6b28206c296cac92972c89d9712d4be06df68"
)
// #2
const myVideoTexture = new VideoTexture(myVideoClip)

// #3
const myMaterial = new Material()
myMaterial.albedoTexture = myVideoTexture
myMaterial.roughness = 1.0
myMaterial.specularIntensity = 0
myMaterial.metallic = 0
myMaterial.emissiveTexture = myVideoTexture
myMaterial.emissiveColor = Color3.White()
myMaterial.emissiveIntensity = 0.6
myMaterial.albedoColor = new Color3(0.5, 0, 0.5)



// #4
const screen = new Entity() 
screen.addComponent(new PlaneShape())
screen.addComponent(
  new Transform({
    position: new Vector3(4, 2, 15.5),
    scale: new Vector3(5, 2, 1)

  })
)
screen.getComponent(Transform).rotate(Vector3.Up(), 180)


screen.addComponent(myMaterial)
screen.addComponent(
  new OnPointerDown(() => {
    myVideoTexture.playing = !myVideoTexture.playing
  })
)
engine.addEntity(screen)

// #5
myVideoTexture.play()
myVideoTexture.pause()
myVideoTexture.loop = false 

// 
const screen_image = new Entity() 
screen_image.addComponent(new PlaneShape())
screen_image.addComponent(
  new Transform({
    position: new Vector3(7.5, 2.5, 15.5),
    scale: new Vector3(1, 1, 1)

  })
)

const sunUITexture = new Texture("images/mario.jpeg")

let QRMaterial = new Material()
    QRMaterial.metallic = 0
    QRMaterial.roughness = 1
    QRMaterial.specularIntensity = 0
    QRMaterial.albedoTexture = sunUITexture

screen_image.getComponent(Transform).rotate(Vector3.Up(), 180)
screen_image.addComponent(QRMaterial)
engine.addEntity(screen_image)



// Good morning mario


// gm_mario texture
const gmmVideoClip = new VideoClip(
  "https://player.vimeo.com/external/582455585.m3u8?s=17e9789fe35ce170a7fe9d9fef744145ccdaaaa1"
)

// #2
const gmmVideoTexture = new VideoTexture(gmmVideoClip)

// #3
const gmmMaterial = new Material()
gmmMaterial.albedoTexture = gmmVideoTexture
gmmMaterial.roughness = 1.0
gmmMaterial.specularIntensity = 0
gmmMaterial.metallic = 0
gmmMaterial.emissiveTexture = gmmVideoTexture
gmmMaterial.emissiveColor = Color3.White()
gmmMaterial.emissiveIntensity = 0.6
gmmMaterial.albedoColor = new Color3(0.5, 0, 0.5)



const GM_mario_screen = new Entity() 
GM_mario_screen.addComponent(new PlaneShape())
GM_mario_screen.addComponent(
  new Transform({
    position: new Vector3(9, 2.5, 15.5),
    scale: new Vector3(1, 1, 1)

  })
)
GM_mario_screen.getComponent(Transform).rotate(Vector3.Up(), 180)


GM_mario_screen.addComponent(gmmMaterial)
GM_mario_screen.addComponent(
  new OnPointerDown(() => {
    gmmVideoTexture.playing = !gmmVideoTexture.playing
  })
)
engine.addEntity(GM_mario_screen)

// #5
gmmVideoTexture.play()
gmmVideoTexture.loop = false 


// second image of mario in groud floor 
const screen_image2 = new Entity() 
screen_image2.addComponent(new PlaneShape())
screen_image2.addComponent(
  new Transform({
    position: new Vector3(7.5, 1.3, 15.5),
    scale: new Vector3(1, 1, 1)

  })
)

const sunUITexture2 = new Texture("images/support.png")

let QRMaterial2 = new Material()
    QRMaterial2.metallic = 0
    QRMaterial2.roughness = 1
    QRMaterial2.specularIntensity = 0
    QRMaterial2.albedoTexture = sunUITexture2

screen_image2.getComponent(Transform).rotate(Vector3.Up(), 180)
screen_image2.addComponent(QRMaterial2)
   
screen_image2.addComponent(
  
  new OnPointerDown(
    (e) => {
      if (e.buttonId == 0) {
        openExternalURL("https://www.patreon.com/mariowantstorun")
      } else if (e.buttonId == 1) {
        openExternalURL("https://github.com/decentraland-scenes/Wearables-In-world-Market")
      } 
      else if (e.buttonId == 2) {
        openExternalURL("https://github.com/decentraland-scenes/Wearables-In-world-Market")
      } 
    },
    { button: ActionButton.ANY ,
      showFeedback: true,
      hoverText: "open",
    }

  )
)
engine.addEntity(screen_image2)

// website of mario in groud floor 
const website_image2 = new Entity() 
website_image2.addComponent(new PlaneShape())
website_image2.addComponent(
  new Transform({
    position: new Vector3(9, 1.3, 15.5),
    scale: new Vector3(1, 1, 1)

  })
)

const webUITexture2 = new Texture("images/1.jpeg")

let QRMaterial3 = new Material() 
    QRMaterial3.metallic = 0
    QRMaterial3.roughness = 1
    QRMaterial3.specularIntensity = 0
    QRMaterial3.albedoTexture = webUITexture2

website_image2.getComponent(Transform).rotate(Vector3.Up(), 180)
website_image2.addComponent(QRMaterial3)
   
website_image2.addComponent(
  
  new OnPointerDown(
    (e) => {
      if (e.buttonId == 0) {
        openExternalURL("https://opensea.io/collection/good-morning-video-collection")
      } else if (e.buttonId == 1) {
        openExternalURL("https://github.com/decentraland-scenes/Wearables-In-world-Market")
      } 
      else if (e.buttonId == 2) {
        openExternalURL("https://github.com/decentraland-scenes/Wearables-In-world-Market")
      } 
    },
    { button: ActionButton.ANY ,
      showFeedback: true,
      hoverText: "open",
    }

  )
)
engine.addEntity(website_image2)





// // Top floor large screen 
// // video player
// const largeVideoClip = new VideoClip(
//   "https://player.vimeo.com/external/676293821.m3u8?s=f8d6b28206c296cac92972c89d9712d4be06df68"
// )
// const largeVideoTexture = new VideoTexture(largeVideoClip)

// const largeVideoClip2 = new VideoClip("https://player.vimeo.com/external/676041195.m3u8?s=d4bce29eb85e590419257a72dca82d81b6c4d803")
// const largeVideoTexture2 = new VideoTexture(largeVideoClip2)

// // #3
// const largeMaterial = new Material()
// largeMaterial.albedoTexture = largeVideoTexture
// largeMaterial.roughness = 1.0
// largeMaterial.specularIntensity = 0
// largeMaterial.metallic = 0
// largeMaterial.emissiveTexture = largeVideoTexture
// largeMaterial.emissiveColor = Color3.White()
// largeMaterial.emissiveIntensity = 0.6
// largeMaterial.albedoColor = new Color3(0.5, 0, 0.5)

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