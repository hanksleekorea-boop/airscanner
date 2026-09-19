# HotelScanner 통합 분석 실행 인덱스 (v3.2)

이 실행은 v3.0 결과를 덮어쓰지 않고 재사용했다. v3.2의 10배 작업량·기존 계획 통합 결과는 [BENCHMARK_INDEX.md](BENCHMARK_INDEX.md)에 있다. 최종 상태는 `X10_PARTIAL_SCOPE + PARTIAL_EVIDENCE + BLOCKED_EXTERNAL`이다.

실행 ID: `20260909-073000Z` · 모드: `END_TO_END` · 생성일: 2026-09-09 UTC

이 폴더는 제품 코드나 공개 배포를 변경하지 않고, 세계 톱10 비교·갭·제품기획·5단계 개발계획과 출시 준비 증거를 묶은 정본이다. 현재 공개 주소는 [hotelscanner.scanners.cc](https://hotelscanner.scanners.cc/), 현황판은 [dashboard](https://hotelscanner.scanners.cc/dashboard/), QR 파일은 [HOTELSCANNER_PUBLIC_QR.svg](../../60_OUTPUTS/HOTELSCANNER_PUBLIC_QR.svg)이다.

## 필수 48개

1. [run-manifest.json](run-manifest.json) · 2. [capability-and-limitations.md](capability-and-limitations.md) · 3. [service-baseline.json](service-baseline.json) · 4. [service-baseline.md](service-baseline.md) · 5. [source-register.md](source-register.md) · 6. [evidence-index.md](evidence-index.md) · 7. [candidate-register.json](candidate-register.json) · 8. [candidate-register.md](candidate-register.md) · 9. [search-log.md](search-log.md) · 10. [research-saturation.json](research-saturation.json) · 11. [world-top10-selection.json](world-top10-selection.json) · 12. [world-top10-selection.md](world-top10-selection.md) · 13. [top10-lock.json](top10-lock.json) · 14. [benchmark-taxonomy.json](benchmark-taxonomy.json) · 15. [benchmark-matrix.json](benchmark-matrix.json) · 16. [benchmark-matrix.csv](benchmark-matrix.csv) · 17. [ultra-detailed-benchmark-report.md](ultra-detailed-benchmark-report.md) · 18. [journey-head-to-head.md](journey-head-to-head.md) · 19. [benchmark-statistics.json](benchmark-statistics.json) · 20. [benchmark-limitations.md](benchmark-limitations.md) · 21. [gap-register.json](gap-register.json) · 22. [gap-register.csv](gap-register.csv) · 23. [root-cause-map.md](root-cause-map.md) · 24. [gap-priority-report.md](gap-priority-report.md) · 25. [dependency-map.json](dependency-map.json) · 26. [best-practice-synthesis.json](best-practice-synthesis.json) · 27. [best-practice-synthesis.md](best-practice-synthesis.md) · 28. [solution-options-abc.json](solution-options-abc.json) · 29. [breakthrough-opportunity-map.md](breakthrough-opportunity-map.md) · 30. [integrated-product-plan-vNEXT.md](integrated-product-plan-vNEXT.md) · 31. [requirements-register.json](requirements-register.json) · 32. [screen-and-state-spec.md](screen-and-state-spec.md) · 33. [data-and-api-spec.md](data-and-api-spec.md) · 34. [security-privacy-accessibility-spec.md](security-privacy-accessibility-spec.md) · 35. [measurement-and-operations-spec.md](measurement-and-operations-spec.md) · 36. [risk-and-decision-register.md](risk-and-decision-register.md) · 37. [five-stage-detailed-development-plan.md](five-stage-detailed-development-plan.md) · 38. [development-task-cards.json](development-task-cards.json) · 39. [traceability-graph.json](traceability-graph.json) · 40. [traceability-report.md](traceability-report.md) · 41. [quality-check.md](quality-check.md) · 42. [executive-summary.md](executive-summary.md) · 43. [outcome-frontier-hypotheses.json](outcome-frontier-hypotheses.json) · 44. [minimum-validation-experiments.md](minimum-validation-experiments.md) · 45. [implementation-glossary.md](implementation-glossary.md) · 46. [first-task-walkthrough.md](first-task-walkthrough.md) · 47. [handoff-readiness-test.md](handoff-readiness-test.md) · 48. [compute-stats.mjs](compute-stats.mjs)

v3.2 추가 27개는 [BENCHMARK_INDEX.md](BENCHMARK_INDEX.md)에서 확인한다.

## 읽는 순서

경영진은 `executive-summary.md` → `ultra-detailed-benchmark-report.md` → `gap-priority-report.md`를 읽는다. 개발자는 `integrated-product-plan-vNEXT.md` → `requirements-register.json` → `screen-and-state-spec.md` → `data-and-api-spec.md` → `five-stage-detailed-development-plan.md` 순서로 진행한다. Readiness 감사는 별도 `.readiness-analysis/` 폴더의 차단 보고를 함께 읽는다.

## 고정 한계

이 실행은 읽기 전용 분석이다. 실시간 공급자·제휴·광고·법률·Android는 외부 증거가 생기기 전까지 미완료다. 점수와 계획을 실제 상용화 완료로 해석하지 않는다.
