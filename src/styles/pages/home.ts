import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '100vh',
  width: '100vw'
});

export const TextArea = styled('textarea', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 326,
  width: 688,
  padding: 48,
  border: '1px solid $gray100',
  borderRadius: 8,
  color: '$gray800',
  fontSize: 16,
  margin: 12,
});

export const ContainerActionButtons = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 36,
  width: 588,
});