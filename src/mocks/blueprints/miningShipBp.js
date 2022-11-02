export default
`<?xml version="1.0"?>
<Definitions xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <ShipBlueprints>
    <ShipBlueprint xsi:type="MyObjectBuilder_ShipBlueprintDefinition">
      <Id Type="MyObjectBuilder_ShipBlueprintDefinition" Subtype="Mining Ship" />
      <DisplayName>FRChewbie</DisplayName>
      <DLC>DecorativeBlocks</DLC>
      <CubeGrids>
        <CubeGrid>
          <SubtypeName />
          <EntityId>126250062940939950</EntityId>
          <PersistentFlags>CastShadows InScene</PersistentFlags>
          <PositionAndOrientation>
            <Position x="34060.461854029505" y="25997.059312609868" z="43789.988978422756" />
            <Forward x="0.753317356" y="-0.6228524" z="-0.211110771" />
            <Up x="0.5505979" y="0.421757758" z="0.7203904" />
            <Orientation>
              <X>0.0432209</X>
              <Y>-0.626559258</Y>
              <Z>-0.535959959</Z>
              <W>0.5641829</W>
            </Orientation>
          </PositionAndOrientation>
          <LocalPositionAndOrientation xsi:nil="true" />
          <GridSizeEnum>Large</GridSizeEnum>
          <CubeBlocks>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Thrust">
              <SubtypeName>LargeBlockLargeAtmosphericThrust</SubtypeName>
              <EntityId>102073863666201650</EntityId>
              <Min x="3" y="21" z="9" />
              <BlockOrientation Forward="Right" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyTimerComponent</TypeId>
                    <Component xsi:type="MyObjectBuilder_TimerComponent">
                      <Repeat>true</Repeat>
                      <TimeToEvent>0</TimeToEvent>
                      <SetTimeMinutes>0</SetTimeMinutes>
                      <TimerEnabled>true</TimerEnabled>
                      <RemoveEntityOnTimer>false</RemoveEntityOnTimer>
                      <TimerType>Frame100</TimerType>
                      <FramesFromLastTrigger>0</FramesFromLastTrigger>
                      <TimerTickInFrames>100</TimerTickInFrames>
                      <IsSessionUpdateEnabled>false</IsSessionUpdateEnabled>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>14</NumberInGrid>
              <Enabled>true</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_CubeBlock">
              <SubtypeName>LargeBlockArmorBlock</SubtypeName>
              <Min x="2" y="18" z="13" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_CubeBlock">
              <SubtypeName>LargeBlockArmorBlock</SubtypeName>
              <Min x="3" y="18" z="12" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_CubeBlock">
              <SubtypeName>LargeBlockArmorBlock</SubtypeName>
              <Min x="4" y="18" z="12" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_ConveyorConnector">
              <SubtypeName>ConveyorTubeDuct</SubtypeName>
              <EntityId>87399385545966522</EntityId>
              <Min x="2" y="17" z="12" />
              <BlockOrientation Forward="Right" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_ConveyorConnector">
              <SubtypeName>ConveyorTubeDuct</SubtypeName>
              <EntityId>96210259269312798</EntityId>
              <Min x="2" y="22" z="12" />
              <BlockOrientation Forward="Right" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_CubeBlock">
              <SubtypeName>LargeBlockArmorBlock</SubtypeName>
              <Min x="0" y="18" z="12" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_ConveyorConnector">
              <SubtypeName>ConveyorTubeDuct</SubtypeName>
              <EntityId>117078772469281703</EntityId>
              <Min x="2" y="14" z="12" />
              <BlockOrientation Forward="Right" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_ConveyorConnector">
              <SubtypeName>ConveyorTubeDuct</SubtypeName>
              <EntityId>124752836810449714</EntityId>
              <Min x="2" y="16" z="12" />
              <BlockOrientation Forward="Right" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_ConveyorConnector">
              <SubtypeName>ConveyorTubeDuct</SubtypeName>
              <EntityId>133420318092562378</EntityId>
              <Min x="2" y="13" z="12" />
              <BlockOrientation Forward="Right" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_CubeBlock">
              <SubtypeName>LargeBlockArmorBlock</SubtypeName>
              <Min x="1" y="18" z="12" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_CubeBlock">
              <SubtypeName>LargeBlockArmorBlock</SubtypeName>
              <Min x="2" y="18" z="11" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_ConveyorConnector">
              <SubtypeName>ConveyorTubeDuct</SubtypeName>
              <EntityId>83482297862476334</EntityId>
              <Min x="2" y="21" z="12" />
              <BlockOrientation Forward="Right" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_ConveyorConnector">
              <SubtypeName>ConveyorTubeDuct</SubtypeName>
              <EntityId>133994799374780989</EntityId>
              <Min x="2" y="20" z="12" />
              <BlockOrientation Forward="Right" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_CubeBlock">
              <SubtypeName>LargeBlockArmorBlock</SubtypeName>
              <Min x="2" y="18" z="10" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_CubeBlock">
              <SubtypeName>LargeBlockArmorBlock</SubtypeName>
              <Min x="2" y="18" z="14" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_ConveyorConnector">
              <SubtypeName>ConveyorTubeDuct</SubtypeName>
              <EntityId>108934040849423901</EntityId>
              <Min x="2" y="19" z="12" />
              <BlockOrientation Forward="Right" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_ConveyorConnector">
              <SubtypeName>ConveyorTubeDuct</SubtypeName>
              <EntityId>110185560383881197</EntityId>
              <Min x="2" y="24" z="12" />
              <BlockOrientation Forward="Right" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_ConveyorConnector">
              <SubtypeName>ConveyorTubeDuct</SubtypeName>
              <EntityId>103153994303946760</EntityId>
              <Min x="2" y="18" z="12" />
              <BlockOrientation Forward="Right" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Conveyor">
              <SubtypeName>LargeBlockConveyor</SubtypeName>
              <EntityId>72243917772862062</EntityId>
              <Min x="2" y="2" z="12" />
              <BlockOrientation Forward="Left" Up="Up" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_ConveyorConnector">
              <SubtypeName>ConveyorTubeDuct</SubtypeName>
              <EntityId>78279004622153623</EntityId>
              <Min x="2" y="12" z="12" />
              <BlockOrientation Forward="Right" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_ConveyorConnector">
              <SubtypeName>ConveyorTubeDuct</SubtypeName>
              <EntityId>129729896545503828</EntityId>
              <Min x="2" y="15" z="12" />
              <BlockOrientation Forward="Right" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_ConveyorSorter">
              <SubtypeName>LargeBlockConveyorSorter</SubtypeName>
              <EntityId>105215999490295410</EntityId>
              <Min x="2" y="3" z="12" />
              <IntegrityPercent>0.982681036</IntegrityPercent>
              <BlockOrientation Forward="Up" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <ConstructionStockpile>
                <Items xsi:type="MyObjectBuilder_StockpileItem">
                  <Amount>6</Amount>
                  <PhysicalContent xsi:type="MyObjectBuilder_Ore">
                    <SubtypeName>Scrap</SubtypeName>
                  </PhysicalContent>
                </Items>
              </ConstructionStockpile>
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>1</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <CustomName>Min 3 Trieur Foreuses Out</CustomName>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>true</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>1</NumberInGrid>
              <Enabled>true</Enabled>
              <IsWhiteList>false</IsWhiteList>
              <DefinitionIds />
              <DefinitionTypes />
              <DrainAll>false</DrainAll>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_CargoContainer">
              <SubtypeName>LargeBlockLargeContainer</SubtypeName>
              <EntityId>94720054201814586</EntityId>
              <Min x="1" y="5" z="11" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items>
                        <MyObjectBuilder_InventoryItem>
                          <Amount>1036666.424789</Amount>
                          <PhysicalContent xsi:type="MyObjectBuilder_Ore">
                            <SubtypeName>Ice</SubtypeName>
                            <MaterialNameString>Ice_03</MaterialNameString>
                          </PhysicalContent>
                          <ItemId>0</ItemId>
                        </MyObjectBuilder_InventoryItem>
                      </Items>
                      <nextItemId>0</nextItemId>
                      <Volume>421.875008</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanReceive CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <CustomName>Min 3 Grand conteneur</CustomName>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>true</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>2</NumberInGrid>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Conveyor">
              <SubtypeName>LargeBlockConveyor</SubtypeName>
              <EntityId>109985598216788536</EntityId>
              <Min x="2" y="4" z="12" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_ConveyorConnector">
              <SubtypeName>ConveyorTube</SubtypeName>
              <EntityId>75821340267349620</EntityId>
              <Min x="2" y="4" z="11" />
              <BlockOrientation Forward="Left" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_ShipConnector">
              <SubtypeName>Connector</SubtypeName>
              <EntityId>132004982452362216</EntityId>
              <Min x="2" y="4" z="10" />
              <BlockOrientation Forward="Forward" Up="Left" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <DeformationRatio>0.5</DeformationRatio>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>8</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                  <ComponentData>
                    <TypeId>MyTimerComponent</TypeId>
                    <Component xsi:type="MyObjectBuilder_TimerComponent">
                      <Repeat>true</Repeat>
                      <TimeToEvent>0</TimeToEvent>
                      <SetTimeMinutes>0</SetTimeMinutes>
                      <TimerEnabled>true</TimerEnabled>
                      <RemoveEntityOnTimer>false</RemoveEntityOnTimer>
                      <TimerType>Frame10</TimerType>
                      <FramesFromLastTrigger>10</FramesFromLastTrigger>
                      <TimerTickInFrames>80</TimerTickInFrames>
                      <IsSessionUpdateEnabled>false</IsSessionUpdateEnabled>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <CustomName>Min 3 Connecteur</CustomName>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>true</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>2</NumberInGrid>
              <Enabled>true</Enabled>
              <MasterToSlaveTransform xsi:nil="true" />
              <MasterToSlaveGrid xsi:nil="true" />
              <IsMaster>true</IsMaster>
              <TradingEnabled>false</TradingEnabled>
              <AutoUnlockTime>0</AutoUnlockTime>
              <TimeOfConnection>0</TimeOfConnection>
              <IsParkingEnabled>true</IsParkingEnabled>
              <IsPowerTransferOverrideEnabled>false</IsPowerTransferOverrideEnabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_ConveyorSorter">
              <SubtypeName>LargeBlockConveyorSorter</SubtypeName>
              <EntityId>137242257741279547</EntityId>
              <Min x="3" y="4" z="12" />
              <BlockOrientation Forward="Right" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>1</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <CustomName>Min 3 Trieur Ejection 1</CustomName>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>true</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>3</NumberInGrid>
              <Enabled>true</Enabled>
              <IsWhiteList>true</IsWhiteList>
              <DefinitionIds>
                <SerializableDefinitionId Type="MyObjectBuilder_Ore" Subtype="Stone" />
              </DefinitionIds>
              <DefinitionTypes />
              <DrainAll>false</DrainAll>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_ConveyorSorter">
              <SubtypeName>LargeBlockConveyorSorter</SubtypeName>
              <EntityId>78868016374076619</EntityId>
              <Min x="1" y="4" z="12" />
              <BlockOrientation Forward="Left" Up="Down" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>1</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <CustomName>Min 3 Trieur Ejection 2</CustomName>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>true</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>4</NumberInGrid>
              <Enabled>true</Enabled>
              <IsWhiteList>true</IsWhiteList>
              <DefinitionIds>
                <SerializableDefinitionId Type="MyObjectBuilder_Ore" Subtype="Stone" />
              </DefinitionIds>
              <DefinitionTypes />
              <DrainAll>false</DrainAll>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_ConveyorConnector">
              <SubtypeName>ConveyorTubeCurved</SubtypeName>
              <EntityId>123705363189050759</EntityId>
              <Min x="4" y="4" z="12" />
              <BlockOrientation Forward="Down" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Conveyor">
              <SubtypeName>LargeBlockConveyor</SubtypeName>
              <EntityId>100438861397078769</EntityId>
              <Min x="4" y="4" z="13" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Conveyor">
              <SubtypeName>ConveyorTubeT</SubtypeName>
              <EntityId>133472699372670361</EntityId>
              <Min x="3" y="4" z="13" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Conveyor">
              <SubtypeName>ConveyorTubeT</SubtypeName>
              <EntityId>81753083686783714</EntityId>
              <Min x="2" y="4" z="13" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Conveyor">
              <SubtypeName>ConveyorTubeT</SubtypeName>
              <EntityId>102426484693296201</EntityId>
              <Min x="1" y="4" z="13" />
              <BlockOrientation Forward="Up" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_ConveyorConnector">
              <SubtypeName>ConveyorTubeCurved</SubtypeName>
              <EntityId>131152206475861747</EntityId>
              <Min x="0" y="4" z="12" />
              <BlockOrientation Forward="Up" Up="Left" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Conveyor">
              <SubtypeName>LargeBlockConveyor</SubtypeName>
              <EntityId>130766975113893158</EntityId>
              <Min x="0" y="4" z="13" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_ConveyorConnector">
              <SubtypeName>ConveyorTubeCurved</SubtypeName>
              <EntityId>125111368994585786</EntityId>
              <Min x="4" y="3" z="13" />
              <BlockOrientation Forward="Forward" Up="Down" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Conveyor">
              <SubtypeName>ConveyorTubeT</SubtypeName>
              <EntityId>99985048400675360</EntityId>
              <Min x="3" y="3" z="13" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Conveyor">
              <SubtypeName>ConveyorTubeT</SubtypeName>
              <EntityId>104677679923020900</EntityId>
              <Min x="2" y="3" z="13" />
              <BlockOrientation Forward="Up" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Conveyor">
              <SubtypeName>ConveyorTubeT</SubtypeName>
              <EntityId>90873361562216950</EntityId>
              <Min x="1" y="3" z="13" />
              <BlockOrientation Forward="Up" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_ConveyorConnector">
              <SubtypeName>ConveyorTubeCurved</SubtypeName>
              <EntityId>76234785549031532</EntityId>
              <Min x="0" y="3" z="13" />
              <BlockOrientation Forward="Forward" Up="Left" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_ShipConnector">
              <SubtypeName>Connector</SubtypeName>
              <EntityId>102666112890325725</EntityId>
              <Min x="1" y="4" z="14" />
              <BlockOrientation Forward="Backward" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <DeformationRatio>0.5</DeformationRatio>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>8</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                  <ComponentData>
                    <TypeId>MyTimerComponent</TypeId>
                    <Component xsi:type="MyObjectBuilder_TimerComponent">
                      <Repeat>true</Repeat>
                      <TimeToEvent>0</TimeToEvent>
                      <SetTimeMinutes>0</SetTimeMinutes>
                      <TimerEnabled>true</TimerEnabled>
                      <RemoveEntityOnTimer>false</RemoveEntityOnTimer>
                      <TimerType>Frame10</TimerType>
                      <FramesFromLastTrigger>20</FramesFromLastTrigger>
                      <TimerTickInFrames>80</TimerTickInFrames>
                      <IsSessionUpdateEnabled>false</IsSessionUpdateEnabled>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>3</NumberInGrid>
              <Enabled>true</Enabled>
              <ThrowOut>true</ThrowOut>
              <CollectAll>true</CollectAll>
              <MasterToSlaveTransform xsi:nil="true" />
              <MasterToSlaveGrid xsi:nil="true" />
              <IsMaster>true</IsMaster>
              <TradingEnabled>false</TradingEnabled>
              <AutoUnlockTime>0</AutoUnlockTime>
              <TimeOfConnection>0</TimeOfConnection>
              <IsParkingEnabled>true</IsParkingEnabled>
              <IsPowerTransferOverrideEnabled>false</IsPowerTransferOverrideEnabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_ShipConnector">
              <SubtypeName>Connector</SubtypeName>
              <EntityId>82661394199955388</EntityId>
              <Min x="2" y="4" z="14" />
              <BlockOrientation Forward="Backward" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <DeformationRatio>0.5</DeformationRatio>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>8</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                  <ComponentData>
                    <TypeId>MyTimerComponent</TypeId>
                    <Component xsi:type="MyObjectBuilder_TimerComponent">
                      <Repeat>true</Repeat>
                      <TimeToEvent>0</TimeToEvent>
                      <SetTimeMinutes>0</SetTimeMinutes>
                      <TimerEnabled>true</TimerEnabled>
                      <RemoveEntityOnTimer>false</RemoveEntityOnTimer>
                      <TimerType>Frame10</TimerType>
                      <FramesFromLastTrigger>60</FramesFromLastTrigger>
                      <TimerTickInFrames>80</TimerTickInFrames>
                      <IsSessionUpdateEnabled>false</IsSessionUpdateEnabled>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>4</NumberInGrid>
              <Enabled>true</Enabled>
              <ThrowOut>true</ThrowOut>
              <CollectAll>true</CollectAll>
              <MasterToSlaveTransform xsi:nil="true" />
              <MasterToSlaveGrid xsi:nil="true" />
              <IsMaster>true</IsMaster>
              <TradingEnabled>false</TradingEnabled>
              <AutoUnlockTime>0</AutoUnlockTime>
              <TimeOfConnection>0</TimeOfConnection>
              <IsParkingEnabled>true</IsParkingEnabled>
              <IsPowerTransferOverrideEnabled>false</IsPowerTransferOverrideEnabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_ShipConnector">
              <SubtypeName>Connector</SubtypeName>
              <EntityId>72119906441267907</EntityId>
              <Min x="3" y="4" z="14" />
              <BlockOrientation Forward="Backward" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <DeformationRatio>0.5</DeformationRatio>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>8</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                  <ComponentData>
                    <TypeId>MyTimerComponent</TypeId>
                    <Component xsi:type="MyObjectBuilder_TimerComponent">
                      <Repeat>true</Repeat>
                      <TimeToEvent>0</TimeToEvent>
                      <SetTimeMinutes>0</SetTimeMinutes>
                      <TimerEnabled>true</TimerEnabled>
                      <RemoveEntityOnTimer>false</RemoveEntityOnTimer>
                      <TimerType>Frame10</TimerType>
                      <FramesFromLastTrigger>50</FramesFromLastTrigger>
                      <TimerTickInFrames>80</TimerTickInFrames>
                      <IsSessionUpdateEnabled>false</IsSessionUpdateEnabled>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>5</NumberInGrid>
              <Enabled>true</Enabled>
              <ThrowOut>true</ThrowOut>
              <CollectAll>true</CollectAll>
              <MasterToSlaveTransform xsi:nil="true" />
              <MasterToSlaveGrid xsi:nil="true" />
              <IsMaster>true</IsMaster>
              <TradingEnabled>false</TradingEnabled>
              <AutoUnlockTime>0</AutoUnlockTime>
              <TimeOfConnection>0</TimeOfConnection>
              <IsParkingEnabled>true</IsParkingEnabled>
              <IsPowerTransferOverrideEnabled>false</IsPowerTransferOverrideEnabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_ShipConnector">
              <SubtypeName>Connector</SubtypeName>
              <EntityId>102958676540043979</EntityId>
              <Min x="3" y="3" z="14" />
              <BlockOrientation Forward="Backward" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <DeformationRatio>0.5</DeformationRatio>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>8</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                  <ComponentData>
                    <TypeId>MyTimerComponent</TypeId>
                    <Component xsi:type="MyObjectBuilder_TimerComponent">
                      <Repeat>true</Repeat>
                      <TimeToEvent>0</TimeToEvent>
                      <SetTimeMinutes>0</SetTimeMinutes>
                      <TimerEnabled>true</TimerEnabled>
                      <RemoveEntityOnTimer>false</RemoveEntityOnTimer>
                      <TimerType>Frame10</TimerType>
                      <FramesFromLastTrigger>20</FramesFromLastTrigger>
                      <TimerTickInFrames>80</TimerTickInFrames>
                      <IsSessionUpdateEnabled>false</IsSessionUpdateEnabled>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>6</NumberInGrid>
              <Enabled>true</Enabled>
              <ThrowOut>true</ThrowOut>
              <CollectAll>true</CollectAll>
              <MasterToSlaveTransform xsi:nil="true" />
              <MasterToSlaveGrid xsi:nil="true" />
              <IsMaster>true</IsMaster>
              <TradingEnabled>false</TradingEnabled>
              <AutoUnlockTime>0</AutoUnlockTime>
              <TimeOfConnection>0</TimeOfConnection>
              <IsParkingEnabled>true</IsParkingEnabled>
              <IsPowerTransferOverrideEnabled>false</IsPowerTransferOverrideEnabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_ShipConnector">
              <SubtypeName>Connector</SubtypeName>
              <EntityId>76741597623662478</EntityId>
              <Min x="2" y="3" z="14" />
              <BlockOrientation Forward="Backward" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <DeformationRatio>0.5</DeformationRatio>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>8</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                  <ComponentData>
                    <TypeId>MyTimerComponent</TypeId>
                    <Component xsi:type="MyObjectBuilder_TimerComponent">
                      <Repeat>true</Repeat>
                      <TimeToEvent>0</TimeToEvent>
                      <SetTimeMinutes>0</SetTimeMinutes>
                      <TimerEnabled>true</TimerEnabled>
                      <RemoveEntityOnTimer>false</RemoveEntityOnTimer>
                      <TimerType>Frame10</TimerType>
                      <FramesFromLastTrigger>20</FramesFromLastTrigger>
                      <TimerTickInFrames>80</TimerTickInFrames>
                      <IsSessionUpdateEnabled>false</IsSessionUpdateEnabled>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>7</NumberInGrid>
              <Enabled>true</Enabled>
              <ThrowOut>true</ThrowOut>
              <CollectAll>true</CollectAll>
              <MasterToSlaveTransform xsi:nil="true" />
              <MasterToSlaveGrid xsi:nil="true" />
              <IsMaster>true</IsMaster>
              <TradingEnabled>false</TradingEnabled>
              <AutoUnlockTime>0</AutoUnlockTime>
              <TimeOfConnection>0</TimeOfConnection>
              <IsParkingEnabled>true</IsParkingEnabled>
              <IsPowerTransferOverrideEnabled>false</IsPowerTransferOverrideEnabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_ShipConnector">
              <SubtypeName>Connector</SubtypeName>
              <EntityId>138435536507378954</EntityId>
              <Min x="1" y="3" z="14" />
              <BlockOrientation Forward="Backward" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <DeformationRatio>0.5</DeformationRatio>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>8</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                  <ComponentData>
                    <TypeId>MyTimerComponent</TypeId>
                    <Component xsi:type="MyObjectBuilder_TimerComponent">
                      <Repeat>true</Repeat>
                      <TimeToEvent>0</TimeToEvent>
                      <SetTimeMinutes>0</SetTimeMinutes>
                      <TimerEnabled>true</TimerEnabled>
                      <RemoveEntityOnTimer>false</RemoveEntityOnTimer>
                      <TimerType>Frame10</TimerType>
                      <FramesFromLastTrigger>60</FramesFromLastTrigger>
                      <TimerTickInFrames>80</TimerTickInFrames>
                      <IsSessionUpdateEnabled>false</IsSessionUpdateEnabled>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>8</NumberInGrid>
              <Enabled>true</Enabled>
              <ThrowOut>true</ThrowOut>
              <CollectAll>true</CollectAll>
              <MasterToSlaveTransform xsi:nil="true" />
              <MasterToSlaveGrid xsi:nil="true" />
              <IsMaster>true</IsMaster>
              <TradingEnabled>false</TradingEnabled>
              <AutoUnlockTime>0</AutoUnlockTime>
              <TimeOfConnection>0</TimeOfConnection>
              <IsParkingEnabled>true</IsParkingEnabled>
              <IsPowerTransferOverrideEnabled>false</IsPowerTransferOverrideEnabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_BatteryBlock">
              <SubtypeName>LargeBlockBatteryBlock</SubtypeName>
              <EntityId>72505761272740103</EntityId>
              <Min x="3" y="8" z="13" />
              <BlockOrientation Forward="Left" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>2</NumberInGrid>
              <Enabled>true</Enabled>
              <CurrentStoredPower>2.84558129</CurrentStoredPower>
              <ProducerEnabled>true</ProducerEnabled>
              <MaxStoredPower>0</MaxStoredPower>
              <SemiautoEnabled>false</SemiautoEnabled>
              <OnlyDischargeEnabled>false</OnlyDischargeEnabled>
              <ChargeMode>0</ChargeMode>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_BatteryBlock">
              <SubtypeName>LargeBlockBatteryBlock</SubtypeName>
              <EntityId>111190067491762018</EntityId>
              <Min x="3" y="8" z="12" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>1</NumberInGrid>
              <Enabled>true</Enabled>
              <CurrentStoredPower>2.84623551</CurrentStoredPower>
              <ProducerEnabled>true</ProducerEnabled>
              <MaxStoredPower>0</MaxStoredPower>
              <SemiautoEnabled>false</SemiautoEnabled>
              <OnlyDischargeEnabled>false</OnlyDischargeEnabled>
              <ChargeMode>0</ChargeMode>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_ConveyorConnector">
              <SubtypeName>ConveyorTubeDuct</SubtypeName>
              <EntityId>139311578577786892</EntityId>
              <Min x="2" y="11" z="12" />
              <BlockOrientation Forward="Right" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Conveyor">
              <SubtypeName>LargeBlockConveyor</SubtypeName>
              <EntityId>91305563043515515</EntityId>
              <Min x="2" y="10" z="12" />
              <BlockOrientation Forward="Left" Up="Up" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_ConveyorConnector">
              <SubtypeName>ConveyorTubeDuct</SubtypeName>
              <EntityId>137211648678097419</EntityId>
              <Min x="2" y="9" z="12" />
              <BlockOrientation Forward="Right" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Conveyor">
              <SubtypeName>LargeBlockConveyor</SubtypeName>
              <EntityId>94973403533104716</EntityId>
              <Min x="2" y="8" z="12" />
              <BlockOrientation Forward="Backward" Up="Up" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_BatteryBlock">
              <SubtypeName>LargeBlockBatteryBlock</SubtypeName>
              <EntityId>92513650214676978</EntityId>
              <Min x="1" y="8" z="13" />
              <BlockOrientation Forward="Forward" Up="Left" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>4</NumberInGrid>
              <Enabled>true</Enabled>
              <CurrentStoredPower>2.8447578</CurrentStoredPower>
              <ProducerEnabled>true</ProducerEnabled>
              <MaxStoredPower>0</MaxStoredPower>
              <SemiautoEnabled>false</SemiautoEnabled>
              <OnlyDischargeEnabled>false</OnlyDischargeEnabled>
              <ChargeMode>0</ChargeMode>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_BatteryBlock">
              <SubtypeName>LargeBlockBatteryBlock</SubtypeName>
              <EntityId>118452905087533750</EntityId>
              <Min x="1" y="8" z="12" />
              <BlockOrientation Forward="Backward" Up="Down" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>5</NumberInGrid>
              <Enabled>true</Enabled>
              <CurrentStoredPower>2.845094</CurrentStoredPower>
              <ProducerEnabled>true</ProducerEnabled>
              <MaxStoredPower>0</MaxStoredPower>
              <SemiautoEnabled>false</SemiautoEnabled>
              <OnlyDischargeEnabled>false</OnlyDischargeEnabled>
              <ChargeMode>0</ChargeMode>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_BatteryBlock">
              <SubtypeName>LargeBlockBatteryBlock</SubtypeName>
              <EntityId>84418757486158505</EntityId>
              <Min x="1" y="8" z="11" />
              <BlockOrientation Forward="Backward" Up="Down" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>6</NumberInGrid>
              <Enabled>true</Enabled>
              <CurrentStoredPower>2.84503436</CurrentStoredPower>
              <ProducerEnabled>true</ProducerEnabled>
              <MaxStoredPower>0</MaxStoredPower>
              <SemiautoEnabled>false</SemiautoEnabled>
              <OnlyDischargeEnabled>false</OnlyDischargeEnabled>
              <ChargeMode>0</ChargeMode>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_BatteryBlock">
              <SubtypeName>LargeBlockBatteryBlock</SubtypeName>
              <EntityId>82103820486421751</EntityId>
              <Min x="2" y="8" z="11" />
              <BlockOrientation Forward="Backward" Up="Down" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>7</NumberInGrid>
              <Enabled>true</Enabled>
              <CurrentStoredPower>2.84544349</CurrentStoredPower>
              <ProducerEnabled>true</ProducerEnabled>
              <MaxStoredPower>0</MaxStoredPower>
              <SemiautoEnabled>false</SemiautoEnabled>
              <OnlyDischargeEnabled>false</OnlyDischargeEnabled>
              <ChargeMode>0</ChargeMode>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_BatteryBlock">
              <SubtypeName>LargeBlockBatteryBlock</SubtypeName>
              <EntityId>92437593890006963</EntityId>
              <Min x="3" y="8" z="11" />
              <IntegrityPercent>0.489356816</IntegrityPercent>
              <BuildPercent>0.489356816</BuildPercent>
              <BlockOrientation Forward="Backward" Up="Down" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <ConstructionStockpile>
                <Items xsi:type="MyObjectBuilder_StockpileItem">
                  <Amount>60</Amount>
                  <PhysicalContent xsi:type="MyObjectBuilder_Component">
                    <SubtypeName>SteelPlate</SubtypeName>
                  </PhysicalContent>
                </Items>
              </ConstructionStockpile>
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>8</NumberInGrid>
              <Enabled>true</Enabled>
              <CurrentStoredPower>2.8473134</CurrentStoredPower>
              <ProducerEnabled>true</ProducerEnabled>
              <MaxStoredPower>0</MaxStoredPower>
              <SemiautoEnabled>false</SemiautoEnabled>
              <OnlyDischargeEnabled>false</OnlyDischargeEnabled>
              <ChargeMode>0</ChargeMode>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Gyro">
              <SubtypeName>LargeBlockGyro</SubtypeName>
              <EntityId>73052428288191993</EntityId>
              <Min x="2" y="9" z="13" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>10</NumberInGrid>
              <Enabled>true</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Gyro">
              <SubtypeName>LargeBlockGyro</SubtypeName>
              <EntityId>114297904287569310</EntityId>
              <Min x="3" y="9" z="13" />
              <BlockOrientation Forward="Left" Up="Up" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>9</NumberInGrid>
              <Enabled>true</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Gyro">
              <SubtypeName>LargeBlockGyro</SubtypeName>
              <EntityId>100351727927109954</EntityId>
              <Min x="1" y="9" z="13" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>8</NumberInGrid>
              <Enabled>true</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Gyro">
              <SubtypeName>LargeBlockGyro</SubtypeName>
              <EntityId>123437066150734036</EntityId>
              <Min x="1" y="9" z="11" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>7</NumberInGrid>
              <Enabled>true</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Gyro">
              <SubtypeName>LargeBlockGyro</SubtypeName>
              <EntityId>134080177767940968</EntityId>
              <Min x="2" y="9" z="11" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>6</NumberInGrid>
              <Enabled>true</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Gyro">
              <SubtypeName>LargeBlockGyro</SubtypeName>
              <EntityId>77888099786667958</EntityId>
              <Min x="3" y="9" z="11" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>5</NumberInGrid>
              <Enabled>true</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_BatteryBlock">
              <SubtypeName>LargeBlockBatteryBlock</SubtypeName>
              <EntityId>135807393121039553</EntityId>
              <Min x="2" y="8" z="13" />
              <BlockOrientation Forward="Down" Up="Left" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>17</NumberInGrid>
              <Enabled>true</Enabled>
              <CurrentStoredPower>2.84565473</CurrentStoredPower>
              <ProducerEnabled>true</ProducerEnabled>
              <MaxStoredPower>0</MaxStoredPower>
              <SemiautoEnabled>false</SemiautoEnabled>
              <OnlyDischargeEnabled>false</OnlyDischargeEnabled>
              <ChargeMode>0</ChargeMode>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Thrust">
              <SubtypeName>LargeBlockLargeAtmosphericThrust</SubtypeName>
              <EntityId>72578180801098463</EntityId>
              <Min x="3" y="16" z="13" />
              <IntegrityPercent>0.998764038</IntegrityPercent>
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyTimerComponent</TypeId>
                    <Component xsi:type="MyObjectBuilder_TimerComponent">
                      <Repeat>true</Repeat>
                      <TimeToEvent>0</TimeToEvent>
                      <SetTimeMinutes>0</SetTimeMinutes>
                      <TimerEnabled>true</TimerEnabled>
                      <RemoveEntityOnTimer>false</RemoveEntityOnTimer>
                      <TimerType>Frame100</TimerType>
                      <FramesFromLastTrigger>0</FramesFromLastTrigger>
                      <TimerTickInFrames>100</TimerTickInFrames>
                      <IsSessionUpdateEnabled>false</IsSessionUpdateEnabled>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>5</NumberInGrid>
              <Enabled>true</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Thrust">
              <SubtypeName>LargeBlockLargeAtmosphericThrust</SubtypeName>
              <EntityId>126630546868850751</EntityId>
              <Min x="3" y="16" z="9" />
              <BlockOrientation Forward="Down" Up="Left" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyTimerComponent</TypeId>
                    <Component xsi:type="MyObjectBuilder_TimerComponent">
                      <Repeat>true</Repeat>
                      <TimeToEvent>0</TimeToEvent>
                      <SetTimeMinutes>0</SetTimeMinutes>
                      <TimerEnabled>true</TimerEnabled>
                      <RemoveEntityOnTimer>false</RemoveEntityOnTimer>
                      <TimerType>Frame100</TimerType>
                      <FramesFromLastTrigger>0</FramesFromLastTrigger>
                      <TimerTickInFrames>100</TimerTickInFrames>
                      <IsSessionUpdateEnabled>false</IsSessionUpdateEnabled>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>6</NumberInGrid>
              <Enabled>true</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Thrust">
              <SubtypeName>LargeBlockLargeAtmosphericThrust</SubtypeName>
              <EntityId>113065351746193087</EntityId>
              <Min x="-1" y="16" z="9" />
              <BlockOrientation Forward="Down" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyTimerComponent</TypeId>
                    <Component xsi:type="MyObjectBuilder_TimerComponent">
                      <Repeat>true</Repeat>
                      <TimeToEvent>0</TimeToEvent>
                      <SetTimeMinutes>0</SetTimeMinutes>
                      <TimerEnabled>true</TimerEnabled>
                      <RemoveEntityOnTimer>false</RemoveEntityOnTimer>
                      <TimerType>Frame100</TimerType>
                      <FramesFromLastTrigger>0</FramesFromLastTrigger>
                      <TimerTickInFrames>100</TimerTickInFrames>
                      <IsSessionUpdateEnabled>false</IsSessionUpdateEnabled>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>7</NumberInGrid>
              <Enabled>true</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Thrust">
              <SubtypeName>LargeBlockLargeAtmosphericThrust</SubtypeName>
              <EntityId>108008490171946819</EntityId>
              <Min x="-1" y="16" z="13" />
              <BlockOrientation Forward="Down" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyTimerComponent</TypeId>
                    <Component xsi:type="MyObjectBuilder_TimerComponent">
                      <Repeat>true</Repeat>
                      <TimeToEvent>0</TimeToEvent>
                      <SetTimeMinutes>0</SetTimeMinutes>
                      <TimerEnabled>true</TimerEnabled>
                      <RemoveEntityOnTimer>false</RemoveEntityOnTimer>
                      <TimerType>Frame100</TimerType>
                      <FramesFromLastTrigger>0</FramesFromLastTrigger>
                      <TimerTickInFrames>100</TimerTickInFrames>
                      <IsSessionUpdateEnabled>false</IsSessionUpdateEnabled>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>8</NumberInGrid>
              <Enabled>true</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_CubeBlock">
              <SubtypeName>LargeBlockArmorBlock</SubtypeName>
              <Min x="4" y="22" z="12" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_CubeBlock">
              <SubtypeName>LargeBlockArmorBlock</SubtypeName>
              <Min x="3" y="22" z="12" />
              <IntegrityPercent>0.8</IntegrityPercent>
              <BuildPercent>0.8</BuildPercent>
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_CubeBlock">
              <SubtypeName>LargeBlockArmorBlock</SubtypeName>
              <Min x="0" y="22" z="12" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_CubeBlock">
              <SubtypeName>LargeBlockArmorBlock</SubtypeName>
              <Min x="1" y="22" z="12" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Thrust">
              <SubtypeName>LargeBlockLargeAtmosphericThrust</SubtypeName>
              <EntityId>80709348911587165</EntityId>
              <Min x="-3" y="21" z="9" />
              <BlockOrientation Forward="Left" Up="Down" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyTimerComponent</TypeId>
                    <Component xsi:type="MyObjectBuilder_TimerComponent">
                      <Repeat>true</Repeat>
                      <TimeToEvent>0</TimeToEvent>
                      <SetTimeMinutes>0</SetTimeMinutes>
                      <TimerEnabled>true</TimerEnabled>
                      <RemoveEntityOnTimer>false</RemoveEntityOnTimer>
                      <TimerType>Frame100</TimerType>
                      <FramesFromLastTrigger>0</FramesFromLastTrigger>
                      <TimerTickInFrames>100</TimerTickInFrames>
                      <IsSessionUpdateEnabled>false</IsSessionUpdateEnabled>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>9</NumberInGrid>
              <Enabled>true</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_ConveyorConnector">
              <SubtypeName>ConveyorTubeDuct</SubtypeName>
              <EntityId>127581604329489302</EntityId>
              <Min x="2" y="23" z="12" />
              <BlockOrientation Forward="Right" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_ConveyorConnector">
              <SubtypeName>ConveyorTubeDuct</SubtypeName>
              <EntityId>80858379441840927</EntityId>
              <Min x="2" y="25" z="12" />
              <BlockOrientation Forward="Right" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_CubeBlock">
              <SubtypeName>LargeBlockArmorBlock</SubtypeName>
              <Min x="5" y="22" z="12" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Cockpit">
              <SubtypeName>LargeBlockCockpitIndustrial</SubtypeName>
              <EntityId>94282531577628076</EntityId>
              <Min x="2" y="5" z="10" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>1</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>true</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>1</NumberInGrid>
              <UseSingleWeaponMode>false</UseSingleWeaponMode>
              <Toolbar>
                <ToolbarType>Character</ToolbarType>
                <SelectedSlot xsi:nil="true" />
                <Slots>
                  <Slot>
                    <Index>0</Index>
                    <Item />
                    <Data xsi:type="MyObjectBuilder_ToolbarItemTerminalGroup">
                      <Action>OnOff</Action>
                      <GridEntityId>0</GridEntityId>
                      <BlockEntityId>94282531577628076</BlockEntityId>
                      <GroupName>Min 3 Foreuses</GroupName>
                    </Data>
                  </Slot>
                  <Slot>
                    <Index>1</Index>
                    <Item />
                    <Data xsi:type="MyObjectBuilder_ToolbarItemWeapon">
                      <DefinitionId Type="MyObjectBuilder_Drill" Subtype="LargeBlockDrill" />
                    </Data>
                  </Slot>
                  <Slot>
                    <Index>5</Index>
                    <Item />
                    <Data xsi:type="MyObjectBuilder_ToolbarItemTerminalBlock">
                      <Action>OnOff</Action>
                      <BlockEntityId>88150804802514525</BlockEntityId>
                    </Data>
                  </Slot>
                  <Slot>
                    <Index>7</Index>
                    <Item />
                    <Data xsi:type="MyObjectBuilder_ToolbarItemTerminalGroup">
                      <Action>Recharge</Action>
                      <GridEntityId>0</GridEntityId>
                      <BlockEntityId>94282531577628076</BlockEntityId>
                      <GroupName>Min 3 Batteries</GroupName>
                    </Data>
                  </Slot>
                  <Slot>
                    <Index>8</Index>
                    <Item />
                    <Data xsi:type="MyObjectBuilder_ToolbarItemTerminalBlock">
                      <Action>SwitchLock</Action>
                      <BlockEntityId>132004982452362216</BlockEntityId>
                    </Data>
                  </Slot>
                </Slots>
                <SlotsGamepad>
                  <Slot>
                    <Index>0</Index>
                    <Item />
                    <Data xsi:type="MyObjectBuilder_ToolbarItemTerminalGroup">
                      <Action>OnOff</Action>
                      <GridEntityId>0</GridEntityId>
                      <BlockEntityId>94282531577628076</BlockEntityId>
                      <GroupName>Min 3 Foreuses</GroupName>
                    </Data>
                  </Slot>
                  <Slot>
                    <Index>1</Index>
                    <Item />
                    <Data xsi:type="MyObjectBuilder_ToolbarItemWeapon">
                      <DefinitionId Type="MyObjectBuilder_Drill" Subtype="SmallBlockDrill" />
                    </Data>
                  </Slot>
                  <Slot>
                    <Index>4</Index>
                    <Item />
                    <Data xsi:type="MyObjectBuilder_ToolbarItemTerminalBlock">
                      <Action>OnOff</Action>
                      <BlockEntityId>88150804802514525</BlockEntityId>
                    </Data>
                  </Slot>
                  <Slot>
                    <Index>8</Index>
                    <Item />
                    <Data xsi:type="MyObjectBuilder_ToolbarItemTerminalGroup">
                      <Action>Recharge</Action>
                      <GridEntityId>0</GridEntityId>
                      <BlockEntityId>94282531577628076</BlockEntityId>
                      <GroupName>Min 3 Batteries</GroupName>
                    </Data>
                  </Slot>
                  <Slot>
                    <Index>9</Index>
                    <Item />
                    <Data xsi:type="MyObjectBuilder_ToolbarItemTerminalBlock">
                      <Action>SwitchLock</Action>
                      <BlockEntityId>132004982452362216</BlockEntityId>
                    </Data>
                  </Slot>
                </SlotsGamepad>
              </Toolbar>
              <SelectedGunId xsi:nil="true" />
              <BuildToolbar>
                <ToolbarType>Character</ToolbarType>
                <SelectedSlot xsi:nil="true" />
                <Slots />
                <SlotsGamepad />
              </BuildToolbar>
              <OnLockedToolbar>
                <ToolbarType>Character</ToolbarType>
                <SelectedSlot xsi:nil="true" />
                <Slots />
                <SlotsGamepad />
              </OnLockedToolbar>
              <PilotRelativeWorld>
                <Position x="0.017267640680074692" y="0.89803671836853027" z="-4.50247859954834" />
                <Forward x="-0.0191181228" y="0.00333935232" z="0.9998119" />
                <Up x="-0.007319271" y="0.9999673" z="-0.00347968633" />
                <Orientation>
                  <X>-0.003676119</X>
                  <Y>0.9999462</Y>
                  <Z>-0.00170488667</Z>
                  <W>0.009553307</W>
                </Orientation>
              </PilotRelativeWorld>
              <PilotGunDefinition Type="MyObjectBuilder_Welder" Subtype="Welder4" />
              <IsInFirstPersonView>true</IsInFirstPersonView>
              <OxygenLevel>0.99685</OxygenLevel>
              <PilotJetpackEnabled xsi:nil="true" />
              <TextPanels>
                <MySerializedTextPanelData>
                  <ChangeInterval>0</ChangeInterval>
                  <Font Type="MyObjectBuilder_FontDefinition" Subtype="Debug" />
                  <FontSize>1</FontSize>
                  <ShowText>NONE</ShowText>
                  <FontColor>
                    <PackedValue>4294967295</PackedValue>
                    <X>255</X>
                    <Y>255</Y>
                    <Z>255</Z>
                    <R>255</R>
                    <G>255</G>
                    <B>255</B>
                    <A>255</A>
                  </FontColor>
                  <BackgroundColor>
                    <PackedValue>4278190080</PackedValue>
                    <X>0</X>
                    <Y>0</Y>
                    <Z>0</Z>
                    <R>0</R>
                    <G>0</G>
                    <B>0</B>
                    <A>255</A>
                  </BackgroundColor>
                  <CurrentShownTexture>0</CurrentShownTexture>
                  <ContentType>SCRIPT</ContentType>
                  <SelectedScript>TSS_ClockAnalog</SelectedScript>
                  <TextPadding>2</TextPadding>
                  <CustomizeScripts>true</CustomizeScripts>
                  <ScriptBackgroundColor>
                    <PackedValue>4288108544</PackedValue>
                    <X>0</X>
                    <Y>88</Y>
                    <Z>151</Z>
                    <R>0</R>
                    <G>88</G>
                    <B>151</B>
                    <A>255</A>
                  </ScriptBackgroundColor>
                  <ScriptForegroundColor>
                    <PackedValue>4294962611</PackedValue>
                    <X>179</X>
                    <Y>237</Y>
                    <Z>255</Z>
                    <R>179</R>
                    <G>237</G>
                    <B>255</B>
                    <A>255</A>
                  </ScriptForegroundColor>
                  <Sprites>
                    <Length>0</Length>
                  </Sprites>
                </MySerializedTextPanelData>
                <MySerializedTextPanelData>
                  <ChangeInterval>0</ChangeInterval>
                  <Font Type="MyObjectBuilder_FontDefinition" Subtype="Debug" />
                  <FontSize>1</FontSize>
                  <ShowText>NONE</ShowText>
                  <FontColor>
                    <PackedValue>4294967295</PackedValue>
                    <X>255</X>
                    <Y>255</Y>
                    <Z>255</Z>
                    <R>255</R>
                    <G>255</G>
                    <B>255</B>
                    <A>255</A>
                  </FontColor>
                  <BackgroundColor>
                    <PackedValue>4278190080</PackedValue>
                    <X>0</X>
                    <Y>0</Y>
                    <Z>0</Z>
                    <R>0</R>
                    <G>0</G>
                    <B>0</B>
                    <A>255</A>
                  </BackgroundColor>
                  <CurrentShownTexture>0</CurrentShownTexture>
                  <ContentType>SCRIPT</ContentType>
                  <SelectedScript>TSS_EnergyHydrogen</SelectedScript>
                  <TextPadding>2</TextPadding>
                  <CustomizeScripts>true</CustomizeScripts>
                  <ScriptBackgroundColor>
                    <PackedValue>4288108544</PackedValue>
                    <X>0</X>
                    <Y>88</Y>
                    <Z>151</Z>
                    <R>0</R>
                    <G>88</G>
                    <B>151</B>
                    <A>255</A>
                  </ScriptBackgroundColor>
                  <ScriptForegroundColor>
                    <PackedValue>4294962611</PackedValue>
                    <X>179</X>
                    <Y>237</Y>
                    <Z>255</Z>
                    <R>179</R>
                    <G>237</G>
                    <B>255</B>
                    <A>255</A>
                  </ScriptForegroundColor>
                  <Sprites>
                    <Length>0</Length>
                  </Sprites>
                </MySerializedTextPanelData>
                <MySerializedTextPanelData>
                  <ChangeInterval>0</ChangeInterval>
                  <Font Type="MyObjectBuilder_FontDefinition" Subtype="Debug" />
                  <FontSize>1</FontSize>
                  <ShowText>NONE</ShowText>
                  <FontColor>
                    <PackedValue>4294967295</PackedValue>
                    <X>255</X>
                    <Y>255</Y>
                    <Z>255</Z>
                    <R>255</R>
                    <G>255</G>
                    <B>255</B>
                    <A>255</A>
                  </FontColor>
                  <BackgroundColor>
                    <PackedValue>4278190080</PackedValue>
                    <X>0</X>
                    <Y>0</Y>
                    <Z>0</Z>
                    <R>0</R>
                    <G>0</G>
                    <B>0</B>
                    <A>255</A>
                  </BackgroundColor>
                  <CurrentShownTexture>0</CurrentShownTexture>
                  <ContentType>SCRIPT</ContentType>
                  <SelectedScript>TSS_Velocity</SelectedScript>
                  <TextPadding>2</TextPadding>
                  <CustomizeScripts>true</CustomizeScripts>
                  <ScriptBackgroundColor>
                    <PackedValue>4288108544</PackedValue>
                    <X>0</X>
                    <Y>88</Y>
                    <Z>151</Z>
                    <R>0</R>
                    <G>88</G>
                    <B>151</B>
                    <A>255</A>
                  </ScriptBackgroundColor>
                  <ScriptForegroundColor>
                    <PackedValue>4294962611</PackedValue>
                    <X>179</X>
                    <Y>237</Y>
                    <Z>255</Z>
                    <R>179</R>
                    <G>237</G>
                    <B>255</B>
                    <A>255</A>
                  </ScriptForegroundColor>
                  <Sprites>
                    <Length>0</Length>
                  </Sprites>
                </MySerializedTextPanelData>
                <MySerializedTextPanelData>
                  <ChangeInterval>0</ChangeInterval>
                  <Font Type="MyObjectBuilder_FontDefinition" Subtype="Debug" />
                  <FontSize>1</FontSize>
                  <ShowText>NONE</ShowText>
                  <FontColor>
                    <PackedValue>4294967295</PackedValue>
                    <X>255</X>
                    <Y>255</Y>
                    <Z>255</Z>
                    <R>255</R>
                    <G>255</G>
                    <B>255</B>
                    <A>255</A>
                  </FontColor>
                  <BackgroundColor>
                    <PackedValue>4278190080</PackedValue>
                    <X>0</X>
                    <Y>0</Y>
                    <Z>0</Z>
                    <R>0</R>
                    <G>0</G>
                    <B>0</B>
                    <A>255</A>
                  </BackgroundColor>
                  <CurrentShownTexture>0</CurrentShownTexture>
                  <ContentType>SCRIPT</ContentType>
                  <SelectedScript>TSS_Gravity</SelectedScript>
                  <TextPadding>2</TextPadding>
                  <CustomizeScripts>true</CustomizeScripts>
                  <ScriptBackgroundColor>
                    <PackedValue>4288108544</PackedValue>
                    <X>0</X>
                    <Y>88</Y>
                    <Z>151</Z>
                    <R>0</R>
                    <G>88</G>
                    <B>151</B>
                    <A>255</A>
                  </ScriptBackgroundColor>
                  <ScriptForegroundColor>
                    <PackedValue>4294962611</PackedValue>
                    <X>179</X>
                    <Y>237</Y>
                    <Z>255</Z>
                    <R>179</R>
                    <G>237</G>
                    <B>255</B>
                    <A>255</A>
                  </ScriptForegroundColor>
                  <Sprites>
                    <Length>0</Length>
                  </Sprites>
                </MySerializedTextPanelData>
                <MySerializedTextPanelData>
                  <ChangeInterval>0</ChangeInterval>
                  <Font Type="MyObjectBuilder_FontDefinition" Subtype="Debug" />
                  <FontSize>1</FontSize>
                  <ShowText>NONE</ShowText>
                  <FontColor>
                    <PackedValue>4294967295</PackedValue>
                    <X>255</X>
                    <Y>255</Y>
                    <Z>255</Z>
                    <R>255</R>
                    <G>255</G>
                    <B>255</B>
                    <A>255</A>
                  </FontColor>
                  <BackgroundColor>
                    <PackedValue>4278190080</PackedValue>
                    <X>0</X>
                    <Y>0</Y>
                    <Z>0</Z>
                    <R>0</R>
                    <G>0</G>
                    <B>0</B>
                    <A>255</A>
                  </BackgroundColor>
                  <CurrentShownTexture>0</CurrentShownTexture>
                  <ContentType>SCRIPT</ContentType>
                  <SelectedScript>TSS_ArtificialHorizon</SelectedScript>
                  <TextPadding>2</TextPadding>
                  <CustomizeScripts>true</CustomizeScripts>
                  <ScriptBackgroundColor>
                    <PackedValue>4288108544</PackedValue>
                    <X>0</X>
                    <Y>88</Y>
                    <Z>151</Z>
                    <R>0</R>
                    <G>88</G>
                    <B>151</B>
                    <A>255</A>
                  </ScriptBackgroundColor>
                  <ScriptForegroundColor>
                    <PackedValue>4294962611</PackedValue>
                    <X>179</X>
                    <Y>237</Y>
                    <Z>255</Z>
                    <R>179</R>
                    <G>237</G>
                    <B>255</B>
                    <A>255</A>
                  </ScriptForegroundColor>
                  <Sprites>
                    <Length>0</Length>
                  </Sprites>
                </MySerializedTextPanelData>
                <MySerializedTextPanelData>
                  <ChangeInterval>0</ChangeInterval>
                  <Font Type="MyObjectBuilder_FontDefinition" Subtype="Debug" />
                  <FontSize>1</FontSize>
                  <ShowText>NONE</ShowText>
                  <FontColor>
                    <PackedValue>4294967295</PackedValue>
                    <X>255</X>
                    <Y>255</Y>
                    <Z>255</Z>
                    <R>255</R>
                    <G>255</G>
                    <B>255</B>
                    <A>255</A>
                  </FontColor>
                  <BackgroundColor>
                    <PackedValue>4278190080</PackedValue>
                    <X>0</X>
                    <Y>0</Y>
                    <Z>0</Z>
                    <R>0</R>
                    <G>0</G>
                    <B>0</B>
                    <A>255</A>
                  </BackgroundColor>
                  <CurrentShownTexture>0</CurrentShownTexture>
                  <SelectedScript />
                  <TextPadding>2</TextPadding>
                  <ScriptBackgroundColor>
                    <PackedValue>4288108544</PackedValue>
                    <X>0</X>
                    <Y>88</Y>
                    <Z>151</Z>
                    <R>0</R>
                    <G>88</G>
                    <B>151</B>
                    <A>255</A>
                  </ScriptBackgroundColor>
                  <ScriptForegroundColor>
                    <PackedValue>4294962611</PackedValue>
                    <X>179</X>
                    <Y>237</Y>
                    <Z>255</Z>
                    <R>179</R>
                    <G>237</G>
                    <B>255</B>
                    <A>255</A>
                  </ScriptForegroundColor>
                  <Sprites>
                    <Length>0</Length>
                  </Sprites>
                </MySerializedTextPanelData>
              </TextPanels>
              <TargetData>
                <TargetId>0</TargetId>
                <IsTargetLocked>false</IsTargetLocked>
                <LockingProgress>0</LockingProgress>
              </TargetData>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Conveyor">
              <SubtypeName>LargeBlockConveyor</SubtypeName>
              <EntityId>81421766212716752</EntityId>
              <Min x="2" y="6" z="10" />
              <BlockOrientation Forward="Backward" Up="Up" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_CubeBlock">
              <SubtypeName>LargeBlockArmorBlock</SubtypeName>
              <Min x="-1" y="22" z="12" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Thrust">
              <SubtypeName>LargeBlockLargeAtmosphericThrust</SubtypeName>
              <EntityId>88755081718241884</EntityId>
              <Min x="-3" y="21" z="13" />
              <BlockOrientation Forward="Left" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyTimerComponent</TypeId>
                    <Component xsi:type="MyObjectBuilder_TimerComponent">
                      <Repeat>true</Repeat>
                      <TimeToEvent>0</TimeToEvent>
                      <SetTimeMinutes>0</SetTimeMinutes>
                      <TimerEnabled>true</TimerEnabled>
                      <RemoveEntityOnTimer>false</RemoveEntityOnTimer>
                      <TimerType>Frame100</TimerType>
                      <FramesFromLastTrigger>0</FramesFromLastTrigger>
                      <TimerTickInFrames>100</TimerTickInFrames>
                      <IsSessionUpdateEnabled>false</IsSessionUpdateEnabled>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>12</NumberInGrid>
              <Enabled>true</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Thrust">
              <SubtypeName>LargeBlockLargeAtmosphericThrust</SubtypeName>
              <EntityId>135949391416648734</EntityId>
              <Min x="3" y="21" z="13" />
              <BlockOrientation Forward="Right" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyTimerComponent</TypeId>
                    <Component xsi:type="MyObjectBuilder_TimerComponent">
                      <Repeat>true</Repeat>
                      <TimeToEvent>0</TimeToEvent>
                      <SetTimeMinutes>0</SetTimeMinutes>
                      <TimerEnabled>true</TimerEnabled>
                      <RemoveEntityOnTimer>false</RemoveEntityOnTimer>
                      <TimerType>Frame100</TimerType>
                      <FramesFromLastTrigger>0</FramesFromLastTrigger>
                      <TimerTickInFrames>100</TimerTickInFrames>
                      <IsSessionUpdateEnabled>false</IsSessionUpdateEnabled>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>13</NumberInGrid>
              <Enabled>true</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_CubeBlock">
              <SubtypeName>LargeBlockArmorBlock</SubtypeName>
              <Min x="2" y="25" z="11" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_CubeBlock">
              <SubtypeName>LargeBlockArmorBlock</SubtypeName>
              <Min x="2" y="25" z="10" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_CubeBlock">
              <SubtypeName>LargeBlockArmorBlock</SubtypeName>
              <Min x="2" y="25" z="9" />
              <IntegrityPercent>0.9639888</IntegrityPercent>
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_CubeBlock">
              <SubtypeName>LargeBlockArmorBlock</SubtypeName>
              <Min x="2" y="25" z="13" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_CubeBlock">
              <SubtypeName>LargeBlockArmorBlock</SubtypeName>
              <Min x="2" y="25" z="14" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_CubeBlock">
              <SubtypeName>LargeBlockArmorBlock</SubtypeName>
              <Min x="2" y="25" z="15" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Thrust">
              <SubtypeName>LargeBlockLargeAtmosphericThrust</SubtypeName>
              <EntityId>94713764548340053</EntityId>
              <Min x="3" y="24" z="13" />
              <BlockOrientation Forward="Backward" Up="Left" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyTimerComponent</TypeId>
                    <Component xsi:type="MyObjectBuilder_TimerComponent">
                      <Repeat>true</Repeat>
                      <TimeToEvent>0</TimeToEvent>
                      <SetTimeMinutes>0</SetTimeMinutes>
                      <TimerEnabled>true</TimerEnabled>
                      <RemoveEntityOnTimer>false</RemoveEntityOnTimer>
                      <TimerType>Frame100</TimerType>
                      <FramesFromLastTrigger>0</FramesFromLastTrigger>
                      <TimerTickInFrames>100</TimerTickInFrames>
                      <IsSessionUpdateEnabled>false</IsSessionUpdateEnabled>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>15</NumberInGrid>
              <Enabled>true</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Thrust">
              <SubtypeName>LargeBlockLargeAtmosphericThrust</SubtypeName>
              <EntityId>136337867081875567</EntityId>
              <Min x="3" y="24" z="7" />
              <BlockOrientation Forward="Forward" Up="Left" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyTimerComponent</TypeId>
                    <Component xsi:type="MyObjectBuilder_TimerComponent">
                      <Repeat>true</Repeat>
                      <TimeToEvent>0</TimeToEvent>
                      <SetTimeMinutes>0</SetTimeMinutes>
                      <TimerEnabled>true</TimerEnabled>
                      <RemoveEntityOnTimer>false</RemoveEntityOnTimer>
                      <TimerType>Frame100</TimerType>
                      <FramesFromLastTrigger>0</FramesFromLastTrigger>
                      <TimerTickInFrames>100</TimerTickInFrames>
                      <IsSessionUpdateEnabled>false</IsSessionUpdateEnabled>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>16</NumberInGrid>
              <Enabled>true</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Thrust">
              <SubtypeName>LargeBlockLargeAtmosphericThrust</SubtypeName>
              <EntityId>84710178618404110</EntityId>
              <Min x="-1" y="24" z="7" />
              <BlockOrientation Forward="Forward" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyTimerComponent</TypeId>
                    <Component xsi:type="MyObjectBuilder_TimerComponent">
                      <Repeat>true</Repeat>
                      <TimeToEvent>0</TimeToEvent>
                      <SetTimeMinutes>0</SetTimeMinutes>
                      <TimerEnabled>true</TimerEnabled>
                      <RemoveEntityOnTimer>false</RemoveEntityOnTimer>
                      <TimerType>Frame100</TimerType>
                      <FramesFromLastTrigger>0</FramesFromLastTrigger>
                      <TimerTickInFrames>100</TimerTickInFrames>
                      <IsSessionUpdateEnabled>false</IsSessionUpdateEnabled>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>17</NumberInGrid>
              <Enabled>true</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Thrust">
              <SubtypeName>LargeBlockLargeAtmosphericThrust</SubtypeName>
              <EntityId>77183911031935119</EntityId>
              <Min x="-1" y="24" z="13" />
              <BlockOrientation Forward="Backward" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <BuiltBy>144115188075855914</BuiltBy>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyTimerComponent</TypeId>
                    <Component xsi:type="MyObjectBuilder_TimerComponent">
                      <Repeat>true</Repeat>
                      <TimeToEvent>0</TimeToEvent>
                      <SetTimeMinutes>0</SetTimeMinutes>
                      <TimerEnabled>true</TimerEnabled>
                      <RemoveEntityOnTimer>false</RemoveEntityOnTimer>
                      <TimerType>Frame100</TimerType>
                      <FramesFromLastTrigger>0</FramesFromLastTrigger>
                      <TimerTickInFrames>100</TimerTickInFrames>
                      <IsSessionUpdateEnabled>false</IsSessionUpdateEnabled>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>18</NumberInGrid>
              <Enabled>true</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_OreDetector">
              <SubtypeName>LargeOreDetector</SubtypeName>
              <EntityId>88150804802514525</EntityId>
              <Min x="2" y="2" z="11" />
              <BlockOrientation Forward="Down" Up="Left" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <CustomName>Min 3 Détecteur de minerais</CustomName>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>true</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>1</NumberInGrid>
              <Enabled>false</Enabled>
              <DetectionRadius>150</DetectionRadius>
              <BroadcastUsingAntennas>true</BroadcastUsingAntennas>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_BatteryBlock">
              <SubtypeName>LargeBlockBatteryBlock</SubtypeName>
              <EntityId>97437473476159284</EntityId>
              <Min x="3" y="9" z="12" />
              <BlockOrientation Forward="Left" Up="Up" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>9</NumberInGrid>
              <Enabled>true</Enabled>
              <CurrentStoredPower>2.8540225</CurrentStoredPower>
              <ProducerEnabled>true</ProducerEnabled>
              <MaxStoredPower>0</MaxStoredPower>
              <SemiautoEnabled>false</SemiautoEnabled>
              <OnlyDischargeEnabled>false</OnlyDischargeEnabled>
              <ChargeMode>0</ChargeMode>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_BatteryBlock">
              <SubtypeName>LargeBlockBatteryBlock</SubtypeName>
              <EntityId>74625019775796551</EntityId>
              <Min x="1" y="9" z="12" />
              <BlockOrientation Forward="Down" Up="Left" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>10</NumberInGrid>
              <Enabled>true</Enabled>
              <CurrentStoredPower>2.85433125</CurrentStoredPower>
              <ProducerEnabled>true</ProducerEnabled>
              <MaxStoredPower>0</MaxStoredPower>
              <SemiautoEnabled>false</SemiautoEnabled>
              <OnlyDischargeEnabled>false</OnlyDischargeEnabled>
              <ChargeMode>0</ChargeMode>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>86759439007432907</EntityId>
              <Min x="2" y="-1" z="12" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>1</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>118220041019737471</EntityId>
              <Min x="3" y="-1" z="12" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>2</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>114263651035446951</EntityId>
              <Min x="4" y="-1" z="12" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>3</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>120069527987552311</EntityId>
              <Min x="5" y="-1" z="12" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>4</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>97933260517966429</EntityId>
              <Min x="6" y="-1" z="12" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>5</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>85867923075965932</EntityId>
              <Min x="1" y="-1" z="12" />
              <BlockOrientation Forward="Down" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>6</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>80683222014921677</EntityId>
              <Min x="0" y="-1" z="12" />
              <BlockOrientation Forward="Down" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>7</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>125771789658107138</EntityId>
              <Min x="-1" y="-1" z="12" />
              <BlockOrientation Forward="Down" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>8</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>88790736450526026</EntityId>
              <Min x="-2" y="-1" z="12" />
              <BlockOrientation Forward="Down" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>9</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>131419003448631378</EntityId>
              <Min x="2" y="-1" z="13" />
              <BlockOrientation Forward="Down" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>10</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>99403863102438073</EntityId>
              <Min x="2" y="-1" z="14" />
              <BlockOrientation Forward="Down" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>11</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>106268378554091156</EntityId>
              <Min x="2" y="-1" z="15" />
              <BlockOrientation Forward="Down" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>12</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>125729606194777064</EntityId>
              <Min x="2" y="-1" z="16" />
              <BlockOrientation Forward="Down" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>13</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>94920056008715428</EntityId>
              <Min x="2" y="-1" z="11" />
              <BlockOrientation Forward="Down" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>14</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>80960355883896771</EntityId>
              <Min x="2" y="-1" z="10" />
              <BlockOrientation Forward="Down" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>15</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>84805941188296046</EntityId>
              <Min x="2" y="-1" z="9" />
              <BlockOrientation Forward="Down" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>16</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>74033531153221158</EntityId>
              <Min x="2" y="-1" z="8" />
              <BlockOrientation Forward="Down" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>17</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>128952778537614316</EntityId>
              <Min x="3" y="-1" z="11" />
              <BlockOrientation Forward="Down" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>18</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>111574081758854493</EntityId>
              <Min x="3" y="-1" z="10" />
              <BlockOrientation Forward="Down" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>19</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>140461693788076904</EntityId>
              <Min x="3" y="-1" z="9" />
              <BlockOrientation Forward="Down" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>20</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>94400068261370451</EntityId>
              <Min x="3" y="-1" z="8" />
              <BlockOrientation Forward="Down" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>21</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>95690392881990958</EntityId>
              <Min x="4" y="-1" z="11" />
              <BlockOrientation Forward="Down" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>22</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>120082812003114465</EntityId>
              <Min x="4" y="-1" z="10" />
              <BlockOrientation Forward="Down" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>23</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>87414035128510536</EntityId>
              <Min x="4" y="-1" z="9" />
              <BlockOrientation Forward="Down" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>24</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>93171951494802653</EntityId>
              <Min x="4" y="-1" z="8" />
              <BlockOrientation Forward="Down" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>25</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>138366429018556473</EntityId>
              <Min x="5" y="-1" z="11" />
              <BlockOrientation Forward="Down" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>26</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>113268904170430034</EntityId>
              <Min x="5" y="-1" z="10" />
              <BlockOrientation Forward="Down" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>27</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>138075229716954253</EntityId>
              <Min x="5" y="-1" z="9" />
              <BlockOrientation Forward="Down" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>28</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>95112105693399090</EntityId>
              <Min x="5" y="-1" z="8" />
              <BlockOrientation Forward="Down" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>29</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>122337923847701942</EntityId>
              <Min x="6" y="-1" z="11" />
              <BlockOrientation Forward="Down" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>30</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>110207512646975911</EntityId>
              <Min x="6" y="-1" z="10" />
              <BlockOrientation Forward="Down" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>31</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>111914800571613751</EntityId>
              <Min x="6" y="-1" z="9" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>82</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>132623692386015792</EntityId>
              <Min x="6" y="-1" z="8" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>83</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>97873487189247101</EntityId>
              <Min x="3" y="-1" z="16" />
              <BlockOrientation Forward="Down" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>34</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>99079740496940825</EntityId>
              <Min x="3" y="-1" z="15" />
              <BlockOrientation Forward="Down" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>35</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>110710998117664063</EntityId>
              <Min x="3" y="-1" z="14" />
              <BlockOrientation Forward="Down" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>36</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>100688905022208160</EntityId>
              <Min x="3" y="-1" z="13" />
              <BlockOrientation Forward="Down" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>37</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>139215427538224984</EntityId>
              <Min x="4" y="-1" z="13" />
              <BlockOrientation Forward="Down" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>38</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>115040940499181800</EntityId>
              <Min x="4" y="-1" z="14" />
              <BlockOrientation Forward="Down" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>39</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>117236917567753583</EntityId>
              <Min x="4" y="-1" z="15" />
              <BlockOrientation Forward="Down" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>40</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>92717443588093930</EntityId>
              <Min x="4" y="-1" z="16" />
              <BlockOrientation Forward="Down" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>41</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>116710662306679260</EntityId>
              <Min x="5" y="-1" z="16" />
              <BlockOrientation Forward="Down" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>42</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>115205615313037416</EntityId>
              <Min x="5" y="-1" z="15" />
              <BlockOrientation Forward="Down" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>43</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>84741245847508533</EntityId>
              <Min x="5" y="-1" z="14" />
              <BlockOrientation Forward="Down" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>44</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>84045789568016496</EntityId>
              <Min x="5" y="-1" z="13" />
              <BlockOrientation Forward="Down" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>45</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>124490609573700385</EntityId>
              <Min x="6" y="-1" z="13" />
              <BlockOrientation Forward="Down" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>46</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>104408090830333643</EntityId>
              <Min x="6" y="-1" z="14" />
              <BlockOrientation Forward="Down" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>47</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>141698089440432784</EntityId>
              <Min x="6" y="-1" z="15" />
              <BlockOrientation Forward="Down" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>48</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>108174142517482141</EntityId>
              <Min x="6" y="-1" z="16" />
              <BlockOrientation Forward="Down" Up="Right" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>49</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>119269671668767364</EntityId>
              <Min x="-2" y="-1" z="13" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>50</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>130838332756020634</EntityId>
              <Min x="-2" y="-1" z="14" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>51</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>97053905555890066</EntityId>
              <Min x="-2" y="-1" z="15" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>52</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>121521511634326859</EntityId>
              <Min x="-2" y="-1" z="16" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>53</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>119500995464018999</EntityId>
              <Min x="-1" y="-1" z="13" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>54</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>98178113929843509</EntityId>
              <Min x="0" y="-1" z="13" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>55</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>91810847595792733</EntityId>
              <Min x="1" y="-1" z="13" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>56</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>126434153500649275</EntityId>
              <Min x="1" y="-1" z="14" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>57</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>78392148452961489</EntityId>
              <Min x="0" y="-1" z="14" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>58</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>103043345762451432</EntityId>
              <Min x="-1" y="-1" z="14" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>59</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>139958441920258486</EntityId>
              <Min x="-1" y="-1" z="15" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>60</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>78645068782165081</EntityId>
              <Min x="0" y="-1" z="15" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>61</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>133185787199871388</EntityId>
              <Min x="1" y="-1" z="15" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>62</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>101420654081515422</EntityId>
              <Min x="1" y="-1" z="16" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>63</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>88808212161333955</EntityId>
              <Min x="0" y="-1" z="16" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>64</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>125272538758305335</EntityId>
              <Min x="-1" y="-1" z="16" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>65</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>128189100147660567</EntityId>
              <Min x="1" y="-1" z="11" />
              <BlockOrientation Forward="Down" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>66</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>107816668436395246</EntityId>
              <Min x="1" y="-1" z="10" />
              <BlockOrientation Forward="Down" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>67</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>139723056899867712</EntityId>
              <Min x="1" y="-1" z="9" />
              <BlockOrientation Forward="Down" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>68</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>100589939186878536</EntityId>
              <Min x="1" y="-1" z="8" />
              <BlockOrientation Forward="Down" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>69</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>95135693190726050</EntityId>
              <Min x="0" y="-1" z="8" />
              <BlockOrientation Forward="Down" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>70</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>128187671041148854</EntityId>
              <Min x="0" y="-1" z="9" />
              <BlockOrientation Forward="Down" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>71</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>87704719316936705</EntityId>
              <Min x="0" y="-1" z="10" />
              <BlockOrientation Forward="Down" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>72</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>87901330438811582</EntityId>
              <Min x="0" y="-1" z="11" />
              <BlockOrientation Forward="Down" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>73</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>140310975896027493</EntityId>
              <Min x="-1" y="-1" z="11" />
              <BlockOrientation Forward="Down" Up="Backward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>74</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>95988411842369714</EntityId>
              <Min x="-1" y="-1" z="10" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>75</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>109348178612665452</EntityId>
              <Min x="-1" y="-1" z="9" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>76</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>129628233853979358</EntityId>
              <Min x="-1" y="-1" z="8" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>77</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>90502885635277475</EntityId>
              <Min x="-2" y="-1" z="8" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>78</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>114413821021547444</EntityId>
              <Min x="-2" y="-1" z="9" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>79</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>83373975786757287</EntityId>
              <Min x="-2" y="-1" z="10" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>80</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
            <MyObjectBuilder_CubeBlock xsi:type="MyObjectBuilder_Drill">
              <SubtypeName>LargeBlockDrill</SubtypeName>
              <EntityId>102089806304895336</EntityId>
              <Min x="-2" y="-1" z="11" />
              <BlockOrientation Forward="Down" Up="Forward" />
              <ColorMaskHSV x="0.108333334" y="0.2" z="0.55" />
              <Owner>144115188075855914</Owner>
              <BuiltBy>144115188075855914</BuiltBy>
              <ShareMode>Faction</ShareMode>
              <ComponentContainer>
                <Components>
                  <ComponentData>
                    <TypeId>MyInventoryBase</TypeId>
                    <Component xsi:type="MyObjectBuilder_Inventory">
                      <Items />
                      <nextItemId>0</nextItemId>
                      <Volume>23.4375</Volume>
                      <Mass>9223372036854.775807</Mass>
                      <MaxItemCount>2147483647</MaxItemCount>
                      <Size xsi:nil="true" />
                      <InventoryFlags>CanSend</InventoryFlags>
                      <RemoveEntityOnEmpty>false</RemoveEntityOnEmpty>
                    </Component>
                  </ComponentData>
                </Components>
              </ComponentContainer>
              <ShowOnHUD>false</ShowOnHUD>
              <ShowInTerminal>false</ShowInTerminal>
              <ShowInToolbarConfig>true</ShowInToolbarConfig>
              <ShowInInventory>true</ShowInInventory>
              <NumberInGrid>81</NumberInGrid>
              <Enabled>false</Enabled>
            </MyObjectBuilder_CubeBlock>
          </CubeBlocks>
          <Skeleton>
            <BoneInfo>
              <BonePosition x="5" y="52" z="19" />
              <BoneOffset x="128" y="129" z="129" />
            </BoneInfo>
            <BoneInfo>
              <BonePosition x="4" y="52" z="17" />
              <BoneOffset x="136" y="142" z="139" />
            </BoneInfo>
            <BoneInfo>
              <BonePosition x="5" y="52" z="18" />
              <BoneOffset x="134" y="138" z="136" />
            </BoneInfo>
            <BoneInfo>
              <BonePosition x="4" y="52" z="18" />
              <BoneOffset x="144" y="155" z="150" />
            </BoneInfo>
            <BoneInfo>
              <BonePosition x="4" y="51" z="18" />
              <BoneOffset x="142" y="152" z="147" />
            </BoneInfo>
            <BoneInfo>
              <BonePosition x="5" y="51" z="18" />
              <BoneOffset x="133" y="137" z="135" />
            </BoneInfo>
            <BoneInfo>
              <BonePosition x="4" y="51" z="17" />
              <BoneOffset x="133" y="136" z="134" />
            </BoneInfo>
            <BoneInfo>
              <BonePosition x="4" y="51" z="16" />
              <BoneOffset x="128" y="129" z="128" />
            </BoneInfo>
            <BoneInfo>
              <BonePosition x="6" y="52" z="18" />
              <BoneOffset x="131" y="133" z="132" />
            </BoneInfo>
          </Skeleton>
          <LinearVelocity x="-2.20519132E-06" y="6.79741061E-05" z="6.47836641E-05" />
          <AngularVelocity x="-1.11212955E-07" y="-2.08973645E-07" z="-1.0748667E-07" />
          <ConveyorLines>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="3" z="12" />
              <StartDirection>Down</StartDirection>
              <EndPosition x="2" y="2" z="12" />
              <EndDirection>Up</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
              <ConveyorLineConductivity>FORWARD</ConveyorLineConductivity>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="10" z="12" />
              <StartDirection>Up</StartDirection>
              <EndPosition x="2" y="26" z="12" />
              <EndDirection>Down</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="3" z="12" />
              <StartDirection>Up</StartDirection>
              <EndPosition x="2" y="4" z="12" />
              <EndDirection>Down</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
              <ConveyorLineConductivity>BACKWARD</ConveyorLineConductivity>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="4" z="12" />
              <StartDirection>Up</StartDirection>
              <EndPosition x="2" y="5" z="12" />
              <EndDirection>Down</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="4" z="12" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="1" y="4" z="12" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
              <ConveyorLineConductivity>BACKWARD</ConveyorLineConductivity>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="4" z="12" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="3" y="4" z="12" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
              <ConveyorLineConductivity>BACKWARD</ConveyorLineConductivity>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="4" z="12" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="2" y="4" z="10" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="8" z="12" />
              <StartDirection>Up</StartDirection>
              <EndPosition x="2" y="10" z="12" />
              <EndDirection>Down</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="3" y="4" z="12" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="4" y="4" z="13" />
              <EndDirection>Forward</EndDirection>
              <Sections>
                <Section Direction="Right" Length="1" />
                <Section Direction="Backward" Length="1" />
              </Sections>
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
              <ConveyorLineConductivity>BACKWARD</ConveyorLineConductivity>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="1" y="4" z="12" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="0" y="4" z="13" />
              <EndDirection>Forward</EndDirection>
              <Sections>
                <Section Direction="Left" Length="1" />
                <Section Direction="Backward" Length="1" />
              </Sections>
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
              <ConveyorLineConductivity>BACKWARD</ConveyorLineConductivity>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="7" z="12" />
              <StartDirection>Up</StartDirection>
              <EndPosition x="2" y="8" z="12" />
              <EndDirection>Down</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="3" y="4" z="13" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="3" y="4" z="14" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="3" y="4" z="13" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="2" y="4" z="13" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="4" z="13" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="2" y="4" z="14" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="1" y="4" z="13" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="2" y="4" z="13" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="1" y="4" z="13" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="0" y="4" z="13" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="1" y="4" z="13" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="1" y="4" z="14" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="3" y="4" z="13" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="4" y="4" z="13" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="4" y="4" z="13" />
              <StartDirection>Down</StartDirection>
              <EndPosition x="3" y="3" z="13" />
              <EndDirection>Right</EndDirection>
              <Sections>
                <Section Direction="Down" Length="1" />
                <Section Direction="Left" Length="1" />
              </Sections>
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="3" y="3" z="13" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="3" y="3" z="14" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="3" y="3" z="13" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="2" y="3" z="13" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="3" z="13" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="2" y="3" z="14" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="3" z="13" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="1" y="3" z="13" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="1" y="3" z="13" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="1" y="3" z="14" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="0" y="4" z="13" />
              <StartDirection>Down</StartDirection>
              <EndPosition x="1" y="3" z="13" />
              <EndDirection>Left</EndDirection>
              <Sections>
                <Section Direction="Down" Length="1" />
                <Section Direction="Right" Length="1" />
              </Sections>
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="6" z="11" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="2" y="6" z="10" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="2" z="12" />
              <StartDirection>Down</StartDirection>
              <EndPosition x="2" y="1" z="12" />
              <EndDirection>Up</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="1" z="12" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="2" y="1" z="13" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="1" z="12" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="1" y="1" z="12" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="1" z="12" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="3" y="1" z="12" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="1" z="12" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="2" y="1" z="11" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="3" y="1" z="12" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="3" y="1" z="13" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="3" y="1" z="12" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="4" y="1" z="12" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="3" y="1" z="12" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="3" y="1" z="11" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="4" y="1" z="12" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="4" y="1" z="13" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="4" y="1" z="12" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="5" y="1" z="12" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="4" y="1" z="12" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="4" y="1" z="11" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="5" y="1" z="12" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="5" y="1" z="13" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="5" y="1" z="12" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="6" y="1" z="12" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="5" y="1" z="12" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="5" y="1" z="11" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="6" y="1" z="12" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="6" y="1" z="13" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="6" y="1" z="12" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="6" y="1" z="11" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="1" y="1" z="12" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="1" y="1" z="11" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="1" y="1" z="12" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="0" y="1" z="12" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="1" y="1" z="12" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="1" y="1" z="13" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="0" y="1" z="12" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="0" y="1" z="11" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="0" y="1" z="12" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="-1" y="1" z="12" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="0" y="1" z="12" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="0" y="1" z="13" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="-1" y="1" z="12" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="-1" y="1" z="11" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="-1" y="1" z="12" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="-2" y="1" z="12" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="-1" y="1" z="12" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="-1" y="1" z="13" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="-2" y="1" z="12" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="-2" y="1" z="11" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="-2" y="1" z="12" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="-2" y="1" z="13" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="1" z="13" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="3" y="1" z="13" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="1" z="13" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="1" y="1" z="13" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="1" z="13" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="2" y="1" z="14" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="1" z="14" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="3" y="1" z="14" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="1" z="14" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="1" y="1" z="14" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="1" z="14" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="2" y="1" z="15" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="1" z="15" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="3" y="1" z="15" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="1" z="15" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="1" y="1" z="15" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="1" z="15" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="2" y="1" z="16" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="1" z="16" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="3" y="1" z="16" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="1" z="16" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="1" y="1" z="16" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="1" z="11" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="2" y="1" z="10" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="1" z="11" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="3" y="1" z="11" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="1" z="11" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="1" y="1" z="11" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="1" z="10" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="2" y="1" z="9" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="1" z="10" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="3" y="1" z="10" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="1" z="10" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="1" y="1" z="10" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="1" z="9" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="2" y="1" z="8" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="1" z="9" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="3" y="1" z="9" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="1" z="9" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="1" y="1" z="9" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="1" z="8" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="3" y="1" z="8" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="1" z="8" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="1" y="1" z="8" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="3" y="1" z="11" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="3" y="1" z="10" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="3" y="1" z="11" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="4" y="1" z="11" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="3" y="1" z="10" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="3" y="1" z="9" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="3" y="1" z="10" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="4" y="1" z="10" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="3" y="1" z="9" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="3" y="1" z="8" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="3" y="1" z="9" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="4" y="1" z="9" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="3" y="1" z="8" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="4" y="1" z="8" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="4" y="1" z="11" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="4" y="1" z="10" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="4" y="1" z="11" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="5" y="1" z="11" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="4" y="1" z="10" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="4" y="1" z="9" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="4" y="1" z="10" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="5" y="1" z="10" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="4" y="1" z="9" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="4" y="1" z="8" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="4" y="1" z="9" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="5" y="1" z="9" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="4" y="1" z="8" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="5" y="1" z="8" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="5" y="1" z="11" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="5" y="1" z="10" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="5" y="1" z="11" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="6" y="1" z="11" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="5" y="1" z="10" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="5" y="1" z="9" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="5" y="1" z="10" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="6" y="1" z="10" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="5" y="1" z="9" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="5" y="1" z="8" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="5" y="1" z="9" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="6" y="1" z="9" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="5" y="1" z="8" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="6" y="1" z="8" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="6" y="1" z="11" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="6" y="1" z="10" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="6" y="1" z="10" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="6" y="1" z="9" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="6" y="1" z="9" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="6" y="1" z="8" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="3" y="1" z="16" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="3" y="1" z="15" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="3" y="1" z="16" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="4" y="1" z="16" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="3" y="1" z="15" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="3" y="1" z="14" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="3" y="1" z="15" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="4" y="1" z="15" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="3" y="1" z="14" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="3" y="1" z="13" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="3" y="1" z="14" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="4" y="1" z="14" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="3" y="1" z="13" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="4" y="1" z="13" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="4" y="1" z="13" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="4" y="1" z="14" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="4" y="1" z="13" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="5" y="1" z="13" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="4" y="1" z="14" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="4" y="1" z="15" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="4" y="1" z="14" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="5" y="1" z="14" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="4" y="1" z="15" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="4" y="1" z="16" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="4" y="1" z="15" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="5" y="1" z="15" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="4" y="1" z="16" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="5" y="1" z="16" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="5" y="1" z="16" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="5" y="1" z="15" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="5" y="1" z="16" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="6" y="1" z="16" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="5" y="1" z="15" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="5" y="1" z="14" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="5" y="1" z="15" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="6" y="1" z="15" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="5" y="1" z="14" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="5" y="1" z="13" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="5" y="1" z="14" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="6" y="1" z="14" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="5" y="1" z="13" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="6" y="1" z="13" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="6" y="1" z="13" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="6" y="1" z="14" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="6" y="1" z="14" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="6" y="1" z="15" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="6" y="1" z="15" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="6" y="1" z="16" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="-2" y="1" z="13" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="-2" y="1" z="14" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="-2" y="1" z="13" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="-1" y="1" z="13" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="-2" y="1" z="14" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="-2" y="1" z="15" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="-2" y="1" z="14" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="-1" y="1" z="14" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="-2" y="1" z="15" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="-2" y="1" z="16" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="-2" y="1" z="15" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="-1" y="1" z="15" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="-2" y="1" z="16" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="-1" y="1" z="16" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="-1" y="1" z="13" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="-1" y="1" z="14" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="-1" y="1" z="13" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="0" y="1" z="13" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="0" y="1" z="13" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="0" y="1" z="14" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="0" y="1" z="13" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="1" y="1" z="13" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="1" y="1" z="13" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="1" y="1" z="14" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="1" y="1" z="14" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="1" y="1" z="15" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="1" y="1" z="14" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="0" y="1" z="14" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="0" y="1" z="14" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="0" y="1" z="15" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="0" y="1" z="14" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="-1" y="1" z="14" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="-1" y="1" z="14" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="-1" y="1" z="15" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="-1" y="1" z="15" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="-1" y="1" z="16" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="-1" y="1" z="15" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="0" y="1" z="15" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="0" y="1" z="15" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="0" y="1" z="16" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="0" y="1" z="15" />
              <StartDirection>Right</StartDirection>
              <EndPosition x="1" y="1" z="15" />
              <EndDirection>Left</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="1" y="1" z="15" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="1" y="1" z="16" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="1" y="1" z="16" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="0" y="1" z="16" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="0" y="1" z="16" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="-1" y="1" z="16" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="1" y="1" z="11" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="1" y="1" z="10" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="1" y="1" z="11" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="0" y="1" z="11" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="1" y="1" z="10" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="1" y="1" z="9" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="1" y="1" z="10" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="0" y="1" z="10" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="1" y="1" z="9" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="1" y="1" z="8" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="1" y="1" z="9" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="0" y="1" z="9" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="1" y="1" z="8" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="0" y="1" z="8" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="0" y="1" z="8" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="-1" y="1" z="8" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="0" y="1" z="8" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="0" y="1" z="9" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="0" y="1" z="9" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="-1" y="1" z="9" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="0" y="1" z="9" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="0" y="1" z="10" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="0" y="1" z="10" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="-1" y="1" z="10" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="0" y="1" z="10" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="0" y="1" z="11" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="0" y="1" z="11" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="-1" y="1" z="11" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="-1" y="1" z="11" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="-1" y="1" z="10" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="-1" y="1" z="11" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="-2" y="1" z="11" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="-1" y="1" z="10" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="-2" y="1" z="10" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="-1" y="1" z="10" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="-1" y="1" z="9" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="-1" y="1" z="9" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="-2" y="1" z="9" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="-1" y="1" z="9" />
              <StartDirection>Forward</StartDirection>
              <EndPosition x="-1" y="1" z="8" />
              <EndDirection>Backward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="-1" y="1" z="8" />
              <StartDirection>Left</StartDirection>
              <EndPosition x="-2" y="1" z="8" />
              <EndDirection>Right</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="-2" y="1" z="8" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="-2" y="1" z="9" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="-2" y="1" z="9" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="-2" y="1" z="10" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="-2" y="1" z="10" />
              <StartDirection>Backward</StartDirection>
              <EndPosition x="-2" y="1" z="11" />
              <EndDirection>Forward</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
            <MyObjectBuilder_ConveyorLine>
              <StartPosition x="2" y="6" z="10" />
              <StartDirection>Down</StartDirection>
              <EndPosition x="2" y="5" z="10" />
              <EndDirection>Up</EndDirection>
              <Sections />
              <ConveyorLineType>LARGE_LINE</ConveyorLineType>
            </MyObjectBuilder_ConveyorLine>
          </ConveyorLines>
          <BlockGroups>
            <MyObjectBuilder_BlockGroup>
              <Name>Min 3 Propulseurs</Name>
              <Blocks>
                <Vector3I>
                  <X>-1</X>
                  <Y>22</Y>
                  <Z>14</Z>
                </Vector3I>
                <Vector3I>
                  <X>5</X>
                  <Y>22</Y>
                  <Z>14</Z>
                </Vector3I>
                <Vector3I>
                  <X>5</X>
                  <Y>22</Y>
                  <Z>10</Z>
                </Vector3I>
                <Vector3I>
                  <X>4</X>
                  <Y>25</Y>
                  <Z>15</Z>
                </Vector3I>
                <Vector3I>
                  <X>4</X>
                  <Y>25</Y>
                  <Z>9</Z>
                </Vector3I>
                <Vector3I>
                  <X>0</X>
                  <Y>25</Y>
                  <Z>9</Z>
                </Vector3I>
                <Vector3I>
                  <X>0</X>
                  <Y>25</Y>
                  <Z>15</Z>
                </Vector3I>
                <Vector3I>
                  <X>4</X>
                  <Y>18</Y>
                  <Z>14</Z>
                </Vector3I>
                <Vector3I>
                  <X>4</X>
                  <Y>18</Y>
                  <Z>10</Z>
                </Vector3I>
                <Vector3I>
                  <X>0</X>
                  <Y>18</Y>
                  <Z>10</Z>
                </Vector3I>
                <Vector3I>
                  <X>0</X>
                  <Y>18</Y>
                  <Z>14</Z>
                </Vector3I>
                <Vector3I>
                  <X>-1</X>
                  <Y>22</Y>
                  <Z>10</Z>
                </Vector3I>
              </Blocks>
            </MyObjectBuilder_BlockGroup>
            <MyObjectBuilder_BlockGroup>
              <Name>Min 3 Ejecteurs</Name>
              <Blocks>
                <Vector3I>
                  <X>1</X>
                  <Y>4</Y>
                  <Z>14</Z>
                </Vector3I>
                <Vector3I>
                  <X>2</X>
                  <Y>4</Y>
                  <Z>14</Z>
                </Vector3I>
                <Vector3I>
                  <X>3</X>
                  <Y>4</Y>
                  <Z>14</Z>
                </Vector3I>
                <Vector3I>
                  <X>3</X>
                  <Y>3</Y>
                  <Z>14</Z>
                </Vector3I>
                <Vector3I>
                  <X>2</X>
                  <Y>3</Y>
                  <Z>14</Z>
                </Vector3I>
                <Vector3I>
                  <X>1</X>
                  <Y>3</Y>
                  <Z>14</Z>
                </Vector3I>
              </Blocks>
            </MyObjectBuilder_BlockGroup>
            <MyObjectBuilder_BlockGroup>
              <Name>Min 3 Gyroscopes</Name>
              <Blocks>
                <Vector3I>
                  <X>3</X>
                  <Y>9</Y>
                  <Z>13</Z>
                </Vector3I>
                <Vector3I>
                  <X>1</X>
                  <Y>9</Y>
                  <Z>13</Z>
                </Vector3I>
                <Vector3I>
                  <X>1</X>
                  <Y>9</Y>
                  <Z>11</Z>
                </Vector3I>
                <Vector3I>
                  <X>2</X>
                  <Y>9</Y>
                  <Z>11</Z>
                </Vector3I>
                <Vector3I>
                  <X>3</X>
                  <Y>9</Y>
                  <Z>11</Z>
                </Vector3I>
                <Vector3I>
                  <X>2</X>
                  <Y>9</Y>
                  <Z>13</Z>
                </Vector3I>
              </Blocks>
            </MyObjectBuilder_BlockGroup>
            <MyObjectBuilder_BlockGroup>
              <Name>Min 3 Connecteurs Ejection</Name>
              <Blocks>
                <Vector3I>
                  <X>1</X>
                  <Y>4</Y>
                  <Z>14</Z>
                </Vector3I>
                <Vector3I>
                  <X>2</X>
                  <Y>4</Y>
                  <Z>14</Z>
                </Vector3I>
                <Vector3I>
                  <X>3</X>
                  <Y>4</Y>
                  <Z>14</Z>
                </Vector3I>
                <Vector3I>
                  <X>3</X>
                  <Y>3</Y>
                  <Z>14</Z>
                </Vector3I>
                <Vector3I>
                  <X>2</X>
                  <Y>3</Y>
                  <Z>14</Z>
                </Vector3I>
                <Vector3I>
                  <X>1</X>
                  <Y>3</Y>
                  <Z>14</Z>
                </Vector3I>
              </Blocks>
            </MyObjectBuilder_BlockGroup>
            <MyObjectBuilder_BlockGroup>
              <Name>Min 3 Batteries</Name>
              <Blocks>
                <Vector3I>
                  <X>3</X>
                  <Y>8</Y>
                  <Z>12</Z>
                </Vector3I>
                <Vector3I>
                  <X>1</X>
                  <Y>9</Y>
                  <Z>12</Z>
                </Vector3I>
                <Vector3I>
                  <X>2</X>
                  <Y>8</Y>
                  <Z>13</Z>
                </Vector3I>
                <Vector3I>
                  <X>3</X>
                  <Y>8</Y>
                  <Z>13</Z>
                </Vector3I>
                <Vector3I>
                  <X>1</X>
                  <Y>8</Y>
                  <Z>13</Z>
                </Vector3I>
                <Vector3I>
                  <X>1</X>
                  <Y>8</Y>
                  <Z>12</Z>
                </Vector3I>
                <Vector3I>
                  <X>1</X>
                  <Y>8</Y>
                  <Z>11</Z>
                </Vector3I>
                <Vector3I>
                  <X>2</X>
                  <Y>8</Y>
                  <Z>11</Z>
                </Vector3I>
                <Vector3I>
                  <X>3</X>
                  <Y>8</Y>
                  <Z>11</Z>
                </Vector3I>
                <Vector3I>
                  <X>3</X>
                  <Y>9</Y>
                  <Z>12</Z>
                </Vector3I>
              </Blocks>
            </MyObjectBuilder_BlockGroup>
            <MyObjectBuilder_BlockGroup>
              <Name>Min 3 Foreuses</Name>
              <Blocks>
                <Vector3I>
                  <X>2</X>
                  <Y>1</Y>
                  <Z>12</Z>
                </Vector3I>
                <Vector3I>
                  <X>2</X>
                  <Y>1</Y>
                  <Z>13</Z>
                </Vector3I>
                <Vector3I>
                  <X>2</X>
                  <Y>1</Y>
                  <Z>14</Z>
                </Vector3I>
                <Vector3I>
                  <X>2</X>
                  <Y>1</Y>
                  <Z>15</Z>
                </Vector3I>
                <Vector3I>
                  <X>2</X>
                  <Y>1</Y>
                  <Z>16</Z>
                </Vector3I>
                <Vector3I>
                  <X>2</X>
                  <Y>1</Y>
                  <Z>11</Z>
                </Vector3I>
                <Vector3I>
                  <X>2</X>
                  <Y>1</Y>
                  <Z>10</Z>
                </Vector3I>
                <Vector3I>
                  <X>2</X>
                  <Y>1</Y>
                  <Z>9</Z>
                </Vector3I>
                <Vector3I>
                  <X>2</X>
                  <Y>1</Y>
                  <Z>8</Z>
                </Vector3I>
                <Vector3I>
                  <X>3</X>
                  <Y>1</Y>
                  <Z>11</Z>
                </Vector3I>
                <Vector3I>
                  <X>3</X>
                  <Y>1</Y>
                  <Z>10</Z>
                </Vector3I>
                <Vector3I>
                  <X>3</X>
                  <Y>1</Y>
                  <Z>12</Z>
                </Vector3I>
                <Vector3I>
                  <X>3</X>
                  <Y>1</Y>
                  <Z>9</Z>
                </Vector3I>
                <Vector3I>
                  <X>3</X>
                  <Y>1</Y>
                  <Z>8</Z>
                </Vector3I>
                <Vector3I>
                  <X>4</X>
                  <Y>1</Y>
                  <Z>11</Z>
                </Vector3I>
                <Vector3I>
                  <X>4</X>
                  <Y>1</Y>
                  <Z>10</Z>
                </Vector3I>
                <Vector3I>
                  <X>4</X>
                  <Y>1</Y>
                  <Z>9</Z>
                </Vector3I>
                <Vector3I>
                  <X>4</X>
                  <Y>1</Y>
                  <Z>8</Z>
                </Vector3I>
                <Vector3I>
                  <X>5</X>
                  <Y>1</Y>
                  <Z>11</Z>
                </Vector3I>
                <Vector3I>
                  <X>5</X>
                  <Y>1</Y>
                  <Z>10</Z>
                </Vector3I>
                <Vector3I>
                  <X>5</X>
                  <Y>1</Y>
                  <Z>9</Z>
                </Vector3I>
                <Vector3I>
                  <X>5</X>
                  <Y>1</Y>
                  <Z>8</Z>
                </Vector3I>
                <Vector3I>
                  <X>4</X>
                  <Y>1</Y>
                  <Z>12</Z>
                </Vector3I>
                <Vector3I>
                  <X>6</X>
                  <Y>1</Y>
                  <Z>11</Z>
                </Vector3I>
                <Vector3I>
                  <X>6</X>
                  <Y>1</Y>
                  <Z>10</Z>
                </Vector3I>
                <Vector3I>
                  <X>3</X>
                  <Y>1</Y>
                  <Z>16</Z>
                </Vector3I>
                <Vector3I>
                  <X>3</X>
                  <Y>1</Y>
                  <Z>15</Z>
                </Vector3I>
                <Vector3I>
                  <X>3</X>
                  <Y>1</Y>
                  <Z>14</Z>
                </Vector3I>
                <Vector3I>
                  <X>3</X>
                  <Y>1</Y>
                  <Z>13</Z>
                </Vector3I>
                <Vector3I>
                  <X>4</X>
                  <Y>1</Y>
                  <Z>13</Z>
                </Vector3I>
                <Vector3I>
                  <X>4</X>
                  <Y>1</Y>
                  <Z>14</Z>
                </Vector3I>
                <Vector3I>
                  <X>5</X>
                  <Y>1</Y>
                  <Z>12</Z>
                </Vector3I>
                <Vector3I>
                  <X>4</X>
                  <Y>1</Y>
                  <Z>15</Z>
                </Vector3I>
                <Vector3I>
                  <X>4</X>
                  <Y>1</Y>
                  <Z>16</Z>
                </Vector3I>
                <Vector3I>
                  <X>5</X>
                  <Y>1</Y>
                  <Z>16</Z>
                </Vector3I>
                <Vector3I>
                  <X>5</X>
                  <Y>1</Y>
                  <Z>15</Z>
                </Vector3I>
                <Vector3I>
                  <X>5</X>
                  <Y>1</Y>
                  <Z>14</Z>
                </Vector3I>
                <Vector3I>
                  <X>5</X>
                  <Y>1</Y>
                  <Z>13</Z>
                </Vector3I>
                <Vector3I>
                  <X>6</X>
                  <Y>1</Y>
                  <Z>13</Z>
                </Vector3I>
                <Vector3I>
                  <X>6</X>
                  <Y>1</Y>
                  <Z>14</Z>
                </Vector3I>
                <Vector3I>
                  <X>6</X>
                  <Y>1</Y>
                  <Z>15</Z>
                </Vector3I>
                <Vector3I>
                  <X>6</X>
                  <Y>1</Y>
                  <Z>16</Z>
                </Vector3I>
                <Vector3I>
                  <X>6</X>
                  <Y>1</Y>
                  <Z>12</Z>
                </Vector3I>
                <Vector3I>
                  <X>-2</X>
                  <Y>1</Y>
                  <Z>13</Z>
                </Vector3I>
                <Vector3I>
                  <X>-2</X>
                  <Y>1</Y>
                  <Z>14</Z>
                </Vector3I>
                <Vector3I>
                  <X>-2</X>
                  <Y>1</Y>
                  <Z>15</Z>
                </Vector3I>
                <Vector3I>
                  <X>-2</X>
                  <Y>1</Y>
                  <Z>16</Z>
                </Vector3I>
                <Vector3I>
                  <X>-1</X>
                  <Y>1</Y>
                  <Z>13</Z>
                </Vector3I>
                <Vector3I>
                  <X>0</X>
                  <Y>1</Y>
                  <Z>13</Z>
                </Vector3I>
                <Vector3I>
                  <X>1</X>
                  <Y>1</Y>
                  <Z>13</Z>
                </Vector3I>
                <Vector3I>
                  <X>1</X>
                  <Y>1</Y>
                  <Z>14</Z>
                </Vector3I>
                <Vector3I>
                  <X>0</X>
                  <Y>1</Y>
                  <Z>14</Z>
                </Vector3I>
                <Vector3I>
                  <X>-1</X>
                  <Y>1</Y>
                  <Z>14</Z>
                </Vector3I>
                <Vector3I>
                  <X>1</X>
                  <Y>1</Y>
                  <Z>12</Z>
                </Vector3I>
                <Vector3I>
                  <X>-1</X>
                  <Y>1</Y>
                  <Z>15</Z>
                </Vector3I>
                <Vector3I>
                  <X>0</X>
                  <Y>1</Y>
                  <Z>15</Z>
                </Vector3I>
                <Vector3I>
                  <X>1</X>
                  <Y>1</Y>
                  <Z>15</Z>
                </Vector3I>
                <Vector3I>
                  <X>1</X>
                  <Y>1</Y>
                  <Z>16</Z>
                </Vector3I>
                <Vector3I>
                  <X>0</X>
                  <Y>1</Y>
                  <Z>16</Z>
                </Vector3I>
                <Vector3I>
                  <X>-1</X>
                  <Y>1</Y>
                  <Z>16</Z>
                </Vector3I>
                <Vector3I>
                  <X>1</X>
                  <Y>1</Y>
                  <Z>11</Z>
                </Vector3I>
                <Vector3I>
                  <X>1</X>
                  <Y>1</Y>
                  <Z>10</Z>
                </Vector3I>
                <Vector3I>
                  <X>1</X>
                  <Y>1</Y>
                  <Z>9</Z>
                </Vector3I>
                <Vector3I>
                  <X>1</X>
                  <Y>1</Y>
                  <Z>8</Z>
                </Vector3I>
                <Vector3I>
                  <X>0</X>
                  <Y>1</Y>
                  <Z>12</Z>
                </Vector3I>
                <Vector3I>
                  <X>0</X>
                  <Y>1</Y>
                  <Z>8</Z>
                </Vector3I>
                <Vector3I>
                  <X>0</X>
                  <Y>1</Y>
                  <Z>9</Z>
                </Vector3I>
                <Vector3I>
                  <X>0</X>
                  <Y>1</Y>
                  <Z>10</Z>
                </Vector3I>
                <Vector3I>
                  <X>0</X>
                  <Y>1</Y>
                  <Z>11</Z>
                </Vector3I>
                <Vector3I>
                  <X>-1</X>
                  <Y>1</Y>
                  <Z>11</Z>
                </Vector3I>
                <Vector3I>
                  <X>-1</X>
                  <Y>1</Y>
                  <Z>10</Z>
                </Vector3I>
                <Vector3I>
                  <X>-1</X>
                  <Y>1</Y>
                  <Z>9</Z>
                </Vector3I>
                <Vector3I>
                  <X>-1</X>
                  <Y>1</Y>
                  <Z>8</Z>
                </Vector3I>
                <Vector3I>
                  <X>-2</X>
                  <Y>1</Y>
                  <Z>8</Z>
                </Vector3I>
                <Vector3I>
                  <X>-2</X>
                  <Y>1</Y>
                  <Z>9</Z>
                </Vector3I>
                <Vector3I>
                  <X>-1</X>
                  <Y>1</Y>
                  <Z>12</Z>
                </Vector3I>
                <Vector3I>
                  <X>6</X>
                  <Y>1</Y>
                  <Z>9</Z>
                </Vector3I>
                <Vector3I>
                  <X>-2</X>
                  <Y>1</Y>
                  <Z>10</Z>
                </Vector3I>
                <Vector3I>
                  <X>6</X>
                  <Y>1</Y>
                  <Z>8</Z>
                </Vector3I>
                <Vector3I>
                  <X>-2</X>
                  <Y>1</Y>
                  <Z>11</Z>
                </Vector3I>
                <Vector3I>
                  <X>-2</X>
                  <Y>1</Y>
                  <Z>12</Z>
                </Vector3I>
              </Blocks>
            </MyObjectBuilder_BlockGroup>
          </BlockGroups>
          <DisplayName>Mining Ship</DisplayName>
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
