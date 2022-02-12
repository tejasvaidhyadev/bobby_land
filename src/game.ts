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

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(16, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8977417945861816, 1, 0.8904253244400024)
})
entity2.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("cdcf9ef7-2e33-4dc1-911e-98fcf8ad339b/55.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
entity2.addComponentOrReplace(gltfShape2)

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
    position: new Vector3(13, 2, 10),
    scale: new Vector3(4, 2, 1)

  })
)
screen.getComponent(Transform).rotate(Vector3.Up(), 270)


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
myVideoTexture.loop = true 

// 
const screen_image = new Entity() 
screen_image.addComponent(new PlaneShape())
screen_image.addComponent(
  new Transform({
    position: new Vector3(13, 2.5, 7),
    scale: new Vector3(1, 1, 1)

  })
)

const sunUITexture = new Texture("images/mario.jpeg")

let QRMaterial = new Material()
    QRMaterial.metallic = 0
    QRMaterial.roughness = 1
    QRMaterial.specularIntensity = 0
    QRMaterial.albedoTexture = sunUITexture

screen_image.getComponent(Transform).rotate(Vector3.Up(), 90)
screen_image.addComponent(QRMaterial)
engine.addEntity(screen_image)



// Good morning mario


// gm_mario texture
const gmmVideoClip = new VideoClip(
  "https://player.vimeo.com/external/675798159.m3u8?s=ef3d71a7739a06eae282c03fd215b786c81798c1"
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
    position: new Vector3(13, 1.5, 7),
    scale: new Vector3(1, 1, 1)

  })
)
GM_mario_screen.getComponent(Transform).rotate(Vector3.Up(), 270)


GM_mario_screen.addComponent(gmmMaterial)
GM_mario_screen.addComponent(
  new OnPointerDown(() => {
    gmmVideoTexture.playing = !gmmVideoTexture.playing
  })
)
engine.addEntity(GM_mario_screen)

// #5
gmmVideoTexture.play()
gmmVideoTexture.loop = true 