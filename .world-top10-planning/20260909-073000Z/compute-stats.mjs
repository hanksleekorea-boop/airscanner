import fs from 'node:fs';

const root = new URL('./', import.meta.url);
const matrix = JSON.parse(fs.readFileSync(new URL('benchmark-matrix.json', root), 'utf8'));
const taxonomy = JSON.parse(fs.readFileSync(new URL('benchmark-taxonomy.json', root), 'utf8'));
const ours = matrix.rows.find((row) => row.id === 'OURS');
const peers = matrix.rows.filter((row) => row.id !== 'OURS');
const categories = taxonomy.fields;

const mean = (values) => values.reduce((sum, value) => sum + value, 0) / values.length;
const top10Average = ours.scores.map((_, index) => mean(peers.map((row) => row.scores[index])));
const gap = top10Average.map((value, index) => value - ours.scores[index]);
const attainment = top10Average.map((value, index) => value === 0 ? null : ours.scores[index] / value);
const peerMeans = peers.map((row) => ({ id: row.id, name: row.name, mean: mean(row.scores) }));
const top10Mean = mean(top10Average);
const oursMean = mean(ours.scores);
const gapMean = top10Mean - oursMean;
const ordered = categories.map((category, index) => ({
  id: category.id,
  name: category.name,
  ours: ours.scores[index],
  top10Average: Number(top10Average[index].toFixed(3)),
  gap: Number(gap[index].toFixed(3)),
  attainment: attainment[index] === null ? null : Number(attainment[index].toFixed(3)),
  rankByGap: 0
})).sort((a, b) => b.gap - a.gap).map((item, index) => ({ ...item, rankByGap: index + 1 }));

console.log(JSON.stringify({
  runId: matrix.run_id,
  scoreScale: matrix.scale,
  categoryCount: categories.length,
  oursMean: Number(oursMean.toFixed(3)),
  top10Mean: Number(top10Mean.toFixed(3)),
  meanGap: Number(gapMean.toFixed(3)),
  peerMeans: peerMeans.map((row) => ({ ...row, mean: Number(row.mean.toFixed(3)) })),
  categories: ordered
}, null, 2));
