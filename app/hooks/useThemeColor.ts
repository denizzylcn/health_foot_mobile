import useColorSchemeCustom from 'hooks/useColorScheme'; // useColorSchemeCustom olarak import

export default function useThemeColor(props: { light?: string; dark?: string }, colorName: string) {
  const theme = useColorSchemeCustom() ?? 'light';  // useColorSchemeCustom'u burada kullanıyoruz
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return colorName;
  }
}

