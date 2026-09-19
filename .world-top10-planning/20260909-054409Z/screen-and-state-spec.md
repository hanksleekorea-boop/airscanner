# 화면·상태 명세

## 화면

`/` 검색: 목적지, 날짜, 인원, 최근 검색, 데이터 상태.

`/results`: 필터·정렬·공급자 상태·총액 카드·비교 선택.

`/hotel/:id`: 객실·세금·취소·조식·수집시각·판매처 링크.

`/compare`: 선택 카드 간 조건 고정 비교, 차이 강조, 클릭아웃.

`/account`: OAuth 상태, 저장 검색, 내보내기·삭제, 알림 동의.

`/dashboard/`: 운영자용 공개 상태·검증 증거(민감값 없음).

## 상태 머신

`IDLE → VALIDATING → SEARCHING → PARTIAL|READY|EMPTY|ERROR → DETAIL → CLICKOUT_PENDING → REDIRECTED|CLICKOUT_FAILED`.

공급자별 상태는 `PENDING`, `OK`, `TIMEOUT`, `RATE_LIMITED`, `INVALID`, `STALE`이며, 하나가 실패해도 전체 검색을 실패로 바꾸지 않는다. `SAMPLE_ONLY`는 실시간 결과와 별도 색상·문구로 표시한다.

## 버튼 규칙

모든 주요 버튼은 로딩·중복 클릭·키보드 포커스·오류 복귀를 가진다. 비활성 버튼은 이유를 바로 표시하고, 외부 예약을 실제로 수행하지 않는 상태에서 “예약”이라고 쓰지 않는다.
