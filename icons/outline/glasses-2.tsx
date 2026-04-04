import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Glasses2({
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
          x1="7.75"
          x2="10.25"
          y1="10.25"
          y2="10.25"
        />
        <path
          d="M6.399,4.115c-1.08-.76-2.588-.283-3.034,.961l-1.503,4.328c-.073,.211-.111,.433-.111,.656v.14"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.601,4.115c1.08-.76,2.588-.283,3.034,.961l1.503,4.328c.073,.211,.111,.433,.111,.656v.14"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.889,14.25h.79c1.337,0,2.437-1.051,2.497-2.386l.07-1.545c.039-.854-.643-1.568-1.498-1.568h-2.929c-.855,0-1.537,.714-1.498,1.568l.07,1.545c.061,1.335,1.161,2.386,2.497,2.386Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.111,14.25h-.79c-1.337,0-2.437-1.051-2.497-2.386l-.07-1.545c-.039-.854,.643-1.568,1.498-1.568h2.929c.855,0,1.537,.714,1.498,1.568l-.07,1.545c-.061,1.335-1.161,2.386-2.497,2.386Z"
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

export default Glasses2;
