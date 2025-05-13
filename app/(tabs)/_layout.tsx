import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { IconSymbol } from 'components/ui/IconSymbol';
import { HapticTab } from 'components/HapticTab';
import useColorSchemeCustom from 'hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorSchemeCustom();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'light',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="anasayfa"
        options={{
          title: 'Anasayfa',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="hizmetler"
        options={{
          title: 'Hizmetler',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="heart.text.square.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="randevuAl"
        options={{
          title: 'Randevu Al',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="calendar.badge.plus" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
