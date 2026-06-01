// Layer config sourced from brief §8–10.
// maxY: final upward translation in px at scroll progress = 1
// style: initial absolute position inside the sticky stage
// baseTransform: static rotation/scale applied on top of the scroll translate
// placeholderColor/Height: used until real WebP assets are placed

import { assetUrl } from '@/utils/assetUrl'

export const LAYERS = [
  {
    id: 'books',
    src: assetUrl('images/chemistry-hero/books-stack.webp'),
    zIndex: 10,
    maxY: -180,
    width: '34vw',
    style: { top: '-5vh', left: '-1vw' },
    label: 'Books',
  },
  // {
  //   id: 'atom-model',
  //   src: '/images/chemistry-hero/atom-model.webp',
  //   zIndex: 12,
  //   maxY: -240,
  //   width: '16vw',
  //   style: { top: '-3vh', left: '11vw' },
  //   label: 'Atom Model',
  // },
  // chemistry-flask is omitted — the source file is the full composite render,
  // not an isolated layer. Replace chemistry-flask.webp with the actual flask asset
  // and un-comment this entry:
  // {
  //   id: 'chemistry-flask',
  //   src: '/images/chemistry-hero/chemistry-flask.webp',
  //   zIndex: 14, maxY: -280, width: '11vw',
  //   style: { top: '-1vh', left: '26vw' }, label: 'Flask',
  // },
  // {
  //   id: 'coffee-mug',
  //   src: '/images/chemistry-hero/mug.webp',
  //   zIndex: 32,
  //   maxY: -300,
  //   width: '16vw',
  //   style: { top: '-3vh', right: '-1vw' },
  //   label: 'Coffee Mug',
  // },
  {
    id: 'grading-note',
    src: assetUrl('images/chemistry-hero/sticky-notes-2.webp'),
    zIndex: 22,
    maxY: -560,
    width: '12vw',
    style: { top: '42vh', right: '1vw' },
    label: 'Grading Note',
  },
  {
    id: 'lesson-plan-notebook',
    src: assetUrl('images/chemistry-hero/lesson-plan.webp'),
    zIndex: 30,
    maxY: -430,
    width: '40vw',
    style: { top: '-5vh', left: '57vw' },
    label: 'Notebook',
  },
  {
    id: 'quiz-stack',
    src: assetUrl('images/chemistry-hero/quiz-stack.webp'),
    zIndex: 35,
    maxY: -500,
    width: '40vw',
    style: { top: '-6vh', left: '21vw' },
    label: 'Quiz Stack',
  },
  // {
  //   id: 'safety-goggles',
  //   src: '/images/chemistry-hero/safety-goggles.webp',
  //   zIndex: 40,
  //   maxY: -560,
  //   width: '26vw',
  //   style: { top: '22vh', left: '9vw' },
  //   label: 'Safety Goggles',
  // },
  // {
  //   id: 'sticky-notes-curious',
  //   src: '/images/chemistry-hero/sticky-notes.webp',
  //   zIndex: 45,
  //   maxY: -620,
  //   width: '13vw',
  //   style: { top: '42vh', left: '3vw' },
  //   label: 'Be Curious',
  // },
  {
    id: 'wooden-ruler',
    src: assetUrl('images/chemistry-hero/ruler.webp'),
    zIndex: 50,
    maxY: -700,
    width: '35vw',
    style: { top: '55vh', right: '-5vw' },
    baseTransform: 'rotate(-6deg)',
    label: 'Ruler',
  },
  {
    id: 'red-pen',
    src: assetUrl('images/chemistry-hero/red-pen.webp'),
    zIndex: 55,
    maxY: -780,
    width: '24vw',
    style: { top: '62vh', right: '-2vw' },
    baseTransform: 'rotate(-10deg)',
    label: 'Red Pen',
  },
]
