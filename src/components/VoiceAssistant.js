import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
  Animated,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';

// Note: In a real implementation, we would use React Native Voice and OpenAI APIs
// This is a placeholder component that simulates the voice assistant for the hackathon

const VoiceAssistant = ({ isListening, onListeningChange, onCommand }) => {
  const [pulseAnim] = useState(new Animated.Value(1));
  const [response, setResponse] = useState('');
  const [transcript, setTranscript] = useState('');
  
  // Simulate the pulsing animation when listening
  useEffect(() => {
    if (isListening) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.2,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      pulseAnim.setValue(1);
    }
  }, [isListening, pulseAnim]);
  
  // Simulate voice recognition
  const toggleListening = () => {
    if (!isListening) {
      // Start listening
      onListeningChange(true);
      setResponse('');
      setTranscript('Listening...');
      
      // Simulate voice recognition delay
      setTimeout(() => {
        // Simulate random voice commands for demo
        const demoCommands = [
          'Where can I find healthy food nearby?',
          'Show me gyms in the area',
          'How many Vitality points do I have?',
          'Where is the nearest clinic?',
          'Show all partners',
        ];
        
        const randomCommand = demoCommands[Math.floor(Math.random() * demoCommands.length)];
        setTranscript(randomCommand);
        
        // Process the command
        const assistantResponse = onCommand(randomCommand);
        setResponse(assistantResponse);
        
        // Speak the response
        Speech.speak(assistantResponse, {
          language: 'en',
          pitch: 1.0,
          rate: 0.9,
        });
        
        // Stop listening
        onListeningChange(false);
      }, 2000);
    } else {
      // Stop listening
      onListeningChange(false);
      setTranscript('');
    }
  };
  
  return (
    <View style={styles.container}>
      {/* Response display */}
      {response ? (
        <View style={styles.responseContainer}>
          <Text style={styles.transcriptText}>{transcript}</Text>
          <Text style={styles.responseText}>{response}</Text>
        </View>
      ) : null}
      
      {/* Voice button */}
      <TouchableOpacity 
        style={styles.voiceButtonContainer}
        onPress={toggleListening}
        activeOpacity={0.7}
      >
        <Animated.View 
          style={[
            styles.voiceButton,
            { transform: [{ scale: pulseAnim }] },
            isListening && styles.listeningButton
          ]}
        >
          <Ionicons 
            name={isListening ? 'mic' : 'mic-outline'} 
            size={30} 
            color="white" 
          />
        </Animated.View>
        <Text style={styles.voiceButtonText}>
          {isListening ? 'Listening...' : 'Ask me about Vitality benefits'}
        </Text>
      </TouchableOpacity>
      
      {/* Implementation note */}
      <Text style={styles.implementationNote}>
        Note: This is a simulated voice assistant for the hackathon.
        In the actual implementation, this would use React Native Voice for speech recognition
        and OpenAI's Whisper API + GPT-4 for natural language understanding.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  responseContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    width: '100%',
  },
  transcriptText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
    marginBottom: 5,
    fontStyle: 'italic',
  },
  responseText: {
    color: 'white',
    fontSize: 16,
  },
  voiceButtonContainer: {
    alignItems: 'center',
  },
  voiceButton: {
    backgroundColor: '#e91e63',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  listeningButton: {
    backgroundColor: '#4CAF50',
  },
  voiceButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  implementationNote: {
    position: 'absolute',
    bottom: -30,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 5,
    color: 'yellow',
    fontSize: 8,
    textAlign: 'center',
  },
});

export default VoiceAssistant;
