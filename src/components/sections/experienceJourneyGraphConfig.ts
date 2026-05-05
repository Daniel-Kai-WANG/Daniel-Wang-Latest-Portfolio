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
}

export const experienceJourneyGraph: GraphSpec = {
  baseFill:
    'M12 94 C24 88 36 84 46 83 H58 C68 84 80 88 92 94 C82 98 68 100 52 100 C34 100 22 98 12 94Z',
  baseStem: 'M51 91 C51 84 51 78 52 72',
  baseStemWidth: 4.4,
  branchDuration: 0.58,
  branches: [
    {
      id: 'middle',
      start: { x: 52, y: 72 },
      segments: [
        {
          control1: { x: 51, y: 56 },
          control2: { x: 50, y: 36 },
          end: { x: 50, y: 12 },
        },
      ],
      label: { align: 'center', offset: { x: 0, y: -4.6 } },
      nodeTranslate: { x: -64, y: -77 },
      width: 4.5,
      revealDelay: 0.22,
    },
    {
      id: 'upper-left',
      start: { x: 48, y: 74 },
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
      label: { align: 'start', offset: { x: 4.2, y: -2.2 } },
      nodeTranslate: { x: -66, y: -68 },
      width: 3.7,
      revealDelay: 0.3,
    },
    {
      id: 'upper-right',
      start: { x: 56, y: 74 },
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
      label: { align: 'end', offset: { x: -4.8, y: -3 } },
      nodeTranslate: { x: -62, y: -68 },
      width: 3.7,
      revealDelay: 0.38,
    },
    {
      id: 'lower-right',
      start: { x: 58, y: 78 },
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
      label: { align: 'end', offset: { x: -2.8, y: -1.8 } },
      nodeTranslate: { x: -64, y: -68 },
      width: 3.2,
      revealDelay: 0.46,
    },
    {
      id: 'lower-left',
      start: { x: 46, y: 78 },
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
      label: { align: 'start', offset: { x: 4.6, y: -3.9 } },
      nodeTranslate: { x: -64, y: -68 },
      width: 3.2,
      revealDelay: 0.54,
    },
  ],
  buds: [
    { x: 24, y: 34 },
    { x: 33, y: 44 },
    { x: 50, y: 39 },
    { x: 74, y: 46 },
    { x: 82, y: 34 },
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
