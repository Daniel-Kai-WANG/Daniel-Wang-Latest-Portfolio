export type Point = {
  x: number
  y: number
}

type LabelAlignment = 'start' | 'center' | 'end'

type CubicSegment = {
  control1: Point
  control2: Point
  end: Point
}

type BranchLabel = {
  align: LabelAlignment
  offset: Point
}

type NodeTranslate = {
  x: number
  y: number
}

export type BranchSpec = {
  id: string
  start: Point
  segments: CubicSegment[]
  label: BranchLabel
  nodeTranslate: NodeTranslate
  width: number
  revealDelay: number
}

export type GraphSpec = {
  baseFill: string
  baseStem: string
  baseStemWidth: number
  branchDuration: number
  branches: BranchSpec[]
  buds: Point[]
  leafBuds?: Point[]
  groundBuds?: Point[]
  groundLeafBuds?: Point[]
}

type BranchId =
  | 'middle'
  | 'upper-left'
  | 'upper-right'
  | 'lower-right'
  | 'lower-left'

type SharedBranchMeta = Pick<BranchSpec, 'label' | 'revealDelay'>

type BranchShape = {
  id: BranchId
  start: Point
  segments: CubicSegment[]
  nodeTranslate: NodeTranslate
  width: number
} & Partial<SharedBranchMeta>

const BRANCH_DURATION = 0.58

const sharedBranchMeta: Record<BranchId, SharedBranchMeta> = {
  middle: {
    label: { align: 'center', offset: { x: 0, y: -4.6 } },
    revealDelay: 0.22,
  },
  'upper-left': {
    label: { align: 'start', offset: { x: -8.2, y: -4.2 } },
    revealDelay: 0.3,
  },
  'upper-right': {
    label: { align: 'end', offset: { x: 4.8, y: -4.5 } },
    revealDelay: 0.38,
  },
  'lower-right': {
    label: { align: 'end', offset: { x: 4.2, y: -3.8 } },
    revealDelay: 0.46,
  },
  'lower-left': {
    label: { align: 'start', offset: { x: -4.0, y: -4.5 } },
    revealDelay: 0.54,
  },
}

function withSharedBranchMeta(branches: BranchShape[]): BranchSpec[] {
  return branches.map((branch) => ({
    ...sharedBranchMeta[branch.id],
    ...branch,
  }))
}

const lightBranchShapes: BranchShape[] = [
  {
    id: 'middle',
    start: { x: 52, y: 72 },
    nodeTranslate: { x: -70, y: -80 },
    segments: [
      {
        control1: { x: 51, y: 56 },
        control2: { x: 50, y: 36 },
        end: { x: 50, y: 12 },
      },
    ],
    width: 4.5,
  },
  {
    id: 'upper-left',
    start: { x: 48, y: 74 },
    nodeTranslate: { x: -66, y: -68 },
    segments: [
      {
        control1: { x: 42, y: 61 },
        control2: { x: 35, y: 49 },
        end: { x: 27, y: 36 },
      },
      {
        control1: { x: 23, y: 30 },
        control2: { x: 18, y: 25 },
        end: { x: 14, y: 22 },
      },
    ],
    width: 3.7,
  },
  {
    id: 'upper-right',
    start: { x: 56, y: 74 },
    nodeTranslate: { x: -65, y: -75 },
    segments: [
      {
        control1: { x: 62, y: 61 },
        control2: { x: 71, y: 50 },
        end: { x: 81, y: 37 },
      },
      {
        control1: { x: 85, y: 31 },
        control2: { x: 89, y: 27 },
        end: { x: 92, y: 23 },
      },
    ],
    width: 3.7,
  },
  {
    id: 'lower-right',
    start: { x: 58, y: 78 },
    nodeTranslate: { x: -72, y: -72 },
    segments: [
      {
        control1: { x: 66, y: 78 },
        control2: { x: 73, y: 76 },
        end: { x: 81, y: 70 },
      },
      {
        control1: { x: 85, y: 66 },
        control2: { x: 88, y: 61 },
        end: { x: 90, y: 56 },
      },
    ],
    width: 3.2,
  },
  {
    id: 'lower-left',
    start: { x: 46, y: 78 },
    nodeTranslate: { x: -64, y: -68 },
    segments: [
      {
        control1: { x: 38, y: 79 },
        control2: { x: 31, y: 77 },
        end: { x: 23, y: 71 },
      },
      {
        control1: { x: 18, y: 67 },
        control2: { x: 13, y: 62 },
        end: { x: 9, y: 56 },
      },
    ],
    width: 3.2,
  },
]

