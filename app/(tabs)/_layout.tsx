import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { IconSymbol } from 'components/ui/IconSymbol';
import { HapticTab } from 'components/HapticTab';
import useColorSchemeCustom from 'hooks/useColorScheme'; // useColorSchemeCustom'u kullanıyoruz

export default function TabLayout() {
  const colorScheme = useColorSchemeCustom(); // useColorSchemeCustom'u kullanıyoruz

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'light', // veya istediğin bir sabit renk
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',  // iOS için transparan arka plan
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="auth"  // Bu satırda auth ekranını tanımlıyoruz
        options={{
          title: 'Auth',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}





