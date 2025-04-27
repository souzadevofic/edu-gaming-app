import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';

export default function useCustomFonts() {
  const [fontsLoaded, fontError] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (fontError) {
    console.error('Erro ao carregar fontes:', fontError);
  };

  return [fontsLoaded, fontError];
}
