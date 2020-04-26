/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useLoader(GLTFLoader, '/cabbages.gltf')

  return (
    <group ref={group} {...props} dispose={null}>
      <scene name="AuxScene">
        <group>
          <mesh
            material={
              materials['Box material 1_93920da3-46b4-4b1e-9a0b-4cdf9aa026fa_46e9d766-6eaa-485a-acc5-1a2b2a4da777']
            }
            geometry={nodes.main_2.geometry}
            name="main_2"
          />
          <mesh
            material={
              materials['Box material 6_8c085fc6-b1f9-4685-95bb-f89861314608_36164fc5-f9e5-42c6-a24d-1566f874d0b6']
            }
            geometry={nodes.das_2.geometry}
            name="das_2"
          />
          <mesh
            material={
              materials['Box material 11_21561d6f-b990-4e59-b836-76a0fb20fae2_29a3641c-acc1-4dd3-95ac-e92451fe7f62']
            }
            geometry={nodes.sdaasd_2.geometry}
            name="sdaasd_2"
          />
          <mesh
            material={
              materials['Box material 7_bdf8c63d-5674-46f8-b473-c59552ad0e51_8080511f-d0ba-45ed-bcbb-8960b71a4406']
            }
            geometry={nodes.mid_4_2.geometry}
            name="mid_4_2"
          />
          <mesh
            material={
              materials['Box material 13_bba6e437-b257-46a1-8c39-76b0cde1f910_1c400638-5882-4b3f-990d-44e6f9598270']
            }
            geometry={nodes.mid_5_2.geometry}
            name="mid_5_2"
          />
          <mesh
            material={
              materials['Box material 4_2c64d34e-b375-449a-91ff-dc13003df6b7_e2cbbe11-88fc-4f02-ab31-e4f92cdf6583']
            }
            geometry={nodes.mid_1_2.geometry}
            name="mid_1_2"
          />
          <mesh
            material={
              materials['Box material 12_c293bd87-efcc-477e-8c1a-2eb14b372875_58224363-8d62-4e63-b0a4-3f8f8845e97b']
            }
            geometry={nodes.mid_2_2.geometry}
            name="mid_2_2"
          />
          <mesh
            material={
              materials['Box material 5_bd4901aa-6e24-4d1d-8237-a8ec78e41f75_d17afcb0-08f8-48a8-a421-0d4c84a4bad1']
            }
            geometry={nodes.side_2.geometry}
            name="side_2"
          />
          <mesh
            material={
              materials['Box material 2_753e2819-fc5e-49c0-b0d7-32581861b1a0_18813788-cd5a-4a37-9ac9-383ecbfc682a']
            }
            geometry={nodes.bot_2.geometry}
            name="bot_2"
          />
          <mesh
            material={
              materials['Box material 9_514dea90-c1bf-45f4-a437-dc19a23dc900_e36a54f7-c0b5-40a4-8a9f-c2c2df93c6c2']
            }
            geometry={nodes.bot_1_2.geometry}
            name="bot_1_2"
          />
          <mesh
            material={
              materials['Box material 3_05386261-4c16-40e7-8f53-a63a1c9db07b_fac4f24c-8f3f-4146-893c-ebc2f82b2ea3']
            }
            geometry={nodes.TOP_2.geometry}
            name="TOP_2"
          />
          <mesh
            material={
              materials['Box material 10_bf77a0ce-cefd-4c4c-8863-f7b947e09d09_3687f961-5af8-41e2-a5c3-c9e5e4d5a480']
            }
            geometry={nodes.side_1_2.geometry}
            name="side_1_2"
          />
          <mesh
            material={
              materials['Box material 8_05f1fabc-5dbf-42d7-84f6-087a72559541_86d5a500-1859-4edb-bd17-317f039507ec']
            }
            geometry={nodes.TOP1_2.geometry}
            name="TOP1_2"
          />
          <mesh
            material={
              materials['Box material 1_93920da3-46b4-4b1e-9a0b-4cdf9aa026fa 1_43fe2682-3a20-4f1f-9ae1-d360e8f8b0f4']
            }
            geometry={nodes.main_1.geometry}
            name="main_1"
          />
          <mesh
            material={
              materials['Box material 6_8c085fc6-b1f9-4685-95bb-f89861314608 1_0cab504c-4204-47c2-88bd-0476a6a14853']
            }
            geometry={nodes.das_1.geometry}
            name="das_1"
          />
          <mesh
            material={
              materials['Box material 11_21561d6f-b990-4e59-b836-76a0fb20fae2 1_015281d5-edc8-477b-aeec-dda3e29adaff']
            }
            geometry={nodes.sdaasd_1.geometry}
            name="sdaasd_1"
          />
          <mesh
            material={
              materials['Box material 7_bdf8c63d-5674-46f8-b473-c59552ad0e51 1_e76af97d-f0a3-4400-8866-5e02f5a4b9db']
            }
            geometry={nodes.mid_4_1.geometry}
            name="mid_4_1"
          />
          <mesh
            material={
              materials['Box material 13_bba6e437-b257-46a1-8c39-76b0cde1f910 1_4b32e287-354a-4362-90a1-faf791d0b40a']
            }
            geometry={nodes.mid_5_1.geometry}
            name="mid_5_1"
          />
          <mesh
            material={
              materials['Box material 4_2c64d34e-b375-449a-91ff-dc13003df6b7 1_9a8b35ee-b464-4be8-9b75-099c7c681af6']
            }
            geometry={nodes.mid_1_1.geometry}
            name="mid_1_1"
          />
          <mesh
            material={
              materials['Box material 12_c293bd87-efcc-477e-8c1a-2eb14b372875 1_ebba831f-6848-4f54-9d6a-b794ba49b040']
            }
            geometry={nodes.mid_2_1.geometry}
            name="mid_2_1"
          />
          <mesh
            material={
              materials['Box material 5_bd4901aa-6e24-4d1d-8237-a8ec78e41f75 1_fa45936a-acff-4fc7-b577-a3a7083ebedc']
            }
            geometry={nodes.side_1.geometry}
            name="side_1"
          />
          <mesh
            material={
              materials['Box material 2_753e2819-fc5e-49c0-b0d7-32581861b1a0 1_9736687a-78ea-4e4a-b13d-fa30d669e794']
            }
            geometry={nodes.bot_1.geometry}
            name="bot_1"
          />
          <mesh
            material={
              materials['Box material 9_514dea90-c1bf-45f4-a437-dc19a23dc900 1_dc1498ce-4ccb-4910-95e5-286bed555665']
            }
            geometry={nodes.bot_1_1.geometry}
            name="bot_1_1"
          />
          <mesh
            material={
              materials['Box material 3_05386261-4c16-40e7-8f53-a63a1c9db07b 1_148baa41-c322-4a24-8820-a7a58cb35903']
            }
            geometry={nodes.TOP_1.geometry}
            name="TOP_1"
          />
          <mesh
            material={
              materials['Box material 10_bf77a0ce-cefd-4c4c-8863-f7b947e09d09 1_c0bdc8ac-d226-4e7d-b86f-a4981ab20bb3']
            }
            geometry={nodes.side_1_1.geometry}
            name="side_1_1"
          />
          <mesh
            material={
              materials['Box material 8_05f1fabc-5dbf-42d7-84f6-087a72559541 1_587f4098-5fbd-4ea7-b48a-6beab0d1a266']
            }
            geometry={nodes.TOP1_1.geometry}
            name="TOP1_1"
          />
        </group>
      </scene>
    </group>
  )
}