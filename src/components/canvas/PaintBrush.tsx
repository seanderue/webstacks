import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/paint-brush/model.gltf',
  )
  return <primitive object={scene} {...props} />
}
