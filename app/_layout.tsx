import { Stack } from 'expo-router';
import 'react-native-reanimated';

export {
  ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Cardapio' }} />
    </Stack>
  );
}
