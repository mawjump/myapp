import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const choices = ['グー', 'チョキ', 'パー'];
  const [playerChoice, setPlayerChoice] = useState('');
  const [cpuChoice, setCpuChoice] = useState('');
  const [result, setResult] = useState('');

  // 勝敗判定関数
  const judgeGame = (player: string, cpu: string) => {
    if (player === cpu) return '引き分け！';
    if (
      (player === 'グー' && cpu === 'チョキ') ||
      (player === 'チョキ' && cpu === 'パー') ||
      (player === 'パー' && cpu === 'グー')
    ) {
      return 'あなたの勝ち！🎉';
    }
    return 'CPUの勝ち…😢';
  };

  // プレイヤーが選んだときの処理
  const playGame = (choice: string) => {
    const cpu = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setCpuChoice(cpu);
    setResult(judgeGame(choice, cpu));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>じゃんけんゲーム！</Text>

      <View style={styles.choices}>
        {choices.map((choice) => (
          <TouchableOpacity key={choice} style={styles.button} onPress={() => playGame(choice)}>
            <Text style={styles.buttonText}>{choice}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {playerChoice !== '' && (
        <View style={styles.result}>
          <Text>あなた: {playerChoice}</Text>
          <Text>CPU: {cpuChoice}</Text>
          <Text style={styles.resultText}>{result}</Text>
        </View>
      )}
    </View>
  );
}

// スタイル
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  choices: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  result: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

