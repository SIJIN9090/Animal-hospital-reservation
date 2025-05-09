import { Outlet } from "react-router-dom";
import styled from "styled-components";

function A_UserLayout() {
  return (
    <Container>
      <LoginBox>
        <LoginTitle>회원 관리</LoginTitle>
        <LoginSub>회원을 관리 하는곳입니다.</LoginSub>
      </LoginBox>
      <Outlet /> {/* 여기에 Notice, NoticeWrite, NoticeUpdate가 렌더링됨 */}
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20vh;
  pointer-events: none;
  margin-top: 30px;
  margin-bottom: 30px;
`;
const LoginTitle = styled.h1`
  font-weight: 700;
  line-height: 1.3em;
  font-size: 42px;
  color: #111;
  text-align: center;
`;
const LoginSub = styled.p`
  display: block;
  margin-top: 1.5em;
  color: #888888;
  font-size: 14px;
  text-align: center;
`;

export default A_UserLayout;
