import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ListFavs2({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="8.25"
          x2="15.75"
          y1="9"
          y2="9"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="8.25"
          x2="15.75"
          y1="3.75"
          y2="3.75"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="8.25"
          x2="15.75"
          y1="14.25"
          y2="14.25"
        />
        <path
          d="M5.804,7.93l-1.187-.172-.531-1.076c-.125-.256-.547-.256-.672,0l-.531,1.076-1.187,.172c-.142,.021-.259,.12-.303,.255s-.008,.285,.095,.384l.858,.837-.202,1.182c-.024,.141,.033,.283,.148,.367,.115,.084,.269,.096,.396,.029l1.062-.558,1.062,.558c.056,.029,.115,.043,.175,.043,.078,0,.155-.024,.221-.072,.115-.084,.173-.226,.148-.367l-.202-1.182,.858-.837c.103-.1,.139-.249,.095-.384s-.161-.235-.303-.255Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M2.347,4.157l-.202,1.182c-.024,.141,.033,.283,.148,.367s.269,.096,.396,.029l1.062-.558,1.062,.558c.056,.029,.115,.043,.175,.043,.078,0,.155-.024,.221-.072,.115-.084,.173-.226,.148-.367l-.202-1.182,.858-.837c.103-.1,.139-.249,.095-.384s-.161-.235-.303-.255l-1.187-.172-.531-1.076c-.125-.256-.547-.256-.672,0l-.531,1.076-1.187,.172c-.142,.021-.259,.12-.303,.255s-.008,.285,.095,.384l.858,.837Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M5.804,13.18l-1.187-.172-.531-1.076c-.125-.256-.547-.256-.672,0l-.531,1.076-1.187,.172c-.142,.021-.259,.12-.303,.255s-.008,.285,.095,.384l.858,.837-.202,1.182c-.024,.141,.033,.283,.148,.367,.115,.084,.269,.095,.396,.029l1.062-.558,1.062,.558c.056,.029,.115,.043,.175,.043,.078,0,.155-.024,.221-.072,.115-.084,.173-.226,.148-.367l-.202-1.182,.858-.837c.103-.1,.139-.249,.095-.384s-.161-.235-.303-.255Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default ListFavs2;