const darkBranchShapes: BranchShape[] = [
  {
    id: 'middle',
    start: { x: 50.2, y: 74 },
    nodeTranslate: { x: -64, y: -77 },
    segments: [
      {
        control1: { x: 49.6, y: 62 },
        control2: { x: 49.2, y: 50 },
        end: { x: 49.8, y: 39 },
      },
      {
        control1: { x: 50.8, y: 31 },
        control2: { x: 51.3, y: 22 },
        end: { x: 50.3, y: 13.5 },
      },
    ],
    label: { align: 'center', offset: { x: 0, y: -4.8 } },
    width: 7,
  },
  {
    id: 'upper-left',
    start: { x: 49.5, y: 67.5 },
    nodeTranslate: { x: -66, y: -68 },
    segments: [
      {
        control1: { x: 45.2, y: 61.8 },
        control2: { x: 39.4, y: 55.1 },
        end: { x: 33.6, y: 47.6 },
      },
      {
        control1: { x: 27.6, y: 40.3 },
        control2: { x: 21.5, y: 32.8 },
        end: { x: 14.4, y: 24.8 },
      },
    ],
    width: 5.4,
  },
  {
    id: 'upper-right',
    start: { x: 51.4, y: 67 },
    nodeTranslate: { x: -62, y: -68 },
    segments: [
      {
        control1: { x: 56.8, y: 61.4 },
        control2: { x: 63.7, y: 54.6 },
        end: { x: 70.8, y: 46.2 },
      },
      {
        control1: { x: 77, y: 39.2 },
        control2: { x: 83.8, y: 31.4 },
        end: { x: 90.2, y: 23.6 },
      },
    ],
    width: 5.6,
  },
  {
    id: 'lower-right',
    start: { x: 53.2, y: 76.5 },
    nodeTranslate: { x: -64, y: -68 },
    segments: [
      {
        control1: { x: 60.8, y: 76.3 },
        control2: { x: 67.6, y: 74.4 },
        end: { x: 74.8, y: 70.1 },
      },
      {
        control1: { x: 80.1, y: 66.5 },
        control2: { x: 84.9, y: 61.5 },
        end: { x: 88.6, y: 55.2 },
      },
    ],
    width: 4.8,
  },
  {
    id: 'lower-left',
    start: { x: 47.4, y: 76.8 },
    nodeTranslate: { x: -64, y: -68 },
    segments: [
      {
        control1: { x: 40.4, y: 77.2 },
        control2: { x: 34.2, y: 75.6 },
        end: { x: 27.6, y: 71.2 },
      },
      {
        control1: { x: 21.8, y: 67.2 },
        control2: { x: 16.6, y: 62.2 },
        end: { x: 12.1, y: 55.8 },
      },
    ],
    width: 4.8,
  },
]

