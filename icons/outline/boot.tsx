import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Boot({
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
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="3.421"
          x2="9.583"
          y1="4.75"
          y2="4.75"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="7.75"
          x2="9.417"
          y1="7.75"
          y2="7.75"
        />
        <path
          d="M3.722,10.016L3.25,1.75h6.5l-.347,6.253c-.086,1.554,1.03,2.916,2.571,3.136l2.559,.365c.985,.141,1.717,.985,1.717,1.98v1.499c0,.47-.326,.872-.784,.978-1.063,.246-2.553,.428-4.27,.133-1.096-.188-2.004-.522-2.696-.844-.083,.333-.167,.667-.25,1H4l-.25-1c-.211-.42-.532-1.197-.562-2.219-.027-.908,.187-1.648,.386-2.142,.113-.279,.166-.573,.149-.874Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Boot;
