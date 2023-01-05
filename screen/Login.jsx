import { View, Text } from "react-native";
import styled from "@emotion/native";
import { SCREEN_WIDTH, emailRegex, pwRegex } from "../util";
import { authService } from "../firebase";
import { useEffect, useRef, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ navigation: { goBack, setOptions }}) => {

    const emailRef = useRef(null);
    const pwRef = useRef(null);
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");

    useEffect(() => {
        setOptions({ headerRight: () => null });
    }, []);

    const validInputs = () => {
        if (!email) {
            alert("email을 입력해 주세요.");
            emailRef.current.focus();
            return true;
        }

        if (!pw) {
            alert("password를 입력해 주세요.");
            pwRef.current.focus();
            return true;
        }

        const matchedEmail = email.match(emailRegex);
        const matchedPw = pw.match(pwRegex);

        if (matchedEmail === null) {
            alert("email 형식에 맞게 입력해 주세요.");
            emailRef.current.focus();
            return true;
        }

        if (matchedPw === null) {
            alert("비밀번호는 8자리 이상 영문자, 숫자, 특수문자 조합이어야 합니다.");
            pwRef.current.focus();
            return true;    
        }
    };

    const handleRegister = () => {
        if (validInputs()) {
            return;
        }

        createUserWithEmailAndPassword(authService, email, pw)
            .then(() => {
                console.log("로그인 성공");
                setEmail("");
                setPw("");
                goBack();
            })
            .catch((error) => {
                console.log(error.message);
                if (error.message.includes("already-in-use")) {
                    alert("이미 사용 중인 아이디입니다.")
                }
            });
    };

    const handleLogin = () => {
        if (validInputs()) {
            return;
        }
        
        signInWithEmailAndPassword(authService, email, pw)
            .then(() => {
                console.log("로그인 성공");
                setEmail("");
                setPw("");
                goBack();
            })
            .catch((error) => {
                console.log(error.message);
                if (error.message.includes("user-not-found")) {
                    alert("회원이 아닙니다. 회원가입을 먼저 진행해 주세요.")
                }
                if (err.message.includes("wrong-password")) {
                    alert("비밀번호가 틀렸습니다.");
                }
            });
    };



    return (
        <Wrap>
            <EmailInput
                ref={emailRef}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email id"
                textContentType="emailAddress"
            />
            <PwInput
                ref={pwRef}
                value={pw}
                onChangeText={setPw}
                placeholder="Enter your password"
                textContentType="password"
                secureTextEntry={true}
                returnKeyType="send" //TODO: 얘 뭐지??
            />
            <LoginButton onPress={handleLogin}>
                <LoginText>Login</LoginText>
            </LoginButton>
            <RegisterButton onPress={handleRegister}>
                <RegisterText>Register</RegisterText>
            </RegisterButton>
        </Wrap>
    )

};

export default Login;

const Wrap = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`;

const LoginButton = styled.TouchableOpacity`
  width: ${SCREEN_WIDTH / 1.5 + "px"};
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const LoginText = styled.Text`
  font-size: 20px;
`;

const RegisterText = styled(LoginText)``;

const RegisterButton = styled(LoginButton)``;

const EmailInput = styled.TextInput`
  background-color: lightgrey;
  width: ${SCREEN_WIDTH / 1.5 + "px"};
  padding: 10px 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  font-size: 20px;
`

const PwInput = styled(EmailInput)``;