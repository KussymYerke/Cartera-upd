import { View, Text, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import {useState} from 'react'
const {width} = Dimensions.get('window')
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons'
import { MotiView } from 'moti'
import { SafeAreaView } from 'react-native-safe-area-context';

const dialPad = [1,2,3,4,5,6,7,8,9,'',0, 'del'];
const pinLength = 4;
const pinContainerSize = width / 2;
const pinMaxSize = pinContainerSize / pinLength;
const pinSpacing = 10;
const pinSize = pinMaxSize - pinSpacing * 2;
const dialPadSize = width * 0.2
const dialPadTextSize = dialPadSize * 0.4
const _spacing = 20

function DialPad({onPress}){
 
  return <View>
        <FlatList
        numColumns={3}
        data={dialPad}
        columnWrapperStyle={{gap: _spacing}}
        contentContainerStyle={{gap: _spacing}}
        style={{
            flexGrow: 0,  
        }}
        scrollEnabled={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
        return <TouchableOpacity
            disabled={item === ''}
            onPress={() => {
                onPress(item)
            }}
        >
            <View
                style={{
                    width: dialPadSize,
                    height: dialPadSize,
                    borderRadius: dialPadSize,
                    borderWidth: typeof item !== 'number' ? 0 : 1,
                    borderColor: '#DAE8EC',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {item === 'del' ? <Ionicons
                    name="backspace-outline"
                    color={"#DAE8EC"}
                    size={dialPadTextSize}
                /> : <Text
                    style={{fontSize: dialPadTextSize, color: '#DAE8EC'}}
                >{item}</Text>}
            </View>
        </TouchableOpacity>
        }}
    />
  </View>

}

export default function PinCode() {

    const navigation = useNavigation();
    const [code, setCode] = useState([]);

  return (
    <>
        <SafeAreaView style={{
                backgroundColor: '#4F97a3',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                paddingRight: 20
            }}>
            <TouchableOpacity onPress={() => {navigation.goBack()}}>
                <Ionicons
                    name="close-outline"
                    size={dialPadTextSize}
                    color="white"
                />
            </TouchableOpacity>
        </SafeAreaView>
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#4F97A3'
        }}>
            <View style={{
                flexDirection: 'row', 
                gap: pinSpacing * 2, 
                marginBottom: _spacing*2,
                height: pinSize * 2,
                alignItems: 'flex-end'
            }}
            >
                {[...Array(pinLength).keys()].map( i => {
                    const isSelected = !!code[i]
                    return <MotiView 
                        key={`pin-${i}`}
                        style={{
                            width: pinSize,
                            backgroundColor: '#DAE8EC',
                            borderRadius: pinSize
                        }}
                        transition={{
                            type: 'timing',
                            duration: 200
                        }}
                        animate={{
                            height: isSelected ? pinSize : 2,
                            marginBottom: isSelected ? pinSize / 2 : 0
                        }}
                    /> 
                })}
            </View>
            <DialPad onPress={(item) => {
                if(item === 'del') {
                setCode(prevCode => prevCode.slice(0, prevCode.length - 1))
                } else if(typeof item === 'number'){
                    if (code.length === pinLength) return
                    setCode(prevCode => [...prevCode, item])
                }
            }}/>
        </View>
    </>
    
  )
}
