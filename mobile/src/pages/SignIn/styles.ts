import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 20px 100px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 40px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const ForgotPasswordText = styled.Text`
  color: #f4f4f4;
  font-size: 14px;
  font-family: 'RobotoSlab-Regular';
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;
  padding: 14px 0;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CreateAccountButtonText = styled.Text`
  color: #ff9000;
  font-size: 14px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 14px;
`;
