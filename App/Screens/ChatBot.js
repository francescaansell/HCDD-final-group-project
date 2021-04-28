import React, { useState, useCallback, useEffect } from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
 
export default function Example() {

  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Georgia',
    headerBgColor: '#008080',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#f58A07',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

 
  const steps= [
    {
      id: 'welcome',
      message: 'Welcome to PTSD Coach.',
      trigger: 'start',

    },

    {
        id: 'start',
        message: 'Are you ready to embark on this journey with me?',
        trigger: 'ready',
    },
    {
        id: 'ready',
        options: [
            {
              label: 'Yes',
              value: 'yes',
              trigger: 'workOptions',
            },
            {
              label: 'No',
              value: 'no',
              trigger: 'notReady',
            },
          ],
    },

    {
      id: 'notReady',
      message: 'Okay come back when you are ready',
      end: true, 
    },

    {
      id: 'work',
      message: 'What would you like to work on?',
      trigger: 'workOptions'
    },
    {
      id: 'workOptions',
      options: [
          {
            label: 'Track Daily Symptoms',
            value: 'trackSymptoms',
            trigger: 'sleep'
          },
          {
            label: 'Take Assessment',
            value: 'takeAssessment',
          },
          {
            label: 'Learn about PTSD',
            value: 'learn',
            trigger: 'learn',
          }
        ],
    },
    {
      id: 'sleep',
      message: 'Can you sleep well?',
      trigger: 'trackSleep'
    },
    {
      id: 'trackSleep',
      options: [
        {
          label: 'Not at all',
          value: '0',
          trigger: 'anger'
        },
        {
          label: 'A little bit',
          value: '1',
          trigger: 'anger'
        },
        {
          label: 'Moderately',
          value: '2',
          trigger: 'anger'
        },
        {
          label: 'Quite a bit',
          value: '3',
          trigger: 'anger'
        },
        {
          label: 'Extremely',
          value: '4',
          trigger: 'anger'
        }
      ],
    },
    {
      id: 'anger',
      message: 'Do you feel anger often?',
      trigger: 'trackAnger'
    },
    {
      id: 'trackAnger',
      options: [
        {
          label: 'Not at all',
          value: '0',
          trigger: 'worried'
        },
        {
          label: 'A little bit',
          value: '1',
          trigger: 'worried'
        },
        {
          label: 'Moderately',
          value: '2',
          trigger: 'worried'
        },
        {
          label: 'Quite a bit',
          value: '3',
          trigger: 'worried'
        },
        {
          label: 'Extremely',
          value: '4',
          trigger: 'worried'
        }
      ],
    },
    {
      id: 'worried',
      message: 'Do you feel worried or anxious often?',
      trigger: 'trackWorry'
    },
    {
      id: 'trackWorry',
      options: [
        {
          label: 'Not at all',
          value: '0',
          trigger: 'sad'
        },
        {
          label: 'A little bit',
          value: '1',
          trigger: 'sad'
        },
        {
          label: 'Moderately',
          value: '2',
          trigger: 'sad'
        },
        {
          label: 'Quite a bit',
          value: '3',
          trigger: 'sad'
        },
        {
          label: 'Extremely',
          value: '4',
          trigger: 'sad'
        }
      ],
    },
    {
      id: 'sad',
      message: 'Do you feel sad or hopeless often?',
      trigger: 'trackSad'
    },
    {
      id: 'trackSad',
      options: [
        {
          label: 'Not at all',
          value: '0',
          trigger: 'reality'
        },
        {
          label: 'A little bit',
          value: '1',
          trigger: 'reality'
        },
        {
          label: 'Moderately',
          value: '2',
          trigger: 'reality'
        },
        {
          label: 'Quite a bit',
          value: '3',
          trigger: 'reality'
        },
        {
          label: 'Extremely',
          value: '4',
          trigger: 'reality'
        }
      ],
    },
    {
      id: 'reality',
      message: 'Do you think you are disconnected from reality?',
      trigger: 'trackReality'
    },
    {
      id: 'trackReality',
      options: [
        {
          label: 'Not at all',
          value: '0',
          trigger: 'disconnected'
        },
        {
          label: 'A little bit',
          value: '1',
          trigger: 'disconnected'
        },
        {
          label: 'Moderately',
          value: '2',
          trigger: 'disconnected'
        },
        {
          label: 'Quite a bit',
          value: '3',
          trigger: 'disconnected'
        },
        {
          label: 'Extremely',
          value: '4',
          trigger: 'disconnected'
        }
      ],
    },
    {
      id: 'disconnected',
      message: 'Do you think you are disconnected from people?',
      trigger: 'trackDisconnected'
    },
    {
      id: 'trackDisconnected',
      options: [
        {
          label: 'Not at all',
          value: '0',
          trigger: 'trauma'
        },
        {
          label: 'A little bit',
          value: '1',
          trigger: 'trauma'
        },
        {
          label: 'Moderately',
          value: '2',
          trigger: 'trauma'
        },
        {
          label: 'Quite a bit',
          value: '3',
          trigger: 'trauma'
        },
        {
          label: 'Extremely',
          value: '4',
          trigger: 'trauma'
        }
      ],
    },
    {
      id: 'trauma',
      message: 'Are you often reminded of trauma?',
      trigger: 'trackTrauma'
    },
    {
      id: 'trackTrauma',
      options: [
        {
          label: 'Not at all',
          value: '0',
          trigger: 'done'
        },
        {
          label: 'A little bit',
          value: '1',
          trigger: 'done'
        },
        {
          label: 'Moderately',
          value: '2',
          trigger: 'done'
        },
        {
          label: 'Quite a bit',
          value: '3',
          trigger: 'done'
        },
        {
          label: 'Extremely',
          value: '4',
          trigger: 'done'
        }
      ],
    },
    {
      id: 'done', 
      message: 'Awesome job! You just finished track your symptoms for today. Come back tomrrow and track them again.',
      trigger: 'work'
    },
    {
      id: 'learn',
      message: 'Okay lets learn about PTSD!',
      trigger: 'learn1'
    },
    {
      id: 'learn1', 
      message: 'Post traumatice Stress Disorder (PTSD) is caused by witnessing, experiencing, or learning about someone close to you who experienced traumatic events.',
      trigger: 'learn2',
    },
    {
      id: 'learn2',
      message: 'It might by actual or threatened death, serious injury, or sexual violence.',
      trigger: 'learn3',
    },
    {
      id: 'learn3',
      message: 'Which information do you want to know more about?',
      trigger: 'learnOptions'
    },
    {
      id: 'learnOptions',
      options: [
        {
          label: 'Four type of symptoms',
          value: 'fourTypesOfSyptoms',
          trigger: '4symptoms',
        }, 
        {
          label: 'PTSD Facts',
          value: 'ptsdFacts',
          trigger: 'ptsdFacts',
        }, 
        {
          label: 'I dont want to learn anymore', 
          value: 'stopLearning', 
          trigger: 'work',
        }
      ]
    },
    {
      id: '4symptoms',
      message: 'PTSD includes four types of symptoms',
      trigger: 'symptom1',

    },
    {
      id: 'symptom1',
      message: 'First symptoms is re-experiencing or reliving the trauma',
      trigger: 'symptom1extension'
    },
    {
      id: 'symptom1extension', 
      message: 'Various signs can be shown.',
      trigger: 'symptom1extension2'
    },
    {
      id: 'symptom1extension2',
      message: 'Do you need some examples',
      trigger: 'symptom1examples'

    },
    {
      id: 'symptom1examples', 
      options: [
        {
          label: 'Yes',
          value: 'yes', 
          trigger: 'yesExample'
        },
        {
          label: 'No', 
          value: 'no', 
          trigger: 'symptom2'
        }
      ]
    },
    {
      id: 'yesExample',
      message: 'If someone is re-experiencing or reliving the trauma, he/she might experience: disturbing memories, nightmares, feeling or acting like the trauma is happening again, becoming very upset when reminded of the trauma',
      trigger: 'symptom2'
    },
    {
      id: 'symptom2', 
      message: 'Second symptom is persistent avoidance.',
      trigger: 'symptom2extension'
    },
    {
      id: 'symptom2extension', 
      message: 'Do you want to know more about indicators of this symptom?',
      trigger: 'symptom2extension2'
    },
    {
      id: 'symptom2extension2', 
      options: [
        {
          value: 'yes',
          label: 'Yes',
          trigger: 'symptom2Indicators',
        }, 
        {
          value: 'no', 
          label: 'no', 
          trigger: 'symptom3',
        }
      ]
    },
    {
      id: 'symptom2Indicators', 
      message: 'If someone shows persistent avoidance, he/she might experience: avoid places, people or conversations that remind him/her of the trauma, avoiding thoughts, feelings, or memories closely associated with traumatic events',
      trigger: 'symptom3',
    },
    {
      id: 'symptom3', 
      message: 'Third symptom is negative thoughts and moods', 
      trigger: 'symptom3extension',
    },
    {
      id: 'symptom3extension', 
      message: 'There are various signs of negative thoughts and moods', 
      trigger: 'symptom3extension2', 
    },
    {
      id: 'symptom3extension2',
      message: 'Do you want to learn more about negative thoughts?',
      trigger: 'symptom3extension3'
    }, 
    {
      id: 'symptom3extension3', 
      options: [
        {
          label: 'Yes', 
          value: 'yes', 
          trigger: 'negativeThoughts'
        },
        {
          label: 'No', 
          value: 'no', 
          trigger: 'symptom4'
        }
      ]
    }, 
    {
      id: 'negativeThoughts',
      message: 'If someone feels negative thoughts and moods, he/she might have a sense of: feeling detached or isolated from others, negative beliefs, self-blame for the trauma, trouble feeling postive emtions like happiness and love.',
      trigger: 'symptom4',
    },
    {
      id: 'symptom4', 
      message: 'Fourth symptom is feeling more on-edge and reactive.', 
      trigger: 'symptom4extension', 
    }, 
    {
      id: 'symptom4extension', 
      message: 'Do you want to know more about indicators of this symptom?', 
      trigger: 'symptom4extension2'
    }, 
    {
      id: 'symptom4extension2', 
      options: [
        { 
          value: 'Yes', 
          label: 'Yes', 
          trigger: 'reactive'
        }, 
        {
          value: 'no', 
          label: 'No', 
          trigger: 'endSymptoms',
        }
      ]
    },
    {
      id: 'reactive', 
      message: 'If someone is feeling more on-edge and reactive, he/she might experience: feeling on guard, being irritable or angry, trouble sleeping, startling easily',
      trigger: 'endSymptoms'
    }, 
    {
      id: 'endSymptoms', 
      message: 'These symptoms last for a month or more and are bothersome, and/or lead to problems in social or family life, work, and school',
      trigger: 'learnOptions',
    },
    {
      id: 'ptsdFacts', 
      message: 'Here are some facts about PTSD',
    }
];

 
  return (
    <ThemeProvider theme={theme}>
    <ChatBot
      steps = {steps}
     
    />
    </ThemeProvider>
  )
}