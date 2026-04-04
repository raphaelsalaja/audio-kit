import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BowlFood({
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
        <path
          d="M2.5,3h0c1.38,0,2.5,1.12,2.5,2.5h0c0,.276-.224,.5-.5,.5h0c-1.38,0-2.5-1.12-2.5-2.5h0c0-.276,.224-.5,.5-.5Z"
          fill={secondaryfill}
          stroke="none"
          transform="translate(7 9) rotate(180)"
        />
        <path
          d="M6.32,14.25h5.361c2.758-1.097,4.568-3.532,4.57-6.5H1.75c.002,2.968,1.812,5.403,4.57,6.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75,5.25c-.456-.607-1.182-1-2-1-.617,0-1.174,.232-1.61,.603-.504-.949-1.49-1.603-2.64-1.603-.768,0-1.469,.289-2,.764"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default BowlFood;
