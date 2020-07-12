import styled from 'styled-components/native';

interface TextInputElementProps {
  width: string;
}

export const TextInputElement = styled.TextInput`
  background-color: #f2f2f2;
  padding: 10px;
  margin: 4px;
  border-radius: 10px;
  width: ${(props: TextInputElementProps) => props.width};
`;
