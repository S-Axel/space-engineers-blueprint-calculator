export default
`<?xml version="1.0"?>
<Definitions xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <ShipBlueprints>
    <ShipBlueprint xsi:type="MyObjectBuilder_ShipBlueprintDefinition">
      <Id Type="MyObjectBuilder_ShipBlueprintDefinition" Subtype="Static Grid 7420" />
      <DisplayName>FRChewbie</DisplayName>
      <CubeGrids>
        <CubeGrid>
          <SubtypeName />
          <EntityId>80035999843747420</EntityId>
          <PersistentFlags>CastShadows InScene</PersistentFlags>
          <PositionAndOrientation>
            <Position x="34061.578708802874" y="25683.168684342083" z="43883.157531473888" />
            <Forward x="-0.753832638" y="0.619195163" z="0.21984911" />
            <Up x="0.553996742" y="0.419040918" z="0.719369352" />
            <Orientation>
              <X>0.5371481</X>
              <Y>0.5669184</Y>
              <Z>0.04417487</Z>
              <W>0.622996032</W>
            </Orientation>
          </PositionAndOrientation>
          <LocalPositionAndOrientation xsi:nil="true" />
          <GridSizeEnum>Large</GridSizeEnum>
          <CubeBlocks>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_CubeBlock">
              <SubtypeName>LargeBlockArmorBlock</SubtypeName>
              <EntityId>104315864494979434</EntityId>
              <IntegrityPercent>1.52590219E-05</IntegrityPercent>
              <BuildPercent>1.52590219E-05</BuildPercent>
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_MotorStator">
              <SubtypeName>LargeStator</SubtypeName>
              <EntityId>82057686650597407</EntityId>
              <Min x="0" y="1" z="0" />
              <IntegrityPercent>1.52590219E-05</IntegrityPercent>
              <BuildPercent>1.52590219E-05</BuildPercent>
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>true</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>1</NumberInGrid>
              <Enabled>true</Enabled>
              <TopBlockId>139225067364315154</TopBlockId>
              <ShareInertiaTensor>false</ShareInertiaTensor>
              <SafetyDetach>5</SafetyDetach>
              <RotorEntityId xsi:nil="true" />
              <WeldedEntityId xsi:nil="true" />
              <TargetVelocity>0</TargetVelocity>
              <MinAngle xsi:nil="true" />
              <MaxAngle xsi:nil="true" />
              <CurrentAngle>0</CurrentAngle>
              <LimitsActive>false</LimitsActive>
              <RotorLock>false</RotorLock>
              <Torque>3.36E+07</Torque>
              <BrakingTorque>0</BrakingTorque>
            </MyObjectBuilder_CubeBlock>
          </CubeBlocks>
          <IsStatic>true</IsStatic>
          <DisplayName>Static Grid 7420</DisplayName>
          <DestructibleBlocks>true</DestructibleBlocks>
          <IsRespawnGrid>false</IsRespawnGrid>
          <LocalCoordSys>59</LocalCoordSys>
          <TargetingTargets />
        </CubeGrid>
        <CubeGrid>
          <SubtypeName />
          <EntityId>97340751156840770</EntityId>
          <PersistentFlags>CastShadows InScene</PersistentFlags>
          <PositionAndOrientation>
            <Position x="34063.197033082659" y="25684.392607071575" z="43885.258483622325" />
            <Forward x="-0.753832638" y="0.619195163" z="0.21984911" />
            <Up x="0.553996742" y="0.419040918" z="0.719369352" />
            <Orientation>
              <X>0.5371481</X>
              <Y>0.5669184</Y>
              <Z>0.04417487</Z>
              <W>0.622996032</W>
            </Orientation>
          </PositionAndOrientation>
          <LocalPositionAndOrientation xsi:nil="true" />
          <GridSizeEnum>Large</GridSizeEnum>
          <CubeBlocks>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_MotorRotor">
              <SubtypeName>LargeRotor</SubtypeName>
              <EntityId>139225067364315154</EntityId>
              <IntegrityPercent>1.52590219E-05</IntegrityPercent>
              <BuildPercent>1.52590219E-05</BuildPercent>
              <BuiltBy>144115188075855914</BuiltBy>
              <ParentEntityId>82057686650597407</ParentEntityId>
              <YieldLastComponent>false</YieldLastComponent>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_CubeBlock">
              <SubtypeName>LargeBlockArmorBlock</SubtypeName>
              <EntityId>100077412693494353</EntityId>
              <Min x="0" y="1" z="0" />
              <IntegrityPercent>1.52590219E-05</IntegrityPercent>
              <BuildPercent>1.52590219E-05</BuildPercent>
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
          </CubeBlocks>
          <DisplayName>Large Grid 770</DisplayName>
          <DestructibleBlocks>true</DestructibleBlocks>
          <IsRespawnGrid>false</IsRespawnGrid>
          <LocalCoordSys>0</LocalCoordSys>
          <TargetingTargets />
        </CubeGrid>
      </CubeGrids>
      <EnvironmentType>None</EnvironmentType>
      <WorkshopId>0</WorkshopId>
      <OwnerSteamId>76561198047419561</OwnerSteamId>
      <Points>0</Points>
    </ShipBlueprint>
  </ShipBlueprints>
</Definitions>`;
