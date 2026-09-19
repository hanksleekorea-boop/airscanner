# 첫 개발 작업 워크스루

1. 사업 담당자가 공급자 1곳의 계약·허용 국가·요금·쿼터·클릭아웃 정책을 문서로 확보한다.
2. 개발자는 비밀값을 채팅/저장소에 쓰지 않고 Cloudflare Secret에 등록한다.
3. 샌드박스 응답 5종(정상/매진/부분세금/timeout/429)을 `HotelOfferV1` fixture로 만든다.
4. `POST /api/hotels/search`가 fixture를 정규화하고 `dataStatus`, `collectedAt`, `sourceUrl`을 반환한다.
5. 화면은 표본과 실시간을 색·문구·배지로 구분한다.
6. 총액 원장·오류 상태·로그 마스킹 테스트를 실행하고 증거를 `.world-top10-planning/<run>/`에 남긴다.
7. 사용자 승인 전에는 실제 예약/결제/광고 요청을 보내지 않는다.
