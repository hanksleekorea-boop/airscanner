# 저숙련 AI 실행 핸드북

## 반드시 지킬 순서

1. `service-baseline.json`에서 대상·URL을 읽는다.
2. `requirements-register.json`의 요구사항 하나만 골라 작업 카드와 시험을 연결한다.
3. 외부 키가 없으면 실제 API 호출 대신 fixture를 사용한다.
4. 모든 가격에 `currency`, `collectedAt`, `dataStatus`, `sourceUrl`을 채운다.
5. 모르는 값은 `null + unknownReason`으로 둔다.
6. 정상·실패·경계·복구 시험을 최소 10개 만든다.
7. 코드·설정·Secret을 수정하기 전에는 사용자 승인과 외부 조건을 별도로 확인한다.
8. 완료 보고에는 파일·시험·증거를 링크한다.

## 추천값과 증상

- 추천: 공급자 1곳, `SAMPLE_ONLY` 유지, Cloudflare Secret 사용.
- 잘못된 선택 증상: 판매처 수 0인데 최저가 표현, 세금 누락, 오픈 리다이렉트, 로그의 이메일/토큰.
- 되돌리는 방법: 공급자 adapter를 fail-closed로 닫고 표본 결과로 되돌리며 `dataStatus`를 복구한다.

## 금지

B드라이브 연결, Apple 로그인, 결제, 비밀값 출력, 실제 예약/발권, 승인 전 광고 요청, 근거 없는 100% 선언.
