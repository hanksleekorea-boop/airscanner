# 기존 계획 충돌 원장

| ID | 충돌 | 결정 | 영향 |
|---|---|---|---|
|CON-001|이전 문서의 100%/완료 표현 vs 실제 공급자 없음|실제 공개 증거 우선, SAMPLE_ONLY 유지|모든 라이브 작업 BLOCKED|
|CON-002|`hotelscan.scanners.cc` Pages와 `hotelscanner.scanners.cc` Worker 주소|현재 대표는 Worker, Pages CNAME은 롤백 보존|링크 혼용 금지|
|CON-003|HotelScanner 전용 OAuth 계획 vs WeSaver 공유 OAuth 승인|현재 WeSaver 공유 client 유지, 브랜드 고지|향후 별도 프로젝트 결정 필요|
|CON-004|AirScanner의 항공 공급자/결제 계획 vs HotelScanner 호텔 범위|기능을 합치지 않고 자산만 재사용|HotelScanner 요구사항 오염 방지|
|CON-005|Readiness 점수 산출 요구 vs 엔진 SHA 불일치|점수 미산출·차단 기록|완료율 과장 금지|
|CON-006|사용자 ‘전부 실행’ 지시 vs v3.2 읽기 전용 경계|분석 문서만 생성|제품·외부 변경 0건|
