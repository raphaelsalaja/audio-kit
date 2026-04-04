import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PersonCane({
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
        <circle
          cx="7.75"
          cy="2.5"
          fill="none"
          r="1.5"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9,16.75l-.453-3.17c-.031-.214-.13-.413-.283-.566l-1.721-1.721c-.188-.188-.293-.442-.293-.707V6.318"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3,10l1.146-2.064c.068-.123,.162-.23,.274-.314l1.563-1.172c.173-.13,.384-.2,.6-.2h1.824c.222,0,.438,.074,.614,.211l1.878,1.46c.067,.052,.141,.096,.22,.13l1.632,.699"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="6"
          x2="5"
          y1="13.75"
          y2="16.75"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="8.75"
          x2="8.75"
          y1="10"
          y2="6.318"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="13.75"
          x2="15.75"
          y1="10.75"
          y2="16"
        />
      </g>
    </svg>
  );
}

export default PersonCane;
