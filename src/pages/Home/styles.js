import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 24px;
  flex: 1;
`;

export const ContainerDisplay = styled.View`
  background: white;
  width: 100%;
  flex: 3;
  justify-content: center;
  align-items: center;
`;

export const CountText = styled.Text`
  color: #cd8282;
  font-size: 80px;
  font-weight: bold;
  text-align: center;
`;

export const ContainerFooter = styled.View`
  background: white;
  width: 100%;
  flex: 2;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-left: 60px;
  padding-right: 60px;
`;

export const BtnPlus = styled.TouchableOpacity`
  background: #cd8282;
  width: 112px;
  height: 112px;
  justify-content: center;
  align-items: center;
  border-radius: 112px;
`;

export const BtnLess = styled.TouchableOpacity`
  background: #cd8282;
  width: 112px;
  height: 112px;
  justify-content: center;
  align-items: center;
  border-radius: 112px;
`;

export const TextInfo = styled.Text`
  color: white;
  font-size: 16px;
  text-align: center;
  color: #cd8282;
  margin-left: 12px;
`;

export const ContainerHeader = styled.View`
  flex: 1;
  background: white;
  justify-content: center;
  align-items: center;
`;

export const BtnReload = styled.TouchableOpacity``;
