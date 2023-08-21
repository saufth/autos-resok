import {
  AlertTriangle,
  CircleDollarSign,
  Check,
  ChevronLeft,
  ChevronRight,
  Image,
  Loader2,
  Menu,
  Moon,
  Search,
  SunMedium,
  Plus,
  type LucideProps
} from 'lucide-react'

export function Logo (props: LucideProps) {
  return (
    <svg
      width='250'
      height='41'
      viewBox='0 0 250 41'
      {...props}
    >
      <g
        transform='matrix(1.3333333,0,0,-1.3333333,-1035.7923,385.70093)'
      >
        <text
          className='font-cropar text-[51.1972px] fill-slate-900 dark:fill-white'
          x='776.35211'
          y='-258.74072'
          transform='scale(1.0006338,-0.99936662)'
        >
          RESOK
        </text>
      </g>
    </svg>
  )
}

export function Logomark (props: LucideProps) {
  return (
    <svg
      width='36'
      height='36'
      viewBox='0 0 36 36'
      {...props}
    >
      <g transform='matrix(1.3333333,0,0,-1.3333333,-960.64652,333.50886)'>
        <g
          transform='matrix(0.77142859,0,0,0.77142859,164.6821,57.172982)'
          className='fill-slate-900 dark:fill-white'
        >
          <text
            className='text-[277.534px] font-cropar'
            x='831.84399'
            y='26.733725'
            transform='matrix(0.09114583,0,0,-0.09114583,654.8159,227.33315)'
          >
            R
          </text>
          <path
            d='m 0,0 c -0.837,0 -1.583,0.744 -1.583,1.49 0,0.839 0.746,1.583 1.583,1.583 0.746,0 1.492,-0.744 1.492,-1.583 C 1.492,0.744 0.746,0 0,0 m -3.399,-3.976 c -0.292,-0.701 -0.643,-1.341 -1.108,-1.984 -1.519,-2.332 -3.793,-4.141 -6.476,-5.075 -1.4,-0.524 -2.975,-0.816 -4.55,-0.816 -1.634,0 -3.15,0.292 -4.55,0.816 -2.683,0.934 -4.958,2.743 -6.476,5.075 -0.466,0.643 -0.816,1.283 -1.108,1.984 -0.758,1.634 -1.166,3.5 -1.166,5.425 0,0.933 0.058,1.867 0.292,2.741 1.224,6.009 6.591,10.559 13.008,10.559 6.417,0 11.783,-4.55 13.008,-10.559 0.234,-0.874 0.292,-1.808 0.292,-2.741 0,-1.925 -0.409,-3.791 -1.166,-5.425 M -15.533,-15.49 c -0.866,0 -1.538,0.674 -1.538,1.539 0,0.865 0.672,1.538 1.538,1.538 0.866,0 1.537,-0.673 1.537,-1.538 0,-0.865 -0.671,-1.539 -1.537,-1.539 M -31.066,0 c -0.84,0 -1.492,0.744 -1.492,1.49 0,0.839 0.652,1.583 1.492,1.583 0.837,0 1.583,-0.744 1.583,-1.583 0,-0.746 -0.746,-1.49 -1.583,-1.49 m 15.533,18.445 c 0.865,0 1.536,-0.673 1.536,-1.538 0,-0.864 -0.671,-1.537 -1.536,-1.537 -0.866,0 -1.536,0.673 -1.536,1.537 0,0.865 0.67,1.538 1.536,1.538 m 0,0.504 c -9.683,0 -17.5,-7.817 -17.5,-17.5 0,-3.617 1.108,-7 2.975,-9.8 3.15,-4.667 8.458,-7.7 14.525,-7.7 9.683,0 17.5,7.817 17.5,17.5 0,9.683 -7.817,17.5 -17.5,17.5'
            transform='translate(753.5181,231.1826)'
          />
        </g>
      </g>
    </svg>
  )
}

export const Icons = {
  Add: Plus,
  CircleDollar: CircleDollarSign,
  Check,
  ChevronLeft,
  ChevronRight,
  Logo,
  Logomark,
  Menu,
  Moon,
  Search,
  Spinner: Loader2,
  Sun: SunMedium,
  Placeholder: Image,
  Warning: AlertTriangle
}

export type AppIcons = keyof typeof Icons
