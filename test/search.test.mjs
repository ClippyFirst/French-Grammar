import test from 'node:test';
import assert from 'node:assert/strict';
import { searchTopics } from '../src/utils/search.mjs';

const catalog = [
  { id:'FR-001', slug:'present', titleUk:'Теперішній час', titleFr:'Présent', summary:'Форми та вживання', aliases:['présent','теперішній'], tags:['temps'], featured:false },
  { id:'FR-002', slug:'subjonctif', titleUk:'Субжонктив', titleFr:'Subjonctif', summary:'Модальність', aliases:['subjonctif','subjonctif présent'], tags:['mood'], featured:true },
  { id:'FR-003', slug:'aimer', titleUk:'Дієслово aimer', titleFr:'Aimer', summary:'Керування дієсловом', aliases:['подобається'], tags:['verbs'], featured:false },
];

test('exact French title ranks first', () => {
  assert.equal(searchTopics('présent', catalog)[0].topic.id, 'FR-001');
  assert.equal(searchTopics('PRESENT', catalog)[0].topic.id, 'FR-001');
});

test('Ukrainian aliases are searchable', () => {
  assert.equal(searchTopics('подобається', catalog)[0].topic.id, 'FR-003');
});

test('accent-insensitive French search works', () => {
  assert.equal(searchTopics('subjonctif', catalog)[0].topic.id, 'FR-002');
});

test('partial and multi-word queries produce matches', () => {
  assert.ok(searchTopics('теперіш', catalog).some((hit) => hit.topic.id === 'FR-001'));
  assert.ok(searchTopics('subjonctif présent', catalog).some((hit) => hit.topic.id === 'FR-002'));
});
