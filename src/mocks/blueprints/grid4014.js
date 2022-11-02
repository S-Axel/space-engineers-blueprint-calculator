export default
`<?xml version="1.0"?>
<Definitions xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <ShipBlueprints>
    <ShipBlueprint xsi:type="MyObjectBuilder_ShipBlueprintDefinition">
      <Id Type="MyObjectBuilder_ShipBlueprintDefinition" Subtype="Static Grid 4014" />
      <DisplayName>FRChewbie</DisplayName>
      <CubeGrids>
        <CubeGrid>
          <SubtypeName />
          <EntityId>131249674242264014</EntityId>
          <PersistentFlags>CastShadows InScene</PersistentFlags>
          <PositionAndOrientation>
            <Position x="34058.583728944475" y="25678.219694473919" z="43888.379031870616" />
            <Forward x="0.72935164" y="-0.660117269" z="-0.179697812" />
            <Up x="0.5564729" y="0.419623017" z="0.7171154" />
            <Orientation>
              <X>0.0260013677</X>
              <Y>-0.639902353</Y>
              <Z>-0.538063645</Z>
              <W>0.5480296</W>
            </Orientation>
          </PositionAndOrientation>
          <LocalPositionAndOrientation xsi:nil="true" />
          <GridSizeEnum>Large</GridSizeEnum>
          <CubeBlocks>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_CubeBlock">
              <SubtypeName>LargeBlockArmorBlock</SubtypeName>
              <EntityId>103196439417928220</EntityId>
              <IntegrityPercent>1.52590219E-05</IntegrityPercent>
              <BuildPercent>1.52590219E-05</BuildPercent>
              <ColorMaskHSV x="0" y="-0.8" z="0" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_MotorStator">
              <SubtypeName>LargeStator</SubtypeName>
              <EntityId>122813166274864790</EntityId>
              <Min x="0" y="1" z="0" />
              <IntegrityPercent>1.52590219E-05</IntegrityPercent>
              <BuildPercent>1.52590219E-05</BuildPercent>
              <ColorMaskHSV x="0" y="-0.8" z="0" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>true</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>1</NumberInGrid>
              <Enabled>true</Enabled>
              <TopBlockId>117429788730837244</TopBlockId>
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
          <DisplayName>Static Grid 4014</DisplayName>
          <DestructibleBlocks>true</DestructibleBlocks>
          <IsRespawnGrid>false</IsRespawnGrid>
          <LocalCoordSys>60</LocalCoordSys>
          <TargetingTargets />
        </CubeGrid>
        <CubeGrid>
          <SubtypeName />
          <EntityId>72990891002787738</EntityId>
          <PersistentFlags>CastShadows InScene</PersistentFlags>
          <PositionAndOrientation>
            <Position x="34060.2092553727" y="25679.445455887493" z="43890.473399851573" />
            <Forward x="0.7293514" y="-0.660117567" z="-0.179697931" />
            <Up x="0.556472659" y="0.4196217" z="0.7171164" />
            <Orientation>
              <X>0.02600173</X>
              <Y>-0.6399023</Y>
              <Z>-0.5380641</Z>
              <W>0.5480291</W>
            </Orientation>
          </PositionAndOrientation>
          <LocalPositionAndOrientation xsi:nil="true" />
          <GridSizeEnum>Large</GridSizeEnum>
          <CubeBlocks>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_MotorRotor">
              <SubtypeName>LargeRotor</SubtypeName>
              <EntityId>117429788730837244</EntityId>
              <IntegrityPercent>1.52590219E-05</IntegrityPercent>
              <BuildPercent>1.52590219E-05</BuildPercent>
              <BuiltBy>144115188075855914</BuiltBy>
              <ParentEntityId>122813166274864790</ParentEntityId>
              <YieldLastComponent>false</YieldLastComponent>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_MotorStator">
              <SubtypeName>LargeStator</SubtypeName>
              <EntityId>106329227686181393</EntityId>
              <Min x="0" y="1" z="0" />
              <IntegrityPercent>1.52590219E-05</IntegrityPercent>
              <BuildPercent>1.52590219E-05</BuildPercent>
              <ColorMaskHSV x="0" y="-0.8" z="0" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>true</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>1</NumberInGrid>
              <Enabled>true</Enabled>
              <TopBlockId>110771292866190025</TopBlockId>
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
          <DisplayName>Large Grid 7738</DisplayName>
          <DestructibleBlocks>true</DestructibleBlocks>
          <IsRespawnGrid>false</IsRespawnGrid>
          <LocalCoordSys>0</LocalCoordSys>
          <TargetingTargets />
        </CubeGrid>
        <CubeGrid>
          <SubtypeName />
          <EntityId>115149273577211455</EntityId>
          <PersistentFlags>CastShadows InScene</PersistentFlags>
          <PositionAndOrientation>
            <Position x="34061.834659730608" y="25680.67108760136" z="43892.567962382091" />
            <Forward x="0.729351938" y="-0.66011703" z="-0.179698288" />
            <Up x="0.5564722" y="0.419621229" z="0.7171171" />
            <Orientation>
              <X>0.0260023121</X>
              <Y>-0.6399021</Y>
              <Z>-0.5380643</Z>
              <W>0.5480291</W>
            </Orientation>
          </PositionAndOrientation>
          <LocalPositionAndOrientation xsi:nil="true" />
          <GridSizeEnum>Large</GridSizeEnum>
          <CubeBlocks>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_MotorRotor">
              <SubtypeName>LargeRotor</SubtypeName>
              <EntityId>110771292866190025</EntityId>
              <IntegrityPercent>1.52590219E-05</IntegrityPercent>
              <BuildPercent>1.52590219E-05</BuildPercent>
              <BuiltBy>144115188075855914</BuiltBy>
              <ParentEntityId>106329227686181393</ParentEntityId>
              <YieldLastComponent>false</YieldLastComponent>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_CubeBlock">
              <SubtypeName>LargeBlockArmorBlock</SubtypeName>
              <EntityId>128228228771308552</EntityId>
              <Min x="0" y="1" z="0" />
              <IntegrityPercent>1.52590219E-05</IntegrityPercent>
              <BuildPercent>1.52590219E-05</BuildPercent>
              <ColorMaskHSV x="0" y="-0.8" z="0" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
          </CubeBlocks>
          <DisplayName>Large Grid 1455</DisplayName>
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
