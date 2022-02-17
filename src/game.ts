import * as utils from '@dcl/ecs-scene-utils'
import { InfoPanel } from "infoPanel"
import Script1 from "../1746d432-ba19-4b2e-819f-d16cf5a64236/src/item"
import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'

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
    position: new Vector3(4, 2, 14.5),
    scale: new Vector3(4, 2, 1)

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
    position: new Vector3(7.5, 2.5, 14.5),
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
    position: new Vector3(9, 2.5, 14.5),
    scale: new Vector3(1.7, 1, 1)

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
    position: new Vector3(7.5, 1.3, 14.5),
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
    position: new Vector3(9, 1.3, 14.5),
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


// on demand video script 

// gm_mario texture
)



const large_screen = new Entity() 
large_screen.addComponent(new PlaneShape())
large_screen.addComponent(
  new Transform({
    position: new Vector3(7, 15, 14.5),
    scale: new Vector3(12, 6, 1)

  })
)
large_screen.setParent(_scene)
large_screen.getComponent(Transform).rotate(Vector3.Up(), 180)

const videoClip_large = new VideoClip("https://stream.mux.com/pxpzVpTHFpsNOGVrWIiH0101dSyIzff364tSz01KigX7oM.m3u8")
const large_videoTexture = new VideoTexture(videoClip_large)
// videoTexture.play()

const largeMaterial = new Material()
largeMaterial.albedoTexture = large_videoTexture
largeMaterial.roughness = 1.0
largeMaterial.specularIntensity = 0
largeMaterial.metallic = 0
largeMaterial.emissiveTexture = large_videoTexture
largeMaterial.emissiveColor = Color3.White()
largeMaterial.emissiveIntensity = 0.6
largeMaterial.albedoColor = new Color3(0.5, 0, 0.5)

large_screen.addComponent(largeMaterial)
large_screen.addComponent(
  new OnPointerDown(() => {
    large_videoTexture.playing = !large_videoTexture.playing
  })
)
engine.addEntity(large_screen) 

large_videoTexture.play()
large_videoTexture.loop = false 

// #5


// Define song list
// const videoScreenStanding = new Entity('videoScreenStanding')
// engine.addEntity(videoScreenStanding)
// videoScreenStanding.setParent(_scene)
// const transform4 = new Transform({
//   position: new Vector3(7, 0, 13.5),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })

// videoScreenStanding.addComponentOrReplace(transform4)
// const channelId = Math.random().toString(16).slice(2)
// const channelBus = new MessageBus()
// const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
// const options = { inventory }

// const script1 = new Script1()
// script1.init(options)
// Script1.spawn(large_screen, 
//               {"startOn":false,"onClickText":"Play video","volume":1,
//               "onClick":[{"entityName":"videoScreenStanding","actionId":"toggle","values":{}}],
//               "onActivate":[{"entityName":"videoScreenStanding","actionId":"activate","values":{}}],
//               "customStation":"https://player.vimeo.com/external/582455585.m3u8?s=17e9789fe35ce170a7fe9d9fef744145ccdaaaa1",
//               "image":"images/mario.jpeg"}, 
//               createChannel(channelId, large_screen, channelBus))