import styled from "styled-components";

const LoginPage = () => {
  return (
    <Container>
      <Center>
        <Logo src='../../../public/apple-gray-logo.svg' alt='로고' />
        <HeadingText>Sign in with your Apple ID</HeadingText>
        <Description>
          You will be signed in to Apple TV and Apple Music
        </Description>

        <Button>Apple ID</Button>
        <LinkText href='/signup'>Create New Apple ID </LinkText>
        <LinkText>Forgot your ID or Password</LinkText>

        <Icons></Icons>
      </Center>
    </Container>
  );
};
const Icons = styled.div`
  display: flex;
  width: 310px;
  justify-content: space-between;
  margin-top: 50px;
`;
const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Center = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Logo = styled.img`
  margin-bottom: 1.3rem;
  width: 50px;
`;
const HeadingText = styled.h1`
  font-size: 1.9rem;
`;
const Description = styled.p`
  font-size: 1.3rem;
  margin: 0;
  margin-bottom: 80px;
`;
const LinkText = styled.a`
  font-size: 1.2rem;
  color: #2997ff;
  margin-bottom: 20px;
  display: inline-block;
  cursor: pointer;
`;
const Label = styled.label`
  width: 310px;
  margin-bottom: 20px;
  padding: 1rem;
  border: 1px solid transparent;
  border-radius: 12px;
  border-color: #424245;
  font-size: 18px;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Button = styled.button`
  margin-bottom: 4rem;
  color: #fff;
  font-size: 18px;
  border: 1px solid transparent;
  border-radius: 12px;
  border-color: #424245;
  background-color: hsla(0, 0%, 100%, 0.04);
  font-weight: 400;
  cursor: pointer;
  width: 342px;
  padding: 1rem;
  &:hover {
    background-color: hsla(0, 0%, 100%, 0.08);
  }
  position: relative;
`;

const InputText = styled.input`
  margin: auto 0;
  font-size: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid transparent;
  border-radius: 5px;
  display: block;
  color: #fff;
`;
export default LoginPage;
