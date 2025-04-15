# 🐾 HI ! Pet
반려동물 입장에서 생각하는 밝고 친근한 동물 병원 웹사이트

[목차로 가기](#목차)

---

## 📅 프로젝트 기간
2025.02.06 ~ 2025.03.06

---

## 🛠️ 사용 기술
[Language](#🖥️-Language), [DBMS](#🛢️-DBMS), [Framework](#⚙️-Framework), [Library](#📚-Library), [API](#📡-API), [Tools](#🧰-Tools), [WAS](#🔧-WAS), [협업 도구](#🤝-협업-도구)

---

## 👥 팀 구성
- **오예준 (PM)**: 프로젝트 총괄 / 백엔드 총괄 및 DB 설계
- **이영현 (PL)**: 백엔드 개발
- **김동선**: 프론트엔드 총괄 / 디자인 설계
- **박시진**: 프론트엔드 개발

---

## 🐾 개요
“사랑하는 반려동물에게 최상의 의료서비스를 제공합니다.”

간편한 진료 예약부터 체계적인 사후관리까지,
신뢰할 수 있는 동물병원 웹사이트를 제공합니다.

반려동물을 위한 맞춤형 진료 예약 시스템  
진료 이력 확인 및 사후관리 기능 제공  
사용자 친화적인 인터페이스와 간편한 접근성  

---

## 💡 "HI ! Pet"은 반려동물을 위한 따뜻한 경험을 제공하는 병원 웹사이트입니다.

---

## 🛠️ 설계의 주안점
- 직관적인 UI/UX
- 권한에 따른 페이지 분리
- 세분화된 예약 시스템
- 커뮤니티 기능 강화
- 지속적인 의료 상담

---

## 📌 프론트엔드 기능 정리
### 구분 | 내용
---|---
홈페이지 | 병원 메인 페이지 접근 포털
메인 페이지 | 병원 로고, 로그인/회원가입 가능, 로그인 시 메인으로 리다이렉트
메뉴 구성 | 병원 소개, 진료 안내, 고객센터, 건강 정보
병원 소개 | 병원 개요, 위치, 찾아오는 방법 (지도 API 활용)

---

## ⚙️ 백엔드 기능 정리
### 구분 | 기능 내용
---|---
Spring Security | 접근 경로 설정, 비밀번호 암호화 (BCrypt), 인증 매니저 설정
JWT 토큰 | 로그인 시 JWT access/refresh 토큰 발급, 유효성 검증 및 예외 처리
회원가입 | 아이디 중복 확인, 가입 처리
로그인 | 아이디/비밀번호 확인, 토큰 발급

---

## ✅ 구현 기능 정리
### 🔹 오예준 (PM)
- 역할: 프로젝트 총괄 / 백엔드 총괄 / DB 설계
- 구현 기능: Admin(관리자) 기능 개발, 엔티티 설계 및 구현, 예약 슬롯 기능 구현 등

---

## 🧩 Development Environment
### Category | Details
---|---
🖥️ Language | Java 17, CSS, HTML5, JavaScript
🛢️ DBMS | MySQL 8.0
⚙️ Framework | Spring Boot, Spring Security
📚 Library | JDBC 6, Lombok, SLF4J, JSON, SMTP, highlight.js, MIME, React
📡 API | Kakao Maps API, 공공데이터포털 사업자 인증 API
🧰 Tools | Visual Studio Code (v1.82.2), IntelliJ IDEA, Bootstrap 4, StarUML
🔧 WAS (Web Application Server) | Apache Tomcat 9.0.80
🤝 협업 도구 | KakaoTalk, Google Sheets & Google Drive, GitHub
