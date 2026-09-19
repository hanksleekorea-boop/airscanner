# 근거 색인

## 자사 근거

- `OWN-0001`: 공개 홈 200, 표본 입력·필터·로컬 기록 화면 확인.
- `OWN-0002`: `/api/hotels/search` POST 200, `dataStatus=SAMPLE_ONLY`, `external=NONE`, 서울 표본 2건.
- `OWN-0003`: `/verification.json`의 `CLOUDFLARE_AND_WESAVER_OAUTH`, H1 15/15, H2 10/10, H3 5/5, `liveProviders=WAITING_EXTERNAL`.
- `OWN-0004`: `/health` 200, `CLOUDFLARE_STATIC_ASSETS`, `cloudflareOnly=READY`, `liveProviders=WAITING_EXTERNAL`.
- `OWN-0005`: 과거 실제 OAuth 동의→D1 사용자·세션·사용량 사건 저장·로그아웃 증거(프로젝트 연속성 기록).
- `OWN-0006`: 제품 테스트 27/27, edge 10/10, typecheck·lint·build·PWA·1,000명 합성 페르소나 감사 통과(프로젝트 기록).

## 해석 규칙

자사 실측은 `OWN-*`, 외부 공식 자료는 `SRC-*`, 경쟁사 후보는 `CAND-*`, 고정 비교 서비스는 `SVC-*`로 구분한다. 계획된 실시간 공급자 연결은 점수에 넣지 않고 `UNKNOWN`으로 둔다.
