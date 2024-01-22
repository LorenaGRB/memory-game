import { ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ImageButton from '../UI/ImageButton'
import { Colors } from '../../constants/styles'
import { princesses } from '../../assets'
import { COMPLETED, HIDE, SHOW } from '../../constants/enum'

type Status = 'hide' | 'show' | 'completed'
type ButtonInfo = {
  key: number,
  myPairKey: number,
  status: Status,
}
type Try = {
  isTrying: boolean,
  totalTries: number,
}
const Dashboard = () => {
  const [optionsDisorder, setOptionsDisorder] = useState<ImageSourcePropType[]>([]);
  const [buttonInfo, setButtonInfo] = useState<ButtonInfo[]>([]);
  const [attempt, setAttempt] = useState<Try>({isTrying: false, totalTries: 0});

  useEffect(() => {
    const doublePrincesses = princesses.concat(princesses);
    const princessDisorder = doublePrincesses.sort(() => Math.random() - 0.5);
    const buttonInfo = princessDisorder.map((princess, index) => {
      return {
        key: index,
        myPairKey: princessDisorder.findIndex((princessEqual, princessEqualIndex) => {
          return princessEqual === princess && princessEqualIndex !== index
        }),
        status: HIDE as Status,
      }
    });
    setOptionsDisorder(princessDisorder);
    setButtonInfo(buttonInfo);
  }, []);

  const handlePress = (index: number) => {
    const isCompleted = buttonInfo[index].status === COMPLETED;
    const isShowing = buttonInfo[index].status === SHOW;

    if(isCompleted || isShowing) {
      return;
    }

    setAttempt((prev) => {
      if (prev.isTrying) {
        return {
          isTrying: false,
          totalTries: prev.totalTries + 1,
        }
      } else {
        return {
          isTrying: true,
          totalTries: prev.totalTries,
        }
      }
    })
    setButtonInfo((prev) => {
      const newButtonInfo = [...prev];
      const currentButton = newButtonInfo[index];
      const myPairKey = newButtonInfo[index].myPairKey;
      const myPairButton = newButtonInfo[myPairKey];

      if (myPairButton.status === SHOW) {
        currentButton.status = COMPLETED;
        myPairButton.status = COMPLETED;
      } else {
        currentButton.status = SHOW;
      }
      return newButtonInfo;
    })

    setTimeout(() => {
      setButtonInfo((prev) => {
        const newButtonInfo = [...prev];
        const myPairKey = newButtonInfo[index].myPairKey;
        const myPairButton = newButtonInfo[myPairKey];

        if(attempt.isTrying && myPairButton.status !== SHOW) {
          const allShow = newButtonInfo.filter((button) => button.status === SHOW);
          allShow.forEach((button) => {
            button.status = HIDE;
          })
        }
        return newButtonInfo;
      })
    } , 1000)
  }
  return (
    <View style={styles.container}>
      {
        optionsDisorder.map((princess, index) =>
          <View key={index} style={styles.buttonContainer}>
            <ImageButton imageLink={princess} onPress={() => handlePress(index)} status={buttonInfo[index]?.status} />
          </View>
        )
      }
      <View style={{width: '100%', alignItems: 'center'}}>
        <Text style={{color: Colors.white, fontSize: 20}}>Total de intentos: {attempt.totalTries}</Text>
      </View>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonContainer: {
    width: '33%',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
})