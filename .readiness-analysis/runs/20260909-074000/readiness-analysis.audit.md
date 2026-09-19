# AI 보충 감사 보고서 (v3.2 재실행)

## 1. 대상·경계

대상은 `https://hotelscanner.scanners.cc/`의 HotelScanner다. 제품 코드·설정·Git·Cloudflare·공개 배포는 변경하지 않았고 이 실행 폴더와 분석 산출물만 만들었다.

## 2. 제품 식별

웹·반응형 모바일·PWA·Cloudflare Worker/D1을 확인했다. 네이티브 Android/iOS는 확인되지 않았다. 같은 도메인의 다른 서비스와 합치지 않았다.

## 3. 보충 근거

공개 URL 4개, 내부 verification/dashboard 기록 2개, QR 파일 1개, Android 상태 1개를 사용했다. 비밀·토큰·쿠키는 읽거나 기록하지 않았다.

## 4. 입력 무결성

`schema=crh-project-evidence/v1`, `assessedAt=2026-09-09`, `scope=all`, 예제 문자열 0, 관찰 시각은 미래가 아니다. 다만 엔진 지문 불일치로 사전 차단했다.

## 5. 미확인·적용 제외

실시간 OTA·가격 정확성·클릭아웃·수익·광고·법률·온콜·Android는 `unknown`. 결제/직접 예약과 Apple 로그인은 사용자 범위에서 `na`다.

## 6. 점수 해석

엔진 원점수·selfShare·externalScore·진행률·필수 게이트·축을 계산하지 않았다. 이 보고서는 점수의 대체물이 아니다.

## 7. 최대 상위 갭

판매처·요금 범위, 지도·위치, 클릭아웃, 제휴 수익화, 숙소 범위, 가격 알림, 개인화, 콘텐츠, 총액 정확성, 유연한 날짜 순이며 자세한 수치는 `benchmark-statistics.json`에 있다.

## 8. Android

`adb devices -l`에 실기기가 보이지 않아 조작하지 않았다. 기기가 생기면 화면이 꺼진 유휴 Android 한 대만 사용한다.

## 9. 사용자 결정 필요

공급자 계약/키와 제휴 정산 조건, 법률·광고 승인, 허용 readiness 엔진 지문 복구가 필요하다.
