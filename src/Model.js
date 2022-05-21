/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/model.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[5.08, 44.43, -12.95]} rotation={[0.2, -1.3, 0.21]}>
        <mesh geometry={nodes.odm_textured_model_geo_1.geometry} material={materials.material0000} />
        <mesh geometry={nodes.odm_textured_model_geo_2.geometry} material={materials.material0001} />
        <mesh geometry={nodes.odm_textured_model_geo_3.geometry} material={materials.material0002} />
        <mesh geometry={nodes.odm_textured_model_geo_4.geometry} material={materials.material0003} />
        <mesh geometry={nodes.odm_textured_model_geo_5.geometry} material={materials.material0004} />
        <mesh geometry={nodes.odm_textured_model_geo_6.geometry} material={materials.material0005} />
        <mesh geometry={nodes.odm_textured_model_geo_7.geometry} material={materials.material0006} />
        <mesh geometry={nodes.odm_textured_model_geo_8.geometry} material={materials.material0007} />
        <mesh geometry={nodes.odm_textured_model_geo_9.geometry} material={materials.material0008} />
        <mesh geometry={nodes.odm_textured_model_geo_10.geometry} material={materials.material0009} />
        <mesh geometry={nodes.odm_textured_model_geo_11.geometry} material={materials.material0010} />
        <mesh geometry={nodes.odm_textured_model_geo_12.geometry} material={materials.material0011} />
        <mesh geometry={nodes.odm_textured_model_geo_13.geometry} material={materials.material0012} />
        <mesh geometry={nodes.odm_textured_model_geo_14.geometry} material={materials.material0013} />
        <mesh geometry={nodes.odm_textured_model_geo_15.geometry} material={materials.material0014} />
        <mesh geometry={nodes.odm_textured_model_geo_16.geometry} material={materials.material0015} />
        <mesh geometry={nodes.odm_textured_model_geo_17.geometry} material={materials.material0016} />
        <mesh geometry={nodes.odm_textured_model_geo_18.geometry} material={materials.material0017} />
        <mesh geometry={nodes.odm_textured_model_geo_19.geometry} material={materials.material0018} />
        <mesh geometry={nodes.odm_textured_model_geo_20.geometry} material={materials.material0019} />
        <mesh geometry={nodes.odm_textured_model_geo_21.geometry} material={materials.material0020} />
        <mesh geometry={nodes.odm_textured_model_geo_22.geometry} material={materials.material0021} />
        <mesh geometry={nodes.odm_textured_model_geo_23.geometry} material={materials.material0022} />
        <mesh geometry={nodes.odm_textured_model_geo_24.geometry} material={materials.material0023} />
        <mesh geometry={nodes.odm_textured_model_geo_25.geometry} material={materials.material0024} />
        <mesh geometry={nodes.odm_textured_model_geo_26.geometry} material={materials.material0025} />
        <mesh geometry={nodes.odm_textured_model_geo_27.geometry} material={materials.material0026} />
        <mesh geometry={nodes.odm_textured_model_geo_28.geometry} material={materials.material0027} />
        <mesh geometry={nodes.odm_textured_model_geo_29.geometry} material={materials.material0028} />
        <mesh geometry={nodes.odm_textured_model_geo_30.geometry} material={materials.material0029} />
        <mesh geometry={nodes.odm_textured_model_geo_31.geometry} material={materials.material0030} />
        <mesh geometry={nodes.odm_textured_model_geo_32.geometry} material={materials.material0031} />
        <mesh geometry={nodes.odm_textured_model_geo_33.geometry} material={materials.material0032} />
        <mesh geometry={nodes.odm_textured_model_geo_34.geometry} material={materials.material0033} />
        <mesh geometry={nodes.odm_textured_model_geo_35.geometry} material={materials.material0034} />
        <mesh geometry={nodes.odm_textured_model_geo_36.geometry} material={materials.material0035} />
        <mesh geometry={nodes.odm_textured_model_geo_37.geometry} material={materials.material0036} />
        <mesh geometry={nodes.odm_textured_model_geo_38.geometry} material={materials.material0037} />
        <mesh geometry={nodes.odm_textured_model_geo_39.geometry} material={materials.material0038} />
      </group>
    </group>
  )
}

useGLTF.preload('/model.glb')
