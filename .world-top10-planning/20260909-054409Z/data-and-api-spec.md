# 데이터·API 명세

## HotelOfferV1 최소 계약

`offerId`, `propertyId`, `provider`, `roomName`, `checkIn`, `checkOut`, `guests`, `baseAmount`, `taxAmount`, `feeAmount`, `totalAmount`, `currency`, `cancellation`, `mealPlan`, `availability`, `collectedAt`, `sourceUrl`, `dataStatus`를 필수로 한다. 누락 가능한 값은 `null`과 `unknownReason`을 함께 보낸다.

## 엔드포인트

- `POST /api/hotels/search`: 검증된 검색 조건, `requestId`, 공급자별 상태와 결과.
- `GET /api/hotels/:id`: 상세·조건 원장.
- `POST /api/clickout`: 서버가 허용한 파트너 URL과 `subId`를 생성하고 이벤트를 기록.
- `GET/POST/DELETE /api/account/saved-searches`: OAuth 사용자만 사용.
- `POST /api/account/alerts/verify`: 알림 동의·철회·만료.

## 데이터 원칙

검색 원문은 최소 기간만 보존하고, 로그에는 이메일·OAuth 토큰·전체 URL 쿼리를 남기지 않는다. 공급자 키는 Cloudflare Secret에만 둔다. 가격 캐시는 provider/조건/locale 단위로 분리하고 stale이면 명시한다.