export const lightExperienceJourneyGraph: GraphSpec = {
  baseFill:
    'M12 94 C24 88 36 84 46 83 H58 C68 84 80 88 92 94 C82 98 68 100 52 100 C34 100 22 98 12 94Z',
  baseStem: 'M51 91 C51 84 51 78 52 72',
  baseStemWidth: 4.4,
  branchDuration: BRANCH_DURATION,
  branches: withSharedBranchMeta(lightBranchShapes),
  buds: [
    { x: 22, y: 66.5 },
    { x: 24, y: 35.5 },
    { x: 37, y: 47.5 },
    { x: 45.7, y: 25.5 },
    { x: 52.1, y: 42 },
    { x: 47.2, y: 58.5 },
    { x: 67.2, y: 47.4 },
    { x: 79.6, y: 37.2 },
    { x: 82.4, y: 29.2 },
    { x: 73.2, y: 70.4 },
    { x: 84.8, y: 59.4 },
  ],
  leafBuds: [
    { x: 15, y: 66.5 },
    { x: 18.6, y: 28.8 },
    { x: 25.8, y: 54.4 },
    { x: 32.8, y: 42.8 },
    { x: 45.2, y: 31.4 },
    { x: 51.8, y: 34.8 },
    { x: 52.3, y: 54.8 },
    { x: 60.2, y: 56.2 },
    { x: 76.4, y: 33.6 },
    { x: 80.8, y: 64.2 },
  ],
  groundBuds: [
    { x: 22, y: 91.2 },
    { x: 27.8, y: 94.1 },
    { x: 33.6, y: 89.8 },
    { x: 39.8, y: 95.2 },
    { x: 45.4, y: 91.6 },
    { x: 44.6, y: 84.8 },
    { x: 47.6, y: 86.6 },
    { x: 49.2, y: 92.6 },
    { x: 54.6, y: 94.4 },
    { x: 56.4, y: 86.2 },
    { x: 59.2, y: 84.6 },
    { x: 61.2, y: 90.5 },
    { x: 68.4, y: 95.1 },
    { x: 75.6, y: 91.4 },
    { x: 81.2, y: 94.3 },
  ],
  groundLeafBuds: [
    { x: 19.2, y: 94.2 },
    { x: 24.8, y: 89.6 },
    { x: 30.6, y: 92.9 },
    { x: 36.9, y: 90.8 },
    { x: 43.2, y: 94.5 },
    { x: 41.8, y: 86.1 },
    { x: 46.2, y: 83.9 },
    { x: 57.6, y: 90.1 },
    { x: 58.4, y: 83.8 },
    { x: 62.2, y: 86.4 },
    { x: 64.4, y: 93.8 },
    { x: 70.8, y: 89.7 },
    { x: 77.8, y: 93.2 },
    { x: 84.4, y: 90.6 },
  ],
}

export const darkExperienceJourneyGraph: GraphSpec = {
  baseFill:
    'M10 94 C23 87 36 82.5 47 82 H60 C72 82.8 84 87.2 95 94 C84 99 69 100 52 100 C34 100 20 99 10 94Z',
  baseStem: 'M50.5 92 C49.7 86 49.6 79.5 50.2 74',
  baseStemWidth: 6.2,
  branchDuration: BRANCH_DURATION,
  branches: withSharedBranchMeta(darkBranchShapes),
  buds: [
    { x: 18.8, y: 64.4 },
    { x: 31.2, y: 42.5 },
    { x: 39.6, y: 53.6 },
    { x: 47.6, y: 29.4 },
    { x: 52.2, y: 43.9 },
    { x: 48.1, y: 58.6 },
    { x: 66.8, y: 51.6 },
    { x: 77.8, y: 41.9 },
    { x: 84.5, y: 33.8 },
    { x: 73.6, y: 70.5 },
    { x: 83.6, y: 58.2 },
  ],
}

export function getBranchPath(branch: BranchSpec) {
  return [
    `M${branch.start.x} ${branch.start.y}`,
    ...branch.segments.map(
      ({ control1, control2, end }) =>
        `C${control1.x} ${control1.y} ${control2.x} ${control2.y} ${end.x} ${end.y}`,
    ),
  ].join(' ')
}

export function getBranchEndpoint(branch: BranchSpec) {
  return branch.segments[branch.segments.length - 1].end
}

export function getBranchLabelPoint(branch: BranchSpec) {
  const endpoint = getBranchEndpoint(branch)
  return {
    x: endpoint.x + branch.label.offset.x,
    y: endpoint.y + branch.label.offset.y,
  }
}
