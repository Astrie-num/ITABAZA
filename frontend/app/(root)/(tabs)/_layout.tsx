import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { FontAwesome } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="eventPlan"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <FontAwesome size={22} name="paper-plane" color={color} />,
        }}
      />
      <Tabs.Screen
        name="yourEvents"
        options={{
          title: 'Events',
          tabBarIcon: ({ color }) => <FontAwesome size={22} name="calendar" color={color} />,
        }}
      />
      <Tabs.Screen
        name="cemetriesMap"
        options={{
          title: 'Map',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="map-marker" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
