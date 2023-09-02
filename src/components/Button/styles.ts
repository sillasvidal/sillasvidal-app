import { styled } from "@/styles";

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 36,
  width: 140,
  borderRadius: 8,
  backgroundColor: '$blue',
  cursor: 'pointer'
});

export const ButtonText = styled('p', {
  fontSize: 16,
  color: '$white',
});