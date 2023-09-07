import { styled } from "../..";

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '100vh',
  width: '100%'
});

export const ContainerMenuCard = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: 400
});

export const MenuCard = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'auto',
  height: 150,
  padding: '0 24px',
  backgroundColor: '$blue',
  borderRadius: 8,
});

export const TextMenuCard = styled('p', {
  color: '$white',
  font: 'Roboto',
  fontSize: 24,
  fontWeight: 700
});