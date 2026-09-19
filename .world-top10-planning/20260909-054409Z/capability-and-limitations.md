# 분석 범위와 한계

## 대상

HotelScanner는 `https://hotelscanner.scanners.cc/`에서 숙박 조건을 입력하고 표본 숙소를 비교하는 Cloudflare Worker Static Assets + Worker API + D1 + 위세이버 Google OAuth 서비스다. 현재 공개판은 `SAMPLE_ONLY`이며, 실제 판매처 가격·예약·결제를 제공하지 않는다.

## 선택 모드

`END_TO_END`를 선택했다. 엔진 B는 호텔 예약(내장 카탈로그 124번)을 주 범주로, 단기 숙박(123번)과 여행 일정(126번)을 보조 비교 범주로 사용했다. 엔진 C는 현재 공개판의 출시 준비도를 별도로 감사했다.

## 사실과 해석의 분리

- 사실: 공개 URL 4개 경로가 HTTP 200이고, 검색 API가 `SAMPLE_ONLY` 200을 반환한다(OWN-0001~OWN-0004).
- 해석: 공개판은 정직한 무료 표본 서비스로서는 동작하지만 실시간 호텔 메타검색 서비스와 기능 동등하지 않다.
- 미확인: 공급자별 실시간 재가격, 실제 사용자 전환·수익·장애율, 네이티브 앱, 광고 승인.

## 안전 경계

제품 코드, Cloudflare 설정, Git, 실사용자 데이터, 결제, 공급자 계약, 광고 계정은 변경하지 않았다. B 드라이브에는 접근하지 않았고 Apple 로그인과 결제는 기존 제외 상태를 보존했다.

## Readiness Hub 제한

마스터가 허용한 공식 URL에서 엔진 파일을 내려받았지만 `readiness-engine.mjs`와 `project-evidence.example.json`의 SHA-256이 고정 허용 지문과 달랐다. 따라서 엔진 Node 실행과 점수 산출을 금지하고, 별도 감사 문서에 차단 사유만 기록했다.
